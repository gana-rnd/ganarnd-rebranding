// IS-Net 기반 배경 제거 → RGBA PNG. 인자: in.jpg out.png  (sharp와 onnxruntime의 DLL 충돌 때문에 이 프로세스에서는 sharp를 쓰지 않는다; 입력은 미리 축소한 JPG)
const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');
const [, , inp, out] = process.argv;
(async () => {
  const blob = new Blob([fs.readFileSync(inp)], { type: 'image/jpeg' });
  const t0 = Date.now();
  const res = await removeBackground(blob, { model: 'medium', output: { format: 'image/png', quality: 1 }, debug: false });
  fs.writeFileSync(out, Buffer.from(await res.arrayBuffer()));
  console.log('wrote', out, Math.round((Date.now() - t0) / 1000) + 's');
})().catch((e) => { console.error('ERR', e.message || e); process.exit(1); });
