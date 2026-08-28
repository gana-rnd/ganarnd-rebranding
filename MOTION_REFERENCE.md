# samsungcnt.com 모션 분석 결과 (레퍼런스)

## 관찰된 핵심 모션 패턴

1. **스크롤 트리거 리빌 (`__motion` + `__animated`)**
   - 52개 요소가 `__motion1/2/3` 클래스로 초기 상태: `opacity: 0; transform: translateX(-60px)` (또는 translateY)
   - 스크롤로 뷰포트 진입 시 `__animated` 클래스 추가 → `opacity: 1; transform: none`
   - 이징: `cubic-bezier(0.23, 1, 0.32, 1)` (expo-out 계열, 매우 부드러운 감속)
   - stagger: motion1=0.2s, motion2=0.4s, motion3=0.6s 지연으로 순차 등장

2. **히어로 키비주얼 슬라이더 (Swiper)**
   - 전체 화면 이미지 슬라이드, PREV/NEXT + 페이지네이션(1/2)
   - 슬라이드 전환 시 텍스트가 위로 올라오며 등장

3. **스크롤 다운 인디케이터**
   - `@keyframes scrolldown`: translateY(-20% → 20%) 반복 — 아래로 흐르는 라인 애니메이션

4. **대형 타이포 마르퀴 (`title-bg-scroll`)**
   - 섹션 배경에 초대형 텍스트가 `translateX(0 → -50%)` 50초 무한 루프로 흐름
   - OUR BUSINESS / ESG ACTIVITY 같은 섹션 타이틀 뒤에 배치

5. **비디오 배경**: 16개 video 요소 — 비즈니스 카드에 호버/재생 버튼으로 비디오 재생

6. **CTA 확장 모션**: `height 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)` — 부드러운 펼침

7. **헤더**: 스크롤 시 배경/보더 변화 (sticky + 상태 클래스)

## GANA R&D 사이트에 적용할 계획

- [x] 스크롤 리빌 시스템 (IntersectionObserver + stagger 지연) — 전 섹션 공통
- [x] 히어로: 이미지 Ken Burns 줌 + 텍스트 순차 등장 + 스크롤 다운 인디케이터
- [x] 섹션 타이틀 뒤 대형 마르퀴 텍스트 (REGISTRATIONS / MARKET ACCESS 등)
- [x] 숫자 카운트업 애니메이션 (stats 섹션)
- [x] 카드 호버 리프트 + 이미지 스케일
- [x] 헤더 스크롤 시 축소 + 블러 배경
- [x] 버튼/링크 호버 스윕 효과
- [x] prefers-reduced-motion 존중 유지
