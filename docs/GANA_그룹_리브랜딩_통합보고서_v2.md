# GANA 그룹 리브랜딩 통합 보고서 (v2.1 · 검증판)

- **작성 기준일**: 2026-07-19 (v2.1 개정: 2026-07-20 — Dr. Park CDMO 전수 분석 반영)
- **대상**: ganarnd.co.kr (모회사·앵커) / gana-cosmetics.com (자회사) / **drpark-cdmo.com (계열 CDMO — 이번 개정에서 전수 분석 + 자매사 4곳 확대)**
- **베이스 문서**: [분석보고서 원본](source/2026-07-05_리브랜딩_분석보고서.md) · [리브랜딩 브리프 원본](source/2026-07-05_리브랜딩_브리프.md) · [현행 IA 진단(이미지)](source/현행_IA_진단_AS-IS_TO-BE.md) · [Dr.Park CDMO 정밀분석](source/2026-07-20_닥터박_CDMO_분석.md)
- **이번 개정의 성격**: 최초 분석(2026-07-05)을 **두 사이트 라이브 소스 + 외부 1차 출처로 재검증**하고, 정정·신규 발견·심화 개선안·홈페이지 재구성안을 하나로 통합함. **v2.1에서 Dr. Park CDMO를 전수 분석해 리뉴얼 대상에 정식 포함하고, 그룹 구조를 '3사 → 박용호 성좌'로 갱신함.**

---

## 0. 이번 개정에서 달라진 점 (검증 요약)

재조사는 세 갈래로 진행했다 — ① ganarnd.co.kr 라이브 HTML(HTTP), ② gana-cosmetics.com 배포 JS 번들·sitemap, ③ 외부 1차 출처(Thermo Fisher 보도자료, 정부 통계, 경쟁사 사이트, 딜러 마켓). 최초 보고서의 **핵심 진단은 전부 사실로 확인**됐고, 다음이 **정정·보강**됐다.

| # | 항목 | 최초 보고서 | 검증 결과 |
|---|------|-------------|-----------|
| 1 | Dr. Park × Thermo Fisher | "파트너십" | **사실이나 '장비 구매 계약'** — TF를 공급사로 선정. 투자·JV·품질검증 아님. 정직한 프레이밍 필요 |
| 2 | 제품 수(코스메틱) | ~40 SKU | **실제 32종 / 6카테고리** |
| 3 | GANA R&D 우편번호 | 13215 | 사이트엔 **구코드 462-120만** 표기. 현행 코드 별도 확인 필요 |
| 4 | 연락 채널 | WhatsApp/LINE/WeChat | **WhatsApp 전용**. LINE·WeChat 없음 |
| 5 | PDRN 제품 "GANA PN/PNS" | 필러 라인 강조 | 딜러 시장에 **PLLA/HA 필러 위주**. "GANA PN" 브랜드 SKU는 외부 미확인 |
| 6 | 인증 스택 | 보유 사실처럼 서술 | 조합은 타당하나 **독립 레지스트리 미확인 = 자사 주장** 단계 |
| 7 | 개인 이메일 노출 | 모회사만 지적 | **두 사이트 모두** `dydgh416@naver.com` 노출(코스메틱은 JS 번들에 박힘) |
| 8 | 그룹 로고 공백 | GANA R&D만 | **GANA R&D + Dr.PARK 둘 다** 로고 이미지 공백 |

그리고 **가장 방어 가능한 새 사실**: Dr. Park CDMO·GANA R&D·GANA Cosmetic은 **동일 창업자(Yong-Ho Park·박용호)와 동일 주소(555 Dunchon-daero, Sunil Technopia)**로 1차 출처에서 연결된다. 이것이 "GANA Group" 서사의 진짜 뼈대다.

> **⚡ v2.1 최대 발견 (Dr.Park 전수 분석)**: drpark-cdmo.com이 직접 링크하는 자매사는 **3사가 아니라 5개 법인**이다 — Dr.Park CDMO(제조) + GANA R&D(의료기기) + **NeuroDP Therapeutics(파킨슨 AAV 유전자치료 신약개발·Delaware)** + **Dr.Park Pharmaceutical(drpgt.com)** + **KoraVie UK(글로벌 상업화·London/Bangkok/NY/Paris)**. 공통 허브는 박용호. 즉 "Three companies, one mission"은 **실체보다 축소된 그림**이고, 진짜 서사는 **제조–신약개발–글로벌 상업화 3층 성좌**다. 특히 **KoraVie Shield(UK MDR Class 2a 창상피복재)는 GANA PATCH와 동일 계열** → "GANA가 만들고 KoraVie가 글로벌에 판다"는 실증 체인. 상세는 [Dr.Park 정밀분석](source/2026-07-20_닥터박_CDMO_분석.md).

> **신뢰도 표기 규칙**: 본문에서 (확인)=1차 출처 검증, (자사주장)=회사/딜러 문구만 존재, (미확인)=이번 조사로 확인 못함.

---

## 1. Executive Summary (TL;DR)

1. **gana-cosmetics.com은 리브랜딩이 아니라 '리파인' 대상이다(등급 A−).** 완성도 높은 "클리니컬 럭셔리" 시스템을 이미 갖췄고, 그룹 전체의 **디자인·서사 기준점(앵커)**으로 삼아야 한다. 다만 SEO(SPA 미색인)·Rejuran 비교 문구·FDA 클레임 범위·개인 이메일 노출은 실질 리스크다.

2. **ganarnd.co.kr은 전면 재구축 대상이다(등급 D).** 2013년 쇼핑몰 빌더 템플릿, **HTTPS 붕괴(자체서명 100년 인증서 + 406)**, 모바일 미대응, 메타·OG 전부 "GANA RND", IA 붕괴, 오타 다수 — 브랜드 자산이 아니라 신뢰를 깎는 부채다. 단 **R&D 센터·공장 투어·인증 콘텐츠**는 재활용 가치가 높다.

3. **현 상태는 '자회사 > 모회사' 브랜드 역전**이다. 게다가 실제 제품 노출은 **딜러 사이트가 대신**하고 있다(코스메틱 본사 사이트는 자기 브랜드명으로 구글에 안 뜸). 리브랜딩의 실질 목표는 **제조사 공식 채널이 검색·신뢰의 최상단을 되찾는 것**이다.

4. **경쟁 벤치마크가 방향을 확증한다.** PharmaResearch(Rejuran)는 코퍼릿(KOSDAQ 상장·IR)과 제품 브랜드를 깔끔히 분리했다. GANA는 정반대다. **투자자·파트너가 신뢰할 코퍼릿 아이덴티티**를 세우는 것이 핵심.

5. **(v2.1) drpark-cdmo.com도 리뉴얼 대상에 정식 포함(등급 C).** 2022년 PHP 정적사이트로 GANA R&D(2013)보다는 낫지만 단일 언어·공지형 시설페이지·빈 oligo·사이트 내부 수치 불일치로 **"World largest AAV CDMO" 위상엔 미달**. 결정적으로 그룹 구조가 **"3사"가 아니라 박용호 중심 성좌(제조 CDMO + NeuroDP·drpgt 신약개발 + KoraVie 글로벌 상업화)**로 확인됐다. Dr.Park 리뉴얼은 이 성좌 서사를 담되 GANA Group 축과 링크·톤 분리.

6. **실행 순서**: (P0) 모회사 응급처치 → (P1) 그룹 브랜드 정의 + 팩트시트 단일화 + 모회사 사이트 재구축(이미지 TO-BE IA) → (P2) 코스메틱 리파인·상호링크 → (P3) **Dr.Park CDMO 코퍼릿/IR 리뉴얼** → 확산(딜러 키트). 6개국어(EN·中·ES·ไทย·Tiếng Việt·Русский)와 로고 정책(R&D 불변 / Cosmetic·Dr.Park 가변)은 확정 제약으로 반영.

---

## 2. 그룹 실체와 브랜드 서사 (검증된 코어)

### 2-1. "GANA Group" 서사는 1차 출처로 방어 가능하다

- **동일 창업자**: Yong-Ho Park(박용호)이 Thermo Fisher 보도자료에 **Dr. Park CEO**로 인용되고, drpark-cdmo.com 창업자이며, TradeWheel·도메인 등록의 **GANA R&D 컨택**이다. (확인)
- **동일 주소**: 세 회사 모두 **555 Dunchon-daero, Jungwon-gu, Seongnam-si(Sunil Technopia)**. GANA R&D·Cosmetic이 같은 건물 8·9·10F. (확인)
- 코스메틱 사이트가 이미 선언한 **"Three companies, one mission"**(코스메슈티컬·의료기기·유전자치료)은 실체와 부합한다. (확인)

### 2-2. Dr. Park CDMO — 신뢰의 정점, 단 '정직하게' 써야 한다 (v2.1 전수 분석 반영)

- 포지셔닝(사이트 원문): **"World largest AAV vector CDMO"**, "Since 2013", 독립 창업("without external investments"), 미션 "revolutionize accessibility and efficiency of Cell and Gene Therapy". (자사주장)
- **Thermo Fisher 건은 사실이다.** TF/BioSpace 보도자료(2025-09)로 확인. AAV 바이러스 벡터, **배치 5,000L→10,000L**, 연 최대 40배치, Phase 1 시설, 장비(SUB·Nunc Cell Factory·DynaSpin). (확인)
- ⚠️ **관계 성격은 "장비 구매/도입"이다.** "Dr. Park가 시설을 갖추기 위해 Thermo Fisher를 **선정**"한 것으로, 투자·합작·TF의 품질 보증이 아니다. → 카피는 **"글로벌 표준 바이오프로세싱 장비로 구축한 cGMP 시설"** 수준으로. '파트너십/인증'으로 오도하면 실사에서 역효과.
- **서비스 5종(전수 확인)**: Virus(AAV/Adeno/Lenti, HEK293·CHO serum-free, 5~250L SUB, GMP/non-GMP, COA 제공) · GMP Plasmid(BTR 700L×2 발효, cytiva AKTA flux/pilot, 리드 12–14주) · Protein(E.coli 5~100L·mammalian 250L SUB) · Peptide(2–100aa, HPLC/MALDI, 100% MS QC) · Oligo(빈약). 시설: 1900L fermentor(4kg plasmid/yr), AAV harvest에 **Thermo Fisher DynaSpin**, 500L SUB media prep 등.
- 🔴 **숫자 불일치(거버넌스 리스크 · 이제 사이트 내부에서도 확인)**: 배치 용량이 **메인 5,000L vs about 6,000L**로 같은 사이트 안에서 갈리고, 연 배치 수(**26 vs 40**), 플라스미드(**3.9 vs 4kg/yr**), Phase1 준공(**2025-03 vs 2025-08**), cGMP(**2025년말 vs 2026**), Dr.Park QC 층수(**7F vs 9F**)가 소스마다 다르다. → **그룹 공통 팩트시트 단일화는 리브랜딩의 선결 과제.**
- ⚠️ **자사주장 과대표현 주의**: KoraVie의 "200,000L 시설"·"3주 70억 도즈"·"+400% 성장", CDMO의 "World largest"는 강한 자사주장(미확인). 리뉴얼 카피는 **검증 가능한 시설 스펙(장비 모델·SUB 용량·COA)** 중심으로.

### 2-2b. 박용호 성좌 — 그룹 구조 재정의 (v2.1 신규)

drpark-cdmo.com이 링크하는 자매사로 그룹 실체가 **3층 성좌**로 확장 확인:

```
                        Dr. Yongho Park (박용호 · 공통 허브)
        ┌───────────────────────┼────────────────────────────┐
   [제조 엔진]              [신약개발]                    [글로벌 상업화]
  Dr.Park CDMO          NeuroDP Therapeutics            KoraVie UK
  AAV/플라스미드/단백질    파킨슨 AAV 유전자치료(Delaware)    아시아 의료기술 상용화
  (drpark-cdmo.com)     NDP-101/102 (ndpgt.com)         London·Bangkok·NY·Paris
        │               Dr.Park Pharmaceutical           KoraVie Shield=GANA PATCH 계열
        │               (drpgt.com)                      (UK MDR Class 2a)
   ┌────┴─────┐
 GANA R&D   GANA Cosmetic        ← 국내 의료기기·화장품 축
```

- **NeuroDP Therapeutics**(Delaware): 파킨슨 등 신경퇴행 AAV 유전자치료 신약개발. 파이프라인 NDP-101(시냅스 퇴화 억제)·NDP-102(리소좀 회복). **DrPark CDMO가 AAV 제조 담당**으로 명시.
- **KoraVie UK**: 아시아 의료기술 글로벌 상업화. **KoraVie Shield = GANA PATCH와 동일 바이오셀룰로스 창상피복재(UK MDR Class 2a)**, AAV 200,000L·HEURON AI 진단 제휴. 리더십에 **Dr. Yongho Park** 등재.
- **함의**: Dr. Park은 "GANA의 CDMO 자회사"가 아니라 **별도 유전자치료 사업군의 제조 엔진**. 리브랜딩은 이 확장된 실체(제조–개발–상업화)를 반영하되, GANA Group 축(국내 의료기기·화장품)과 성좌를 **명확히 링크하되 톤은 분리**(§8-5)해야 한다.

### 2-3. 저활용 자산 — R&D 스코프가 '필러 제조사'를 크게 상회

ganarnd.co.kr의 R&D 센터 투어에는 유전자·세포치료급 장비가 실재한다(확인): Thermo Fisher 바이오리액터·Sanger 시퀀서, Beckman Coulter 셀소터·Biomek, Leica 조직처리기, AKTA FPLC, GC-MS, NMR, confocal/SEM, CAR-T 장비(CTS Rotea 등), 생물정보 서버(40CPU/256GB/200TB). **"필러 회사"로만 보이는 현 브랜딩이 이 자산을 낭비**하고 있다 — 리브랜딩의 강력한 차별화 소재.

---

## 3. gana-cosmetics.com 정밀 재평가 — 등급 A−(리파인)

### 3-1. 강점 (확인)
- **포지셔닝 일관성**: "Clinical Beauty, Refined by Science" / "Cosmeceutical Solutions for Professionals". B2C 잡음 없음.
- **디자인 시스템 실재**: 잉크 #16222C + 골드 #A8905A + 오프화이트 #F5F8FA, Cormorant Garamond/DM Sans/DM Mono(+Playfair Display). 코드 안에만 있는 암묵적 시스템 → **그룹 표준으로 성문화 대상**.
- **B2B 퍼널**: 문의 4유형(Distributor/Clinic/ODM/General), 48h 응답, WhatsApp, contact@ 도메인 이메일.
- **규제 신뢰 전면화**: 히어로 배지 FDA Registered·EU CPNP·GMP + 하단 ISO 22716/13485·INCI 전성분 공개·IAS Accredited.
- **다국어**: EN/中文/ไทย/Tiếng Việt 실 UI 4종(시술 프로토콜까지 현지화).

### 3-2. 약점·수정 포인트 (검증 반영)
| 우선순위 | 이슈 | 근거 | 조치 |
|---|---|---|---|
| 높음 | **SPA 미색인** | 자기 브랜드/제품명으로 구글에 안 뜨고 딜러·유사명 브랜드만 노출(확인). 초기 HTML은 빈 #root | SSR/프리렌더, 제품별 정적 메타 |
| 높음 | **Rejuran 직접 비교** | GANA PNV+ "PDRN 2% — direct clinical alternative to **Rejuran**" + "vs Rejuran" 배지, 4개국어 현지화(확인) | 성분 기반 표현("2% PDRN skin booster")으로 교체. 상표·비교광고(표시광고법·EU) 리스크 제거 |
| 높음 | **개인 이메일 노출** | JS 번들에 `dydgh416@naver.com` 박힘(확인) | 즉시 제거·도메인 이메일로 교체(두 사이트 공통 P0) |
| 중간 | **FDA 클레임 범위 갭** | 실체는 단일 제품(GANA TOX) 화장품 신고인데 전사 "FDA Registered" 배지(확인, 등록번호 1007236) | 배지 옆 각주로 범위 명시, 파트너용 "등록≠승인" 표현 가이드 |
| 중간 | **공격적 효능 클레임** | GANA AM "TA-65-class telomerase", Carnosine "reduces telomere shortening", NMN, Exosome(확인) | 시장별 클레임 필터링, 화장품/의약품 경계 문구 정비 |
| 중간 | **그룹 신뢰 체인 단절** | 그룹 카드에서 GANA R&D·Dr.PARK 로고 둘 다 empty, R&D 링크가 2013년 사이트로 연결(확인) | 로고 채우기 + 모회사 신규 사이트와 상호링크 |
| 중간 | **표기 혼용** | GANA Cosmetics/Cosmetic/Co.,Ltd. 혼재(확인) | 단복수 통일 |
| 낮음 | 폼 백엔드 | Google Apps Script 웹훅(확인) | 폼 서비스/CRM 연동 |
| 낮음 | 민감 카테고리 | GANA GYNO(인티밋)·DA/V LINE(지방분해)(확인) | 국가별 카탈로그 노출 제어 |

> 결론: **리브랜딩 불필요, 리파인만.** 단 모회사 리브랜딩 완료 시 이 사이트의 시스템이 곧 그룹 표준이 되므로, **폰트·컬러·로고 락업을 브랜드 가이드로 먼저 성문화**해 두는 것이 순서상 유리.

---

## 4. ganarnd.co.kr 정밀 재평가 — 등급 D(전면 재구축)

### 4-1. 기술·인프라 (전부 확인)
| 문제 | 검증된 상세 |
|---|---|
| **HTTPS 붕괴** | 자체서명 placeholder 인증서(O=My Company Ltd/GB, 유효 2017→**2117** 100년), `-k` 강제 시 **406 Not Acceptable**. 사실상 HTTP 전용 |
| **2013 빌더** | SiteCook, 테마 "business08", **jQuery 1.8.3(2012)**, "Copyright © 2013", 게다가 **쇼핑몰 테마 유용**(PLUGIN_shop_core, `price_unit '원'`)인데 장바구니 없음 |
| **모바일 미대응** | `body.PC{min-width:1200px}` 고정 PC. 반응형 아님 |
| **메타·OG 방치** | title/description/keywords 전부 "GANA RND". OG 전부 깨짐(og:image 호스트 `business08.sitecooktemplate` = TLD 없음). **favicon 404** |
| **개인 이메일** | dydgh416@naver.com 유일 이메일 |
| **분석툴** | GTM(GTM-MP3KW43)만. nginx+PHP |

### 4-2. 정보구조(IA) 붕괴 (확인) — 상세 재분류는 §7-4
- **"DEVICES" 라벨-내용 불일치**: 48개 항목 중 대다수가 화장품·시술 솔루션. 사실상 PRODUCTS.
- **규제 등급 혼재**: 의료기기(필러·PDO·PATCH)+전문가 시술 솔루션+일반 화장품이 한 트리에.
- **민감 제품 GNB 직노출**: "GANA GYNO (Vaginal whitening with vegetable estrogen)" 그대로. + GANA EYE/EYE BOOSTER/DA(lipolysis)/TOX/V line 등 미검증 효능 클레임.
- **고아·빈 메뉴**: GALLERY(서브 1개)·NOTICE&DOWNLOAD(빈 서브).
- **바이어 태스크 매몰**: 인증 확인·견적/MOQ·딜러십이 "How to order" 한 페이지에.

### 4-3. 표기·품질 (확인, 추가 오타 다수)
- 주소 romanization 2종 혼재: 푸터 "103, Sunil technopia, 555, **doonngchon daero** Jungwongu, **Seong nam si, Gyoung gi do**" vs 주문페이지 "555, Dunchon-daero, Jungwon-gu, Seongnam-si, Gyeonggi-do".
- 오타: "Keratois pilaris"(→Keratosis), "Dr park's TELO", "Whatsup", "improval", "fedx", "Moisteure analyzer", "bio rector", "mahcine".
- 사명 혼용: 메타/푸터 "GANA RND" vs 로고/카피 "GANA R&D".
- 전화 불일치(031-732/733-0242), Fax가 서울 02 지역번호.
- 제품 이미지 상당수가 **카카오톡 폰 스크린샷**(KakaoTalk_YYYYMMDD…jpg).

> **재활용 자산(확인)**: R&D 센터 투어(장비 수십 종)·공장 투어(자동 바이알 충전 라인 20,000/hr, 동결건조실 등)·인증 스캔. 리뉴얼 시 신뢰 스토리로 승격.

---

## 5. 두 사이트 교차 이슈

1. **개인 이메일 이중 노출** — `dydgh416@naver.com`이 모회사 푸터 + 코스메틱 JS 번들 양쪽에. → 그룹 공통 P0.
2. **딜러가 브랜드의 얼굴** — 코스메틱 본사는 자기 제품명으로 구글 미노출, 대신 gangnamstyleshop·mylipfiller(루마니아 Georock, 무권한 20종)·TradeWheel 등이 상단. 제조사가 검색·신뢰를 딜러에게 내준 상태.
3. **제품 라인 실체 vs 서사 갭** — 딜러 시장에선 PLLA/HA 필러·메조 위주. "GANA PN/PDRN 스킨부스터"는 브랜드 SKU로는 미확인 → 카피에서 PDRN 서사 비중을 실측에 맞게.
4. **숫자 거버넌스** — Dr.Park 3종 수치 불일치(§2-2). 그룹 팩트시트 단일화.
5. **인증 증빙 격차** — 두 사이트 모두 인증을 '주장'하나 **다운로드 가능한 원본 증빙**이 없음(코스메틱은 배지 이미지, 모회사는 스캔 나열). → 인증서 센터로 실물 PDF/레지스트리 링크 제공.

---

## 6. 리브랜딩 전략

### 6-1. 브랜드 아키텍처 — 코스메틱 서사를 '역수입'
```
                GANA Group (마스터 브랜드)
          "Three companies, one mission"
   ┌──────────────┼──────────────────┐
 GANA R&D        GANA Cosmetic       Dr. PARK
 의료기기·필러     코스메슈티컬          유전자·세포치료 CDMO
 (모회사·앵커)    (수출 B2B)           (그룹 신뢰 정점)
```
- **Branded House**: 제품이 전부 "GANA ○○" → 사실상 이미 마스터브랜드. 그룹 로고·워드마크 락업 규정만 정리.
- **사명 표기 통일**: "GANA RND" 폐기 → **GANA R&D**.
- **도메인**: ganarnd.co.kr 유지 + 글로벌 .com(gana-rnd.com 또는 ganagroup.com) 신설, 코스메틱·Dr.Park와 크로스링크로 신뢰 체인 완성.

### 6-2. 비주얼 아이덴티티 (로고 정책 반영)
- **로고 정책(사용자 확정)**: **GANA R&D 로고 = 불변(건들지 않음)** / **GANA Cosmetic·Dr.Park 로고 = 수정 가능**.
  - 마침 코스메틱 그룹 섹션에서 GANA R&D·Dr.Park 로고가 **둘 다 공백** → Dr.Park는 신규 제작 여지가 넓고, GANA R&D는 **저해상 GIF(206×31)를 형태·색(네이비 #1E2188) 그대로 SVG로 재현**(확대/레티나 대응만, 디자인 변경 없음).
- **공통 디자인 언어**: 코스메틱 시스템(잉크+골드+세리프/산세리프)을 그룹 골격으로. 계열사는 **액센트만 변주** — R&D=딥 잉크+블루/실버, Cosmetic=골드(현행), Dr.Park=딥 그린. GANA R&D는 로고 불변 제약상 **주변 UI만** 그룹 톤 적용.
- 히어로 DNA 스톡 폐기 → 실제 공장·연구·제품 실사. 카카오톡 스크린샷 제품컷 재촬영.

### 6-3. 6개국어 전략 (확정 요구)
- 지원: **EN(기본) · 中文 · Español · ไทย · Tiếng Việt · Русский**. 코스메틱 4종(EN/中/泰/越)에서 **ES·RU 신규 추가**.
- 시장 근거(확인): 중국·베트남·태국은 K-필러/화장품 핵심 수출시장(2024 화장품 수출 $10.2B, 중국 $2.49B·베트남 $530M; 필러 수출 $270M+ 주력 미·중·베·태·유럽). ES=스페인/중남미(ANVISA 브라질과 인접), RU=러시아(GANA HA의 Russia FDA 근거).
- 구현: 언어별 경로(`/en /zh /es /th /vi /ru`) + hreflang + 언어별 sitemap. SPA는 SSR/프리렌더로 언어별 정적 메타 확보. 미번역은 EN 폴백 + "번역중" 배지, 인증 PDF는 언어 공통.

---

## 7. 홈페이지 재구성안 (이미지 TO-BE IA 기반)

> 대상은 **모회사 ganarnd.co.kr 전면 재구축**. 이미지의 5-GNB TO-BE 구조가 골격.

### 7-1. 글로벌 헤더/푸터
```
┌───────────────────────────────────────────────────────────────────────┐
│ [🌐 EN ▾]  +82 10-8864-7512   ✉ info@ganarnd.co.kr        (유틸리티 바) │
├───────────────────────────────────────────────────────────────────────┤
│ [GANA R&D 워드마크·불변]  COMPANY PRODUCTS PARTNERSHIP RESOURCES CONTACT │
│                                              [ Become a Distributor ▸ ] │
└───────────────────────────────────────────────────────────────────────┘
```
- GNB 5개 = 이미지 그대로. **드롭다운은 카테고리까지만**(개별 SKU 금지).
- 상시 CTA "Become a Distributor"(B2B 핵심 전환).
- 푸터: 3사 블록+크로스링크 / 정정 주소·도메인 이메일 / 연락 채널 / 인증 배지 스트립.

### 7-2. 홈(랜딩) 섹션 — 단일 스크롤
| # | 섹션 | 핵심 |
|---|------|------|
| 1 | **Hero** | 헤드라인 + 규제 배지 라인(CE·MFDS·ISO 13485·ISO 22716·FDA reg·ANVISA) + CTA 2개(Distributor 문의 / Catalog) |
| 2 | **Group bar** | "Three companies, one mission", 3사 로고·링크 |
| 3 | **Product platforms** | 4트랙(Injectables & Fillers / Threads & Devices / Professional Solutions / Pipeline) — 성분 플랫폼 축 |
| 4 | **Why GANA** | 자사 GMP 공장(자동 충전 라인)·R&D 4대 분야·장비 스코프 |
| 5 | **Proof/Trust** | R&D 센터 투어 + 공장 투어(재활용) + 인증서 센터 티저 |
| 6 | **Dr. Park CDMO** | cGMP 바이러스 벡터 시설(글로벌 표준 장비로 구축) — 정직 프레이밍 |
| 7 | **Partnership CTA** | How to Order / Distributorship / ODM·OEM 3카드 |
| 8 | **Inquiry** | 유형 구분 폼(딜러/클리닉/ODM/일반), 48h, WhatsApp |

히어로 와이어프레임:
```
┌───────────────────────────────────────────────────────────────┐
│  MEDICAL AESTHETICS · GMP MANUFACTURER                          │
│  Clinical-grade aesthetics, engineered by GANA R&D.             │
│  HA · Biostimulator · PDRN · Peptide · Thread — one manufacturer│
│  [ Become a Distributor ▸ ]   [ Download Catalog ]              │
│  ─ CE ─ MFDS ─ ISO 13485 ─ ISO 22716 ─ FDA Registered ─ ANVISA ─│
└───────────────────────────────────────────────────────────────┘
```

### 7-3. 페이지 인벤토리 (GNB → 하위)
- **COMPANY**: About·History(연혁·경영진·품질철학, 신규) / R&D Center(투어 재활용) / Factory Tour
- **PRODUCTS**: **카탈로그 허브(검색+용도 필터)** / Injectables & Fillers(HA·Biostimulator PLLA·PCL·CaHA·PDRN/PN) / Threads & Devices(PDO·창상 패치·메조 기기) / Professional Solutions(Skin Booster·Lipolysis[문의 게이트]·Peels) / Pipeline(Under R&D) / **Cosmeceuticals → gana-cosmetics.com 이관+301**
- **PARTNERSHIP**(독립 승격): How to Order / Distributorship(지역·절차·조건) / ODM·OEM
- **RESOURCES**(신설): **Certification Center(PDF 증빙)** / Academy(교육 영상·프로토콜) / Notice·Downloads
- **CONTACT**: Inquiry(유형 구분) / 본사 위치·채널

### 7-4. 현행 → 신규 IA 매핑 & 운용 규칙
- 매핑 상세는 [원본 §6-4](source/2026-07-05_리브랜딩_분석보고서.md) 표 준용. 요지: 화장품 30여 종은 코스메틱 사이트로 **301 이관**, 필러/시술기기는 성분 플랫폼으로 재분류, EDUCATION은 제품 상세 "How to use" + Academy로, GALLERY 폐지, PARTNERSHIP 승격.
- 운용 규칙: ①드롭다운=카테고리까지 ②약어엔 한줄 설명 병기("GANA PN — PDRN Skin Booster") ③민감·전문가 전용은 GNB 미노출+문의 게이트 ④**표기 정규화 시트 선행**(전 SKU 공식 영문 표기 확정 후 사이트·카탈로그·인증서 일치).

---

## 8. 심화 브레인스토밍 — 신규 개선 아이디어

1. **"성분 플랫폼 회사"로 리포지셔닝.** GANA의 실제 경쟁력은 HA·PLLA·PCL·PDRN·Peptide를 **자사 GMP로 직접 만드는 제조 플랫폼**이라는 점. "필러 브랜드"가 아니라 "코스메슈티컬 원료·완제 플랫폼"으로 서면 딜러·ODM·투자자 모두에게 통한다. R&D 장비 스코프가 이 서사를 뒷받침.

2. **Trust Center를 독립 허브로.** 인증서 PDF + 레지스트리 링크(CE 노티파이드바디 DB, ANVISA 포털, MFDS 의료기기 DB, FDA 코스메틱 리스팅) + COA/INCI 다운로드를 한 곳에. 현재 최대 약점(주장만 있고 증빙 없음)을 강점으로 전환. 딜러 실사·수입 등록에 바로 쓰는 자산.

3. **딜러 통제 전략(브랜드 되찾기).** 무권한 재판매(예: 루마니아 Georock의 20종)로 흩어진 브랜드를 **공인 딜러 디렉토리 + 정품 인증 + 통일 자산 키트(로고·이미지·표현 가이드)**로 수렴. "Authorized Distributor" 배지 프로그램.

4. **팩트시트 단일화(원소스).** 3사가 배치 용량·완공일·인증 목표를 서로 다르게 말하는 문제를 **그룹 공통 데이터 시트 1벌**로 통일하고, 각 사이트가 이를 참조. 실사 신뢰도의 기본기.

5. **Dr.Park CDMO를 그룹 IR 자산으로 명시적 분리.** 미용·화장품 톤과 섞이면 오히려 신뢰가 깎인다. CDMO는 **전용 코퍼릿/IR 톤**(PharmaResearch 모델)으로 분리하되 그룹 앵커로 링크. Thermo Fisher 건은 "장비 계약" 사실 그대로.

6. **표기·네이밍 거버넌스.** PN/PNS/PNV/PH/PHA 등 한 글자 차이 약어에 항상 설명 병기 + 공식 표기 시트. 오타(Keratosis 등) 일괄 교정. 사명 "GANA R&D"로 락.

7. **콘텐츠 재활용 파이프라인.** 공장 자동 충전 라인(20,000 vials/hr)·R&D 장비·동결건조실 실사를 **"How it's made" 스토리**로. DNA 스톡·폰 스크린샷 대체 + 제품 370컷 리터칭.

8. **측정·리드 인프라.** GTM만 있는 현 상태에서 → 유형별 폼 → CRM 연동, 언어·시장별 UTM, 딜러 문의 SLA(48h) 대시보드.

---

## 9. 리스크 & 컴플라이언스 체크리스트

- [ ] **Rejuran 등 타사 상표 비교 문구 제거**(코스메틱 PNV+) — 표시광고법·EU 비교광고 리스크.
- [ ] **"FDA Registered" 범위 각주** — 단일 제품(GANA TOX) 신고를 전사 배지로 오도 금지. "등록≠승인" 파트너 가이드.
- [ ] **효능 클레임 정비** — telomerase/NMN/exosome 등 의약품급 표현의 시장별 필터.
- [ ] **민감 카테고리 노출 제어** — 인티밋·지방분해 국가별 카탈로그.
- [ ] **개인 이메일 제거**(두 사이트) → 도메인 이메일.
- [ ] **인증 실물 증빙 확보** — 자사 주장 스택을 레지스트리·PDF로.
- [ ] **그룹 수치 단일화** — CDMO 배치(5000/6000L)·연배치(26/40)·플라스미드(3.9/4kg)·완공(3월/8월)·cGMP(2025말/2026) 팩트시트 1벌로.
- [ ] **HTTPS 정상화**(모회사) — 유효 인증서.
- [ ] **자사주장 과대표현 정비**(Dr.Park/KoraVie) — "World largest"·"200,000L"·"70억 도즈"·"+400%"는 근거 확보 전 완화.

---

## 10. 실행 로드맵

| 단계 | 기간(안) | 내용 |
|------|----------|------|
| **0. 응급처치** | 1주 | ganarnd.co.kr 정상 SSL(Let's Encrypt) · OG/메타/파비콘 · **개인 이메일 두 사이트 제거→도메인 이메일** · 주소·제품명 오타 |
| **1. 브랜드 정의** | 2~4주 | 그룹 아키텍처 확정 · 사명 "GANA R&D" 통일 · 브랜드 가이드(코스메틱 시스템 성문화+확장) · 로고 정책(R&D 불변/Cosmetic·Dr.Park 신규) · **그룹 팩트시트 단일화** · 표기 정규화 시트 |
| **2. 모회사 사이트** | 4~8주 | 이미지 TO-BE 5-GNB로 재구축 · 화장품 301 이관 · **Certification/Trust Center** · 반응형 · **6개국어** |
| **3. 코스메틱 리파인** | 병행 2~3주 | SSR/프리렌더(색인) · Rejuran 문구·FDA 각주 · 그룹 상호링크 · ES·RU 확장 검토 |
| **4. Dr.Park CDMO 리뉴얼** | 3~5주 | 코퍼릿/IR 톤 사이트 재구축(그룹 디자인 적용) · **성좌 서사(제조–NeuroDP·drpgt 개발–KoraVie 상업화)** · 검증 가능 시설 스펙 중심 카피 · oligo 등 빈 페이지 보강 · 6개국어 · 성좌 크로스링크 |
| **5. 확산** | 이후 | 공인 딜러 프로그램·자산 키트 · Academy · KoraVie Shield↔GANA PATCH 글로벌 상업화 스토리 |

---

## 부록 A. 출처

- **1차(라이브 소스)**: ganarnd.co.kr(HTTP 원문·GNB·인증/투어 페이지·gana_logo.gif) / gana-cosmetics.com(배포 JS 번들·CSS·robots.txt·sitemap.xml) / **drpark-cdmo.com(main·about·virus·gmp·protein·peptide·facility·contact 전수)** / **ndpgt.com·drpgt.com·koravie.info(자매사)**
- **외부 1차**: Thermo Fisher 보도자료(Business Wire 2025-09-24, ID 20250923771397; BioSpace·Technology Networks·medpath 재유통) / Korea.net 2024 화장품 수출 통계 / 관세청 더멀필러 수출 / FDA MoCRA(등록≠승인) / PharmaResearch·VAIM 사이트 / CPHI Online(Dr.Park 등록) / 딜러 마켓(gangnamstyleshop·mylipfiller·TradeWheel 등)
- **원본 문서**: [분석보고서](source/2026-07-05_리브랜딩_분석보고서.md) · [브리프](source/2026-07-05_리브랜딩_브리프.md) · [IA 진단](source/현행_IA_진단_AS-IS_TO-BE.md) · [Dr.Park 정밀분석](source/2026-07-20_닥터박_CDMO_분석.md)

## 부록 B. 확인 필요(오픈 아이템)
- GANA R&D 현행 5자리 우편번호(사이트엔 구코드 462-120만).
- 대표 실명(사이트엔 "Dr. Park" — 외부 "Yong-Ho Park"; LinkedIn "Yong H. Park, M.D."[MedGene] 동일인 여부).
- 인증 스택 레지스트리 실물 대조(CE/ANVISA/ISO/FDA 리스팅).
- 코스메틱 실 SKU 수(제품 32 확정, 팩사이즈 변형 별도 여부).
- **(v2.1) Dr.Park 배치 용량(5,000 vs 6,000L)·연 배치(26 vs 40)·Phase1 준공일·cGMP 상태·QC 층수(7F/9F).**
- **(v2.1) Dr.Park Pharmaceutical(drpgt.com) 실체·파이프라인 / KoraVie "200,000L"·"70억 도즈" 근거.**
