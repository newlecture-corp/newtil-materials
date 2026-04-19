# Communication (커뮤니케이션)

사용자에게 상태, 알림, 보조 정보를 전달하는 컴포넌트 모음입니다.

## Badge

배지는 아이콘이나 텍스트 위에 숫자 또는 점으로 알림 상태를 표시합니다.

### 숫자 배지

```html
<div style="position: relative; display: inline-flex;">
  <i class="m3-icon icon:mail"></i>
  <span class="m3-badge">3</span>
</div>

<div style="position: relative; display: inline-flex;">
  <i class="m3-icon icon:notifications"></i>
  <span class="m3-badge">99+</span>
</div>
```

### 점 배지

```html
<div style="position: relative; display: inline-flex;">
  <i class="m3-icon icon:chat"></i>
  <span class="m3-badge badge:dot"></span>
</div>
```

### 인라인 배지

독립적으로 텍스트 옆에 표시하는 인라인 배지입니다.

```html
<span>메시지</span>
<span class="m3-badge badge:inline">5</span>
```

### 색상 변형

```html
<span class="m3-badge badge-color:primary">1</span>
<span class="m3-badge badge-color:secondary">2</span>
<span class="m3-badge badge-color:danger">3</span>
<span class="m3-badge badge-color:success">4</span>
<span class="m3-badge badge-color:warning">5</span>
```

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--badge-background` | `var(--color-danger)` | 배경색 |
| `--badge-color` | `var(--color-on-danger)` | 텍스트 색상 |
| `--badge-font-size` | `0.6875rem` | 글자 크기 |
| `--badge-font-weight` | `var(--font-weight-medium)` | 글자 굵기 |
| `--badge-min-width` | `1rem` | 최소 너비 |
| `--badge-height` | `1rem` | 높이 |
| `--badge-padding` | `0 0.25rem` | 내부 여백 |
| `--badge-border-radius` | `var(--radius-full)` | 모서리 둥글기 |
| `--badge-position` | `absolute` | 포지션 |
| `--badge-top` | `-0.25rem` | 상단 위치 |
| `--badge-right` | `-0.25rem` | 우측 위치 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `badge:dot` | 점 배지 (숫자 없이 점만 표시) |
| `badge:inline` | 인라인 배지 (absolute 대신 inline 배치) |
| `badge-color:primary` | Primary 색상 |
| `badge-color:secondary` | Secondary 색상 |
| `badge-color:danger` | Danger 색상 |
| `badge-color:success` | Success 색상 |
| `badge-color:warning` | Warning 색상 |

---

## Progress

진행률 표시 컴포넌트입니다. 선형(linear)과 원형(circular) 두 가지 타입을 지원합니다.

### 선형 Determinate (확정형)

진행률을 `--progress-value`로 지정합니다.

```html
<div class="m3-progress" style="--progress-value: 40%;"></div>
<div class="m3-progress" style="--progress-value: 75%;"></div>
<div class="m3-progress" style="--progress-value: 100%;"></div>
```

### 선형 Indeterminate (불확정형)

진행률을 알 수 없을 때 사용합니다.

```html
<div class="m3-progress progress:indeterminate"></div>
```

### 원형 (Circular)

```html
<div class="m3-progress progress:circular"></div>
```

### 색상 변형

```html
<div class="m3-progress progress-color:primary" style="--progress-value: 60%;"></div>
<div class="m3-progress progress-color:secondary" style="--progress-value: 60%;"></div>
<div class="m3-progress progress-color:tertiary" style="--progress-value: 60%;"></div>
<div class="m3-progress progress-color:danger" style="--progress-value: 60%;"></div>
<div class="m3-progress progress-color:success" style="--progress-value: 60%;"></div>
```

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--progress-height` | `0.25rem` | 선형 높이 |
| `--progress-width` | `100%` | 선형 너비 |
| `--progress-track-color` | `var(--color-primary-subtle)` | 트랙 배경색 |
| `--progress-indicator-color` | `var(--color-primary)` | 인디케이터 색상 |
| `--progress-border-radius` | `var(--radius-full)` | 모서리 둥글기 |
| `--progress-value` | `0%` | 진행률 값 |
| `--progress-circular-size` | `3rem` | 원형 크기 |
| `--progress-circular-stroke` | `0.25rem` | 원형 선 굵기 |
| `--progress-circular-border-radius` | `50%` | 원형 모서리 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `progress:indeterminate` | 불확정형 (애니메이션) |
| `progress:circular` | 원형 프로그레스 |
| `progress-color:primary` | Primary 색상 |
| `progress-color:secondary` | Secondary 색상 |
| `progress-color:tertiary` | Tertiary 색상 |
| `progress-color:danger` | Danger 색상 |
| `progress-color:success` | Success 색상 |

---

## Snackbar

스낵바는 화면 하단에 짧은 알림 메시지를 표시합니다.

### 기본 사용법

```html
<div class="m3-snackbar snackbar-open">
  <span class="snackbar-text">파일이 저장되었습니다</span>
</div>
```

### 액션 버튼 포함

```html
<div class="m3-snackbar snackbar-open">
  <span class="snackbar-text">메시지가 삭제되었습니다</span>
  <button class="snackbar-action">실행취소</button>
</div>
```

### 닫기 버튼 포함

```html
<div class="m3-snackbar snackbar-open">
  <span class="snackbar-text">네트워크에 연결되었습니다</span>
  <button class="snackbar-action">자세히</button>
  <button class="snackbar-close"><i class="m3-icon icon:close"></i></button>
</div>
```

### 색상 변형

```html
<div class="m3-snackbar snackbar-open snackbar-color:success">
  <span class="snackbar-text">성공적으로 저장되었습니다</span>
</div>

<div class="m3-snackbar snackbar-open snackbar-color:danger">
  <span class="snackbar-text">오류가 발생했습니다</span>
</div>

<div class="m3-snackbar snackbar-open snackbar-color:warning">
  <span class="snackbar-text">저장 공간이 부족합니다</span>
</div>
```

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--snackbar-background` | `var(--color-surface-inverse)` | 배경색 |
| `--snackbar-color` | `var(--color-on-surface-inverse)` | 텍스트 색상 |
| `--snackbar-border-radius` | `0.25rem` | 모서리 둥글기 |
| `--snackbar-padding` | `0 0.5rem 0 1rem` | 내부 여백 |
| `--snackbar-min-height` | `3rem` | 최소 높이 |
| `--snackbar-max-width` | `35rem` | 최대 너비 |
| `--snackbar-box-shadow` | `var(--shadow-md)` | 그림자 |
| `--snackbar-z-index` | `var(--z-toast)` | z-index |
| `--snackbar-bottom` | `1.5rem` | 하단 위치 |
| `--snackbar-gap` | `0.5rem` | 내부 요소 간격 |
| `--snackbar-font-size` | `0.875rem` | 글자 크기 |
| `--snackbar-action-color` | `var(--color-primary-subtle)` | 액션 버튼 색상 |
| `--snackbar-action-font-weight` | `var(--font-weight-medium)` | 액션 버튼 굵기 |
| `--snackbar-action-padding` | `0.5rem` | 액션 버튼 내부 여백 |
| `--snackbar-close-padding` | `0.5rem` | 닫기 버튼 내부 여백 |
| `--snackbar-close-border-radius` | `50%` | 닫기 버튼 모서리 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `snackbar-open` | 스낵바 표시 |
| `snackbar-text` | 메시지 텍스트 (하위 요소) |
| `snackbar-action` | 액션 버튼 (하위 요소) |
| `snackbar-close` | 닫기 버튼 (하위 요소) |
| `snackbar-color:success` | Success 색상 |
| `snackbar-color:danger` | Danger 색상 |
| `snackbar-color:warning` | Warning 색상 |

---

## Tooltip

툴팁은 요소 위에 짧은 설명 텍스트를 표시합니다. Plain(기본)과 Rich 두 가지 타입을 지원합니다.

### Plain 툴팁

```html
<div class="m3-tooltip">간단한 설명 텍스트</div>
```

### Rich 툴팁

제목, 본문, 액션을 포함하는 풍부한 툴팁입니다.

```html
<div class="m3-tooltip tooltip:rich">
  <div class="tooltip-title">기능 설명</div>
  <div class="tooltip-content">
    이 버튼을 클릭하면 새 항목이 생성됩니다.
    자세한 내용은 도움말을 참고하세요.
  </div>
  <div class="tooltip-actions">
    <button class="m3-btn btn:text btn-size:xs">자세히</button>
  </div>
</div>
```

### 변수 API

| 변수명 | 기본값 | 설명 |
|--------|--------|------|
| `--tooltip-background` | `var(--color-surface-inverse)` | 배경색 |
| `--tooltip-color` | `var(--color-on-surface-inverse)` | 텍스트 색상 |
| `--tooltip-border-radius` | `var(--radius-sm)` | 모서리 둥글기 |
| `--tooltip-padding` | `0.25rem 0.5rem` | 내부 여백 |
| `--tooltip-font-size` | `0.75rem` | 글자 크기 |
| `--tooltip-line-height` | `1rem` | 줄 높이 |
| `--tooltip-max-width` | `12.5rem` | 최대 너비 |
| `--tooltip-z-index` | `var(--z-tooltip)` | z-index |
| `--tooltip-box-shadow` | `none` | 그림자 |
| `--tooltip-border` | `none` | 테두리 |
| `--tooltip-font-weight` | `var(--font-weight-medium)` | 글자 굵기 |
| `--tooltip-rich-background` | `var(--color-surface-muted)` | Rich 배경색 |
| `--tooltip-rich-color` | `var(--color-on-surface)` | Rich 텍스트 색상 |

### 옵션 클래스

| 클래스 | 설명 |
|--------|------|
| `tooltip:rich` | Rich 툴팁 타입 |
| `tooltip-title` | Rich 툴팁 제목 (하위 요소) |
| `tooltip-content` | Rich 툴팁 본문 (하위 요소) |
| `tooltip-actions` | Rich 툴팁 액션 영역 (하위 요소) |
