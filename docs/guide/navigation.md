# Navigation (내비게이션)

화면 간 이동과 콘텐츠 탐색을 위한 컴포넌트 모음입니다.

## Tabs

탭은 관련 콘텐츠 그룹 간 전환을 제공합니다.

### 기본 사용법

<Demo>
<div class="m3-tabs">
  <button class="tab-item tab-active">전체</button>
  <button class="tab-item">사진</button>
  <button class="tab-item">동영상</button>
  <button class="tab-item">음악</button>
</div>
</Demo>

### 전체 너비 탭

탭 항목이 전체 너비를 균등 분할합니다.

<Demo>
<div class="m3-tabs tabs:full">
  <button class="tab-item tab-active">홈</button>
  <button class="tab-item">인기</button>
  <button class="tab-item">최신</button>
</div>
</Demo>

### Secondary 탭

하단 인디케이터가 전체 너비로 표시되는 보조 탭 스타일입니다.

<Demo>
<div class="m3-tabs tabs:secondary">
  <button class="tab-item tab-active">개요</button>
  <button class="tab-item">스펙</button>
  <button class="tab-item">리뷰</button>
</div>
</Demo>

### 아이콘이 있는 탭

<Demo>
<div class="m3-tabs tabs:with-icon">
  <button class="tab-item tab-active">
    <i class="m3-icon icon:home"></i>
    홈
  </button>
  <button class="tab-item">
    <i class="m3-icon icon:search"></i>
    검색
  </button>
  <button class="tab-item">
    <i class="m3-icon icon:settings"></i>
    설정
  </button>
</div>
</Demo>

### 색상 변형

<Demo>
<div class="m3-tabs tab-color:primary">
  <button class="tab-item tab-active">Primary</button>
  <button class="tab-item">탭 2</button>
</div>

<div class="m3-tabs tab-color:secondary">
  <button class="tab-item tab-active">Secondary</button>
  <button class="tab-item">탭 2</button>
</div>

<div class="m3-tabs tab-color:tertiary">
  <button class="tab-item tab-active">Tertiary</button>
  <button class="tab-item">탭 2</button>
</div>
</Demo>

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--tab-display` | `flex` | 컨테이너 display |
| `--tab-background` | `var(--color-surface)` | 배경색 |
| `--tab-border-bottom` | `0.0625rem solid var(--color-border-subtle)` | 하단 테두리 |
| `--tab-height` | `3rem` | 탭 높이 |
| `--tab-gap` | `0` | 탭 간 간격 |
| `--tab-overflow` | `auto` | 오버플로우 처리 |
| `--tab-item-padding` | `0 1.5rem` | 탭 항목 내부 여백 |
| `--tab-item-color` | `var(--color-text-muted)` | 비활성 탭 텍스트 색상 |
| `--tab-item-color-active` | `var(--color-primary)` | 활성 탭 텍스트 색상 |
| `--tab-item-font-size` | `0.875rem` | 글자 크기 |
| `--tab-item-font-weight` | `var(--font-weight-medium)` | 글자 굵기 |
| `--tab-item-flex` | `0 0 auto` | 탭 항목 flex 속성 |
| `--tab-item-gap` | `0.5rem` | 아이콘-텍스트 간격 |
| `--tab-icon-size` | `1.5rem` | 아이콘 크기 |
| `--tab-indicator-height` | `0.1875rem` | 인디케이터 높이 |
| `--tab-indicator-color` | `var(--color-primary)` | 인디케이터 색상 |
| `--tab-indicator-radius` | `0.1875rem 0.1875rem 0 0` | 인디케이터 모서리 |
| `--tab-state-hover-opacity` | `0.08` | 호버 상태 불투명도 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `tab-item` | 개별 탭 항목 |
| `tab-active` | 활성 탭 |
| `tabs:full` | 전체 너비 균등 분할 |
| `tabs:secondary` | Secondary 스타일 |
| `tabs:with-icon` | 아이콘 포함 탭 |
| `tab-color:primary` | Primary 색상 |
| `tab-color:secondary` | Secondary 색상 |
| `tab-color:tertiary` | Tertiary 색상 |

---

## Top App Bar

상단 앱 바는 현재 화면의 제목과 주요 액션을 표시합니다.

### 기본 사용법

<Demo>
<header class="m3-top-app-bar">
  <button class="bar-leading"><i class="m3-icon icon:menu"></i></button>
  <h1 class="bar-title">페이지 제목</h1>
  <div class="bar-trailing">
    <button><i class="m3-icon icon:search"></i></button>
    <button><i class="m3-icon icon:more_vert"></i></button>
  </div>
</header>
</Demo>

### Center 정렬

제목을 가운데 정렬합니다.

<Demo>
<header class="m3-top-app-bar bar:center">
  <button class="bar-leading"><i class="m3-icon icon:arrow_back"></i></button>
  <h1 class="bar-title">가운데 제목</h1>
  <div class="bar-trailing">
    <button><i class="m3-icon icon:more_vert"></i></button>
  </div>
</header>
</Demo>

### Elevated

그림자가 있는 앱 바입니다.

<Demo>
<header class="m3-top-app-bar bar:elevated">
  <button class="bar-leading"><i class="m3-icon icon:menu"></i></button>
  <h1 class="bar-title">Elevated 앱 바</h1>
</header>
</Demo>

### Outlined

하단 테두리가 있는 앱 바입니다.

<Demo>
<header class="m3-top-app-bar bar:outlined">
  <button class="bar-leading"><i class="m3-icon icon:menu"></i></button>
  <h1 class="bar-title">Outlined 앱 바</h1>
</header>
</Demo>

### 색상 변형

<Demo>
<header class="m3-top-app-bar bar-color:primary">
  <button class="bar-leading"><i class="m3-icon icon:menu"></i></button>
  <h1 class="bar-title">Primary 앱 바</h1>
</header>

<header class="m3-top-app-bar bar-color:surface">
  <button class="bar-leading"><i class="m3-icon icon:menu"></i></button>
  <h1 class="bar-title">Surface 앱 바</h1>
</header>

<header class="m3-top-app-bar bar-color:surface-1">
  <button class="bar-leading"><i class="m3-icon icon:menu"></i></button>
  <h1 class="bar-title">Surface 1 앱 바</h1>
</header>
</Demo>

### 상단 고정: bar:fixed

0.4.0 부터 `m3-top-app-bar` 는 기본이 `position: static` 입니다(배치는 페이지 셸이 결정). M3 의 상단 고정 동작이 필요하면 `bar:fixed` 를 붙입니다. `position: sticky; top: 0; z-index: var(--z-sticky)` 가 적용됩니다.

```html
<header class="m3-top-app-bar bar:fixed">
  <button class="bar-leading"><i class="m3-icon icon:menu"></i></button>
  <h1 class="bar-title">스크롤해도 상단에 남는 앱 바</h1>
</header>
```

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--bar-display` | `flex` | 컨테이너 display |
| `--bar-align-items` | `center` | 세로 정렬 |
| `--bar-background` | `var(--color-surface)` | 배경색 |
| `--bar-height` | `4rem` | 높이 |
| `--bar-padding` | `0 0.5rem` | 내부 여백 |
| `--bar-box-shadow` | `none` | 그림자 |
| `--bar-border-bottom` | `none` | 하단 테두리 |
| `--bar-color` | `var(--color-text)` | 텍스트 색상 |
| `--bar-position` | `static` | 포지션. `bar:fixed` 가 `sticky` 로 변경 |
| `--bar-top` | `auto` | 상단 위치. `bar:fixed` 가 `0` 으로 변경 |
| `--bar-z-index` | `auto` | z-index. `bar:fixed` 가 `var(--z-sticky)` 로 변경 |
| `--bar-title-size` | `1.375rem` | 제목 글자 크기 |
| `--bar-title-weight` | `400` | 제목 굵기 |
| `--bar-title-color` | `var(--color-text)` | 제목 색상 |
| `--bar-title-flex` | `1` | 제목 flex |
| `--bar-title-text-align` | `start` | 제목 정렬 |
| `--bar-icon-size` | `3rem` | 아이콘 버튼 크기 |
| `--bar-icon-color` | `var(--color-text)` | 아이콘 색상 |
| `--bar-icon-radius` | `50%` | 아이콘 버튼 모서리 |
| `--bar-trailing-gap` | `0` | 후행 아이콘 간격 |
| `--bar-state-hover-opacity` | `0.08` | 호버 상태 불투명도 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `bar-leading` | 선행 아이콘 (왼쪽) |
| `bar-title` | 제목 영역 |
| `bar-trailing` | 후행 아이콘 그룹 (오른쪽) |
| `bar:center` | 제목 가운데 정렬 |
| `bar:elevated` | Elevated 스타일 (그림자) |
| `bar:outlined` | Outlined 스타일 (하단 테두리) |
| `bar:fixed` | 상단 고정 (sticky, `--z-sticky`) |
| `bar-color:primary` | Primary 배경 색상 |
| `bar-color:surface` | Surface 배경 색상 |
| `bar-color:surface-1` | Surface 1 배경 색상 (`--color-surface-1`) |

---

## Navigation Bar

하단 내비게이션 바로, 3~5개 주요 목적지 간 이동에 사용합니다. 내부 아이템은 `m3-deco` 컴포넌트를 사용합니다.

### 기본 사용법

<Demo>
<nav class="m3-nav-bar">
  <a href="#" class="m3-deco icon:home deco-pos:top deco-active">홈</a>
  <a href="#" class="m3-deco icon:search deco-pos:top">검색</a>
  <a href="#" class="m3-deco icon:favorite deco-pos:top">즐겨찾기</a>
  <a href="#" class="m3-deco icon:person deco-pos:top">프로필</a>
</nav>
</Demo>

### 하단 고정: nav-bar:fixed

0.4.0 부터 `m3-nav-bar` 는 기본이 `position: static` 이라 문서 흐름 안에 놓입니다. M3 의 하단 고정 동작은 `nav-bar:fixed` 로 켭니다. `position: fixed; bottom: 0; left: 0; right: 0; z-index: var(--z-fixed)` 가 적용되므로 본문에 바 높이만큼 하단 여백을 주어야 합니다.

```html
<nav class="m3-nav-bar nav-bar:fixed">
  <a href="#" class="m3-deco icon:home deco-pos:top deco-active">홈</a>
  <a href="#" class="m3-deco icon:search deco-pos:top">검색</a>
  <a href="#" class="m3-deco icon:person deco-pos:top">프로필</a>
</nav>
```

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--nav-bar-height` | `5rem` | 바 높이 (80dp) |
| `--nav-bar-background` | `var(--color-surface)` | 배경색 |
| `--nav-bar-border-top` | `0.0625rem solid var(--color-border-subtle)` | 상단 테두리 |
| `--nav-bar-padding` | `0 0.5rem` | 내부 여백 |
| `--nav-bar-gap` | `0` | 아이템 간격 |
| `--nav-bar-box-shadow` | `none` | 그림자 |
| `--nav-bar-color` | `var(--color-text)` | 텍스트 색상 |
| `--nav-bar-position` | `static` | 포지션. `nav-bar:fixed` 가 `fixed` 로 변경 |
| `--nav-bar-bottom` | `auto` | 하단 위치. `nav-bar:fixed` 가 `0` 으로 변경 |
| `--nav-bar-left` | `auto` | 좌측 위치. `nav-bar:fixed` 가 `0` 으로 변경 |
| `--nav-bar-right` | `auto` | 우측 위치. `nav-bar:fixed` 가 `0` 으로 변경 |
| `--nav-bar-z-index` | `auto` | z-index. `nav-bar:fixed` 가 `var(--z-fixed)` 로 변경 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `nav-bar:fixed` | 하단 고정 (fixed, `--z-fixed`) |
| `nav-bar:elevated` | 테두리 대신 그림자 |

### 하위 클래스

| 클래스 | 설명 |
|--------|------|
| `m3-deco` | 내비게이션 아이템 (아이콘+텍스트) |
| `deco-pos:top` | 아이콘을 텍스트 위에 배치 |
| `deco-active` | 활성 상태 |

---

## Navigation Rail

세로 형태의 측면 내비게이션으로, 태블릿/데스크톱 화면에서 사용합니다. 상단에 FAB 버튼을 배치할 수 있습니다.

### 기본 사용법

<Demo>
<nav class="m3-nav-rail">
  <div class="rail-header">
    <button class="m3-fab fab:small"><i class="m3-icon icon:edit"></i></button>
  </div>
  <div class="rail-items">
    <a href="#" class="m3-deco icon:home deco-pos:top deco-active">홈</a>
    <a href="#" class="m3-deco icon:search deco-pos:top">검색</a>
    <a href="#" class="m3-deco icon:favorite deco-pos:top">즐겨찾기</a>
    <a href="#" class="m3-deco icon:settings deco-pos:top">설정</a>
  </div>
</nav>
</Demo>

### 좌측 고정: rail:fixed

0.4.0 부터 `m3-nav-rail` 은 기본이 `position: static` 입니다. M3 의 좌측 가장자리 고정 동작은 `rail:fixed` 로 켭니다. `position: fixed; top: 0; left: 0; bottom: 0; z-index: var(--z-fixed)` 가 적용되므로 본문에 레일 너비만큼 좌측 여백을 주어야 합니다. `m3-layout` 안에서 `layout-rail` 로 쓸 때는 레이아웃이 직접 고정하므로 이 옵션이 필요 없습니다.

```html
<nav class="m3-nav-rail rail:fixed">
  <div class="rail-items">
    <a href="#" class="m3-deco icon:home deco-pos:top deco-active">홈</a>
    <a href="#" class="m3-deco icon:search deco-pos:top">검색</a>
  </div>
</nav>
```

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--rail-width` | `5rem` | 레일 너비 (80dp) |
| `--rail-background` | `var(--color-surface)` | 배경색 |
| `--rail-border-right` | `0.0625rem solid var(--color-border-subtle)` | 우측 테두리 |
| `--rail-padding` | `0.75rem 0` | 내부 여백 |
| `--rail-box-shadow` | `none` | 그림자 |
| `--rail-color` | `var(--color-text)` | 텍스트 색상 |
| `--rail-position` | `static` | 포지션. `rail:fixed` 가 `fixed` 로 변경 |
| `--rail-top` | `auto` | 상단 위치. `rail:fixed` 가 `0` 으로 변경 |
| `--rail-left` | `auto` | 좌측 위치. `rail:fixed` 가 `0` 으로 변경 |
| `--rail-bottom` | `auto` | 하단 위치. `rail:fixed` 가 `0` 으로 변경 |
| `--rail-z-index` | `auto` | z-index. `rail:fixed` 가 `var(--z-fixed)` 로 변경 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `rail:fixed` | 좌측 고정 (fixed, `--z-fixed`) |
| `rail:elevated` | 테두리 대신 그림자 |

### 하위 클래스

| 클래스 | 설명 |
|--------|------|
| `rail-header` | 상단 영역 (FAB 배치) |
| `rail-items` | 내비게이션 아이템 목록 영역 |

---

## Navigation Drawer

측면 서랍 내비게이션으로, 많은 메뉴 항목을 계층적으로 구성할 수 있습니다.

### Standard (기본)

<Demo>
<nav class="m3-nav-drawer">
  <div class="drawer-header">
    <h2 class="drawer-headline">메뉴</h2>
  </div>
  <div class="drawer-content">
    <a href="#" class="drawer-item drawer-item-active">
      <i class="m3-icon icon:home"></i>
      <span class="drawer-label">홈</span>
    </a>
    <a href="#" class="drawer-item">
      <i class="m3-icon icon:email"></i>
      <span class="drawer-label">메일</span>
    </a>
    <a href="#" class="drawer-item">
      <i class="m3-icon" data-icon="calendar_today"></i>
      <span class="drawer-label">일정</span>
    </a>
  </div>
</nav>
</Demo>

### 섹션과 구분선

<Demo>
<nav class="m3-nav-drawer">
  <div class="drawer-content">
    <a href="#" class="drawer-item drawer-item-active">
      <i class="m3-icon icon:home"></i>
      <span class="drawer-label">홈</span>
    </a>
    <a href="#" class="drawer-item">
      <i class="m3-icon icon:email"></i>
      <span class="drawer-label">메일</span>
    </a>

    <hr class="m3-divider">
    <span class="drawer-section-header">설정</span>

    <a href="#" class="drawer-item">
      <i class="m3-icon icon:settings"></i>
      <span class="drawer-label">환경설정</span>
    </a>
    <a href="#" class="drawer-item">
      <i class="m3-icon icon:help"></i>
      <span class="drawer-label">도움말</span>
    </a>
  </div>
</nav>
</Demo>

### Modal Drawer

오버레이로 표시되는 모달 타입입니다. `drawer-open`으로 열고 닫습니다.

<Demo>
<nav class="m3-nav-drawer drawer:modal drawer-open">
  <div class="drawer-header">
    <h2 class="drawer-headline">메뉴</h2>
  </div>
  <div class="drawer-content">
    <a href="#" class="drawer-item drawer-item-active">
      <i class="m3-icon icon:home"></i>
      <span class="drawer-label">홈</span>
    </a>
    <a href="#" class="drawer-item">
      <i class="m3-icon icon:settings"></i>
      <span class="drawer-label">설정</span>
    </a>
  </div>
</nav>
</Demo>

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--drawer-width` | `22.5rem` | 서랍 너비 (360dp) |
| `--drawer-background` | `var(--color-surface)` | 배경색 |
| `--drawer-border-right` | `0.0625rem solid var(--color-border-subtle)` | 우측 테두리 |
| `--drawer-padding` | `0.75rem 0` | 내부 여백 |
| `--drawer-box-shadow` | `none` | 그림자 |
| `--drawer-color` | `var(--color-text)` | 텍스트 색상 |
| `--drawer-z-index` | `var(--z-fixed)` | z-index |
| `--drawer-headline-font-size` | `0.875rem` | 헤드라인 글자 크기 |
| `--drawer-headline-font-weight` | `600` | 헤드라인 굵기 |
| `--drawer-headline-color` | `var(--color-text-muted)` | 헤드라인 색상 |
| `--drawer-headline-padding` | `1rem 1.75rem 0.5rem` | 헤드라인 여백 |
| `--drawer-headline-letter-spacing` | `0.0625rem` | 헤드라인 자간 |
| `--drawer-item-active-background` | `var(--color-primary-subtle)` | 활성 항목 배경 |
| `--drawer-item-active-color` | `var(--color-primary)` | 활성 항목 색상 |
| `--drawer-item-active-icon-color` | `var(--color-primary)` | 활성 항목 아이콘 색상 |
| `--drawer-item-active-font-weight` | `700` | 활성 항목 굵기 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `drawer:modal` | 모달 타입 (오버레이) |
| `drawer-open` | 서랍 열기 |
| `drawer-header` | 헤더 영역 |
| `drawer-headline` | 헤드라인 텍스트 |
| `drawer-content` | 콘텐츠 영역 |
| `drawer-item` | 메뉴 항목 |
| `drawer-item-active` | 활성 메뉴 항목 |
| `drawer-label` | 메뉴 항목 라벨 텍스트 |
| `drawer-section-header` | 섹션 구분 헤더 |

---

## Menu

메뉴는 임시로 표시되는 옵션 목록입니다.

### 기본 사용법

<Demo>
<div class="m3-menu menu-open">
  <button class="menu-item">
    <span class="menu-label">복사</span>
  </button>
  <button class="menu-item">
    <span class="menu-label">붙여넣기</span>
  </button>
  <button class="menu-item">
    <span class="menu-label">삭제</span>
  </button>
</div>
</Demo>

### 아이콘이 있는 메뉴

<Demo>
<div class="m3-menu menu-open">
  <button class="menu-item">
    <i class="m3-icon icon:edit"></i>
    <span class="menu-label">수정</span>
  </button>
  <button class="menu-item">
    <i class="m3-icon icon:copy"></i>
    <span class="menu-label">복사</span>
  </button>
  <button class="menu-item">
    <i class="m3-icon icon:delete"></i>
    <span class="menu-label">삭제</span>
  </button>
</div>
</Demo>

### 구분선과 비활성 항목

<Demo>
<div class="m3-menu menu-open">
  <button class="menu-item">
    <i class="m3-icon icon:edit"></i>
    <span class="menu-label">수정</span>
  </button>
  <hr class="menu-divider">
  <button class="menu-item">
    <i class="m3-icon icon:share"></i>
    <span class="menu-label">공유</span>
  </button>
  <button class="menu-item menu-item-disabled">
    <i class="m3-icon" data-icon="archive"></i>
    <span class="menu-label">보관 (비활성)</span>
  </button>
</div>
</Demo>

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--menu-background` | `var(--color-surface)` | 배경색 |
| `--menu-border-radius` | `0.25rem` | 모서리 둥글기 |
| `--menu-box-shadow` | `var(--shadow-md)` | 그림자 |
| `--menu-padding` | `0.5rem 0` | 내부 여백 |
| `--menu-min-width` | `7rem` | 최소 너비 |
| `--menu-max-width` | `17.5rem` | 최대 너비 |
| `--menu-z-index` | `var(--z-dropdown)` | z-index |
| `--menu-border` | `none` | 테두리 |
| `--menu-color` | `var(--color-text)` | 텍스트 색상 |
| `--menu-item-height` | `3rem` | 항목 높이 |
| `--menu-item-padding` | `0 0.75rem` | 항목 내부 여백 |
| `--menu-item-color` | `var(--color-text)` | 항목 색상 |
| `--menu-item-font-size` | `0.875rem` | 항목 글자 크기 |
| `--menu-item-gap` | `0.75rem` | 아이콘-라벨 간격 |
| `--menu-item-border-radius` | `0` | 항목 모서리 |
| `--menu-item-background` | `transparent` | 항목 배경 |
| `--menu-divider-color` | `var(--color-border-subtle)` | 구분선 색상 |
| `--menu-divider-margin` | `0.5rem 0` | 구분선 여백 |
| `--menu-divider-height` | `0.0625rem` | 구분선 두께 |
| `--menu-item-disabled-opacity` | `0.38` | 비활성 불투명도 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `menu-open` | 메뉴 표시 |
| `menu-item` | 메뉴 항목 |
| `menu-label` | 항목 라벨 텍스트 |
| `menu-divider` | 구분선 |
| `menu-item-disabled` | 비활성 항목 |

---

## List

리스트는 관련 항목들을 세로로 나열합니다.

### 기본 사용법

<Demo>
<ul class="m3-list">
  <li class="list-item">항목 1</li>
  <li class="list-item">항목 2</li>
  <li class="list-item">항목 3</li>
</ul>
</Demo>

### Leading/Trailing 아이콘

<Demo>
<ul class="m3-list">
  <li class="list-item">
    <i class="m3-icon list-leading" data-icon="inbox"></i>
    <span>받은편지함</span>
    <span class="list-trailing">24</span>
  </li>
  <li class="list-item">
    <i class="m3-icon icon:send list-leading"></i>
    <span>보낸편지함</span>
    <span class="list-trailing">5</span>
  </li>
  <li class="list-item">
    <i class="m3-icon list-leading" data-icon="drafts"></i>
    <span>임시보관함</span>
  </li>
</ul>
</Demo>

### 아바타 리스트

<Demo>
<ul class="m3-list">
  <li class="list-item">
    <div class="list-avatar">A</div>
    <div>
      <div>홍길동</div>
      <div class="list-supporting">hong@example.com</div>
    </div>
  </li>
  <li class="list-item">
    <div class="list-avatar">
      <img src="https://picsum.photos/seed/avatar/80/80" alt="프로필">
    </div>
    <div>
      <div>김철수</div>
      <div class="list-supporting">kim@example.com</div>
    </div>
  </li>
</ul>
</Demo>

### 클릭 가능한 항목

<Demo>
<ul class="m3-list">
  <li class="list-item list-clickable">클릭 가능한 항목</li>
  <li class="list-item list-clickable list-active">활성 상태 항목</li>
  <li class="list-item list-disabled">비활성 항목</li>
</ul>
</Demo>

### 구분선

<Demo>
<ul class="m3-list">
  <li class="list-item">항목 1</li>
  <li class="list-item">항목 2</li>
  <hr class="list-divider">
  <li class="list-item">항목 3</li>
  <li class="list-item">항목 4</li>
  <hr class="list-divider list-divider:inset">
  <li class="list-item">항목 5</li>
</ul>
</Demo>

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--list-display` | `flex` | 컨테이너 display |
| `--list-flex-direction` | `column` | 배치 방향 |
| `--list-background` | `transparent` | 배경색 |
| `--list-padding` | `0.5rem 0` | 내부 여백 |
| `--list-gap` | `0` | 항목 간 간격 |
| `--list-item-padding` | `0.5rem 1rem` | 항목 내부 여백 |
| `--list-item-min-height` | `3rem` | 항목 최소 높이 |
| `--list-item-color` | `var(--color-text)` | 항목 텍스트 색상 |
| `--list-item-font-size` | `1rem` | 항목 글자 크기 |
| `--list-item-font-weight` | `400` | 항목 글자 굵기 |
| `--list-item-line-height` | `1.5rem` | 항목 줄 높이 |
| `--list-item-cursor` | `default` | 커서 |
| `--list-item-background` | `transparent` | 항목 배경 |
| `--list-item-gap` | `1rem` | 항목 내 요소 간격 |
| `--list-secondary-size` | `0.875rem` | 보조 텍스트 크기 |
| `--list-secondary-color` | `var(--color-text-muted)` | 보조 텍스트 색상 |
| `--list-leading-size` | `1.5rem` | Leading 아이콘 크기 |
| `--list-leading-color` | `var(--color-text-muted)` | Leading 아이콘 색상 |
| `--list-avatar-size` | `2.5rem` | 아바타 크기 |
| `--list-avatar-background` | `var(--color-primary-subtle)` | 아바타 배경 |
| `--list-avatar-color` | `var(--color-primary)` | 아바타 텍스트 색상 |
| `--list-avatar-font-weight` | `600` | 아바타 글자 굵기 |
| `--list-avatar-border-radius` | `50%` | 아바타 모서리 |
| `--list-divider-color` | `var(--color-border-subtle)` | 구분선 색상 |
| `--list-divider-width` | `0.0625rem` | 구분선 두께 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `list-item` | 리스트 항목 |
| `list-leading` | 선행 요소 (아이콘) |
| `list-trailing` | 후행 요소 |
| `list-avatar` | 아바타 |
| `list-supporting` | 보조 텍스트 (`--list-secondary-*` 변수 사용) |
| `list-clickable` | 클릭 가능한 항목 |
| `list-active` | 활성 상태 |
| `list-disabled` | 비활성 상태 |
| `list-divider` | 구분선 |
| `list-divider:inset` | 인셋 구분선 |
| `list-divider:full` | 전체 너비 구분선 |

## m3-pager (페이지네이션, newtil 확장)

M3 스펙에는 페이지네이션이 없습니다. 목록 아래 "이전 · 1 2 3 · 다음"을 표준화한 newtil 확장입니다. 현재 페이지는 `aria-current="page"`, 비활성은 `aria-disabled="true"` 로 표시합니다.

### 기본 사용법

<Demo>
<nav class="m3-pager" aria-label="페이지">
  <a class="pager-item pager-prev" href="#" aria-disabled="true">이전</a>
  <a class="pager-item" href="#" aria-current="page">1</a>
  <a class="pager-item" href="#">2</a>
  <a class="pager-item" href="#">3</a>
  <span class="pager-ellipsis">…</span>
  <a class="pager-item" href="#">12</a>
  <a class="pager-item pager-next" href="#">다음</a>
</nav>
</Demo>

### 옵션

| 클래스 | 설명 |
|---|---|
| `pager:text` | 테두리 없는 형태 |
| `pager-align:start` / `center` / `end` | 정렬 (기본 center) |
| `pager-size:sm` / `md` / `lg` | 항목 높이 32 / 36 / 40px (기본 md) |

<Demo>
<nav class="m3-pager pager:text pager-align:end pager-size:sm" aria-label="페이지">
  <a class="pager-item" href="#">이전</a>
  <a class="pager-item" href="#" aria-current="page">1</a>
  <a class="pager-item" href="#">2</a>
  <a class="pager-item" href="#">다음</a>
</nav>
</Demo>

### 변수 API

| 변수 | 기본값 | 설명 |
|---|---|---|
| `--pager-item-height` | `2.25rem` | 항목 높이 |
| `--pager-item-border-radius` | `var(--radius-3)` | 모서리 |
| `--pager-current-background` / `--pager-current-color` | `--color-text` / `--color-surface` | 현재 페이지 색 |
| `--pager-gap` | `0.375rem` | 항목 간격 |

## m3-breadcrumb (현재 위치, newtil 확장)

경로 링크를 나란히 놓고 구분 기호는 CSS 가 그립니다. 마지막 항목에 `aria-current="page"`.

<Demo>
<nav class="m3-breadcrumb" aria-label="현재 위치">
  <a href="#">홈</a>
  <a href="#">메뉴</a>
  <a href="#">커피</a>
  <span aria-current="page">카페라떼</span>
</nav>
<nav class="m3-breadcrumb breadcrumb-separator:chevron breadcrumb-size:sm" aria-label="현재 위치">
  <a href="#">관리자</a>
  <a href="#">메뉴 관리</a>
  <span aria-current="page">새 메뉴</span>
</nav>
</Demo>

| 클래스 | 설명 |
|---|---|
| `breadcrumb-separator:slash` (기본) / `chevron` / `dot` | 구분 기호 `/` `›` `·` |
| `breadcrumb-size:sm` / `md` (기본) | 글자·간격 |

