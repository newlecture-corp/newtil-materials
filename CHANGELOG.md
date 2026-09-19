# Changelog

## 0.4.27 (2026-09-19) — 컴포넌트를 골라 쓰는 진입

- `@newtil/materials/base.css`(레이어 순서 · scoped reset · Material Symbols 폰트, 4.5KB) + `@newtil/materials/component/<이름>.css`(38개, 컴포넌트 하나씩). `index.css` 는 37개 전부(142KB)를 싣는데 CSS 는 tree-shaking 이 없어서, 내비 다섯 개만 쓰는 newlecture-app 도 전부를 내보내고 있었다. 이제 바탕 + 쓰는 것만 가져갈 수 있다.
  ```css
  @import "@newtil/design-tokens";
  @import "@newtil/materials/base.css";
  @import "@newtil/materials/component/m3-nav-bar.css";
  ```
- `base.css` 와 `component/*.css` 에는 design-tokens 사본이 없다 — 로드 순서(tokens → materials → 테마 → css)대로 앱이 토큰을 먼저 부른다. `index.css` 는 CDN 한 줄 링크용이라 전처럼 사본을 품는다.
- 소스 `css/index.css` 도 `base.css` 를 품도록 정리. 결과 CSS 는 같다(선택자 38/38).

## 0.4.26 (2026-09-19) — 상단 앱 바 기본값

- `m3-top-app-bar`: `--bar-trailing-gap` 0 → `var(--space-3)`. trailing 에 사용자 이름·m3-btn 같은 글자 요소가 오면 서로 붙어 있었다(아이콘 버튼만 둘 때를 가정한 값).
- `m3-top-app-bar`: `--bar-title-size` 1.375rem/400 → 1.125rem/500. 22dp 는 모바일 앱 바 값이라 데스크톱 관리자 셸에서 본문(14px)과 리듬이 안 맞았다(0.4.25 드로어와 같은 이유).

## 0.4.25 (2026-09-18) — 내비 드로어 기본값을 데스크톱 관리자 화면에 맞춤

- `m3-nav-drawer`·`m3-layout` 기본값: 폭 22.5rem → 15rem, 항목 높이 3.5rem → 2.5rem, 아이콘 1.5 → 1.25rem, 항목 모서리 알약 → radius-2, 섹션 제목 0.875 → 0.6875rem, 여백 전반 축소. M3 의 360dp/56dp 는 모바일 모달 드로어 값이라 데스크톱 관리자 화면에서 본문(14px)과 리듬이 안 맞았다. newlecture-app 이 같은 값을 변수 20개로 덮어 쓰고 있던 것을 기본값으로 올린 것.
- `m3-nav-drawer`: `.drawer-item[aria-disabled="true"]` — 페이지가 아직 없는 항목을 링크 대신 span 으로 두고 흐리게. 링크 주소를 빌려 쓰면 현재 경로 판정에 여러 항목이 같이 켜진다.

## 0.4.24 (2026-09-18) — 섹션 = 제목 + 콘텐츠 블록

- `m3-section` 을 "제목이 있는 한 덩어리"의 공통 가구로: 콘텐츠 종류 옵션 `section:text`(기본) · `list` · `nav` · `form` · `table`. 콘텐츠 블록(p · ul/ol · table · form)을 `section-body` 없이 섹션에 바로 놓아도 본문 모양을 받는다. `nav` 는 기호 없는 가로 링크 목록(aria-current 강조). 표·폼은 m3-table·m3-form 을 안 입혀도 기본 모양이 있고, 입히면 그쪽이 우선.
- 제목은 디자인상 안 보여도 HTML 에 둔다 — 가릴 때는 `display:none` 유틸리티를 제목에.

## 0.4.23 (2026-09-18) — m3-tree 이름 바꾸기 입력칸

- `m3-tree` 에 `tree-input` 슬롯 — 라벨 자리에 놓는 이름 바꾸기 입력칸(줄 높이 안, primary 테두리). 더블클릭·Enter·Esc 동작은 앱이 맡는다.

## 0.4.21 (2026-09-18) — 토큰 0.2.5

- `@newtil/design-tokens` 0.2.5 를 넣어 다시 빌드. 밝은 primary 위의 버튼 글자·스위치 손잡이·배지·FAB·체크 표시가 검정 대신 같은 색상의 진한 색이 된다(dist 에 토큰 사본이 들어 있어 materials 도 게시해야 반영된다).

## 0.4.20 (2026-09-18)

### Added
- `m3-divider` `divider:text` — 가운데 글자가 있는 구분선(로그인의 "또는"). `<div class="m3-divider divider:text"><span>또는</span></div>`. 변수 `--divider-text-color|size|gap`.

## 0.4.19 (2026-09-18)

### Fixed
- `m3-icon` 글리프가 상자 안에서 잘리던 문제. 부모 컴포넌트(`icon-btn-size:xs|sm`, `m3-tree`, `m3-stepper`, `m3-btn` 아이콘)가 `.m3-icon` 에 font-size 만 주면 `::before` 는 여전히 `--icon-size`(24px)로 글리프를 그려 작은 상자에서 잘렸다. 글리프 크기가 요소의 font-size 를 따르도록 바꿨다(`width/height: 1em`). `--icon-size` 와 `icon-size:N` 옵션은 그대로.

## 0.4.18 (2026-09-17)

### Added
- `m3-tree` — 포함 관계 목록(파일 탐색기·레이어 패널·분류 체계). `aria-expanded`/`aria-selected` 로 상태, `tree-toggle`·`tree-icon`·`tree-label`·`tree-meta` 슬롯, 끌어놓기 표시 `tree-drop-into|before`, `tree:lines`, `tree-size:sm|md`. newtil studio 의 레이어 패널이 첫 사용처.

## 0.4.17 (2026-09-17) — 기본값 손질: 아무것도 안 바꿔도 보기 좋게

design-tokens 0.2.4(기본 씨앗 초록, 다크 surface 정정)와 함께. 기본값만으로 만든 화면(kitchen sink)을 놓고 본 것.

### Changed
- `m3-text-field` 보조 글(`field-supporting`)이 상자 안 밑줄 위에 끼어 있었다 → 상자 밖 아래. `field-label:none`(레이블 없는 필터·검색·select)은 높이 40px — 옆 버튼과 같다(전 56px).
- `m3-btn` `btn:tonal` 이 secondary(파랑) 계열이라 초록 primary 옆에서 따로 놀았다 → primary 의 옅은 판.
- `m3-card` 제목 기본 1.5rem/400 → 1.25rem/600. 한글 제목이 본문과 구분된다.
- `m3-pager` 현재 페이지 배경 검정 → primary.
- 컴포넌트 36개 소스 머리에 한국어 한 줄 요약. spec.json `description` 이 이 줄로 시작한다(전엔 `====== M3 Button ======` 제목 줄).

## 0.4.16 (2026-09-17)

### Fixed
- `m3-badge` `badge:inline` 이 글자 옆에서 baseline 에 걸려 아래로 처졌다. `vertical-align: middle` 을 기본으로 갖는다. 앞 글자와의 간격은 배지가 정하지 않는다(단독으로도 쓰이므로) — 글자 뒤 공백 한 칸 또는 부모 `gap`.

## 0.4.15 (2026-09-17) — 브랜드 씨앗

- 의존 `@newtil/design-tokens ^0.2.3`. 번들 dist/index.css 에 씨앗 계산 램프가 들어간다.
- `themes/ncafe.css`·`themes/newlecture.css`: 브랜드 램프 hex 8줄 → `--brand` 한 줄. 손으로 지정하던 `--color-on-primary` 삭제(자동).
- spec.json conventions.brand 갱신.

## 0.4.14 (2026-09-17) — 콘텐츠 블록 셋째 묶음: 목록·장바구니 마감에서 드러난 빈 자리

ncafe/frontend 를 원본 publishing 과 픽셀로 비교해 나온 것들. 페이지가 우회하던 자리를 부품으로 메운다.

### Added
- `m3-stepper` — 수량 −/＋ 입력. `stepper:outlined`(기본)|`separated`, `stepper-size:sm|md|lg`(28/34/40px). 브라우저 숫자 스핀 버튼을 숨겨 숫자가 왼쪽으로 쏠리지 않는다.
- `m3-icon-btn` 크기 옵션 `icon-btn-size:xs|sm|md|lg`(28/32/40/48px). `xs`·`sm` 은 터치 영역을 늘리지 않아 텍스트 버튼 `btn-size:xs`(32px) 옆에 나란히 놓을 수 있다. 전엔 48px 고정이라 카드 액션 줄의 하트가 담기 버튼보다 컸다.
- `m3-card` `card-media:landscape`(4:3). 상품 목록 썸네일용 — 정사각(1:1)은 카드를 껑충하게 만든다.
- `m3-site` `site-aside:sm|md|lg`(12.5/16/21.25rem). 주문 요약처럼 금액이 들어가는 오른쪽 패널은 `lg`.
- `m3-breadcrumb` — 현재 위치 경로. 구분 기호는 CSS(`breadcrumb-separator:slash|chevron|dot`), 마지막은 `aria-current="page"`.
- `m3-table` — 데이터 표 + 항목–값 표(`table:key-value`, `th[scope=row]`). `table:striped|bordered|hover`, `table-size:sm|md|lg`, 셀 `table-align:center|end`.
- `m3-form` `form-group`(레이블 + 선택지 묶음), `form-group:inline`(레이블 칸 옆 한 줄), `form-choice-extra`. 상세 페이지의 온도/사이즈, 장바구니의 수령 방법.
- `m3-section` — 제목·설명·본문 묶음(`section-title`/`section-caption`/`section-body`). `section:divided|card`, `section-size:sm|md|lg`. 상세 페이지가 article 블록 3개를 페이지 CSS 로 짜던 것.

### Fixed
- `m3-toolbar` `toolbar-start`/`toolbar-end` 가 항상 flex 라 "총 <strong>31</strong>개" 같은 글 한 줄의 글자 사이가 gap 만큼 벌어졌다. 자식 요소가 둘 이상일 때만 flex. `toolbar:fill` 의 `.toolbar-grow` 는 basis 0 — 텍스트 필드(width 100%)가 옆 버튼을 줄 아래로 밀던 것.
- `m3-card` `.card-actions-end` 가 세로 가운데 정렬을 안 해 높이가 다른 버튼이 나란히 오면 중심이 어긋났다.

### Theme
- `themes/ncafe.css` 사용 규약에 방(m3-site 통일)·목록 카드·수량·선택지·글 덩어리 항목 추가.

## 0.4.13 (2026-09-17)

### Fixed
- Material Symbols 폰트 `@import` 가 dist 에서 tokens·reset 규칙 **뒤**에 놓여 있었다. `@import` 는 다른 규칙 뒤에 오면 브라우저·번들러 모두 버리므로 `<link>` 로 index.css 를 직접 싣는 경우를 빼면 폰트가 실리지 않아 아이콘·체크박스·라디오가 상자로 나왔다. 빌드에서 외부 `@import` 를 파일 맨 앞으로 옮긴다(`hoist-external-imports`).
- 소스에서 외부 `@import` 를 맨 앞에 두면 postcss-import 가 뒤의 로컬 `@import` 를 해석하지 않아 dist 가 431 바이트로 비는 함정이 있어, 소스 순서는 그대로 두고 출력에서만 옮긴다.

### Docs
- Next.js(Turbopack) 는 CSS 안의 외부 `@import url()` 을 위치와 무관하게 버린다. 번들러로 쓸 때는 앱의 `<head>` 에 Material Symbols `<link>` 를 직접 추가해야 한다 — 시작하기·아이콘 문서에 안내.

## 0.4.12 (2026-09-17) — 콘텐츠 블록 둘째 묶음

### Added
- `m3-site` — 공개 사이트 셸(헤더 · 본문 · 푸터 세로 흐름, 가운데 컨테이너). 헤더 슬롯 `site-logo`/`site-nav`/`site-actions`, 본문 `site-body:aside|aside-end` 2단, 푸터 슬롯. `m3-layout`(드로어 앱 셸)과 다른 종류의 방.
- `m3-toolbar` — 목록·표 위 한 줄(`toolbar-start`/`toolbar-end`). `toolbar:fill` 은 필터 바(`.toolbar-grow` 가 남은 폭), `toolbar:card` 는 카드 상단 줄.
- `m3-card` 미디어: `card-media:square|video|wide` 비율 고정, `card-media-badge`(`:end`) 이미지 위 오버레이 배지.
- spec.json 에 `slotOptions` — 슬롯 요소에 붙는 옵션(`card-media:square`, `site-body:aside`, `list-divider:inset`)을 규격에 싣는다. 전엔 루트 옵션만 잡혀 슬롯 옵션이 규격 밖이었다.

## 0.4.11 (2026-09-17) — 콘텐츠 블록(가구) 첫 묶음

### Added
- `m3-grid` — 카드·항목을 반응형 격자로 놓는 블록. `grid-cols:1~6|auto`, `grid-gap:1~5`, `md:`/`sm:` 접두로 화면별 열 수. 안에 무엇이 들어가든 격자만 책임진다.
- `m3-pager` — 페이지네이션. `pager-item`(현재 `aria-current="page"`, 비활성 `aria-disabled`), `pager-ellipsis`. 옵션 `pager:text`, `pager-align:*`, `pager-size:sm|md|lg`.

방(m3-layout)과 물품(m3-btn 등) 사이의 "가구" 층이 비어 있어 페이지가 매번 격자·페이저를 직접 짜던 것(시험 4·5 에서 에이전트들이 반복 보고). 사이드바 내비·테이블·브레드크럼·통계 카드가 다음 묶음.

## 0.4.10 (2026-09-17)

### Fixed
- `field-label:none`(컨테이너가 상자인 모드)에서 안쪽 input/select 에도 `--field-input-box-min-height` 가 적용돼, 테마가 두 값을 같게 주면 컨테이너가 min-height + 테두리(2px)만큼 커졌다. 이 모드에서는 안쪽 min-height 를 `auto` 로 되돌린다.

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
