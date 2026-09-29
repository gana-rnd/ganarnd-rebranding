# Dr. Park Group 웹사이트 — 디자인·구현 명세

- **작성**: 2026-09-29
- **대상**: 이 사이트를 디자인하고 구현할 담당자(Manus)
- **기준**: 현재 1차 구현본(Astro, EN + KO 단일 페이지)의 구조·문구·사실. 문구 원문은 부록 A·B, 사실 데이터는 부록 C에 있다.

---

## 0. 이 문서를 읽는 법 — 고정과 재량

이 사이트는 **사실을 검증하려는 B2B 독자**를 위한 페이지다. 그래서 **무엇을 말하는지는 고정**되어 있고, **어떻게 보여주는지만** 자유롭게 설계하면 된다.

| 고정 — 바꾸지 말 것 | 재량 — 자유롭게 설계 |
|---|---|
| 사실·숫자·연도·등록번호 (부록 C) | 레이아웃, 그리드, 섹션 안의 배치 |
| 문구 (부록 A 영문 · 부록 B 국문) | 타이포그래피 위계, 여백 |
| 카피 규칙과 금지 표현 (4장) | 색 (5장 범위 안에서) |
| 링크·연락 채널 (3장) | 컴포넌트 형태 (카드·표·타임라인의 모양) |
| 금지 이미지 (6장) | 기능 모션 (5.4 허용 목록 안에서) |
| 섹션 목록 (2장) | 섹션 순서 조정 (근거를 적어 제안) |

- 문구가 디자인에 맞지 않으면 **새로 쓰지 말고** 해당 키와 이유를 적어 제안한다. 사실은 어떤 경우에도 추가하지 않는다.
- 자리를 비워 둬야 하는 곳(8장)은 **자리 표시만** 하고 내용을 만들어 넣지 않는다.

---

## 1. 사이트 개요

### 1.1 무엇인가

**Dr. Park Group은 박용호 박사(Dr. Yongho Park)가 창업한 세 회사가 함께 쓰는 이름이다.** 하나의 기업집단이나 지주회사가 아니다.

| 회사 | 분야 | 자체 사이트 |
|---|---|---|
| GANA R&D | 의료기기 (필러 · 창상피복재) | https://ganarnd-rebranding.vercel.app |
| GANA Cosmetic | 코스메슈티컬 (전문가용 스킨케어 · OEM/ODM) | https://gana-cosmetics.com |
| Dr. Park CDMO | 바이러스 벡터 생산 (AAV 등 · 플라스미드 · 단백질) | https://drpark-cdmo.com |

세 회사는 경기도 성남시 둔촌대로 555(선일테크노피아), 한 부지에서 일한다.

### 1.2 이 사이트의 역할

그룹 사이트는 세 회사 사이트 위에 있는 **입구(게이트웨이)** 다. 하는 일은 세 가지다.

1. **창업자 중심 스토리**: 한 창업자가 한 부지에서 세 회사를 차례로 세웠다는 사실을 보여준다.
2. **세 회사로 안내**: 방문자를 알맞은 회사 사이트와 문의 채널로 보낸다. 그룹 자체는 문의를 받지 않는다.
3. **신사업에 신뢰를 빌려준다**: 인증을 앞둔 바이러스 벡터 사업이 이미 허가를 가진 회사들과 같은 창업자·같은 부지라는 점을 보여준다. 단, 인증을 이미 받은 것처럼 보이면 안 된다.

### 1.3 독자

파트너, 규제기관, 전문 구매자(의료기기 유통사, 병원, 클리닉, 바이오텍), 실사 담당자. **소비자용 사이트가 아니다.** 이들은 사무실 PC로 열어 캡처하고 PDF로 돌려 보며 사실을 대조한다.

### 1.4 성공 기준

방문자가 30초 안에 세 가지를 안다.
1. 세 회사가 각각 무엇을 만드는지
2. 자기 용건이면 어느 회사에 연락해야 하는지
3. 등록번호를 어디서 확인할 수 있는지 (GANA R&D 등재 자료실)

---

## 2. 정보 구조

- **한 페이지 + 404.** 영어가 기본(`/`), 한국어는 `/ko/`.
- 상단 내비게이션은 페이지 안 앵커로 이동한다: 창업자 · 무엇을 만드는가 · 세 회사 · 한 부지 · 문의.
- 여러 페이지(About 분리 등)로 나누자는 제안은 가능하다. 다만 문구와 사실은 그대로 둔다.

| # | 섹션 (앵커) | 목적 | 문구 키 (부록 A·B) | 필수 요소 |
|---|---|---|---|---|
| — | 히어로 | 한 문장으로 그룹을 정의 | `hero.*` | 헤드라인 2줄 · 부제 1줄 · **세 회사 진입 카드**(번호 · 회사명 · 분야 `field` · 한 줄 `tagline` · "Visit {name}" 링크) |
| 01 | 창업자 (`#founder`) | 한 사람이 차례로 세웠다 | `founder.*` | 제목 · 문단 2 · **포트레이트 자리(4:5, 8장 참조)** · 연혁 5행(2014 · 2017 · 2019 · 2025 · 2026) |
| 02 | 무엇을 만드는가 (`#makes`) | 세 층위와 층별 상태 | `makes.*` | 세 층(피부 · 조직 · 세포·유전자) 각각 이름 · 무엇 · **시제 문장(`tense`)** · "Made by 회사명" · 하단 주석(`makes.note`) |
| 03 | 기록으로 (`#record`) | 이름 뒤의 숫자 | `record.*` | 숫자 4개와 라벨 (3 · 1 · 33 · 2014) |
| 04 | 세 회사 (`#companies`) | 자격은 보유 회사 이름 아래 | `companies.*` | 회사별 카드: 분야 · 회사명 · 만드는 것 · 고객(Serves) · 상태(Status) · 기록(On the record 목록) · 사이트 링크 |
| 05 | 한 부지 (`#site`) | 모든 허가증에 같은 주소 | `site.*` | 라벨–값 4행: 주소 · 창업자 · 의료기기 제조업 허가 · 바이러스 벡터 시설 |
| 06 | 문의 (`#contact`) | 그룹이 아니라 회사에 | `contact.*` + 각 회사 `contactLabel` | 회사별 한 줄: 회사명 · 문의 내용 · 채널(전화/이메일) · "Contact {name}" 링크 |
| — | 마지막 버튼 | 등록번호로 연결 | `cta.*` | GANA R&D 등재 자료실 링크 |
| — | 푸터 | 이름의 정의와 주소 | `footer.*` | 그룹 정의 문장 · 세 회사 링크 · 주소 · 독자 문장 · © 연도 |
| — | 404 | | `notFound.*` | 홈 링크 |

### 섹션별 주의

- **히어로의 세 회사 카드**는 동등한 크기와 위계로 보인다. 어느 한 회사를 대표로 키우지 않는다.
- **02 세 층**: 층마다 `tense` 문장이 반드시 함께 보여야 한다. 세 층을 하나의 흐름·하나의 주어로 묶는 시각 장치(연결 화살표, "하나의 플랫폼" 다이어그램 등)는 쓰지 않는다. 층은 **나란히 놓인 세 개**다.
- **03 숫자**: 카운트업 애니메이션을 쓴다면 3 · 1 · 33에만 쓴다. 2014는 연도라서 카운트업하지 않는다.
- **04 세 회사**: 각 회사의 자격(허가번호·등록번호)은 **그 회사 카드 안에만** 둔다. 그룹 전체의 자격처럼 모아 보여주지 않는다.
- **06 문의**: 그룹 대표 전화나 이메일은 없다. 폼도 두지 않는다.

---

## 3. 확정 사실과 링크

부록 C(`group.ts`)가 원본이다. 요약은 아래와 같다.

### 3.1 회사·링크·문의 채널

| 회사 | 사이트 | 문의 페이지 | 채널 |
|---|---|---|---|
| GANA R&D | https://ganarnd-rebranding.vercel.app | https://ganarnd-rebranding.vercel.app/contact/ | Tel +82-31-733-0242 |
| GANA Cosmetic | https://gana-cosmetics.com | https://gana-cosmetics.com | contact@gana-cosmetics.com |
| Dr. Park CDMO | https://drpark-cdmo.com | https://drpark-cdmo.com/pc/contact/contact01.php | Tel +82-31-734-0077 |

- 마지막 버튼 링크(GANA R&D 등재 자료실): https://ganarnd-rebranding.vercel.app/market-access/
- GANA R&D 주소는 임시(Vercel 미리보기)다. 도메인 전환 후 바뀌므로 **링크는 데이터 파일 한 곳에서만 관리**한다.

### 3.2 숫자

| 값 | 라벨 | 근거 |
|---|---|---|
| 3 | 운영 회사 | — |
| 1 | 성남의 제조 부지 | — |
| 33 | GANA R&D 명의의 유효 의료기기 허가·등재 | GANA R&D 등록 데이터 (2026-09-29 기준 33건, 한국·러시아·브라질·영국 4개 관할) |
| 2014 | 식약처 제조업 허가 보유 시작 연도 | GANA R&D 제조업 허가 제4490호 |

### 3.3 주소

- EN: 555 Dunchon-daero, Jungwon-gu, Seongnam-si, Gyeonggi-do 13215, Republic of Korea (Seonil Technopia)
- KO: 경기도 성남시 중원구 둔촌대로 555 (선일테크노피아), 우편번호 13215

---

## 4. 카피 규칙 — 위반하면 반려

1. **그룹은 "세 회사가 함께 쓰는 이름"이다.** "기업집단", "지주회사", "계열사", "subsidiary", "parent company", 지분 관계를 암시하는 표현은 쓰지 않는다. 구조화 데이터에서도 `subOrganization` / `parentOrganization`은 쓰지 않는다(7장).
2. **층별 시제를 지킨다.** 피부·조직은 완료형("Made and registered"), 세포·유전자는 진행형("Facility completed in 2025. cGMP certification targeted for 2026."). 바이러스 벡터 사업이 인증을 이미 받았다고 읽히는 표현이나 배지는 쓰지 않는다.
3. **세 층을 하나의 주어로 잇지 않는다.** "우리는 피부부터 유전자까지 만든다" 같은 단일 주어 문장은 쓰지 않는다. 문장의 주어는 각 회사다.
4. **자격은 보유 회사 이름 아래에만** 적는다.
5. **생산용량 수치는 게시하지 않는다.** 배치당 리터 수, 연간 생산량 같은 숫자는 확정 전이다.
6. **"Since 2013"은 쓰지 않는다.** 확인된 설립 연도는 부록 C의 연혁뿐이다.
7. **"외부 투자 없이 단독 창업"은 Dr. Park CDMO에만** 쓴다. 다른 회사로 넓히지 않는다.
8. **개인 휴대폰 번호, 개인 이메일은 싣지 않는다.** 연락처는 3.1의 법인 채널만 쓴다.
9. **그룹 마스터 슬로건을 만들지 않는다.** 히어로 헤드라인(부록 A `hero`)이 그 자리를 대신한다.
10. **확인되지 않은 사실을 추가하지 않는다.** 수상, 고객사, 매출, 직원 수, 특허, 인증 로고 등 부록에 없는 것은 넣지 않는다.

### 사용 금지 표현

| 금지 | 이유 / 대신 쓰는 말 |
|---|---|
| "FDA approved", "FDA registered" | 등록은 승인이 아니다 |
| "Russia FDA" | 존재하지 않는 기관. 러시아는 Roszdravnadzor(РЗН) |
| "KFDA" | 폐지된 명칭. 현행은 MFDS(식약처) |
| 기한이 지난 인증 표기 (CE, ISO 등) | 만료됨 |
| 기준 없는 최상급 ("world's largest", "leading", "No.1") | 실증 책임이 생긴다 |
| "registered in our name" | 해외는 현지 대리인 명의다. "named as manufacturer"로 쓴다 |
| 원료를 자체 합성한다는 주장 | 확인되지 않음 |
| 타사 제품과의 직접 비교 | 비교광고 규정 |
| 장비 공급사와의 "partnership" | 실제로는 장비 구매. "equipment supplier"로 쓴다 |
| 의약품급 효능 표현 | 시장별 제한 |

---

## 5. 디자인 방향

### 5.1 원칙

> **장식 모션 0, 기능 모션만. 영상은 실제 촬영본일 때만. 배경은 단색. 증거(숫자·표·목록) 뒤는 반드시 단색.**

- 신뢰는 ① 사실을 검증하기 쉬움 ② 실제 조직(주소·사람·연락처)이 보임 ③ 전문적인 인상 ④ 빠르고 오류 없음 순으로 생긴다. 연출은 ③에 조금 보태고 ①④를 해친다.
- 중견 규모 회사의 화려한 연출은 "증거 대신 연출"로 읽힌다. 이 그룹은 세 사이트 중 **가장 담백해야** 한다. 인증 전인 신사업을 포장하는 것처럼 보이면 안 되기 때문이다.
- **다크 영역**: 히어로 → 본문 밝게 → 푸터 순서. 본문 중간의 다크 밴드는 최대 1개다(1차 구현은 03 숫자 섹션).
- **컨테이너 폭은 하나**로 정하고(1200–1320px) 모든 섹션에 같게 쓴다.
- 히어로에는 헤드라인과 경쟁하는 요소(우상단 문단, 배경 영상 등)를 두지 않는다.
- 추상 텍스처(대리석, 유체, 버블, 분자 모형)는 쓰지 않는다. 질감이 필요하면 실물 사진이 대신한다.

### 5.2 톤 — 세 회사와 같은 가족

그룹 사이트는 세 회사 위의 **중립적인 층**이다. 같은 가족으로 보이되, 특정 회사의 색을 그룹의 대표색처럼 쓰지 않는다.

기준 톤은 GANA R&D 현행 사이트다(https://ganarnd-rebranding.vercel.app): 잉크 + 브라스 + 오프화이트, 증거 중심, 절제된 편집 디자인. 참고 토큰:

| 역할 | 값 |
|---|---|
| 바탕 | `#ffffff` / 보조 `#f5f7f6` |
| 본문 잉크 | `#16222c` / 보조 `#46535d` / 약하게 `#71808a` |
| 선 | `#dce2de` |
| 포인트(브라스) | `#9a8050` / 짙게 `#735f36` |
| 다크(히어로·푸터) | `#0d1d2a` |
| 서체 | Manrope(라틴) · Noto Sans KR(한국어 페이지) · IBM Plex Mono(등록번호·숫자) |

그대로 따라야 하는 값은 아니다. 다른 팔레트를 제안하려면 세 회사 사이트와 나란히 놓은 비교 화면을 함께 낸다.

### 5.3 참고 사이트

| 사이트 | 볼 것 |
|---|---|
| Novo Nordisk (novonordisk.com) | 절제된 타이포와 여백, 신뢰 톤. 장식 모션이 거의 없다 — **기준선** |
| Merck Group (merckgroup.com) | 계열사로 갈라지는 게이트웨이 구조 |
| Croma Pharma (croma.at) | 중견 제조사 규모에 맞는 톤 |
| Basecamp (basecamp.com) | 텍스트만으로 신뢰를 쌓는 방식 |
| Linear (linear.app) | 기능 모션만으로 "잘 만든" 인상 |

### 5.4 모션 허용 목록

- 허용: 호버·포커스 상태, 150–250ms 전환, 03 숫자의 카운트업(3 · 1 · 33만), 스크롤 진입 시 가벼운 페이드
- 금지: 패럴랙스, 파티클, 3D, 배경 영상, 자동 슬라이더, 마키(흐르는 대형 텍스트), 커서 효과
- `prefers-reduced-motion`을 존중한다.
- **JS가 꺼져 있거나 인쇄할 때도 모든 콘텐츠가 보여야 한다.** 등장 애니메이션을 위해 숨겨 둔 초기 상태는 JS가 실행됐을 때만 적용한다.

---

## 6. 이미지와 에셋

### 6.1 원칙

- **실제 촬영본만 쓴다.** 사진은 무언가를 증명할 때만 넣는다. 확정된 그룹 사이트용 사진은 아직 없다. 1차 구현은 사진 없이 히어로를 다크 단색으로 처리했다.
- **금지**: 스톡 사진, AI 생성 이미지(DNA, 분자, 유체, 세포 일러스트 포함), 시술 전후 사진, 코스메틱 무드컷, 제3자 로고.

### 6.2 후보 자산 (사용 전 확인 필요)

| 자산 | 내용 | 주의 |
|---|---|---|
| Dr. Park CDMO 시설·설비 사진 | 바이오리액터실, 정제 설비, QC 장비 실사 (회사 소개 자료) | 필요하면 원본을 따로 전달한다. 사진에 표기된 용량 숫자는 5장 원칙과 4장 규칙 5에 따라 잘라낸다 |
| GANA R&D 제품 팩샷 | 필러 5종 · GANA PATCH 흰 배경 실물 | GANA R&D 사이트의 `/images/lineup-*.webp`, `/images/gana-patch-packshot.webp` |
| 공장 홍보영상 실사 컷 | 설비·복도·사이니지 | 영상에 섞인 AI 생성 클립은 제외 |

### 6.3 창업자 포트레이트

- **아직 촬영하지 않았다.** 01 섹션에 **4:5 비율의 자리**를 두고, 촬영 지시 캡션(부록 A `founder.photoNote`)을 보여준다.
- 대체 이미지, 실루엣, 일러스트를 넣지 않는다.

### 6.4 로고

- 그룹 로고 원본은 아직 확보되지 않았다. **텍스트 워드마크 "Dr. Park Group"** 으로 처리한다.
- 실물 사이니지의 "dP" 모노그램은 원본 파일을 받기 전까지 트레이싱하거나 재현하지 않는다.
- 회사 로고를 쓴다면 **GANA R&D 로고는 수정하지 않는다**(클라이언트 요건: 형태·색·비율 변경 금지). 원본이 없으면 세 회사 모두 텍스트 회사명으로 통일한다.
- 파비콘과 공유 미리보기 이미지(OG)는 텍스트 기반으로 만든다.

---

## 7. 기술 요구사항

| 항목 | 요구 |
|---|---|
| 형태 | 정적 사이트. **Astro 5 권장**(다른 두 사이트와 같은 빌드·배포 방식). 다른 도구라면 정적 HTML로 내보낼 수 있어야 한다 |
| 구조 | 사실은 데이터 파일 하나(`src/data/group.ts`), 문구는 언어별 파일(`src/i18n/en.ts`, `ko.ts`)에만 둔다. 두 언어 파일은 **키 구조가 같아야** 한다. 컴포넌트 안에 문구를 직접 쓰지 않는다 |
| 빌드 | `npm run build` → `dist/`. Vercel 배포용 `vercel.json`에 `"framework": "astro"` |
| 언어 | EN `/`, KO `/ko/`. 언어 전환 시 같은 섹션 위치를 유지한다. `html lang` 지정. 한국어 페이지는 Noto Sans KR, `word-break: keep-all` |
| SEO | 언어별 title/description(부록 `meta`), canonical, hreflang(en · ko · x-default), sitemap, robots.txt, OG 태그, JSON-LD `Organization` — 세 회사는 `sameAs` 또는 별도 Organization으로만 연결하고 `subOrganization`/`parentOrganization`은 쓰지 않는다 |
| 접근성 | WCAG 2.1 AA 대비, 모든 이미지 alt, 키보드 이동과 포커스 표시, 건너뛰기 링크, 모바일에서 표는 세로로 쌓기 |
| 반응형 | 1440 · 1024 · 768 · 390px에서 가로 스크롤 없음 |
| 외부 요소 | Google Fonts 외 외부 스크립트 없음. 분석 도구, 채팅 위젯, 쿠키 배너, 문의 폼 없음 |
| 성능 | 이미지는 WebP, 첫 화면에 무거운 이미지나 영상 없음. 페이지 총 전송량 1MB 이하 목표 |
| 인쇄 | 인쇄·PDF 저장 시 모든 섹션이 보이고, 고정 헤더·장식 요소는 숨긴다 |

---

## 8. 미결 사항 — 자리만 두고 내용을 만들지 말 것

| 항목 | 현재 처리 | 확정되면 |
|---|---|---|
| 창업자 포트레이트 | 4:5 자리 + 촬영 지시 캡션 | 사진으로 교체 |
| 그룹 도메인 | 미정 | `site` 설정 · canonical · sitemap · robots 갱신 |
| GANA R&D 링크 | 임시 주소(Vercel) | 정식 도메인으로 교체 (데이터 파일 한 곳) |
| GANA R&D 대표 이메일 | 없음 → 전화만 표시 | 문의 표에 추가 |
| 법인 설립 연도(2014 · 2017 · 2019) | 현재 문구 유지 | 등기부 대조 후 확정. 임의로 바꾸지 말 것 |
| 등재 건수 33 | 고정값 | GANA R&D 데이터가 바뀌면 함께 갱신 |
| 그룹 로고 | 텍스트 워드마크 | 원본 입수 후 교체 |
| 페이지 구성(단일 / 다중) | 단일 페이지 | 제안 시 결정 |

---

## 9. 납품물과 검수

### 9.1 납품물

1. 소스 전체 (Astro 프로젝트, `npm run build` 통과)
2. EN · KO 전 섹션 캡처: 1440px과 390px
3. 디자인 결정 메모: 팔레트, 서체, 부록 문구와 달라진 점(있으면 키와 이유)

### 9.2 검수 체크리스트

- [ ] 숫자·연도·등록번호·주소·전화가 부록 C와 한 글자도 다르지 않다
- [ ] 문구가 부록 A·B와 같다 (바꾼 곳은 메모에 키와 이유가 있다)
- [ ] 4장의 금지 표현이 페이지·메타·alt·구조화 데이터 어디에도 없다
- [ ] 바이러스 벡터 층이 진행형 시제로 보이고, 인증을 받은 것처럼 보이는 배지나 표현이 없다
- [ ] 자격이 각 회사 카드 안에만 있다
- [ ] 그룹 대표 연락처와 문의 폼이 없고, 회사별 채널이 3.1과 같다
- [ ] 스톡·AI 이미지가 없다. 창업자 자리는 비어 있고 캡션이 보인다
- [ ] 390px에서 가로 스크롤이 없다
- [ ] JS를 끈 상태와 인쇄 미리보기에서 모든 섹션이 보인다
- [ ] 한국어 페이지 줄바꿈이 어절 단위로 자연스럽다
- [ ] 외부 스크립트가 Google Fonts뿐이다

---

## 부록 A — 영문 문구 원문 (`src/i18n/en.ts`)

1차 구현의 문구 파일 그대로다. 모든 번역의 원본이다.

```ts
// Dr. Park Group — 영어(기본) UI 문자열. 모든 번역의 소스.
// 카피 규칙: 확인된 사실만 · 층별 시제 · 세 층을 하나의 주어로 잇지 않는다 · 자격은 회사 이름 아래 · 그룹은 "함께 쓰는 이름"이지 기업집단이 아니다.
export const en = {
  nav: {
    founder: 'The founder',
    makes: 'What we make',
    companies: 'Companies',
    site: 'One site',
    contact: 'Contact',
    menu: 'Menu',
  },
  common: {
    founder: 'Dr. Yongho Park',
    scroll: 'Scroll',
    visit: 'Visit {name}',
    contactCo: 'Contact {name}',
    tel: 'Tel',
    email: 'Email',
  },
  meta: {
    title: 'Dr. Park Group — Three companies, one site, one founder',
    description:
      'Dr. Park Group is the name under which three companies founded by Dr. Yongho Park present themselves together: GANA R&D (medical devices), GANA Cosmetic (cosmeceuticals) and Dr. Park CDMO (viral vector manufacturing), all working from one site in Seongnam, Korea.',
  },
  hero: {
    eyebrow: 'Dr. Park Group — Seongnam, Korea',
    title1: 'Three companies,',
    title2: 'one site, one founder.',
    sub: 'Licensed medical devices, professional cosmeceuticals and viral vector manufacturing. Three companies founded by Dr. Yongho Park, working from one site in Seongnam.',
  },
  founder: {
    eyebrow: 'The founder',
    title: 'Built in sequence, on one site.',
    p1: 'Dr. Yongho Park founded GANA R&D in 2014 to manufacture dermal fillers under a Korean medical device licence. GANA Cosmetic followed in 2017 for professional skincare, and Dr. Park CDMO in 2019 to bring viral vector manufacturing onto the same site.',
    p2: 'He remains the principal decision-maker in each company. Partners and buyers deal with him directly, and decisions are taken without a committee.',
    photoNote: 'Founder portrait — Dr. Yongho Park at the Seongnam site, natural light, facing or three-quarter view (shot list 6-1)',
    timelineTitle: 'Timeline',
    timeline: [
      { y: '2014', t: 'GANA R&D Co., Ltd. incorporated. MFDS medical device manufacturing licence No. 4490.' },
      { y: '2017', t: 'GANA Cosmetic Co., Ltd. incorporated.' },
      { y: '2019', t: 'Dr. Park CDMO incorporated.' },
      { y: '2025', t: 'Phase 1 viral vector facility completed in August. Thermo Fisher Scientific selected to equip it.' },
      { y: '2026', t: 'cGMP certification targeted for the viral vector facility.' },
    ],
  },
  makes: {
    eyebrow: 'What we make',
    title: 'Skin, tissue, cell and gene. Each stated on its own.',
    lead: 'The three companies work at three depths of the body. The status of each depth is given separately: two are made and registered, the third is built and awaiting certification.',
    layers: [
      {
        name: 'Skin',
        what: 'Dermal fillers in hyaluronic acid, PLLA, PCL and calcium, plus PN / PDRN, and professional cosmeceuticals.',
        tense: 'Made and registered.',
      },
      {
        name: 'Tissue',
        what: 'Hydrogel and foam wound dressings for hospitals and long-term care.',
        tense: 'Made and registered, including domestic-sale approval in Korea.',
      },
      {
        name: 'Cell and gene',
        what: 'AAV and other viral vectors, plasmid and recombinant protein for gene therapy developers.',
        tense: 'Facility completed in 2025. cGMP certification targeted for 2026.',
      },
    ],
    madeBy: 'Made by',
    note: 'We do not claim one technology platform across all three depths. We state that the same founder, on the same site, manufactures at each of them.',
  },
  record: {
    eyebrow: 'On the record',
    title: 'The numbers behind the name',
    stats: [
      'Operating companies',
      'Manufacturing site in Seongnam, Korea',
      'Active device registrations held by GANA R&D',
      'MFDS manufacturing licence held since',
    ],
  },
  companies: {
    eyebrow: 'The companies',
    title: 'Three companies, each under its own name.',
    lead: "Licences and registrations belong to the company that holds them. They are listed under that name here, and in full on each company's own site.",
    servesLabel: 'Serves',
    statusLabel: 'Status',
    credentialsLabel: 'On the record',
    items: {
      ganarnd: {
        field: 'Medical devices',
        tagline: 'Fillers and wound dressings, made and registered.',
        makes: 'Dermal fillers across four chemistries, and hydrogel and foam wound dressings, formulated, filled and registered under its own name, with contract manufacture for partner brands.',
        serves: 'Clinics, hospitals, medical distributors and brand partners.',
        status: 'Licensed manufacturer. Products made and registered.',
        credentials: [
          'MFDS manufacturing licence No. 4490, held since 2014',
          'GMP conformity KCL-ABBA-19926, valid to 3 March 2027',
          'EUDAMED manufacturer SRN KR-MF-000037221',
          'MHRA manufacturer registration MAN_ID 32678',
          '33 active product registrations across South Korea, Russia, Brazil and the United Kingdom',
        ],
        contactLabel: 'Device and distribution enquiries',
      },
      ganacosmetic: {
        field: 'Cosmeceuticals',
        tagline: 'Cosmeceuticals for clinics and professional distributors.',
        makes: 'Cosmeceutical product development, OEM / ODM manufacture and private label for professional skincare.',
        serves: 'Clinics, aesthetic distributors and ODM partners, in four languages.',
        status: 'Operating brand and B2B supplier.',
        credentials: ['Product notifications and quality documentation are presented on its own site'],
        contactLabel: 'Cosmetic product and ODM enquiries',
      },
      drparkcdmo: {
        field: 'Viral vector manufacturing',
        tagline: 'Viral vectors, plasmid and protein. cGMP targeted for 2026.',
        makes: 'Viral vectors (AAV, adenovirus, lentivirus), GMP plasmid, recombinant protein and peptide, from process development through engineering batches.',
        serves: 'Gene therapy developers and biotech partners.',
        status: 'Phase 1 viral vector facility completed August 2025. Process development and engineering batches available now. cGMP certification targeted for 2026; clinical supply can be contracted once certified.',
        credentials: [
          'Founded solely by Dr. Park, without external investment',
          'Facility and equipment specifications are published on its own site',
        ],
        contactLabel: 'Vector, plasmid and protein manufacturing enquiries',
      },
    },
  },
  site: {
    eyebrow: 'One site',
    title: 'The same address on every registration',
    addressK: 'Address',
    addressV: '555 Dunchon-daero, Jungwon-gu, Seongnam-si, Gyeonggi-do 13215, Republic of Korea (Seonil Technopia)',
    founderK: 'Founder',
    founderV: 'Dr. Yongho Park, founder of GANA R&D, GANA Cosmetic and Dr. Park CDMO',
    licenceK: 'Device manufacturing licence',
    licenceV: 'GANA R&D, MFDS No. 4490, held since 2014',
    facilityK: 'Viral vector facility',
    facilityV: 'Dr. Park CDMO, Phase 1 facility completed August 2025, cGMP certification targeted for 2026',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Write to the company, not the group.',
    lead: 'Enquiries are answered by the company that makes the product. Pick the line that matches yours.',
    thCompany: 'Company',
    thFor: 'For',
    thChannel: 'Channel',
  },
  cta: {
    title: 'Need a registration number?',
    body: 'GANA R&D publishes every device registration with a public lookup path.',
    btn: 'Registrations & Market Access',
  },
  footer: {
    note: 'Dr. Park Group is the name under which three companies founded by Dr. Yongho Park present themselves together. Each company holds its own licences and registrations and is responsible for its own products.',
    companies: 'Companies',
    site: 'Site',
    addr1: '555 Dunchon-daero, Jungwon-gu,',
    addr2: 'Seongnam-si, Gyeonggi-do 13215, Republic of Korea',
    audience: 'For partners, regulators and professional buyers.',
  },
  notFound: {
    title: 'Page not found.',
    lead: "The page you were looking for doesn't exist or has moved.",
    home: 'Dr. Park Group home',
  },
};

export type UIStrings = typeof en;
export type CompanyStrings = UIStrings['companies']['items']['ganarnd'];

```

## 부록 B — 국문 문구 원문 (`src/i18n/ko.ts`)

격식체 B2B 한국어. 키 구조는 부록 A와 같다.

```ts
// Dr. Park Group — 한국어 UI 문자열. en.ts와 키 구조가 같아야 한다. 격식체 B2B.
import type { UIStrings } from './en';

export const ko: UIStrings = {
  nav: {
    founder: '창업자',
    makes: '무엇을 만드는가',
    companies: '세 회사',
    site: '한 곳의 부지',
    contact: '문의',
    menu: '메뉴',
  },
  common: {
    founder: '박용호 박사',
    scroll: '스크롤',
    visit: '{name} 사이트로',
    contactCo: '{name}에 문의',
    tel: '전화',
    email: '이메일',
  },
  meta: {
    title: 'Dr. Park Group — 세 회사, 한 부지, 한 창업자',
    description:
      'Dr. Park Group은 박용호 박사가 창업한 세 회사가 함께 쓰는 이름입니다. GANA R&D(의료기기), GANA Cosmetic(코스메슈티컬), Dr. Park CDMO(바이러스 벡터 생산)가 경기도 성남의 한 부지에서 일합니다.',
  },
  hero: {
    eyebrow: 'Dr. Park Group — 경기 성남',
    title1: '세 회사,',
    title2: '한 부지, 한 창업자.',
    sub: '허가 의료기기, 전문가용 코스메슈티컬, 바이러스 벡터 생산. 박용호 박사가 창업한 세 회사가 성남의 한 부지에서 일합니다.',
  },
  founder: {
    eyebrow: '창업자',
    title: '한 부지에서, 차례로 세웠습니다.',
    p1: '박용호 박사는 2014년 GANA R&D를 설립해 의료기기 제조업 허가 아래 필러를 생산하기 시작했습니다. 2017년에는 전문가용 스킨케어를 위한 GANA Cosmetic을, 2019년에는 같은 부지에 바이러스 벡터 생산을 들이기 위해 Dr. Park CDMO를 세웠습니다.',
    p2: '지금도 세 회사 모두에서 최종 의사결정을 직접 합니다. 파트너와 구매자는 창업자와 직접 협의하며, 결정은 위원회를 거치지 않습니다.',
    photoNote: '창업자 포트레이트 — 성남 제조소 배경, 자연광, 정면 또는 반측면 (샷리스트 6-1)',
    timelineTitle: '연혁',
    timeline: [
      { y: '2014', t: 'GANA R&D 법인 설립. 식약처 의료기기 제조업 허가 제4490호.' },
      { y: '2017', t: 'GANA Cosmetic 법인 설립.' },
      { y: '2019', t: 'Dr. Park CDMO 법인 설립.' },
      { y: '2025', t: '8월, Phase 1 바이러스 벡터 시설 준공. 설비 공급사로 Thermo Fisher Scientific 선정.' },
      { y: '2026', t: '바이러스 벡터 시설 cGMP 인증 목표.' },
    ],
  },
  makes: {
    eyebrow: '무엇을 만드는가',
    title: '피부, 조직, 세포·유전자. 각각 따로 말합니다.',
    lead: '세 회사는 인체의 세 깊이에서 일합니다. 상태는 층마다 따로 밝힙니다. 두 층은 만들어 허가받았고, 셋째 층은 지어졌으며 인증을 앞두고 있습니다.',
    layers: [
      {
        name: '피부',
        what: '히알루론산·PLLA·PCL·칼슘 필러와 PN / PDRN, 그리고 전문가용 코스메슈티컬.',
        tense: '만들었고, 허가받았습니다.',
      },
      {
        name: '조직',
        what: '병원과 장기요양기관을 위한 하이드로겔·폼 창상피복재.',
        tense: '만들었고, 등재되어 있습니다. 국내 판매 허가 포함.',
      },
      {
        name: '세포·유전자',
        what: '유전자치료제 개발사를 위한 AAV 등 바이러스 벡터, 플라스미드, 재조합 단백질.',
        tense: '2025년 시설 준공. cGMP 인증은 2026년 목표입니다.',
      },
    ],
    madeBy: '제조',
    note: '세 층을 관통하는 하나의 기술 플랫폼을 주장하지 않습니다. 같은 창업자가 같은 부지에서 세 층 각각을 제조한다는 사실만 말합니다.',
  },
  record: {
    eyebrow: '기록으로',
    title: '이름 뒤의 숫자',
    stats: [
      '운영 회사',
      '경기 성남의 제조 부지',
      'GANA R&D 명의의 유효 의료기기 허가·등재',
      '식약처 제조업 허가 보유 시작 연도',
    ],
  },
  companies: {
    eyebrow: '세 회사',
    title: '세 회사, 각자의 이름으로.',
    lead: '허가와 등재는 그것을 보유한 회사의 것입니다. 여기서는 그 회사 이름 아래 적고, 전체 내역은 각 회사 사이트에 있습니다.',
    servesLabel: '고객',
    statusLabel: '상태',
    credentialsLabel: '기록',
    items: {
      ganarnd: {
        field: '의료기기',
        tagline: '필러와 창상피복재, 직접 만들고 허가받습니다.',
        makes: '네 가지 성분 계열의 필러와 하이드로겔·폼 창상피복재를 자체 이름으로 배합·충전·허가하고, 파트너 브랜드 제품을 수탁 생산합니다.',
        serves: '클리닉, 병원, 의료기기 유통사, 브랜드 파트너.',
        status: '제조업 허가 업체. 제품을 만들고 허가받았습니다.',
        credentials: [
          '식약처 의료기기 제조업 허가 제4490호, 2014년부터',
          'GMP 적합인정 KCL-ABBA-19926, 2027년 3월 3일까지 유효',
          'EUDAMED 제조자 등록 SRN KR-MF-000037221',
          'MHRA 제조자 등록 MAN_ID 32678',
          '한국·러시아·브라질·영국 4개 관할, 유효 제품 허가·등재 33건',
        ],
        contactLabel: '의료기기·유통 문의',
      },
      ganacosmetic: {
        field: '코스메슈티컬',
        tagline: '클리닉과 전문 유통사를 위한 코스메슈티컬.',
        makes: '전문가용 스킨케어의 제품 개발, OEM / ODM 생산, 프라이빗 라벨.',
        serves: '클리닉, 에스테틱 유통사, ODM 파트너. 4개 언어로 응대합니다.',
        status: '운영 중인 브랜드이자 B2B 공급사.',
        credentials: ['제품 신고와 품질 문서는 자사 사이트에 게시'],
        contactLabel: '화장품·ODM 문의',
      },
      drparkcdmo: {
        field: '바이러스 벡터 생산',
        tagline: '바이러스 벡터, 플라스미드, 단백질. cGMP는 2026년 목표.',
        makes: '바이러스 벡터(AAV·아데노·렌티), GMP 플라스미드, 재조합 단백질과 펩타이드. 공정 개발부터 엔지니어링 배치까지.',
        serves: '유전자치료제 개발사와 바이오텍 파트너.',
        status: '2025년 8월 Phase 1 바이러스 벡터 시설 준공. 공정 개발과 엔지니어링 배치는 지금 가능합니다. cGMP 인증은 2026년 목표이며, 인증 후 임상 공급을 계약할 수 있습니다.',
        credentials: [
          '외부 투자 없이 창업자 단독 출자로 설립',
          '시설·장비 사양은 자사 사이트에 게시',
        ],
        contactLabel: '벡터·플라스미드·단백질 생산 문의',
      },
    },
  },
  site: {
    eyebrow: '한 곳의 부지',
    title: '모든 허가증에 같은 주소',
    addressK: '주소',
    addressV: '경기도 성남시 중원구 둔촌대로 555 (선일테크노피아), 우편번호 13215',
    founderK: '창업자',
    founderV: '박용호 박사. GANA R&D, GANA Cosmetic, Dr. Park CDMO 창업자',
    licenceK: '의료기기 제조업 허가',
    licenceV: 'GANA R&D, 식약처 제4490호, 2014년부터',
    facilityK: '바이러스 벡터 시설',
    facilityV: 'Dr. Park CDMO, 2025년 8월 Phase 1 준공, cGMP 인증 2026년 목표',
  },
  contact: {
    eyebrow: '문의',
    title: '그룹이 아니라 회사에 문의하세요.',
    lead: '문의는 그 제품을 만드는 회사가 답합니다. 해당하는 줄을 고르세요.',
    thCompany: '회사',
    thFor: '문의 내용',
    thChannel: '채널',
  },
  cta: {
    title: '허가번호가 필요하십니까?',
    body: 'GANA R&D는 모든 의료기기 허가·등재를 공개 조회 경로와 함께 게시합니다.',
    btn: '인허가·시장 진입',
  },
  footer: {
    note: 'Dr. Park Group은 박용호 박사가 창업한 세 회사가 함께 쓰는 이름입니다. 각 회사는 자체 허가와 등재를 보유하며, 자사 제품에 대해 책임집니다.',
    companies: '회사',
    site: '부지',
    addr1: '경기도 성남시 중원구 둔촌대로 555 (선일테크노피아)',
    addr2: '우편번호 13215, 대한민국',
    audience: '파트너, 규제기관, 전문 구매자를 위한 페이지입니다.',
  },
  notFound: {
    title: '페이지를 찾을 수 없습니다.',
    lead: '찾으시는 페이지가 없거나 옮겨졌습니다.',
    home: 'Dr. Park Group 홈',
  },
};

```

## 부록 C — 확정 사실 데이터 (`src/data/group.ts`)

언어와 무관한 사실만 담는다. 링크·채널·숫자는 이 파일 한 곳에서 관리한다.

```ts
// Dr. Park Group — 언어와 무관한 확정 사실만. 문구는 src/i18n/*.ts 에.
// 등재 건수 33 = GANA R&D 등록 데이터의 게시 건수(4개 관할).
// 규칙: 그룹 마스터 슬로건 미사용 · 층별 시제(피부·조직 완료형, 세포 진행형) · 자격은 법인별 귀속 · 생산용량 수치 미게시 ·
//       "하나의 기업집단"·지분 관계 표현 금지 · "Since 2013" 미사용 · 개인 휴대폰·개인 이메일 미게재

export const group = {
  name: 'Dr. Park Group',
  site: {
    line1: '555 Dunchon-daero, Jungwon-gu',
    line2: 'Seongnam-si, Gyeonggi-do 13215, Republic of Korea',
    building: 'Seonil Technopia',
  },
};

export type CompanyId = 'ganarnd' | 'ganacosmetic' | 'drparkcdmo';

export type Company = {
  id: CompanyId;
  name: string;
  url: string;
  contactUrl: string;
  /** 법인 대표 채널 — 개인 번호·개인 메일 금지 */
  tel?: string;
  email?: string;
};

export const companies: Company[] = [
  {
    id: 'ganarnd',
    name: 'GANA R&D',
    url: 'https://ganarnd-rebranding.vercel.app',
    contactUrl: 'https://ganarnd-rebranding.vercel.app/contact/',
    tel: '+82-31-733-0242',
  },
  {
    id: 'ganacosmetic',
    name: 'GANA Cosmetic',
    url: 'https://gana-cosmetics.com',
    contactUrl: 'https://gana-cosmetics.com',
    email: 'contact@gana-cosmetics.com',
  },
  {
    id: 'drparkcdmo',
    name: 'Dr. Park CDMO',
    url: 'https://drpark-cdmo.com',
    contactUrl: 'https://drpark-cdmo.com/pc/contact/contact01.php',
    tel: '+82-31-734-0077',
  },
];

export const byId = Object.fromEntries(companies.map((c) => [c.id, c])) as Record<CompanyId, Company>;

/** GANA R&D 등재 자료실 — CTA 링크 */
export const registrationsUrl = 'https://ganarnd-rebranding.vercel.app/market-access/';

/** 세 층 — 어느 회사가 만드는가. 문구·시제는 i18n makes.layers[i]. */
export const layers: { no: string; by: CompanyId[] }[] = [
  { no: '01', by: ['ganarnd', 'ganacosmetic'] },
  { no: '02', by: ['ganarnd'] },
  { no: '03', by: ['drparkcdmo'] },
];

/** 숫자 행 — 라벨은 i18n record.stats[i]. 카운트업은 세 자리 이하 정수에만. */
export const stats = [
  { n: '3', count: true },
  { n: '1', count: true },
  { n: '33', count: true },
  { n: '2014', count: false },
];

```
