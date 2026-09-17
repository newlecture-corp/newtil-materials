# Containment (컨테이너)

화면 콘텐츠를 담아 표시하는 컨테이너 컴포넌트 모음입니다.

## Card

카드는 관련 콘텐츠와 액션을 하나의 영역으로 묶어 표시합니다.

### 기본 사용법

<Demo>
<div class="m3-card">
  <div class="card-header">
    <h3 class="card-headline">카드 제목</h3>
    <p class="card-subhead">부제목</p>
  </div>
  <div class="card-content">
    <p>카드 본문 텍스트입니다.</p>
  </div>
</div>
</Demo>

### 미디어가 포함된 카드

<Demo>
<div class="m3-card">
  <div class="card-media">
    <img src="https://picsum.photos/seed/demo/400/200" alt="사진">
  </div>
  <div class="card-header">
    <h3 class="card-headline">미디어 카드</h3>
    <p class="card-subhead">부제목 텍스트</p>
  </div>
  <div class="card-content">
    <p>설명 텍스트가 들어갑니다.</p>
  </div>
  <div class="card-actions">
    <button class="m3-btn btn:text">취소</button>
    <button class="m3-btn">확인</button>
  </div>
</div>
</Demo>

### 미디어 비율과 오버레이 배지

이미지 크기가 제각각인 상품 카드는 `card-media:square|landscape|video|wide`(1:1 · 4:3 · 16:9 · 2:1) 로 비율을 고정합니다. 상품 목록 썸네일은 `landscape` 가 정사각보다 카드를 덜 껑충하게 만듭니다. 이미지 위 상태 표시는 `card-media` 안에 `card-media-badge` 로 둡니다(기본 왼쪽 위, `card-media-badge:end` 는 오른쪽 위).

<Demo>
<div class="m3-card card:outlined" style="width: 14rem;">
  <div class="card-media card-media:square">
    <img src="https://picsum.photos/seed/latte/400/300" alt="">
    <span class="m3-badge badge:inline badge-color:neutral card-media-badge">품절</span>
  </div>
  <div class="card-content">
    <h3 class="card-headline">카페라떼</h3>
  </div>
</div>
</Demo>

### 카드 타입

<Demo>
<!-- Elevated (기본) -->
<div class="m3-card"><div class="card-content">Elevated (기본)</div></div>
<div class="m3-card card:elevated"><div class="card-content">Elevated</div></div>

<!-- Filled -->
<div class="m3-card card:filled"><div class="card-content">Filled</div></div>

<!-- Outlined -->
<div class="m3-card card:outlined"><div class="card-content">Outlined</div></div>
</Demo>

### 호버 효과 활성화

기본 카드에는 호버 효과가 없습니다. `card-hover:enabled`를 추가하면 마우스 오버 시 그림자가 변합니다.

<Demo>
<div class="m3-card card-hover:enabled">
  <div class="card-content">호버 효과가 있는 카드</div>
</div>

<div class="m3-card card:filled card-hover:enabled">
  <div class="card-content">Filled + 호버</div>
</div>

<div class="m3-card card:outlined card-hover:enabled">
  <div class="card-content">Outlined + 호버</div>
</div>
</Demo>

### 클릭 가능한 카드

<Demo>
<a href="/detail" class="m3-card card-clickable">
  <div class="card-header">
    <h3 class="card-headline">클릭 가능한 카드</h3>
  </div>
  <div class="card-content">
    <p>카드 전체를 클릭할 수 있습니다.</p>
  </div>
</a>
</Demo>

### 아바타가 있는 헤더

<Demo>
<div class="m3-card">
  <div class="card-header">
    <div class="card-avatar">A</div>
    <div>
      <h3 class="card-headline">사용자 이름</h3>
      <p class="card-subhead">2일 전</p>
    </div>
  </div>
  <div class="card-content">
    <p>아바타와 함께 표시되는 카드 콘텐츠입니다.</p>
  </div>
</div>
</Demo>

### 수평 레이아웃

<Demo>
<div class="m3-card card-layout:horizontal">
  <div class="card-media">
    <img src="https://picsum.photos/seed/thumb/200/200" alt="썸네일">
  </div>
  <div class="card-content">
    <h3 class="card-headline">수평 카드</h3>
    <p>미디어가 왼쪽에 배치됩니다.</p>
  </div>
</div>
</Demo>

### 사이즈

<Demo>
<div class="m3-card card-size:compact">작은 카드</div>
<div class="m3-card card-size:large">큰 카드</div>
</Demo>

### 슬롯 없이 쓰기

`card-header` 같은 슬롯을 쓰지 않고 카드 안을 직접 채울 때는 `card-padding:self` 를 붙입니다. 기본 상태에서는 여백이 슬롯에 있어 카드 자체에는 여백이 없습니다.

<Demo>
<div class="m3-card card:outlined card-padding:self">
  <h3>직접 채운 카드</h3>
  <p>슬롯 없이 아무 요소나 넣는다. 여백은 --card-padding-x/y 를 따른다.</p>
</div>
</Demo>

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--card-background` | `var(--color-surface-1)` | 카드 배경색 |
| `--card-width` | `auto` | 카드 너비 |
| `--card-height` | `auto` | 카드 높이 |
| `--card-border` | `none` | 카드 테두리 |
| `--card-border-radius` | `0.75rem` | 모서리 둥글기 |
| `--card-box-shadow` | `var(--shadow-sm)` | 그림자 |
| `--card-opacity` | `1` | 불투명도 |
| `--card-color` | `var(--color-text)` | 텍스트 색상 |
| `--card-overflow` | `hidden` | 오버플로우 처리 |
| `--card-flex-direction` | `column` | 레이아웃 방향 |
| `--card-padding-x` | `1rem` | 슬롯(`card-header`·`card-content`·`card-actions`)의 좌우 여백. 카드 자체는 여백이 없다 — 카드에 직접 주려면 `card-padding:self` |
| `--card-padding-y` | `1rem` | 슬롯의 상하 여백 (위와 같음) |
| `--card-header-gap` | `1rem` | 헤더 내 간격 |
| `--card-headline-size` | `1.5rem` | 헤드라인 글자 크기 |
| `--card-headline-weight` | `400` | 헤드라인 굵기 |
| `--card-headline-color` | `var(--color-text)` | 헤드라인 색상 |
| `--card-subhead-size` | `0.875rem` | 서브헤드 글자 크기 |
| `--card-subhead-color` | `var(--color-text-muted)` | 서브헤드 색상 |
| `--card-supporting-size` | `0.875rem` | 본문 글자 크기 |
| `--card-supporting-color` | `var(--color-text-muted)` | 본문 색상 |
| `--card-avatar-size` | `2.5rem` | 아바타 크기 |
| `--card-avatar-radius` | `50%` | 아바타 모서리 |
| `--card-avatar-background` | `var(--color-primary-subtle)` | 아바타 배경 |
| `--card-avatar-color` | `var(--color-primary)` | 아바타 텍스트 색상 |
| `--card-media-height` | `auto` | 미디어 높이 |
| `--card-media-object-fit` | `cover` | 미디어 맞춤 방식 |
| `--card-actions-gap` | `0.5rem` | 액션 버튼 간격 |
| `--card-elevation-hover` | `var(--shadow-sm)` | 호버 시 그림자 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `card:elevated` | Elevated 타입 (기본) |
| `card:filled` | Filled 타입 |
| `card:outlined` | Outlined 타입 |
| `card-hover:enabled` | 호버 효과 활성화 |
| `card-clickable` | 클릭 가능한 카드 |
| `card-layout:horizontal` | 수평 레이아웃 |
| `card-size:compact` | 작은 사이즈 |
| `card-size:large` | 큰 사이즈 |
| `card-padding:self` | 카드 자체에 여백. 슬롯 없이 안을 직접 채울 때 (슬롯 여백은 0) |
| `card-state:hovered` | 호버 상태 강제 |
| `card-state:focused` | 포커스 상태 강제 |
| `card-state:pressed` | 눌린 상태 강제 |
| `card-state:disabled` | 비활성 상태 |
| `card-state:dragged` | 드래그 상태 |

---

## Dialog

다이얼로그는 사용자의 주의를 끌고 중요한 정보를 전달하거나 결정을 요청합니다.

### 기본 사용법

<Demo>
<dialog class="m3-dialog" open>
  <h2 class="dialog-headline">제목</h2>
  <div class="dialog-content">
    다이얼로그 본문 텍스트입니다. 사용자에게 전달할 내용을 작성합니다.
  </div>
  <div class="dialog-actions">
    <button class="m3-btn btn:text">취소</button>
    <button class="m3-btn btn:text">확인</button>
  </div>
</dialog>
</Demo>

### 아이콘이 있는 다이얼로그

<Demo>
<dialog class="m3-dialog" open>
  <div class="dialog-icon">
    <i class="m3-icon" data-icon="warning"></i>
  </div>
  <h2 class="dialog-headline">삭제 확인</h2>
  <div class="dialog-content">
    이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
  </div>
  <div class="dialog-actions">
    <button class="m3-btn btn:text">취소</button>
    <button class="m3-btn btn:text">삭제</button>
  </div>
</dialog>
</Demo>

### 열기/닫기

JavaScript를 사용하여 `<dialog>` 요소의 `open` 속성을 제어합니다.

<Demo>
<button class="m3-btn" onclick="document.getElementById('myDialog').showModal()">
  다이얼로그 열기
</button>

<dialog id="myDialog" class="m3-dialog">
  <h2 class="dialog-headline">안내</h2>
  <div class="dialog-content">내용을 입력합니다.</div>
  <div class="dialog-actions">
    <button class="m3-btn btn:text" onclick="document.getElementById('myDialog').close()">닫기</button>
  </div>
</dialog>
</Demo>

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--dialog-background` | `var(--color-surface-2)` | 배경색 |
| `--dialog-border-radius` | `1.75rem` | 모서리 둥글기 |
| `--dialog-padding` | `1.5rem` | 내부 여백 |
| `--dialog-min-width` | `17.5rem` | 최소 너비 |
| `--dialog-max-width` | `35rem` | 최대 너비 |
| `--dialog-color` | `var(--color-text-muted)` | 텍스트 색상 |
| `--dialog-border` | `none` | 테두리 |
| `--dialog-box-shadow` | `var(--shadow-lg)` | 그림자 |
| `--dialog-scrim-color` | `var(--color-scrim)` | 배경 딤(scrim) 색상 |
| `--dialog-z-index` | `var(--z-modal)` | z-index |
| `--dialog-headline-color` | `var(--color-text)` | 제목 색상 |
| `--dialog-headline-size` | `1.5rem` | 제목 글자 크기 |
| `--dialog-headline-weight` | `var(--font-weight-regular)` | 제목 굵기 |
| `--dialog-content-color` | `var(--color-text-muted)` | 본문 색상 |
| `--dialog-content-size` | `0.875rem` | 본문 글자 크기 |
| `--dialog-actions-gap` | `0.5rem` | 액션 버튼 간격 |
| `--dialog-icon-color` | `var(--color-primary)` | 아이콘 색상 |
| `--dialog-icon-size` | `1.5rem` | 아이콘 크기 |

### 하위 클래스

| 클래스 | 설명 |
|--------|------|
| `dialog-headline` | 다이얼로그 제목 |
| `dialog-content` | 본문 내용 영역 |
| `dialog-actions` | 하단 액션 버튼 영역 |
| `dialog-icon` | 상단 아이콘 영역 |

---

## Bottom Sheet

화면 하단에서 올라오는 시트로 추가 콘텐츠나 액션을 표시합니다.

### 기본 사용법 (Standard)

<Demo>
<div class="m3-bottom-sheet sheet-open">
  <div class="sheet-drag-handle"></div>
  <div class="sheet-content">
    <h3 class="sheet-headline">시트 제목</h3>
    <p>시트 본문 내용입니다.</p>
  </div>
</div>
</Demo>

### Modal Bottom Sheet

배경에 scrim(딤 처리)이 적용되는 모달 타입입니다.

<Demo>
<div class="m3-bottom-sheet sheet:modal sheet-open">
  <div class="sheet-drag-handle"></div>
  <div class="sheet-content">
    <h3 class="sheet-headline">모달 시트</h3>
    <p>배경을 탭하면 닫히는 모달 시트입니다.</p>
    <button class="m3-btn">확인</button>
  </div>
</div>
</Demo>

### 드래그 핸들

`sheet-drag-handle`을 추가하면 시트 상단에 드래그 핸들이 표시됩니다.

<Demo>
<div class="m3-bottom-sheet sheet-open">
  <div class="sheet-drag-handle"></div>
  <div class="sheet-content">
    <p>드래그 핸들을 잡아 시트를 위아래로 조절할 수 있습니다.</p>
  </div>
</div>
</Demo>

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--sheet-background` | `var(--color-surface)` | 시트 배경색 |
| `--sheet-border-radius` | `1.75rem 1.75rem 0 0` | 상단 모서리 둥글기 |
| `--sheet-max-height` | `80vh` | 최대 높이 |
| `--sheet-z-index` | `var(--z-modal)` | z-index |
| `--sheet-box-shadow` | `var(--shadow-lg)` | 그림자 |
| `--sheet-padding` | `0` | 내부 여백 |
| `--sheet-border` | `none` | 테두리 |
| `--sheet-color` | `var(--color-text)` | 텍스트 색상 |
| `--sheet-bottom` | `0` | 하단 위치 |
| `--sheet-left` | `0` | 좌측 위치 |
| `--sheet-width` | `100%` | 너비 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `sheet-open` | 시트 표시 |
| `sheet:modal` | 모달 타입 (scrim 배경) |
| `sheet-drag-handle` | 드래그 핸들 요소 |
| `sheet-content` | 콘텐츠 영역 |
| `sheet-headline` | 시트 제목 |

---

## Chips

칩은 입력, 속성, 액션을 간결하게 표현하는 소형 컴포넌트입니다.

### 기본 사용법

<Demo>
<span class="m3-chip">기본 칩</span>
<span class="m3-chip">필터</span>
<span class="m3-chip">태그</span>
</Demo>

### 선택된 칩

<Demo>
<span class="m3-chip chip:selected">선택됨</span>
<span class="m3-chip">미선택</span>
</Demo>

### Elevated 칩

<Demo>
<span class="m3-chip chip:elevated">Elevated 칩</span>
</Demo>

### 닫기 버튼이 있는 칩

<Demo>
<span class="m3-chip chip:selected">
  태그 이름
  <button class="chip-close"><i class="m3-icon icon:close"></i></button>
</span>
</Demo>

### 색상 변형

색상 클래스는 `chip:selected` 상태에서 적용됩니다.

<Demo>
<span class="m3-chip chip:selected chip-color:primary">Primary</span>
<span class="m3-chip chip:selected chip-color:secondary">Secondary</span>
<span class="m3-chip chip:selected chip-color:danger">Danger</span>
<span class="m3-chip chip:selected chip-color:success">Success</span>
<span class="m3-chip chip:selected chip-color:warning">Warning</span>
</Demo>

### 비활성 칩

<Demo>
<span class="m3-chip chip-state:disabled">비활성 칩</span>
</Demo>

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--chip-height` | `2rem` | 칩 높이 |
| `--chip-padding` | `0 0.75rem` | 내부 여백 |
| `--chip-gap` | `0.5rem` | 내부 요소 간격 |
| `--chip-border-radius` | `0.5rem` | 모서리 둥글기 |
| `--chip-background` | `transparent` | 배경색 |
| `--chip-color` | `var(--color-text)` | 텍스트 색상 |
| `--chip-border` | `0.0625rem solid var(--color-border)` | 테두리 |
| `--chip-font-size` | `0.875rem` | 글자 크기 |
| `--chip-font-weight` | `var(--font-weight-medium)` | 글자 굵기 |
| `--chip-box-shadow` | `none` | 그림자 |
| `--chip-icon-size` | `1.125rem` | 아이콘 크기 |
| `--chip-close-radius` | `50%` | 닫기 버튼 모서리 |
| `--chip-close-background` | `transparent` | 닫기 버튼 배경 |
| `--chip-selected-background` | `var(--color-primary-subtle)` | 선택 시 배경색 |
| `--chip-selected-color` | `var(--color-primary)` | 선택 시 텍스트 색상 |
| `--chip-state-hover-opacity` | `0.08` | 호버 상태 레이어 불투명도 |
| `--chip-state-pressed-opacity` | `0.12` | 누름 상태 레이어 불투명도 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `chip:selected` | 선택 상태 |
| `chip:elevated` | Elevated 스타일 (그림자) |
| `chip-state:disabled` | 비활성 상태 |
| `chip-color:primary` | Primary 색상 |
| `chip-color:secondary` | Secondary 색상 |
| `chip-color:danger` | Danger 색상 |
| `chip-color:success` | Success 색상 |
| `chip-color:warning` | Warning 색상 |
| `chip-close` | 닫기 버튼 (하위 요소) |

## m3-toolbar (목록 툴바, newtil 확장)

목록·표 위의 한 줄. 왼쪽 정보(건수·선택 상태), 오른쪽 동작(정렬·필터). `toolbar:fill` 은 필터 바처럼 입력 여러 개를 한 줄에 놓을 때, `.toolbar-grow` 가 남은 폭을 채웁니다.

<Demo>
<div class="m3-toolbar">
  <div class="toolbar-start">총 <strong>31</strong>개의 메뉴</div>
  <div class="toolbar-end">
    <div class="m3-text-field field:outlined field-label:none"><select><option>인기순</option><option>최신순</option></select></div>
  </div>
</div>
<form class="m3-toolbar toolbar:fill">
  <div class="m3-text-field field:outlined field-label:none"><select><option>전체 카테고리</option></select></div>
  <div class="m3-text-field field:outlined field-label:none toolbar-grow"><input type="search" placeholder="메뉴 이름 검색"></div>
  <button type="button" class="m3-btn btn:outlined">검색</button>
</form>
</Demo>

| 클래스 | 설명 |
|---|---|
| `toolbar:fill` | 자식을 왼쪽부터 나란히, `.toolbar-grow` 가 늘어남 |
| `toolbar:card` | 카드 상단 줄(안쪽 여백 + 아래 테두리) |

## m3-grid (격자 배치, newtil 확장)

카드·항목을 반응형 격자로 놓는 콘텐츠 블록입니다. 안에 무엇이 들어가든 격자만 책임집니다. 넓은 화면의 열 수를 옵션으로 정하면 1024px 이하에서 한 단계, 640px 이하에서 1열로 줄어듭니다.

### 기본 사용법

<Demo>
<ul class="m3-grid grid-cols:3">
  <li class="m3-card card:outlined card-padding:self">카드 1</li>
  <li class="m3-card card:outlined card-padding:self">카드 2</li>
  <li class="m3-card card:outlined card-padding:self">카드 3</li>
  <li class="m3-card card:outlined card-padding:self">카드 4</li>
  <li class="m3-card card:outlined card-padding:self">카드 5</li>
  <li class="m3-card card:outlined card-padding:self">카드 6</li>
</ul>
</Demo>

### 옵션

| 클래스 | 설명 |
|---|---|
| `grid-cols:1`~`6` | 넓은 화면 열 수 |
| `grid-cols:auto` | `--grid-min`(기본 16rem) 이상으로 들어가는 만큼 자동 |
| `grid-gap:1`~`5` | 간격 단계 (space 토큰 2·3·5·6·8) |
| `md:grid-cols:N` / `sm:grid-cols:N` | 1024px / 640px 이하 열 수 직접 지정 |

### 변수 API

| 변수 | 기본값 | 설명 |
|---|---|---|
| `--grid-cols` / `--grid-cols-md` / `--grid-cols-sm` | `3` / `2` / `1` | 화면 크기별 열 수 |
| `--grid-gap` | `var(--space-6)` | 간격 |
| `--grid-min` | `16rem` | `grid-cols:auto` 의 최소 열 너비 |
