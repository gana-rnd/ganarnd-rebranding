# ganarnd.co.kr IA 진단 — AS-IS / TO-BE (이미지 전사본)

> **원본 보존본** — 첨부 이미지(정보구조 비교 다이어그램)를 텍스트로 옮긴 것.
> 이미지는 현행 GNB의 문제를 빨간 주석으로, 제안 IA를 하단에 5-GNB 구조로 제시한다.

## AS-IS — 현행 GNB (빨간 주석 = 문제 지적)

### COMPANY (4)
- About Us
- R&D center tour
- Certification
- Factory tour

### DEVICES (48개 항목) ⚠️ `라벨 ≠ 내용 — 사실상 PRODUCTS`
- **Dermal fillers** — 9종, 성분 기준 분류
- **Cosmetics** — 30종 플랫 나열, `용도·성분·제형 혼재, GYNO 등 민감 제품 노출` (가장 심각 · 빨간 강조)
- **Clinic care** — 7종, `의료기기(PDO·PATCH)와 시술 솔루션 혼재`
- **Under R&D** — 2종
- ⚠️ 메뉴 전체 주석: `규제 등급 혼재 (기기+화장품)`

### EDUCATION (4)
- 시술법 콘텐츠 ×4 — 전부 특정 제품 사용법
- ⚠️ `제품 상세에 붙을 콘텐츠`

### GALLERY (1)
- Cosmetics — 서브가 이것뿐
- ⚠️ `고아 메뉴`

### NOTICE & DL (0)
- (서브메뉴 비어 있음)
- ⚠️ `빈 메뉴`

### CONTACT US (2)
- Contact us
- How to order & be distributor — `딜러십·견적·인증서 태스크가 전부 여기 묻힘`
- ⚠️ `B2B 핵심 태스크 매몰`

## TO-BE — 제안 IA (5개 GNB · 드롭다운은 카테고리까지만)

### COMPANY
- About · History
- R&D Center — `투어 콘텐츠 재활용`
- Factory Tour

### PRODUCTS
- **[카탈로그 허브 — 검색 + 용도 필터]** (핵심 · 파란 강조)
- Injectables & Fillers — HA · Biostimulator · PDRN/PN
- Threads & Devices — PDO · 창상 패치 · 메조 기기
- Professional Solutions — Booster · Lipolysis(문의 게이트) · Peels
- Pipeline — Under R&D
- Cosmeceuticals → gana-cosmetics.com 이관 + 301 (점선 = 외부 이관)

### PARTNERSHIP
- How to Order
- Distributorship — 지역·절차·조건
- ODM / OEM
- ✅ `독립 메뉴로 승격` (녹색 강조)

### RESOURCES
- Certification Center — 인증서 PDF 다운로드
- Academy — 시술 교육 영상·프로토콜
- Notice · Downloads

### CONTACT
- Inquiry — 유형 구분: 딜러/클리닉/ODM

## 이미지가 확정하는 설계 결정 (요약)

1. **DEVICES → PRODUCTS 리네이밍** + 규제 등급/성분 기반 재분류
2. **화장품 카탈로그는 자회사 사이트로 이관** (301 리다이렉트)
3. **PARTNERSHIP을 독립 GNB로 승격** — B2B 핵심 태스크(주문·딜러십·ODM)를 전면에
4. **RESOURCES 신설** — 인증서 다운로드 센터 + Academy(교육) + 공지/다운로드 통합
5. **GNB 드롭다운은 카테고리까지만** — 개별 SKU는 검색·필터 카탈로그 허브가 담당
6. **고아·빈 메뉴(GALLERY, NOTICE&DL) 폐지·흡수**
