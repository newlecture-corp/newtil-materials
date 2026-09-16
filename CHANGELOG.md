# Changelog

## 0.4.3 (2026-09-17)

### Fixed
- `field-label:top/bottom/left/right`(레이블이 상자 밖) 에서 input 의 위 패딩이 떠 있는 레이블 자리(`--field-input-padding-top`)를, 아래 패딩은 `--field-padding-bottom` 을 따로 써서 `--field-input-box-min-height` 를 줄이면 글자가 아래로 처졌다. 이제 `field-label:none` 과 같은 규칙으로 위·아래가 모두 `--field-padding-top` 을 따른다.
- `field:outlined` 와 외부 레이블 옵션을 함께 쓰면 상자가 `surface-2` 로 채워졌다. outlined 는 채우지 않으므로 투명으로 되돌린다.
- 문서: 변수 표에 `--field-input-padding-top` 과 외부 레이블 모드의 패딩 규칙 설명.

## 0.4.2 (2026-09-16) — 문서

- README 를 `@newtil/materials` 이름으로 재작성(컴포넌트 표 포함). 문서: 패키지명·import 경로·옛 토큰 이름 정정, 0.4.0 배치 옵션(`*:fixed`) 절 신설, 없는 옵션 제거, 아이콘 폰트 의존성 안내.

## 0.4.1 (2026-09-16) — design-tokens 0.2.1 반영 · 게시본 결함 수정

- 의존: `@newtil/design-tokens ^0.2.1`.
- 토큰 이름: `--color-on-surface(-inverse)` → `--color-text(-inverse)` (95곳). 표면 위 글자는 `text`, `on-` 은 유채색 역할 위에만.
- 미정의 참조 수정: `--radius-sm / -md` → `--radius-2 / -3` (m3-tooltip 의 모서리가 0 이었다). `--z-fixed` 는 0.2.1 에 추가되어 해소(nav-bar·rail·drawer 의 z-index 가 auto 였다).
- 스크림 `rgba(0,0,0,.32)` 세 곳(dialog·bottom-sheet·nav-drawer) → `--color-scrim`. `--font-size-sm` → `--font-size-body-sm`.
- **게시본 결함 수정**: rollup 의 CSS 번들 청크가 `dist/index.js` 를 빈 모듈로 덮어써 `import "@newtil/materials"` 가 CSS 를 불러오지 않았다(0.4.0). 청크 이름을 분리하고 삭제한다. `dist/index.d.ts` 의 `./dist/index.css` 경로도 `./index.css` 로 보정. `exports["."]` 의 `types` 를 맨 앞으로.
- `--color-tertiary-*` 는 값 미정 상태 그대로(warning 과 동일). 독자 hue 배정 후 정리.
