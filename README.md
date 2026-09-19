# @newtil/materials

Material Design 3 를 CSS 로 구현한 `m3-` 컴포넌트 라이브러리.

Google M3 스펙의 버튼·카드·다이얼로그·내비게이션 등을 순수 CSS 클래스로 제공합니다. 모든 시각 속성은 [`@newtil/design-tokens`](https://github.com/newlecture-corp/newtil-design-tokens) 의 변수 위에서 동작하므로 토큰만 바꾸면 전체가 일관되게 바뀌고, 다크모드도 토큰 층에서 해결됩니다. 커스터마이징은 **타입 → 옵션 클래스 → CSS 변수** 3단계 순서로 합니다. 아이콘(`m3-icon`)은 Google Fonts 의 Material Symbols 폰트를 사용하므로 런타임에 폰트 네트워크 접근이 필요합니다.

## 설치

```bash
npm install @newtil/materials
```

`@newtil/design-tokens` 는 의존성으로 함께 설치됩니다.

## 빠른 시작

JS 번들러(Vite, Webpack 등)에서는 패키지를 그대로 가져오면 CSS 가 로드됩니다.

```js
import "@newtil/materials";
```

CSS 파일만 필요하면 `index.css` 서브패스를 사용합니다. 쓰는 컴포넌트가 몇 개뿐이면 `base.css` + `component/<이름>.css` 로 골라 가져옵니다(0.4.27, 아래).

```css
@import "@newtil/materials/index.css";
```

`index.css` 하나에 design-tokens · reset · Material Symbols 폰트 `@import` · 모든 `m3-*` 컴포넌트가 들어 있습니다(142KB, gzip 25KB). CSS 는 tree-shaking 이 없으므로 안 쓰는 컴포넌트도 그대로 나갑니다.

컴포넌트를 골라 쓰려면 바탕(`base.css`: 레이어 순서 · reset · 폰트)과 컴포넌트 파일을 가져옵니다. 이 경로엔 design-tokens 사본이 없으니 토큰을 먼저 부릅니다.

```css
@import "@newtil/design-tokens";
@import "@newtil/materials/base.css";
@import "@newtil/materials/component/m3-btn.css";
@import "@newtil/materials/component/m3-nav-bar.css";
```

파일 이름은 `dist/component/` 의 목록(= `css/component/m3/` 의 파일명)과 같습니다. `icon:이름` 클래스를 쓰면 `component/icon-essential.css` 도 함께.

```html
<!-- 버튼: filled 가 기본. 타입·크기·색은 옵션 클래스로 -->
<button class="m3-btn">저장</button>
<button class="m3-btn btn:outlined btn-size:sm">취소</button>
<button class="m3-btn btn:tonal btn-color:danger btn-icon:leading">
  <i class="m3-icon icon:delete"></i>삭제
</button>

<!-- 카드 -->
<div class="m3-card card:outlined">
  <div class="card-header">
    <h3 class="card-headline">카드 제목</h3>
    <p class="card-subhead">부제목</p>
  </div>
  <div class="card-content">
    <p>본문 내용</p>
  </div>
  <div class="card-actions">
    <button class="m3-btn btn:text">취소</button>
    <button class="m3-btn">확인</button>
  </div>
</div>
```

## 문서

- 문서 사이트: https://newlecture-corp.github.io/newtil-materials/ — 모든 컴포넌트의 라이브 프리뷰·옵션·Variable API
- [CHANGELOG.md](./CHANGELOG.md) — 버전별 변경 사항
- [COMPONENT-GUIDE.md](./COMPONENT-GUIDE.md) — 컴포넌트 CSS 작성 규칙(변수 선언·옵션 클래스·상태 처리·네이밍)

## 컴포넌트

`css/component/m3/` 의 파일 하나가 컴포넌트 하나입니다. 접두사 `m3-` 는 컴포넌트 클래스, 옵션 클래스는 `이름:값` 형식(`btn:outlined`, `btn-size:lg`)입니다.

| 파일 | 클래스 | 설명 | 문서 |
|------|--------|------|------|
| `m3-btn.css` | `m3-btn` | 버튼. filled(기본)·elevated·tonal·outlined·text, 크기 5단계, 색상 변형 | [버튼](https://newlecture-corp.github.io/newtil-materials/guide/buttons.html) |
| `m3-fab.css` | `m3-fab` | Floating Action Button. `fab:small`·`fab:large`·`fab:extended` | [버튼](https://newlecture-corp.github.io/newtil-materials/guide/buttons.html) |
| `m3-icon-btn.css` | `m3-icon-btn` | 아이콘 버튼. standard(기본)·`icon-btn:filled`·`icon-btn:tonal`·`icon-btn:outlined`, 토글 상태 | [버튼](https://newlecture-corp.github.io/newtil-materials/guide/buttons.html) |
| `m3-text-field.css` | `m3-text-field` | 텍스트 입력 필드. filled(기본)·`field:outlined`, 라벨 위치·크기 옵션 | [입력](https://newlecture-corp.github.io/newtil-materials/guide/inputs.html) |
| `m3-checkbox.css` | `m3-checkbox` | 체크박스 | [입력](https://newlecture-corp.github.io/newtil-materials/guide/inputs.html) |
| `m3-radio-btn.css` | `m3-radio` | 라디오 버튼 | [입력](https://newlecture-corp.github.io/newtil-materials/guide/inputs.html) |
| `m3-switch.css` | `m3-switch` | 스위치(토글) | [입력](https://newlecture-corp.github.io/newtil-materials/guide/inputs.html) |
| `m3-slider.css` | `m3-slider` | 슬라이더 | [입력](https://newlecture-corp.github.io/newtil-materials/guide/inputs.html) |
| `m3-form.css` | `m3-form` | 폼 레이아웃(헤더·필드·액션·메시지). M3 스펙에 없는 newtil 확장 | [입력](https://newlecture-corp.github.io/newtil-materials/guide/inputs.html) |
| `m3-card.css` | `m3-card` | 카드. elevated(기본)·`card:filled`·`card:outlined`, 헤더·콘텐츠·액션 영역 | [컨테이너](https://newlecture-corp.github.io/newtil-materials/guide/containment.html) |
| `m3-dialog.css` | `m3-dialog` | 다이얼로그(`<dialog>` 요소 기반) | [컨테이너](https://newlecture-corp.github.io/newtil-materials/guide/containment.html) |
| `m3-bottom-sheet.css` | `m3-bottom-sheet` | 바텀 시트. standard(기본)·`sheet:modal` | [컨테이너](https://newlecture-corp.github.io/newtil-materials/guide/containment.html) |
| `m3-chips.css` | `m3-chip` | 칩. `chip:elevated`·`chip:selected` 옵션 | [컨테이너](https://newlecture-corp.github.io/newtil-materials/guide/containment.html) |
| `m3-badge.css` | `m3-badge` | 배지(숫자·점) | [커뮤니케이션](https://newlecture-corp.github.io/newtil-materials/guide/communication.html) |
| `m3-progress.css` | `m3-progress` | 프로그레스 인디케이터. linear(기본)·`progress:circular`·`progress:indeterminate` | [커뮤니케이션](https://newlecture-corp.github.io/newtil-materials/guide/communication.html) |
| `m3-snackbar.css` | `m3-snackbar` | 스낵바 | [커뮤니케이션](https://newlecture-corp.github.io/newtil-materials/guide/communication.html) |
| `m3-tooltip.css` | `m3-tooltip` | 툴팁. plain(기본)·`tooltip:rich` | [커뮤니케이션](https://newlecture-corp.github.io/newtil-materials/guide/communication.html) |
| `m3-tabs.css` | `m3-tabs` | 탭. primary(기본)·`tabs:secondary` | [내비게이션](https://newlecture-corp.github.io/newtil-materials/guide/navigation.html) |
| `m3-top-app-bar.css` | `m3-top-app-bar` | 상단 앱 바. 기본은 `static`, `bar:fixed` 로 상단 고정 | [내비게이션](https://newlecture-corp.github.io/newtil-materials/guide/navigation.html) |
| `m3-nav-bar.css` | `m3-nav-bar` | 하단 내비게이션 바. 기본은 `static`, `nav-bar:fixed` 로 하단 고정 | [내비게이션](https://newlecture-corp.github.io/newtil-materials/guide/navigation.html) |
| `m3-nav-rail.css` | `m3-nav-rail` | 내비게이션 레일. 기본은 `static`, `rail:fixed` 로 좌측 고정 | [내비게이션](https://newlecture-corp.github.io/newtil-materials/guide/navigation.html) |
| `m3-nav-drawer.css` | `m3-nav-drawer` | 내비게이션 드로어. standard(인라인)·modal(오버레이) | [내비게이션](https://newlecture-corp.github.io/newtil-materials/guide/navigation.html) |
| `m3-menu.css` | `m3-menu` | 메뉴(드롭다운 항목 목록) | [내비게이션](https://newlecture-corp.github.io/newtil-materials/guide/navigation.html) |
| `m3-list.css` | `m3-list` | 리스트. leading·trailing·아바타·보조 텍스트·구분선 | [내비게이션](https://newlecture-corp.github.io/newtil-materials/guide/navigation.html) |
| `m3-layout.css` | `m3-layout` | 적응형 페이지 레이아웃. 화면 폭에 따라 nav-bar → rail → drawer 자동 전환 | [레이아웃](https://newlecture-corp.github.io/newtil-materials/guide/layout.html) |
| `m3-divider.css` | `m3-divider` | 구분선(inset·middle-inset·vertical) | [레이아웃](https://newlecture-corp.github.io/newtil-materials/guide/layout.html) |
| `m3-icon.css` | `m3-icon` | Material Symbols 아이콘. 크기·색·채움·굵기 옵션 | [아이콘](https://newlecture-corp.github.io/newtil-materials/guide/icons.html) |
| `m3-deco.css` | `m3-deco` | 아이콘+텍스트 장식. nav-bar·nav-rail 의 항목으로 사용 | [아이콘](https://newlecture-corp.github.io/newtil-materials/guide/icons.html) |
| `icon-essential.css` | `icon:*` | 자주 쓰는 아이콘 60개의 `icon:이름` 클래스와 `data-icon` 리가처 지원 | [아이콘](https://newlecture-corp.github.io/newtil-materials/guide/icons.html) |

## newtil 패밀리

| 패키지 | 설명 | 문서 |
|--------|------|------|
| `@newtil/design-tokens` | CSS 변수(토큰) — 색·간격·글꼴·모서리·그림자·층. 모든 패키지의 바닥 | https://newlecture-corp.github.io/newtil-design-tokens/ |
| `@newtil/css` | 실제 CSS 속성명 기반 유틸리티 클래스 + JIT | https://newlecture-corp.github.io/newtil-css/ |
| `@newtil/components` | `n-` 접두사 기본 컴포넌트 — prose·table·layout·resize-handle | https://newlecture-corp.github.io/newtil-components/ |
| `@newtil/materials` | Material Design 3 구현 `m3-` 컴포넌트 (이 패키지) | https://newlecture-corp.github.io/newtil-materials/ |
| `@newtil/editor` | 마크다운↔HTML 양방향 편집기 웹 컴포넌트(React/Vue 래퍼) | https://newlecture-corp.github.io/newtil-editor/ |
| `@newtil/drawing` | 캡처 위에 화살표·상자·글자를 그리는 그림판(PNG+JSON) | https://newlecture-corp.github.io/newtil-drawing/ |

## 개발

```bash
npm install
npm run build        # css/ → dist/ (rollup + postcss)
npm run docs:dev     # 문서 사이트 로컬 실행 (dist/index.css 를 읽으므로 build 먼저)
npm run docs:build   # 문서 사이트 빌드 → docs/.vitepress/dist
```

컴포넌트 CSS 를 추가·수정할 때는 [COMPONENT-GUIDE.md](./COMPONENT-GUIDE.md) 의 규칙(변수 선언 → 베이스 스타일 → 옵션 클래스는 변수만 변경)을 따릅니다. 문서 사이트는 `main` 푸시 시 GitHub Actions 로 배포됩니다.

## 라이선스

MIT
