# GANA R&D i18n 설계

## 언어 (6개)
| 코드 | 언어 | 경로 |
|------|------|------|
| en | English (기본) | / (prefix 없음) |
| zh | 中文 | /zh/ |
| es | Español | /es/ |
| th | ภาษาไทย | /th/ |
| vi | Tiếng Việt | /vi/ |
| ru | Русский | /ru/ |

## 구조
- `src/i18n/ui.ts` — 언어별 UI 문자열 딕셔너리 (nav, 버튼, eyebrow, 공통 카피)
- `src/i18n/utils.ts` — `getLangFromUrl`, `useTranslations`, `getLocalizedPath`
- `src/pages/[...lang]/` 대신, 각 페이지를 `[lang]` 동적 라우팅이 아닌 **정적 경로 생성** 방식으로:
  - Astro 5의 `i18n` 라우팅 설정 사용 (manual routing)
  - `src/pages/` = 영어(기본, prefix 없음)
  - `src/pages/zh/`, `es/` … = 각 언어 디렉토리에 동일 페이지를 두고, 공통 콘텐츠는 컴포넌트/데이터에서 locale별로 렌더링
- 실제 구현은 **페이지 컴포넌트화**: 각 페이지의 콘텐츠를 컴포넌트로 추출하고, 언어 디렉토리의 페이지는 locale만 넘겨서 재사용

## 번역 범위
- 헤더/푸터/네비게이션
- 각 페이지의 헤드라인, 본문, CTA, eyebrow, 섹션 제목
- 테이블 헤더, 상태 라벨 (Supply available 등)
- 고유명사(제품명, 등록번호, 기관명)는 번역하지 않음
- jurisdictionName 등 데이터 라벨도 locale 매핑

## 언어 전환기
- 헤더 우측에 언어 드롭다운 (현재 언어 표시 + 6개 언어 목록)
- 현재 페이지 경로를 유지하며 언어 prefix만 교체
