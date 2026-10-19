# 제품 팩샷 흰 배경 처리

투명 주사기 몸통(인쇄 글자 포함)을 살리는 순서. 경계 기반 자동 누끼는 투명 부분을 날리므로 ML 알파를 쓴다.

1. `node prep.js <원본.JPG> <이름>_in.jpg 2000` — 네 모서리 배경 패치가 무채색이 되도록 화이트밸런스 + 2000px 축소
2. `node rm.js <이름>_in.jpg <이름>_rgba.png` — IS-Net(`@imgly/background-removal-node@1.4.5`) 알파. sharp와 onnxruntime이 한 프로세스에서 DLL 충돌하므로 이 단계는 sharp 없이 돈다.
   패키지는 별도 폴더에 `npm i @imgly/background-removal-node@1.4.5` 후 그 폴더에서 실행.
3. `node finish.js <이름>_rgba.png <출력>.webp --w=1400 --h=1120 [--clone=x,y,w,h,dx,dy] [--clear=x,y,w,h]`
   — 흰 배경 합성, 바닥 쪽 옅은 그림자, 제품 영역 크롭. clone은 점토 같은 지지물 지우기(입력 PNG 픽셀 좌표).

2026-10-19 원본 매핑(캐논 1X3A): 4554 CH · 4559 Filler X(점토 `--clone=1036,572,48,28,-70,0`) · 4560 PH · 4590 PATCH · 4593 HA body · 4601 PN · 4602 BOOSTER · 4603/4606/4607 HA B/C/A(440×1040 PNG 세 장을 1400×1120 캔버스에 20/480/940 위치로 합성).
