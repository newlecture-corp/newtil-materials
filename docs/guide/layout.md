# Layout (레이아웃)

페이지 전체 구조와 콘텐츠 영역 구분을 위한 레이아웃 컴포넌트입니다.

## Adaptive Page Layout

`m3-layout`은 화면 크기에 따라 내비게이션이 자동으로 전환되는 반응형 페이지 레이아웃을 제공합니다.

### 반응형 브레이크포인트

| 브레이크포인트 | 화면 너비 | 내비게이션 구성 |
|---------------|-----------|----------------|
| Compact | < 600px | Top App Bar + Content + Bottom Nav Bar |
| Medium | 600 ~ 839px | Nav Rail (좌측) + Top App Bar + Content |
| Expanded | >= 840px | Nav Drawer (좌측) + Top App Bar + Content |

### 기본 HTML 구조

<Demo>
<div class="m3-layout">
  <!-- Nav Drawer (Expanded에서 표시) -->
  <nav class="m3-nav-drawer layout-drawer">
    <div class="drawer-header">
      <h2 class="drawer-headline">메뉴</h2>
    </div>
    <div class="drawer-content">
      <a href="#" class="drawer-item drawer-item-active">
        <i class="m3-icon icon:home"></i>
        <span class="drawer-label">홈</span>
      </a>
      <a href="#" class="drawer-item">
        <i class="m3-icon icon:search"></i>
        <span class="drawer-label">검색</span>
      </a>
      <a href="#" class="drawer-item">
        <i class="m3-icon icon:settings"></i>
        <span class="drawer-label">설정</span>
      </a>
    </div>
  </nav>

  <!-- Nav Rail (Medium에서 표시) -->
  <nav class="m3-nav-rail layout-rail">
    <div class="rail-header">
      <button class="m3-fab fab:small"><i class="m3-icon icon:edit"></i></button>
    </div>
    <div class="rail-items">
      <a href="#" class="m3-deco icon:home deco-pos:top deco-active">홈</a>
      <a href="#" class="m3-deco icon:search deco-pos:top">검색</a>
      <a href="#" class="m3-deco icon:settings deco-pos:top">설정</a>
    </div>
  </nav>

  <!-- Main Content Area -->
  <div class="layout-main">
    <header class="m3-top-app-bar layout-header">
      <button class="bar-leading"><i class="m3-icon icon:menu"></i></button>
      <h1 class="bar-title">페이지 제목</h1>
      <div class="bar-trailing">
        <button><i class="m3-icon icon:search"></i></button>
      </div>
    </header>
    <main class="layout-content">
      <h2>콘텐츠 영역</h2>
      <p>페이지의 주요 콘텐츠가 여기에 들어갑니다.</p>
    </main>
  </div>

  <!-- Nav Bar (Compact에서 표시) -->
  <nav class="m3-nav-bar layout-bar">
    <a href="#" class="m3-deco icon:home deco-pos:top deco-active">홈</a>
    <a href="#" class="m3-deco icon:search deco-pos:top">검색</a>
    <a href="#" class="m3-deco icon:settings deco-pos:top">설정</a>
  </nav>
</div>
</Demo>

### 내비게이션 자동 전환

`m3-layout` 안에 네 가지 내비게이션을 모두 배치하면, 화면 크기에 따라 자동으로 전환됩니다.

- **Compact (< 600px)**: `layout-bar`(하단 내비게이션)만 표시. `layout-drawer`와 `layout-rail`은 숨김.
- **Medium (600 ~ 839px)**: `layout-rail`(좌측 레일)만 표시. `layout-drawer`와 `layout-bar`는 숨김. 메인 콘텐츠에 레일 너비만큼 왼쪽 마진 적용.
- **Expanded (>= 840px)**: `layout-drawer`(좌측 서랍)만 표시. `layout-rail`과 `layout-bar`는 숨김. 메인 콘텐츠에 서랍 너비만큼 왼쪽 마진 적용.

### 배치 기본값과 고정 옵션 (0.4.0)

내비게이션 컴포넌트 자체(`m3-top-app-bar`, `m3-nav-bar`, `m3-nav-rail`)는 0.4.0 부터 기본이 `position: static` 입니다. 배치는 페이지 셸이 결정한다는 원칙이며, `m3-layout` 안에서는 다음과 같이 나뉩니다.

| 요소 | `m3-layout` 이 하는 일 | 필요한 opt-in |
|------|------------------------|---------------|
| `layout-drawer` (`m3-nav-drawer`) | 레이아웃이 좌측에 `position: fixed` 로 고정 | 없음 |
| `layout-rail` (`m3-nav-rail`) | 레이아웃이 좌측에 `position: fixed` 로 고정 | 없음 (`rail:fixed` 불필요) |
| `layout-header` (`m3-top-app-bar`) | 표시 여부만 제어 | 상단 고정이 필요하면 `bar:fixed` |
| `layout-bar` (`m3-nav-bar`) | 표시 여부만 제어 | 하단 고정이 필요하면 `nav-bar:fixed` |

`layout-main` 은 Compact 에서 `--layout-bar-height` 만큼 하단 패딩을 두므로, 하단 바에 `nav-bar:fixed` 를 붙이면 콘텐츠가 바 뒤에 가려지지 않습니다.

```html
<div class="m3-layout">
  <nav class="m3-nav-drawer layout-drawer">...</nav>
  <nav class="m3-nav-rail layout-rail">...</nav>
  <div class="layout-main">
    <header class="m3-top-app-bar layout-header bar:fixed">
      <h1 class="bar-title">페이지 제목</h1>
    </header>
    <main class="layout-content">...</main>
  </div>
  <nav class="m3-nav-bar layout-bar nav-bar:fixed">...</nav>
</div>
```

`m3-layout` 없이 컴포넌트만 단독으로 쓸 때의 고정 옵션은 [내비게이션](./navigation.md) 문서의 `bar:fixed` · `nav-bar:fixed` · `rail:fixed` 절을 참고하세요.

### 옵션: layout:fixed-drawer

브레이크포인트에 관계없이 서랍을 항상 표시합니다.

<Demo>
<div class="m3-layout layout:fixed-drawer">
  <nav class="m3-nav-drawer layout-drawer">
    <!-- 서랍 내용 -->
  </nav>
  <div class="layout-main">
    <header class="m3-top-app-bar layout-header">
      <h1 class="bar-title">항상 서랍이 보이는 레이아웃</h1>
    </header>
    <main class="layout-content">
      <p>콘텐츠 영역</p>
    </main>
  </div>
</div>
</Demo>

### 옵션: layout:no-header

상단 앱 바를 숨깁니다.

<Demo>
<div class="m3-layout layout:no-header">
  <nav class="m3-nav-drawer layout-drawer">
    <!-- 서랍 내용 -->
  </nav>
  <div class="layout-main">
    <main class="layout-content">
      <p>앱 바 없이 콘텐츠만 표시됩니다.</p>
    </main>
  </div>
  <nav class="m3-nav-bar layout-bar">
    <!-- 하단 내비게이션 -->
  </nav>
</div>
</Demo>

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--layout-drawer-width` | `22.5rem` | 서랍 너비 (360dp) |
| `--layout-rail-width` | `5rem` | 레일 너비 (80dp) |
| `--layout-bar-height` | `5rem` | 하단 바 높이 (80dp) |
| `--layout-header-height` | `4rem` | 상단 앱 바 높이 (64dp) |
| `--layout-background` | `var(--color-surface)` | 레이아웃 배경색 |
| `--layout-content-padding` | `1.5rem` | 콘텐츠 영역 내부 여백 |
| `--layout-transition` | `all var(--duration-normal) var(--ease-out)` | 전환 애니메이션 |
| `--layout-drawer-display` | `none` | 서랍 display (미디어 쿼리로 제어) |
| `--layout-rail-display` | `none` | 레일 display (미디어 쿼리로 제어) |
| `--layout-bar-display` | `flex` | 바 display (미디어 쿼리로 제어) |
| `--layout-main-margin-left` | `0` | 메인 콘텐츠 좌측 마진 |
| `--layout-main-padding-bottom` | `var(--layout-bar-height)` | 메인 콘텐츠 하단 패딩 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `layout-drawer` | 서랍 내비게이션 (m3-nav-drawer에 추가) |
| `layout-rail` | 레일 내비게이션 (m3-nav-rail에 추가) |
| `layout-main` | 메인 콘텐츠 래퍼 |
| `layout-header` | 상단 앱 바 (m3-top-app-bar에 추가) |
| `layout-content` | 콘텐츠 영역 |
| `layout-bar` | 하단 내비게이션 바 (m3-nav-bar에 추가) |
| `layout:fixed-drawer` | 서랍 항상 표시 |
| `layout:no-header` | 상단 앱 바 숨김 |

---

## Divider

구분선은 콘텐츠 영역을 시각적으로 분리합니다.

### 기본 (Full Width)

<Demo>
<hr class="m3-divider">
</Demo>

### Inset

좌측에 여백이 있는 구분선입니다.

<Demo>
<hr class="m3-divider divider:inset">
</Demo>

### Middle Inset

좌우 양쪽에 여백이 있는 구분선입니다.

<Demo>
<hr class="m3-divider divider:middle-inset">
</Demo>

### 글자 있는 구분선 (newtil 확장)

"또는", 날짜처럼 가운데 글자가 있는 구분선입니다. `<hr>` 대신 `<div>` 로 씁니다.

<Demo>
<div class="m3-divider divider:text"><span>또는</span></div>
</Demo>

### Vertical

세로 방향 구분선입니다.

<Demo>
<div style="display: flex; align-items: center; height: 3rem; gap: 1rem;">
  <span>항목 A</span>
  <hr class="m3-divider divider:vertical">
  <span>항목 B</span>
  <hr class="m3-divider divider:vertical">
  <span>항목 C</span>
</div>
</Demo>

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--divider-color` | `var(--color-border)` | 구분선 색상 |
| `--divider-width` | `100%` | 너비 |
| `--divider-thickness` | `0.0625rem` | 두께 (1dp) |
| `--divider-margin` | `0` | 외부 여백 |
| `--divider-inset-start` | `0` | 시작(좌측) 인셋 |
| `--divider-inset-end` | `0` | 끝(우측) 인셋 |
| `--divider-height` | `auto` | 높이 (vertical 모드에서 사용) |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `divider:inset` | 좌측 인셋 |
| `divider:middle-inset` | 좌우 인셋 |
| `divider:vertical` | 세로 방향 |

## m3-site (공개 사이트 셸, newtil 확장)

`m3-layout` 이 드로어를 가진 **앱** 셸이라면, `m3-site` 는 상단 헤더 · 본문 · 푸터가 세로로 흐르고 본문이 가운데 컨테이너에 놓이는 **공개 사이트** 셸입니다. 헤더 안은 로고 · 가로 내비 · 오른쪽 동작 세 슬롯, 본문은 선택적으로 왼쪽(오른쪽) 사이드 2단.

### 기본 사용법

<Demo>
<div class="m3-site" style="min-height: 22rem;">
  <header class="site-header">
    <div class="site-container site-header-inner">
      <a class="site-logo" href="#">NCafe</a>
      <nav class="site-nav"><a href="#" aria-current="page">메뉴</a><a href="#">소개</a><a href="#">장바구니</a></nav>
      <div class="site-actions"><button class="m3-btn btn:outlined btn-size:xs">로그인</button><button class="m3-btn btn-size:xs">회원가입</button></div>
    </div>
  </header>
  <main class="site-main">
    <div class="site-container">
      <div class="site-body site-body:aside">
        <aside class="site-aside"><div class="m3-card card:outlined card-padding:self">사이드</div></aside>
        <div class="site-content"><div class="m3-card card:outlined card-padding:self">본문</div></div>
      </div>
    </div>
  </main>
  <footer class="site-footer">
    <div class="site-container site-footer-inner">
      <p class="site-copyright">© 2026 NCafe</p>
      <nav class="site-footer-links"><a href="#">소개</a><a href="#">이용약관</a></nav>
    </div>
  </footer>
</div>
</Demo>

### 옵션

| 클래스 | 설명 |
|---|---|
| `site-body:aside` / `site-body:aside-end` | 본문을 사이드 + 내용 2단으로 (840px 이하에서 1단) |
| `site-width:narrow` / `default` / `wide` | 컨테이너 최대 폭 48 / 70 / 90rem |
| `site-aside:sm` / `md` / `lg` | 사이드 폭 12.5(기본, 필터·카테고리 내비) / 16 / 21.25rem(주문 요약처럼 금액이 들어가는 패널) |

### 변수 API

| 변수 | 기본값 | 설명 |
|---|---|---|
| `--site-max-width` | `70rem` | 컨테이너 폭 |
| `--site-gutter` | `var(--space-7)` | 좌우 여백 |
| `--site-header-height` | `4rem` | 헤더 높이 |
| `--site-aside-width` | `12.5rem` | 사이드 폭 |
| `--site-logo-color` / `--site-nav-color-active` | `--color-primary` / `--color-text` | 로고·활성 내비 색 |
