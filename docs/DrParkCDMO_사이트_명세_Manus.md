# Dr. Park CDMO 웹사이트 — 디자인·구현 명세

- **작성**: 2026-09-29
- **대상**: 이 사이트를 디자인하고 구현할 담당자(Manus)
- **관계**: GANA R&D 사이트(https://ganarnd-rebranding.vercel.app)와 **같은 디자인 체계의 자매 사이트**다. 체계는 같고, 온도는 다르다(5장). 기존 drpark-cdmo.com을 대체할 새 사이트이며, 기존 사이트의 문구·수치·슬로건은 **가져오지 않는다**.

---

## 0. 이 문서를 읽는 법 — 고정과 재량

이 사이트의 독자는 실사(due diligence)를 하는 사람들이다. **무엇을 말하는지는 고정**, **어떻게 보여주는지는 재량**이다.

| 고정 — 바꾸지 말 것 | 재량 — 자유롭게 설계 |
|---|---|
| 사실·연도·장비명·기관명 (3장 · 부록 B) | 레이아웃, 그리드, 섹션 안의 배치 |
| 카피 초안 (부록 A) — 다듬기는 제안으로 | 타이포 위계, 여백 |
| 시제 규칙과 금지·동결 표현 (4장) | 시그니처 레버 안에서의 색·질감 (5.2) |
| 연락 채널 (3.4) | 컴포넌트의 구체적 형태 |
| 공유 디자인 레이어 (5.1) | 페이지 분할·순서 (근거를 적어 제안) |

- 카피가 어색하면 **새 사실을 만들지 말고** 해당 문장과 이유를 적어 제안한다.
- 이 문서에 없는 수치·주장·고객명·인증은 어떤 경우에도 추가하지 않는다.

---

## 1. 사이트 개요

### 1.1 무엇인가

**Dr. Park CDMO**는 바이러스 벡터(AAV·아데노·렌티), 플라스미드 DNA, 재조합 단백질을 위탁 생산·개발하는 한국 성남의 CDMO다. 박용호 박사(Dr. Yongho Park)가 2019년 외부 투자 없이 단독 설립했고, GANA R&D · GANA Cosmetic과 같은 부지(둔촌대로 555)에서 일한다. 세 회사는 Dr. Park Group이라는 이름을 함께 쓴다.

### 1.2 이 사이트의 핵심 긴장 — 반드시 이해할 것

이 회사의 Phase 1 바이러스 벡터 시설은 **2025년 8월에 준공됐고, cGMP 인증은 2026년 목표**로 아직 받지 않았다. 그래서 이 사이트는:

- **지금 팔 수 있는 것**(공정 개발, 엔지니어링 배치)과 **인증 후에 팔 수 있는 것**(임상 공급)을 명확히 나눠 말한다.
- 인증을 받은 것처럼 보이는 어떤 표현·배지·연출도 쓰지 않는다.
- 4개 사이트 중 **가장 담백해야 한다.** 인증 전 사업에 연출이 붙으면 실사에서 "미취득인데 왜 포장하지"로 읽힌다.
- 대신 증거는 **실물**이다: 준공된 시설, 설치된 장비, Thermo Fisher 공동 발표, QC 체계. GANA R&D의 증거가 등록번호였다면, 이 사이트의 증거는 시설과 장비다.

### 1.3 독자

유전자치료제 개발사, 바이오텍 파트너, 실사 담당자, 규제·품질 담당자. 영어로 읽는 국제 독자다. **영어 단일 언어**로 만든다(다국어 없음).

### 1.4 성공 기준

방문자가 30초 안에 안다: ① 무엇을 만들 수 있는 회사인지 ② 지금 계약 가능한 범위와 인증 후 가능한 범위 ③ 시설·장비가 실재하는지 ④ 누구에게 연락하는지.

---

## 2. 정보 구조

**5페이지 제안** (통합·분할 제안 가능, 콘텐츠 블록은 고정):

| 페이지 | 목적 | 핵심 블록 |
|---|---|---|
| **Home** | 정의 + 상태 + 안내 | 히어로(부록 A-1) · 기록 패널 4셀(A-2) · 서비스 4행 요약(A-3) · 시설 티저 · 연혁·학회(A-6) · CTA |
| **Services & Co-development** | 무엇을 계약할 수 있나 | 바이러스 벡터 / 플라스미드 DNA / 단백질·펩타이드 / 공동개발 — 각각 지금 가능 범위와 인증 후 범위(A-3 상세) |
| **Facility & Equipment** | 시설 실재의 증명 | 실(방)별 구성과 장비 목록(부록 B-1) — 실 코드(VTF1 등)를 라벨로 |
| **Quality** | 품질 체계 | QC 장비 목록(B-2) · 벡터 QC 항목표(B-3) · 플라스미드 QC 항목표(B-4) |
| **Contact** | 연락 | 이메일·전화(3.4) · 주소 · 그룹 안내 한 줄. **폼 없음** |

- 모든 페이지 하단에 상태 문장(A-2의 status)이 반복되거나 푸터에 상주한다 — 어느 페이지로 진입해도 시제를 오해하지 않게.
- 푸터: 법인 표기 · 주소 · Dr. Park Group / GANA R&D / GANA Cosmetic 링크(3.5) · © 연도.

---

## 3. 확정 사실

### 3.1 회사

| 항목 | 값 |
|---|---|
| 사명 | Dr. Park CDMO |
| 창업자 | Dr. Yongho Park (박용호) — 외부 투자 없이 단독 설립 |
| 설립 | 2019 |
| 소재지 | 555 Dunchon-daero, Jungwon-gu, Seongnam-si, Gyeonggi-do 13215, Republic of Korea (Seonil Technopia) |

### 3.2 연혁 (게시 가능한 사건만)

| 연도 | 사건 |
|---|---|
| 2019 | Dr. Park CDMO incorporated |
| 2025-08 | Phase 1 viral vector facility completed |
| 2025-09 | Thermo Fisher Scientific joint announcement — equipment supplier for the Phase 1 facility |
| 2026 | cGMP certification targeted |

### 3.3 국제 학회·전시 참가 (회사 게시 기준)

CPHI Korea 2025 · CPHI USA 2025 · Bioprocess International 2025 · Gene Therapy Development Summit 2025 (Boston) · ASGCT 2026 (Boston)

### 3.4 연락 채널

| 채널 | 값 |
|---|---|
| Email | president@drpark-cdmo.com |
| Tel | +82-31-734-0077 |

개인 휴대폰·개인 이메일은 싣지 않는다. 폼도 두지 않는다.

### 3.5 관련 사이트 링크

- Dr. Park Group (게이트웨이): 도메인 미정 — 데이터 파일에 자리만
- GANA R&D: https://ganarnd-rebranding.vercel.app (임시 주소, 데이터 파일 한 곳에서 관리)
- GANA Cosmetic: https://gana-cosmetics.com

---

## 4. 카피 규칙 — 위반하면 반려

1. **시제가 이 사이트의 척추다.** 시설·장비 = 완료형("built", "installed", "completed"). 인증·임상 공급 = 미래 목표형("targeted for 2026", "once certified"). 생산 서비스 중 지금 가능한 것 = 현재형("available now")은 **공정 개발과 엔지니어링 배치에만** 쓴다.
2. **인증 관련 확정 문구**는 이 두 문장 계열만 쓴다: "cGMP certification targeted for 2026." / "Clinical supply can be contracted once certified." 변형할 때도 targeted·once certified의 조건성이 유지돼야 한다.
3. **생산능력 수치 전면 동결.** 배치당 리터, 연간 배치 수, 연간 kg, 발효조 리터 등 **총량·능력을 말하는 모든 숫자를 게시하지 않는다.** 회사 내부 확정 전이다. 장비 모델명에 포함된 표기(예: "HyPerforma 1,000 L single-use bioreactor")는 제품명이므로 허용하되, 대수를 합산해 능력처럼 보이게 하지 않는다.
4. **금지 표현**: "World largest / world's largest / leading / premier" 등 기준 없는 최상급 · "Since 2013"(설립은 2019) · "FDA approved / registered" · "partnership with Thermo Fisher"(장비 공급이다 — "equipment supplier"로) · "GMP-certified"(미인증 — "designed for cGMP", "built to GMP standards"는 가능) · 타사 비교 · 고객사명.
5. **창업자 서술**: "Founded solely by Dr. Park, without external investment"는 이 회사에만 허용된 문장이다. "Direct access to the founder — decisions without committee"도 가능.
6. **그룹 관계**: "Dr. Park Group is the name three companies share" 수준까지만. 기업집단·지분·subsidiary 표현 금지. 구조화 데이터에서 subOrganization/parentOrganization 금지.
7. 확인되지 않은 사실(수상, 고객, 매출, 직원 수, 인증 로고, 파이프라인)을 추가하지 않는다.

---

## 5. 디자인 방향 — 같은 체계, 다른 온도

GANA R&D와 **한 가족으로 보이되, 다른 회사로 읽혀야** 한다. 방법은 토큰을 두 층으로 나누는 것이다: 공유 레이어는 손대지 않고, 시그니처 레버만 바꾼다.

### 5.1 공유 레이어 — 그대로 쓴다 (가족의 근거)

GANA R&D 사이트에서 그대로 가져온다:

| 항목 | 값 |
|---|---|
| 중립색 | paper `#ffffff` / `#f5f7f6`, ink `#16222c` / `#46535d` / `#71808a`, line `#dce2de`, navy `#0d1d2a` |
| 서체 | Manrope(본문·헤드라인) · IBM Plex Mono(코드·번호·데이터) |
| 타입 스케일 · 스페이싱 스케일 · radius · 컨테이너 폭(1320px) | R&D와 동일 |
| 컴포넌트 문법 | 섹션 eyebrow + 번호(01, 02…) · 라벨-값(kv) 행 · 표 스타일 · 버튼·화살표 링크 형태 · 헤더/푸터 구조 |
| 모션 규칙 | 기능 모션만(호버, 150–250ms 전환, 가벼운 스크롤 페이드). 패럴랙스·파티클·3D·배경 영상·마키 금지. reduced-motion 존중, JS 꺼져도 전부 보임 |
| 다크 배분 | 다크 히어로 → 밝은 본문(중간 다크 밴드 최대 1) → 다크 푸터 — R&D와 같은 리듬 |

### 5.2 시그니처 레버 — 여기서만 다르게 (다른 회사의 근거)

| 레버 | GANA R&D | Dr. Park CDMO |
|---|---|---|
| **① 포인트 색 온도** | 따뜻한 브라스 `#9a8050` | **차가운 스틸 계열 1색** — 채도 낮은 강청색(예: `#4c7c92`–`#35576b` 범위에서 선택, 흰 바탕 AA 대비 필수). 포인트는 하나만 |
| **② 모노 서체 밀도** | 등록번호에만 절제 사용 | **가시적 모티프로 승격** — 실 코드(VTF1 · VHV1 · PIB2…), 장비 모델명, 날짜, 상태 라벨을 IBM Plex Mono로. 엔지니어링 문서의 질감 |
| **③ 사진 온도** | 제품 팩샷(흰 배경) + 클린룸, 중성 톤 | **스테인리스·설비 실사, 차갑고 밝은 톤.** 제품 사진 없음 — 이 회사의 "제품"은 시설이다 |
| **④ 레이아웃 밀도** | 에디토리얼(좌 문단/우 이미지, 큰 헤드라인) | **스펙시트 밀도** — 실별 매트릭스, 장비 표, QC 표가 본문의 중심. 큰 디스플레이 타이포는 히어로에만 |

이 네 레버 밖에서는 R&D와 달라지지 않는다. 예컨대 서체를 바꾸거나, 다크 비중을 뒤집거나, 버튼 모양을 새로 만들지 않는다. **가족처럼 보이는 것은 공유 레이어가, 다른 회사로 읽히는 것은 이 네 레버가 담당한다.**

### 5.3 레퍼런스

| 사이트 | 볼 것 |
|---|---|
| Oxford Biomedica — https://www.oxb.com | AAV/벡터 CDMO의 가장 가까운 모델. 서비스 분류와 톤 |
| Andelyn Biosciences — https://www.andelynbio.com | "cGMP 준비 중" 단계를 표현하는 법 |
| Sartorius — https://www.sartorius.com | 바이오공정 설비+사람 사진의 온도 |
| Novo Nordisk — https://www.novonordisk.com | 절제의 기준선 |

기존 drpark-cdmo.com은 **레퍼런스가 아니다.** 문구·수치·슬로건을 참조하지 않는다.

---

## 6. 이미지와 에셋

- **실제 촬영본만.** 스톡, AI 생성(DNA·분자·세포 일러스트 포함), 추상 텍스처 금지.
- **회사 시설 사진이 실재한다**: 설비 소개 자료(바이오리액터실 · 배지 조제실 · 정제 설비 · QC 장비, 40여 컷)와 공장 홍보영상 원본. 필요 컷은 원본으로 따로 전달한다.
- **사진 속 용량 숫자는 잘라낸다** — 슬라이드 자막·명판에 리터·kg 수치가 있으면 크롭 또는 제외(4장 규칙 3).
- 신규 촬영이 예정돼 있다(실별 와이드, 사람이 들어간 컷, 창업자 포트레이트). 해당 자리는 비율 지정 자리 표시로 두고 캡션을 단다. 대체 이미지·실루엣 금지.
- 로고: 텍스트 워드마크 "Dr. Park CDMO"로 처리. "dP" 모노그램은 원본 파일 입수 전 재현 금지.

---

## 7. 기술 요구사항

| 항목 | 요구 |
|---|---|
| 형태 | 정적 사이트, **Astro 5 권장** (`npm run build` → `dist/`, vercel.json `"framework": "astro"`) |
| 구조 | 사실·링크·연락처는 데이터 파일 하나(`src/data/company.ts`), 문구는 `src/i18n/en.ts` 한 파일. 컴포넌트에 문구 직접 쓰지 않기 |
| 언어 | **EN 단일.** html lang="en". 다국어 스위처 없음 |
| SEO | title/description(부록 A-8) · canonical · sitemap · robots · OG · JSON-LD Organization(그룹·자매사는 sameAs로만) |
| 접근성 | WCAG 2.1 AA · 표는 모바일에서 세로 쌓기 · 키보드 내비 · skip link |
| 반응형 | 1440 · 1024 · 768 · 390px 가로 스크롤 없음 |
| 외부 요소 | Google Fonts 외 외부 스크립트 0. 분석·채팅·쿠키 배너·폼 없음 |
| 성능 | WebP, 첫 화면 1MB 이하 목표 |
| 인쇄 | 인쇄·PDF에서 전 섹션 보임 — 실사 담당자가 PDF로 돌린다 |

---

## 8. 미결 — 자리만 두고 내용을 만들지 말 것

| 항목 | 현재 처리 |
|---|---|
| 공식 생산능력 수치 | **전면 미게시** (확정 시 Facility에 추가) |
| Strategic/Sovereign 섹션 (장기 증설 비전) | **v1에서 제외** — 수치 확정 후 별도 페이지로 |
| 도메인 (drpark-cdmo.com 유지 여부) | 미정 — site 설정은 배포 시 |
| 대표 문의 이메일 | president@ 사용 중 — 전용 주소 생기면 데이터 파일에서 교체 |
| 창업자 포트레이트·신규 시설 컷 | 촬영 예정 — 자리 표시 |
| Dr. Park Group 게이트웨이 링크 | 도메인 확정 후 |

---

## 9. 납품물과 검수

**납품물**: ① 소스 전체(빌드 통과) ② 전 페이지 캡처 1440px·390px ③ 디자인 결정 메모(스틸 포인트 색 확정값, 부록 카피에서 바꾼 문장과 이유)

**검수 체크리스트**
- [ ] 시제: 시설=완료형, 인증=목표형, 현재형은 공정개발·엔지니어링 배치에만
- [ ] 생산능력 수치가 어디에도 없다 (본문·이미지·alt·메타 포함)
- [ ] 금지 표현 없음 (최상급 · Since 2013 · FDA · partnership · GMP-certified)
- [ ] 공유 레이어가 R&D와 일치하고, 차이는 5.2의 네 레버 안에만 있다
- [ ] 사실·장비명이 3장·부록 B와 한 글자도 다르지 않다
- [ ] 폼 없음, 연락 채널은 3.4와 일치
- [ ] 스톡·AI 이미지 없음, 사진 속 용량 숫자 없음
- [ ] EN 단일, 390px 가로 스크롤 없음, JS off·인쇄에서 전부 보임

---

## 부록 A — 카피 초안 (EN, 고정 — 다듬기는 제안으로)

### A-1. Home 히어로

- Eyebrow: `Viral vector CDMO — Seongnam, Korea`
- H1: `Viral vectors, plasmid and protein.`
- Sub: `A Phase 1 viral vector facility, completed in August 2025 and equipped with Thermo Fisher Scientific bioprocessing systems. Process development and engineering batches are available now; cGMP certification is targeted for 2026.`
- CTA: `See the facility` → Facility / `Start a conversation` → Contact

### A-2. 기록 패널 (R&D의 숫자 패널에 대응 — 숫자 대신 사실 4셀)

| 셀 | 내용 |
|---|---|
| 1 | `Phase 1 facility` — `Completed August 2025` |
| 2 | `Equipment` — `Thermo Fisher Scientific, joint announcement 2025` |
| 3 | `Founded 2019` — `Solely by Dr. Yongho Park, without external investment` |
| 4 | `cGMP` — `Certification targeted for 2026 · clinical supply once certified` |

### A-3. 서비스 4행

1. **Viral vector bioproduction** — `AAV, adenovirus and lentivirus. Adherent and suspension HEK293, serum-free processes — from process development to engineering batches.`
2. **Plasmid DNA** — `A dedicated plasmid line from fermentation through purification, built to GMP standards and awaiting cGMP certification.`
3. **Recombinant protein & peptide** — `Expression through purification, for research and development use.`
4. **Co-development** — `From invention to scale: process development, scale-up, analytical development and tech transfer, with direct access to the founder.`

각 행 공통 단서(작게): `Clinical-grade supply can be contracted once cGMP certification is granted.`

### A-4. Facility 리드

`One floor, built in sequence for one purpose. Each room is listed with the equipment installed in it — ask us to walk you through it in person.`

### A-5. Quality 리드

`Quality is documented before it is claimed. The panels below list what we test and how, for vectors and for plasmid.`

### A-6. 연혁·학회 행

Timeline: 3.2의 4행 그대로. Conferences: `Where to find us — CPHI Korea 2025 · CPHI USA 2025 · Bioprocess International 2025 · Gene Therapy Development Summit 2025, Boston · ASGCT 2026, Boston`

### A-7. Contact

- H1: `Tell us the modality and the stage.`
- Lead: `We reply with what can start now — process development and engineering batches — and what can be scheduled for after certification.`
- 채널: 3.4 · 주소: 3.1
- 그룹 한 줄: `Dr. Park CDMO shares one site in Seongnam with GANA R&D (medical devices) and GANA Cosmetic (cosmeceuticals), under the name Dr. Park Group.`

### A-8. 메타

- Title: `Dr. Park CDMO — Viral Vector Manufacturing, Korea`
- Description: `Viral vector CDMO in Seongnam, Korea. AAV, adenovirus and lentivirus process development and engineering batches available now; Phase 1 facility completed 2025, cGMP certification targeted for 2026.`

---

## 부록 B — 장비·QC 표 (게시 가능하게 큐레이션된 목록 — 이 표기 그대로)

### B-1. 실(방)별 구성 — Facility 페이지

| 실 코드 | 이름 | 설치 장비 (모델 표기 그대로) |
|---|---|---|
| VTF1 | Vector production — upstream | Thermo Scientific HyPerforma single-use bioreactors · DynaDrive single-use bioreactor · automated cell factory machine (ACFM) with incubator · Nunc Cell Factory incubator · rocker incubator · Quantum bioreactor · single-use mixers |
| VHV1 | Vector harvest | Thermo Scientific DynaSpin single-use centrifuge |
| VDS2 · PPC2 | Downstream — purification | ÄKTA Pilot 600 FPLC · ÄKTA Flux · tangential-flow filtration (TFF) skids at multiple scales |
| VBP2 | Buffer & media preparation | Stainless and single-use mixers, laminar prep booth |
| PIB2 | Plasmid production | Fermentation and downstream line built to GMP standards |
| QC labs | Quality control | 아래 B-2 |

> 대수 합산·용량 합계를 만들지 말 것. 실 코드는 모노 서체 라벨로.

### B-2. QC 장비

Optima AUC (analytical ultracentrifuge) · Vi-CELL BLU · Vi-CELL MetaFLEX · SeqStudio Sanger sequencer · iSeq 100 (NGS) · QuantStudio 5 real-time PCR · LC-MS · GC-MS · HPLC · MALDI-TOF · NMR · TEM · confocal microscopy · CytoFLEX SRT cell sorter · Biomek i5 liquid handler · micro-ultracentrifuge · particle size analyzer · high-pressure homogenizer · fluorescence microscopy

### B-3. Virus vector QC 항목표

| Quality | Attribute | Technique |
|---|---|---|
| Identity | Presence and identity of viral vector | DNA sequencing |
| Potency | Physical viral titer | Real-time PCR |
| Potency | Functional viral titer | Plaque-forming assay |
| Potency | Infectivity | Limiting dilution |
| Purity | Process-related impurities | Chromatography |
| Purity | Host cell DNA / protein | Real-time PCR · ELISA |
| Purity | Capsid content (full/empty) | Analytical ultracentrifugation |
| Purity | Protein · OD260/OD280 | SDS-PAGE · spectrophotometry |
| Safety | Sterility · endotoxin · mycoplasma | Bioburden · LAL · PCR |
| Safety | Replication-competent virus · wtAAV | Real-time PCR · infectious center assay |
| Stability | pH · osmolality | Potentiometry · osmometry |

### B-4. Plasmid QC 항목표

| Attribute | Technique |
|---|---|
| Identity (sequence) | Sequencing |
| DNA concentration | Qubit |
| Supercoiled ratio | Electrophoresis |
| Purity | HPLC |
| Residual host-cell DNA / RNA / protein | qPCR · ELISA |
| Microbial purity · endotoxin · mycoplasma | Bioburden · LAL · qPCR |
| pH | pH |
