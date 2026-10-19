# GANA R&D 공식 로고 자산

> **출처:** 2026-09-29 사용자 제공 원본  
> **상태:** GANA R&D 공식 로고 — 웹·문서 작업 시 이 자산을 우선 사용

## 포함 파일

| 파일 | 용도 | 비고 |
|---|---|---|
| [`gana-rnd-official-logo.ai`](./gana-rnd-official-logo.ai) | 편집 가능한 원본 벡터 | 인쇄물·고해상도 제작용. Adobe Illustrator에서 편집 |
| [`gana-rnd-official-logo.png`](./gana-rnd-official-logo.png) | 투명 배경 래스터 로고 | 웹 문서·프레젠테이션·AI 참고용 |
| [`/public/images/brand/gana-rnd-official-logo.png`](../../public/images/brand/gana-rnd-official-logo.png) | 웹 배포용 복사본 | 공용 헤더와 푸터에서 사용 |

## 웹 적용 원칙

- 기존 텍스트 조합 워드마크 대신 공식 PNG를 **헤더와 푸터에 적용**한다.
- 로고의 원래 색상(다크 그레이 `GANA` + 블루 `R&D`)은 변경하지 않는다.
- 어두운 배경에서는 가독성을 위해 흰색 바탕 프레임 위에만 올린다. 색 반전·임의 색상 변형은 사용하지 않는다.
- 웹 구현 파일: `src/components/Header.astro`, `src/components/Footer.astro`

## Claude·외부 제작자 전달 문구

> Use the supplied `gana-rnd-official-logo.png` as the sole GANA R&D logo reference. Preserve its original dark-gray `GANA` and blue `R&D` colors, horizontal proportions, and clear space. Do not redraw, recolor, outline, stretch, or substitute a text wordmark.

## Dr. Park Group 마크 (2026-10-19 v1, 자체 제작)
- 정본과 생성 스크립트는 `D:\drpark-group\public\images\brand\`, `D:\drpark-group\scripts\make-logo.js`. 여기엔 참고용 사본만 둔다.
- DP 모노그램: D(둥근 사각, 모서리 36/100)와 P(스템 + 스타디움 볼, 가로 슬롯 카운터)가 카운터를 공유. 네이비 #0e2139, 다크 배경용 흰색, 워드마크 Manrope 500 "Dr. Park Group". SINCE 문구 없음.
- 구도는 사용자가 고른 Design.com 템플릿을 참고해 기하로 새로 그린 것(비트맵 트레이스 아님). 회장 확정 전 임시.
