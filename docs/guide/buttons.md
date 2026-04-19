# 버튼

Material Design 3 스펙에 맞춘 버튼 컴포넌트입니다. 일반 버튼(`m3-btn`), FAB(`m3-fab`), 아이콘 버튼(`m3-icon-btn`) 세 가지 유형을 제공합니다.

## m3-btn (일반 버튼)

### 5가지 타입

<Demo>
<!-- filled (기본) -->
<button class="m3-btn">Filled</button>

<!-- elevated -->
<button class="m3-btn btn:elevated">Elevated</button>

<!-- tonal -->
<button class="m3-btn btn:tonal">Tonal</button>

<!-- outlined -->
<button class="m3-btn btn:outlined">Outlined</button>

<!-- text -->
<button class="m3-btn btn:text">Text</button>
</Demo>

| 클래스 | 설명 |
|--------|------|
| (기본) | Filled - 강조 버튼, primary 배경 |
| `btn:elevated` | Elevated - 그림자가 있는 surface 배경 |
| `btn:tonal` | Tonal - secondary-container 배경 |
| `btn:outlined` | Outlined - 테두리만 있는 버튼 |
| `btn:text` | Text - 배경 없이 텍스트만 |

### 크기 변형

<Demo>
<button class="m3-btn btn-size:xs">Extra Small</button>
<button class="m3-btn btn-size:sm">Small (기본)</button>
<button class="m3-btn btn-size:md">Medium</button>
<button class="m3-btn btn-size:lg">Large</button>
<button class="m3-btn btn-size:xl">Extra Large</button>
</Demo>

| 클래스 | 별칭 | 높이 | 패딩 | 폰트 크기 |
|--------|------|------|------|----------|
| `btn-size:xs` | `btn-size:1` | 2rem | 0 1rem | 0.75rem |
| `btn-size:sm` | `btn-size:2` | 2.5rem | 0 1.5rem | 0.875rem |
| `btn-size:md` | `btn-size:3` | 3rem | 0 1.75rem | 1rem |
| `btn-size:lg` | `btn-size:4` | 3.5rem | 0 2rem | 1.125rem |
| `btn-size:xl` | `btn-size:5` | 4rem | 0 2.5rem | 1.25rem |

반응형 크기도 지원됩니다: `sm:btn-size:md`, `md:btn-size:lg`, `lg:btn-size:xl` 등.

### 모양 변형

<Demo>
<!-- round (기본) -->
<button class="m3-btn">라운드</button>

<!-- square -->
<button class="m3-btn btn-shape:square">스퀘어</button>
</Demo>

`btn-shape:square`를 사용하면 크기별로 적절한 border-radius가 적용됩니다.

### 색상 변형

<Demo>
<!-- Brand 색상 -->
<button class="m3-btn btn-color:primary">Primary</button>
<button class="m3-btn btn-color:secondary">Secondary</button>
<button class="m3-btn btn-color:tertiary">Tertiary</button>

<!-- Surface 색상 -->
<button class="m3-btn btn-color:surface">Surface</button>
<button class="m3-btn btn-color:surface-subtle">Surface Subtle</button>
<button class="m3-btn btn-color:surface-inverse">Surface Inverse</button>

<!-- 상태 색상 -->
<button class="m3-btn btn-color:success">Success</button>
<button class="m3-btn btn-color:warning">Warning</button>
<button class="m3-btn btn-color:danger">Danger</button>
</Demo>

### 아이콘 버튼 (Leading / Trailing)

버튼 안에 아이콘을 배치할 때 사용합니다.

<Demo>
<!-- 아이콘이 앞에 -->
<button class="m3-btn btn-icon:leading">
  <i class="m3-icon icon:add"></i>추가
</button>

<!-- 아이콘이 뒤에 -->
<button class="m3-btn btn-icon:trailing">
  보내기<i class="m3-icon icon:send"></i>
</button>

<!-- 타입 + 색상 + 아이콘 조합 -->
<button class="m3-btn btn:tonal btn-color:danger btn-icon:leading">
  <i class="m3-icon icon:delete"></i>삭제
</button>
</Demo>

### 비활성화

<Demo>
<button class="m3-btn" disabled>비활성화</button>
<button class="m3-btn btn:outlined" disabled>비활성화</button>
</Demo>

### Variable API

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `--btn-font-size` | `0.875rem` | 폰트 크기 (14sp) |
| `--btn-font-weight` | `var(--font-weight-medium)` | 폰트 굵기 (500) |
| `--btn-line-height` | `1.25rem` | 줄 높이 (20sp) |
| `--btn-letter-spacing` | `0.00625rem` | 자간 (0.1px) |
| `--btn-height` | `2.5rem` | 버튼 높이 (40dp) |
| `--btn-padding` | `0 1.5rem` | 내부 여백 (24dp) |
| `--btn-gap` | `0.5rem` | 아이콘-라벨 간격 (8dp) |
| `--btn-icon-size` | `1.125rem` | 아이콘 크기 (18dp) |
| `--btn-color` | `var(--color-on-primary)` | 텍스트 색상 |
| `--btn-background-color` | `var(--color-primary)` | 배경 색상 |
| `--btn-background-image` | `none` | 배경 이미지 |
| `--btn-box-shadow` | `none` | 그림자 |
| `--btn-elevation-hover` | `var(--shadow-sm)` | 호버 시 그림자 |
| `--btn-border-width` | `0` | 테두리 두께 |
| `--btn-border-color` | `transparent` | 테두리 색상 |
| `--btn-border-style` | `solid` | 테두리 스타일 |
| `--btn-border-radius` | `var(--radius-full)` | 모서리 둥글기 |
| `--btn-outline` | `none` | 포커스 링 |
| `--btn-outline-offset` | `0` | 포커스 링 오프셋 |
| `--btn-state-hover-opacity` | `0.08` | 호버 state layer 투명도 |
| `--btn-state-focus-opacity` | `0.12` | 포커스 state layer 투명도 |
| `--btn-state-pressed-opacity` | `0.12` | 눌림 state layer 투명도 |
| `--btn-state-layer-color` | `var(--color-on-primary)` | State layer 색상 |

---

## m3-fab (Floating Action Button)

화면에 떠 있는 주요 액션 버튼입니다.

### 기본 사용법

<Demo>
<button class="m3-fab">
  <i class="m3-icon icon:add"></i>
</button>
</Demo>

### 크기 변형

<Demo>
<!-- small (40dp) -->
<button class="m3-fab fab:small">
  <i class="m3-icon icon:add"></i>
</button>

<!-- default (56dp) -->
<button class="m3-fab">
  <i class="m3-icon icon:add"></i>
</button>

<!-- large (96dp) -->
<button class="m3-fab fab:large">
  <i class="m3-icon icon:add"></i>
</button>

<!-- extended (아이콘 + 텍스트) -->
<button class="m3-fab fab:extended">
  <i class="m3-icon icon:edit"></i>새 글 작성
</button>
</Demo>

| 클래스 | 크기 | 설명 |
|--------|------|------|
| `fab:small` | 40dp | 작은 FAB |
| (기본) | 56dp | 기본 FAB |
| `fab:large` | 96dp | 큰 FAB |
| `fab:extended` | auto | 확장 FAB (텍스트 포함) |

### 색상 변형

<Demo>
<button class="m3-fab fab-color:primary">
  <i class="m3-icon icon:add"></i>
</button>

<button class="m3-fab fab-color:secondary">
  <i class="m3-icon icon:edit"></i>
</button>

<button class="m3-fab fab-color:tertiary">
  <i class="m3-icon icon:share"></i>
</button>

<button class="m3-fab fab-color:surface">
  <i class="m3-icon icon:settings"></i>
</button>
</Demo>

| 클래스 | 배경 | 아이콘 색상 |
|--------|------|------------|
| (기본) | surface-container-high | primary |
| `fab-color:primary` | primary | on-primary |
| `fab-color:secondary` | secondary | on-secondary |
| `fab-color:tertiary` | tertiary | on-tertiary |
| `fab-color:surface` | surface | primary |

### Variable API

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `--fab-size` | `3.5rem` | FAB 크기 (56dp) |
| `--fab-padding` | `1rem` | 내부 여백 (16dp) |
| `--fab-gap` | `0.75rem` | 아이콘-텍스트 간격 (12dp) |
| `--fab-icon-size` | `1.5rem` | 아이콘 크기 (24dp) |
| `--fab-background` | `var(--color-surface-subtle)` | 배경 색상 |
| `--fab-color` | `var(--color-primary)` | 아이콘/텍스트 색상 |
| `--fab-box-shadow` | `var(--shadow-lg)` | 그림자 (level3) |
| `--fab-elevation-hover` | `var(--shadow-xl)` | 호버 시 그림자 (level4) |
| `--fab-border-radius` | `1rem` | 모서리 둥글기 (16dp) |
| `--fab-font-size` | `0.875rem` | 폰트 크기 (14sp) |
| `--fab-font-weight` | `var(--font-weight-medium)` | 폰트 굵기 |
| `--fab-line-height` | `1.25rem` | 줄 높이 (20sp) |
| `--fab-letter-spacing` | `0.00625rem` | 자간 |

---

## m3-icon-btn (아이콘 버튼)

아이콘만 포함된 버튼입니다. 48dp 터치 영역, 40dp 가시 영역을 가집니다.

### 기본 사용법

<Demo>
<!-- standard (기본) -->
<button class="m3-icon-btn">
  <i class="m3-icon icon:settings"></i>
</button>
</Demo>

### 4가지 타입

<Demo>
<!-- standard (기본) -->
<button class="m3-icon-btn">
  <i class="m3-icon icon:settings"></i>
</button>

<!-- filled -->
<button class="m3-icon-btn icon-btn:filled">
  <i class="m3-icon icon:settings"></i>
</button>

<!-- tonal -->
<button class="m3-icon-btn icon-btn:tonal">
  <i class="m3-icon icon:settings"></i>
</button>

<!-- outlined -->
<button class="m3-icon-btn icon-btn:outlined">
  <i class="m3-icon icon:settings"></i>
</button>
</Demo>

| 클래스 | 설명 |
|--------|------|
| (기본) | Standard - 투명 배경 |
| `icon-btn:filled` | Filled - primary 배경 |
| `icon-btn:tonal` | Tonal - secondary-container 배경 |
| `icon-btn:outlined` | Outlined - 테두리 |

### 토글 상태

아이콘 버튼의 선택/비선택 상태를 표현합니다.

<Demo>
<!-- unselected -->
<button class="m3-icon-btn icon-btn-toggle:unselected">
  <i class="m3-icon icon:favorite"></i>
</button>

<!-- selected -->
<button class="m3-icon-btn icon-btn-toggle:selected">
  <i class="m3-icon icon:favorite icon-filled:1"></i>
</button>

<!-- filled + toggle -->
<button class="m3-icon-btn icon-btn:filled icon-btn-toggle:selected">
  <i class="m3-icon icon:favorite icon-filled:1"></i>
</button>

<!-- tonal + toggle -->
<button class="m3-icon-btn icon-btn:tonal icon-btn-toggle:selected">
  <i class="m3-icon icon:star icon-filled:1"></i>
</button>

<!-- outlined + toggle -->
<button class="m3-icon-btn icon-btn:outlined icon-btn-toggle:selected">
  <i class="m3-icon icon:bookmark icon-filled:1" data-icon="bookmark"></i>
</button>
</Demo>

### Variable API

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `--icon-btn-size` | `2.5rem` | 가시 크기 (40dp) |
| `--icon-btn-touch-size` | `3rem` | 터치 영역 (48dp) |
| `--icon-btn-icon-size` | `1.5rem` | 아이콘 크기 (24dp) |
| `--icon-btn-background` | `transparent` | 배경 |
| `--icon-btn-color` | `var(--color-on-surface)` | 아이콘 색상 |
| `--icon-btn-box-shadow` | `none` | 그림자 |
| `--icon-btn-border-width` | `0` | 테두리 두께 |
| `--icon-btn-border-color` | `transparent` | 테두리 색상 |
| `--icon-btn-border-style` | `solid` | 테두리 스타일 |
| `--icon-btn-border-radius` | `var(--radius-full)` | 모서리 둥글기 |
| `--icon-btn-state-layer-color` | `var(--color-on-surface)` | State layer 색상 |
| `--icon-btn-state-hover-opacity` | `0.08` | 호버 투명도 |
| `--icon-btn-state-focus-opacity` | `0.12` | 포커스 투명도 |
| `--icon-btn-state-pressed-opacity` | `0.12` | 눌림 투명도 |
