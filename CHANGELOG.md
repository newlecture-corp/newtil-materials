# Changelog

## 0.4.9 (2026-09-17)

### Fixed
- `<hr class="m3-divider">` 가 m3 컨테이너 안에서 보이지 않던 것 — reset 이 `m3-*` 안의 `hr` 를 숨기는데 divider 가 display 를 되살리지 않았다. 또 그 reset 셀렉터가 `[class*=" m3-"]`(hr 이 아닌 모든 요소)를 잡고 있던 오타를 `[class*=" m3-"] hr` 로 정정.

### Added
- `badge-color:neutral` — 중립 상태(비공개·모집 마감·보관) 배지. 전엔 색 옵션이 유채색 다섯뿐이라 warning·secondary 로 대체해야 했다.

## 0.4.8 (2026-09-17)

### Fixed
- `m3-icon-btn` 안에 `m3-badge` 를 넣을 수 있다. 전엔 버튼이 `overflow: hidden` 이라 배지가 잘려, 바깥 래퍼에 두면 48px 터치 영역 모서리에 붙어 아이콘에서 떨어져 보였다("공중부양"). 이제 배지가 있으면 overflow 를 풀고 배지를 **아이콘 모서리** 기준으로 놓는다(M3: 배지는 아이콘에 붙는다). 문서에 조합 예시 추가.

## 0.4.7 (2026-09-17)

### Added
- `themes/` — 브랜드 테마 파일의 자리와 형식(`themes/README.md`). 사용 규약(머리 주석) + 브랜드 램프 + 컴포넌트 변수 세 부분. `themes/ncafe.css`(카페 갈색)·`themes/newlecture.css`(뉴렉처 인디고, newlecture-app 실제 값에서 추출) 두 예시. `@newtil/materials/themes/<name>.css` 로 import. 페이지 CSS 는 레이아웃만 갖고 컴포넌트 변수는 테마에서만 정한다는 규칙.

## 0.4.6 (2026-09-17)

### Added
- `dist/spec.json` — 기계가 읽는 컴포넌트 규격. CSS 소스에서 컴포넌트·옵션·변수(기본값·주석)·슬롯을, 문서에서 기본 사용법을 뽑아 한 파일로. AI·도구가 문서 대신 읽는다. `@newtil/materials/spec.json` 으로 import. 빌드마다 재생성되므로 문서와 어긋나지 않는다.

### Fixed
- `m3-top-app-bar` 의 `bar-trailing` 이 안에 든 모든 `button`/`a` 를 아이콘 버튼으로 강제해 `m3-btn` 을 넣으면 깨지던 것 — `m3-*` 클래스가 있으면 제외.
- 문서: 부모 요소의 `style="--btn-*"` 로 컴포넌트 변수를 바꿀 수 있다고 안내하던 것 — 동작하지 않는다(컴포넌트가 자기 요소에 기본값을 선언). `.scope .m3-btn { }` 방식으로 정정.

## 0.4.5 (2026-09-17) — NCafe 적용에서 드러난 빈 자리

### Added
- 텍스트 필드가 `select` 를 그린다 — input 과 같은 상자, 기본 화살표 제거 후 `--field-select-arrow` 로. 외부 레이블 모드·`field-label:none` 과 함께 쓴다.
- 버튼 사이즈 단계가 변수(`--btn-height-{xs…xl}`, `--btn-padding-*`, `--btn-font-size-*`)로. `btn-size:*` 옵션은 단계를 고르고 값은 브랜드가 정한다. 전엔 단계 값이 M3 상수로 박혀 있어 다른 값이 필요하면 위치 셀렉터로 우회해야 했다.
- `field-label` 클래스 — `label` 요소가 아닌 것을 레이블로 쓸 때.

### Fixed
- `field-supporting` 이 외부 레이블 모드에서 레이블과 입력 사이로 끼어들던 것 — `order: 2`.
- 외부 레이블 모드의 레이블이 떠 있는 힌트 색(muted)·크기(1rem)를 그대로 써서 본문 레이블로 안 보이던 것 — `--color-text`, `0.8125rem`, `medium`. `--field-label-weight` 변수 추가.

## 0.4.4 (2026-09-17)

### Added
- `card-padding:self` — 카드 자체에 `--card-padding-x/y` 여백. 슬롯(`card-header`·`card-content`·`card-actions`) 없이 안을 직접 채우는 카드용. 기본 상태에서는 여백이 슬롯에만 있고 카드 자체에는 없어서 변수를 바꿔도 닿지 않았다.
- 문서: `--card-padding-x/y` 가 슬롯의 여백임을 명시.

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
