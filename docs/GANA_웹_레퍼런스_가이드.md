# GANA 웹 레퍼런스 가이드

작성: 2026-08-28
목적: 4사이트(DR. PARK GROUP 게이트웨이 / GANA R&D / GANA COSMETICS / DR. PARK AAV·CDMO) 재구축 시 참고할 사이트 목록과 디자인 원칙. 소비자용 "대단한 홈페이지"가 아니라 **바이어·실사 담당자가 빠르게 검증할 수 있는 깔끔하고 신뢰 있는 B2B 사이트**가 목표.

---

## 1. 디자인 원칙 (한 줄 브리프)

> **장식 모션 0, 기능 모션만, 영상은 실제 촬영본일 때만. 배경은 단색. 증거(숫자·표·리스트) 뒤는 무조건 단색.**

### 1.1 왜 모션을 빼는가

- 신뢰를 만드는 순서(Stanford 웹 신뢰성 연구 / NN/g): ① 사실을 검증하기 쉬움 ② 실제 조직(주소·사람·연락처)이 보임 ③ 전문적으로 보임 ④ 빠르고 오류 없음. 모션은 ③에 약간 기여하고 ①④를 해침.
- 실사·구매 담당자는 사무실 PC에서 열고, 캡처하고, PDF로 돌림. **모션은 그 과정에서 전부 사라지고 정적 증거만 살아남음.**
- 대기업(삼성바이오로직스·Cosmax)의 화려함은 "자원이 있다"는 신호로 읽히지만, **중견 규모의 같은 연출은 "증거 대신 연출"(보상 행동)로 읽힘.**
- GANA의 논지가 "필러 회사가 아니라 36건 등재를 가진 제조 인프라"이므로, 첫 화면에 등재 그리드가 뜨면 제조사로, 빛나는 DNA 영상이 돌면 마케팅 회사로 보임.
- AAV 사이트는 cGMP 미취득 → 진행형 시제로 정직하게 가기로 한 곳. 여기에 연출이 붙으면 실사에서 "미취득인데 왜 포장하지"가 됨. **4사이트 중 가장 담백해야 함.**

### 1.2 모션 3분류

| 종류 | 예 | 판단 |
|---|---|---|
| 장식 모션 | 히어로 파티클, 3D 분자, 패럴랙스, 스크롤 연출, 유체·대리석 배경 | **제거** |
| 기능 모션 | 호버 상태, 아코디언, 150~250ms 페이지 전환 | **유지** — 없으면 "싸구려 템플릿"으로 읽힘 |
| 콘텐츠 모션 | 실제 설비·공정 촬영 영상 | **조건부 허용** — 진짜 촬영본이면 그 자체가 증거. 정적 대체(스틸+캡션) 필수 |

### 1.3 배경

- 추상 텍스처(대리석·유체)는 파는 물건이 없는 VC·컨설팅의 문법. 실물(공장·제품)이 있는 회사가 쓰면 "증거 대신 무드". 소비자 럭셔리(향수·하이엔드 스킨케어) 코드이기도 함.
- 텍스처를 꼭 쓰려면 **히어로 한 번, 대비 낮춰서.** 반복하면 배경이 아니라 아이덴티티가 됨.
- 단색 후보: 1P 별첨·기획서에서 이미 쓴 네이비 `0B1F3A`, 모노크롬 `111111` / `6E6E6E`, 콜아웃 `F4F6F8`.
- 대안: 설비 디테일·시린지·배양기 클로즈업 **실촬영 매크로**. 텍스처가 주던 질감을 실물이 대신하면서 증거가 됨.

---

## 2. 페이지 구성 (표준 순서)

```
1. 히어로 (다크 단색)            헤드라인 + 한 줄 + 숫자 행 (예: 36 registrations · 5 jurisdictions · 1 manufacturer)
2. 제안 카드 (히어로 위로 겹침)   좌 텍스트 / 우 비주얼
3. 증거 리스트 (화이트)           라벨-값 행
4. 제품/서비스 카드 3~4개
5. 인증·등재 그리드
6. 뉴스 (썸네일 없는 텍스트 행)
7. 그룹 3열 (+ 인증 로고)
8. CTA 밴드 ("자료 요청 / 문의")
9. 푸터 (다크)
```

### 구성 규칙

- **다크/라이트 전환은 히어로 → 본문 화이트 → 푸터.** 중간 다크 밴드는 최대 1개. 전환이 잦으면 발표 슬라이드처럼 읽힘.
- **컨테이너 폭 하나(1200~1280px)** 정하고 전 섹션 동일.
- 히어로는 헤드라인과 경쟁하는 요소(우상단 문단 등) 없이 헤드라인 + 한 줄 + 숫자 행.
- 좌 텍스트 / 우 비주얼 2열을 일관되게 반복.
- 인용은 **실명 바이어·파트너**일 때만. 익명 인용은 신뢰를 깎음.
- "숨 쉬는 섹션"(큰 이미지·인용) 연속 배치 금지 — 증거 → 제품 → 그룹 → 문의로 바로 이어져야 함.
- 히어로를 뚫고 나오는 흰 카드 패턴은 모션 없이 깊이감을 만드는 정석 — 유지.

---

## 3. 레퍼런스 사이트

### 3.1 동종 업계 — "제조 주체" 신뢰형 (가장 직접적)

**바이오 CDMO / AAV (DR. PARK AAV·CDMO)**

| 사이트 | URL | 볼 것 |
|---|---|---|
| Samsung Biologics | https://www.samsungbiologics.com | 설비·캐파 숫자를 첫 화면에서 증거로 쓰는 방식 (연출은 대기업용, 참고만) |
| Lonza | https://www.lonza.com | 서비스 분류(Modality별) 내비게이션 |
| Catalent | https://www.catalent.com | 시설 페이지 템플릿(위치·인증·규모 카드) |
| WuXi Biologics | https://www.wuxibiologics.com | 인증·규제 실적을 별도 섹션으로 뺀 구조 |
| Oxford Biomedica | https://www.oxb.com | AAV/벡터 CDMO — **AAV 사이트의 가장 가까운 모델** |
| Andelyn Biosciences | https://www.andelynbio.com | AAV 전문 CDMO, "cGMP 준비 중" 단계 표현법 |
| Charles River | https://www.criver.com | 대형 B2B의 정보 밀도 다루는 법 |

**필러·에스테틱 제조사 (GANA R&D)**

| 사이트 | URL | 볼 것 |
|---|---|---|
| Teoxane | https://www.teoxane.com | 제품 = 규제 등재 기반, 국가별 표시 처리 |
| Merz Aesthetics | https://www.merzaesthetics.com | 전문가(HCP)/일반 진입 분리 |
| Croma Pharma | https://www.croma.at | 중견 제조사, **규모 대비 가장 비슷한 톤. 장식 모션 거의 없음 — 기준선** |
| Hugel | https://www.hugel.co.kr | 국내 상장사 기준선 |
| Humedix | https://www.humedix.com | 국내 필러 제조사, "제조 depth" 전달 방식 비교 |

**코스메틱 B2B/ODM (GANA COSMETICS)**

| 사이트 | URL | 볼 것 |
|---|---|---|
| Cosmax | https://www.cosmax.com | 바이어 대상 화장품 사이트의 정석 — **정보 구조만 참고, 장식 모션은 버릴 것** |
| Kolmar Korea | https://www.kolmar.co.kr | 연구·생산 인프라 강조 |

**그룹 게이트웨이 (DR. PARK GROUP)**

| 사이트 | URL | 볼 것 |
|---|---|---|
| Merck Group | https://www.merckgroup.com | 계열사 분기형 게이트웨이 구조 |
| Novo Nordisk | https://www.novonordisk.com | 절제된 타이포·여백, 신뢰 톤 — **장식 모션 거의 없음, 기준선** |

### 3.2 업종 무관 — 깔끔한 B2B 디자인 기준

| 사이트 | URL | 볼 것 |
|---|---|---|
| Siemens Healthineers | https://www.siemens-healthineers.com | 의료 B2B의 그리드·카드 시스템 |
| Evonik | https://www.evonik.com | 화학 제조사, 제품 카탈로그 탐색 UX |
| Stripe | https://stripe.com | 문서·신뢰 페이지(보안, 컴플라이언스) 구성 |
| Linear | https://linear.app | 여백과 타이포만으로 만드는 정돈됨. **모션이 있지만 전부 기능 모션 — "잘 만들었다"로 읽히는 예** |
| Basecamp | https://basecamp.com | 텍스트 중심으로 신뢰 쌓기 — **장식 모션 없음, 기준선** |

### 3.3 갤러리 (직접 뒤질 때)

| 사이트 | URL | 사용법 |
|---|---|---|
| Landbook | https://land-book.com | **"Corporate" 필터로 B2B만** — 우선 추천 |
| Minimal Gallery | https://minimal.gallery | 미니멀 사이트만 — 우선 추천 |
| Lapa Ninja | https://www.lapa.ninja | 랜딩페이지, 카테고리 필터 |
| Siteinspire | https://www.siteinspire.com | "Corporate" + "Minimal" 태그 조합 |
| Refero | https://refero.design | 페이지 유형별(About, Contact 등) 실제 캡처 |
| Httpster | https://httpster.net | 타이포 중심 사이트 |
| Godly | https://godly.website | 최신 트렌드 확인용 — 과한 것 많음, 걸러서 |
| 디비컷 | https://www.dbcut.com | 한국 기업 사이트 다수, 국내 제작사 톤 |
| GDWEB | https://www.gdweb.co.kr | 국내 기업·기관 사이트 선정작 |

### 3.4 신뢰 설계 원칙 자료

- NN/g — B2B 웹사이트 사용성: https://www.nngroup.com/articles/b2b-usability/
- NN/g — 신뢰성과 신용 설계: https://www.nngroup.com/articles/trustworthy-design/

---

## 4. 보는 순서

1. **Croma · Oxford Biomedica · Cosmax** 세 곳 → 4사이트 각각의 톤이 거의 잡힘 (Cosmax는 구조만).
2. 기준선 확인: **Croma · Novo Nordisk · Basecamp** — 장식 모션 없이 신뢰 만드는 쪽.
3. 갤러리는 **Landbook Corporate 필터 + Minimal Gallery** 두 곳이면 충분.

---

## 5. 관련 문서

- `docs/GANA_웹프레즌스_역할.md` — 사이트별 역할 정의
- `docs/GANA_찰스_회신2_웹빌드.md` — 4사이트 구조 역제안
- `docs/GANA_웹빌드_트리.html` — 사이트 트리
- `docs/GANA_통합기획도.md` — 전체 기획 연결
