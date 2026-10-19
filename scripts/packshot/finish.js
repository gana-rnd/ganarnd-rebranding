// RGBA(모델 알파) → 흰 배경 팩샷. 인자: in.png out.(webp|png) --w --h [--pad=0.08] [--clear=x,y,w,h ...] [--clone=x,y,w,h,dx,dy ...] [--shadow=0] [--amin=0]
// clear: 그 영역 알파 0 (점토 등 제거). clone: 영역을 (dx,dy)만큼 떨어진 픽셀(RGBA)로 덮기. 좌표는 입력 PNG 픽셀.
const sharp = require('D:/ganarnd-rebranding/node_modules/sharp');
const args = process.argv.slice(2); const [inp, out] = args;
const opt = {}; const clears = [], clones = [];
for (const a of args.filter((x) => x.startsWith('--'))) { const [k, v] = a.slice(2).split('='); if (k === 'clear') clears.push(v.split(',').map(Number)); else if (k === 'clone') clones.push(v.split(',').map(Number)); else opt[k] = v ?? '1'; }
const OW = +(opt.w ?? 1400), OH = +(opt.h ?? 1120), PAD = +(opt.pad ?? 0.08), shadow = opt.shadow !== '0', AMIN = +(opt.amin ?? 0);

(async () => {
  const { data, info } = await sharp(inp).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height; const px = new Uint8ClampedArray(data);
  for (const [x0, y0, w, h, dx, dy] of clones) for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) { const i = (y * W + x) * 4, j = ((y + dy) * W + x + dx) * 4; for (let c = 0; c < 4; c++) px[i + c] = px[j + c]; }
  for (const [x0, y0, w, h] of clears) for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) px[(y * W + x) * 4 + 3] = 0;
  // 알파 정리: 아주 옅은 알파(먼지·그림자 잔재)는 0으로, 나머지는 그대로
  const a = new Uint8Array(W * H); let x0 = W, x1 = 0, y0 = H, y1 = 0;
  for (let k = 0; k < W * H; k++) { let v = px[k * 4 + 3]; if (v < 24) v = 0; a[k] = v; if (v > 40) { const x = k % W, y = (k - x) / W; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; } }
  // 톤 통일(--grade): 제품 안의 가장 밝은 무채색(상자 흰 면)을 기준으로 채널별 게인 → 흰 점 246, 가장 어두운 0.5%를 검은 점 10으로.
  // 세션마다 다른 노출·색온도를 같은 자리로 맞춘다. 배경은 어차피 흰색이라 물체 픽셀에만 적용.
  if (opt.grade !== '0') {
    const lum = [], idx = [];
    for (let k = 0; k < W * H; k++) if (a[k] > 200) { const i = k * 4; lum.push((px[i] + px[i + 1] + px[i + 2]) / 3); idx.push(k); }
    const sorted = Float32Array.from(lum).sort();
    const hi = sorted[Math.floor(sorted.length * 0.97)], lo = sorted[Math.floor(sorted.length * 0.005)];
    const s = [0, 0, 0]; let n = 0;
    for (let j = 0; j < idx.length; j++) { if (lum[j] < hi) continue; const i = idx[j] * 4; const mx = Math.max(px[i], px[i + 1], px[i + 2]), mn = Math.min(px[i], px[i + 1], px[i + 2]); if (mx - mn > 28) continue; s[0] += px[i]; s[1] += px[i + 1]; s[2] += px[i + 2]; n++; }
    const WHITE = 246, BLACK = 10;
    const gain = n > 50 ? s.map((v) => WHITE / (v / n)) : [WHITE / hi, WHITE / hi, WHITE / hi];
    const g = (gain[0] + gain[1] + gain[2]) / 3; const b = lo * g; const scale = (WHITE - BLACK) / Math.max(1, WHITE - b);
    for (const k of idx) { const i = k * 4; for (let c = 0; c < 3; c++) px[i + c] = (px[i + c] * gain[c] - b) * scale + BLACK; }
    console.log('grade: white ref', n, 'px', 'gain', gain.map((v) => v.toFixed(3)).join('/'), 'black', Math.round(lo), '->', BLACK);
  }
  // 그림자: 물체 아래 35% 구간 마스크를 크게 번져 12px 아래로, 최대 12% 어둡게
  let sh = null;
  if (shadow) {
    const m = new Uint8Array(W * H); const yc = y0 + (y1 - y0) * 0.65; for (let y = Math.floor(yc); y <= y1; y++) for (let x = x0; x <= x1; x++) m[y * W + x] = a[y * W + x] > 128 ? 255 : 0;
    const r = await sharp(Buffer.from(m), { raw: { width: W, height: H, channels: 1 } }).blur(14).raw().toBuffer({ resolveWithObject: true });
    sh = new Uint8Array(W * H); for (let k = 0; k < W * H; k++) sh[k] = r.data[k * r.info.channels];
  }
  const o = new Uint8ClampedArray(W * H * 3);
  for (let k = 0; k < W * H; k++) {
    const al = a[k] / 255; let shade = 1;
    if (sh) { const x = k % W, y = (k - x) / W; const ys = y - 12; if (ys >= 0) shade = 1 - 0.12 * (sh[ys * W + x] / 255) * (1 - al); }
    for (let c = 0; c < 3; c++) o[k * 3 + c] = (px[k * 4 + c] * al + 255 * (1 - al)) * shade;
  }
  const padX = Math.round((x1 - x0) * PAD), padY = Math.round((y1 - y0) * PAD);
  const cx0 = Math.max(0, x0 - padX), cy0 = Math.max(0, y0 - padY), cw = Math.min(W, x1 + padX) - cx0, ch = Math.min(H, y1 + padY + 30) - cy0;
  const img = sharp(Buffer.from(o), { raw: { width: W, height: H, channels: 3 } }).extract({ left: cx0, top: cy0, width: cw, height: ch }).resize(OW, OH, { fit: 'contain', background: '#fff' });
  const r = await (out.endsWith('.png') ? img.png() : img.webp({ quality: 86 })).toFile(out);
  console.log('wrote', out, r.width + 'x' + r.height, Math.round(r.size / 1024) + 'KB', 'bbox', x0, y0, x1, y1);
})();
