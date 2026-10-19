// 원본 → 화이트밸런스(네 모서리 배경 패치가 무채색이 되도록) + 2000px 축소 JPG. 인자: in out [width]
const sharp = require('D:/ganarnd-rebranding/node_modules/sharp');
const [, , inp, out, width] = process.argv;
(async () => {
  const base = sharp(inp).rotate().resize({ width: +(width || 2000) });
  const { data, info } = await base.clone().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height, C = info.channels;
  const P = 110; const sum = [0, 0, 0]; let n = 0;
  for (const [cx, cy] of [[0, 0], [W - P, 0], [0, H - P], [W - P, H - P]]) for (let y = cy; y < cy + P; y++) for (let x = cx; x < cx + P; x++) { const i = (y * W + x) * C; sum[0] += data[i]; sum[1] += data[i + 1]; sum[2] += data[i + 2]; n++; }
  const mean = sum.map((s) => s / n); const grey = (mean[0] + mean[1] + mean[2]) / 3; const gain = mean.map((m) => grey / m);
  const o = new Uint8ClampedArray(W * H * 3);
  for (let k = 0; k < W * H; k++) for (let c = 0; c < 3; c++) o[k * 3 + c] = data[k * C + c] * gain[c];
  await sharp(Buffer.from(o), { raw: { width: W, height: H, channels: 3 } }).jpeg({ quality: 95 }).toFile(out);
  console.log('prep', out, W + 'x' + H, 'gain', gain.map((g) => g.toFixed(3)).join('/'));
})();
