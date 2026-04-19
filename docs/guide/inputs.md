# 입력 컴포넌트

Material Design 3 스펙에 맞춘 입력 컴포넌트들입니다. 텍스트 필드, 체크박스, 라디오 버튼, 스위치, 슬라이더를 제공합니다.

## m3-text-field (텍스트 입력)

플로팅 라벨을 가진 텍스트 입력 필드입니다.

### 기본 사용법

<Demo>
<!-- filled (기본) -->
<div class="m3-text-field">
  <input type="text" placeholder=" ">
  <label>이름</label>
</div>

<!-- outlined -->
<div class="m3-text-field field:outlined">
  <input type="text" placeholder=" ">
  <label>이메일</label>
</div>
</Demo>

::: tip
`placeholder=" "`(공백 한 칸)은 필수입니다. CSS의 `:placeholder-shown` 선택자로 라벨 플로팅을 구현하기 때문입니다.
:::

### 상태 변형

<Demo>
<!-- 에러 상태 -->
<div class="m3-text-field field-state:error">
  <input type="text" placeholder=" " value="잘못된 값">
  <label>이메일</label>
  <span class="field-supporting">올바른 이메일 형식을 입력하세요</span>
</div>

<!-- 비활성화 -->
<div class="m3-text-field field-state:disabled">
  <input type="text" placeholder=" " disabled>
  <label>비활성화</label>
</div>

<!-- outlined + 에러 -->
<div class="m3-text-field field:outlined field-state:error">
  <input type="text" placeholder=" " value="잘못된 값">
  <label>비밀번호</label>
  <span class="field-supporting">8자 이상 입력하세요</span>
</div>
</Demo>

### 아이콘 포함

<Demo>
<!-- leading 아이콘 -->
<div class="m3-text-field field-icon:leading">
  <i class="m3-icon icon:search"></i>
  <input type="text" placeholder=" ">
  <label>검색</label>
</div>

<!-- outlined + leading 아이콘 -->
<div class="m3-text-field field:outlined field-icon:leading">
  <i class="m3-icon icon:email"></i>
  <input type="email" placeholder=" ">
  <label>이메일</label>
</div>
</Demo>

### 색상 변형

<Demo>
<div class="m3-text-field field-color:primary">
  <input type="text" placeholder=" ">
  <label>Primary</label>
</div>

<div class="m3-text-field field-color:secondary">
  <input type="text" placeholder=" ">
  <label>Secondary</label>
</div>

<div class="m3-text-field field-color:tertiary">
  <input type="text" placeholder=" ">
  <label>Tertiary</label>
</div>
</Demo>

### Supporting Text (보조 텍스트)

<Demo>
<div class="m3-text-field">
  <input type="text" placeholder=" ">
  <label>사용자명</label>
  <span class="field-supporting">영문 소문자, 숫자만 가능합니다</span>
</div>
</Demo>

### Variable API

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `--field-background` | `var(--color-surface-muted)` | 배경 색상 |
| `--field-border` | `none` | 테두리 |
| `--field-border-radius` | `0.25rem 0.25rem 0 0` | 모서리 둥글기 |
| `--field-padding-x` | `1rem` | 좌우 여백 |
| `--field-padding-top` | `0.5rem` | 상단 여백 |
| `--field-padding-bottom` | `0.5rem` | 하단 여백 |
| `--field-min-height` | `3.5rem` | 최소 높이 |
| `--field-width` | `100%` | 너비 |
| `--field-input-padding-top` | `1.5rem` | 입력 상단 여백 |
| `--field-indicator-height` | `0.0625rem` | 하단 인디케이터 높이 |
| `--field-indicator-color` | `var(--color-text-muted)` | 인디케이터 색상 |
| `--field-indicator-height-focus` | `0.1875rem` | 포커스 시 인디케이터 높이 |
| `--field-indicator-color-focus` | `var(--color-primary)` | 포커스 시 인디케이터 색상 |
| `--field-outline-width` | `0.0625rem` | Outlined 테두리 두께 |
| `--field-outline-color` | `var(--color-border-strong)` | Outlined 테두리 색상 |
| `--field-outline-width-focus` | `0.1875rem` | Outlined 포커스 시 두께 |
| `--field-outline-color-focus` | `var(--color-primary)` | Outlined 포커스 시 색상 |
| `--field-font-size` | `1rem` | 입력 텍스트 크기 |
| `--field-color` | `var(--color-on-surface)` | 입력 텍스트 색상 |
| `--field-placeholder-color` | `var(--color-text-muted)` | 플레이스홀더 색상 |
| `--field-caret-color` | `var(--color-primary)` | 캐럿 색상 |
| `--field-label-size` | `1rem` | 라벨 크기 |
| `--field-label-size-float` | `0.75rem` | 플로팅 라벨 크기 |
| `--field-label-color` | `var(--color-text-muted)` | 라벨 색상 |
| `--field-label-color-focus` | `var(--color-primary)` | 포커스 시 라벨 색상 |
| `--field-supporting-size` | `0.75rem` | 보조 텍스트 크기 |
| `--field-supporting-color` | `var(--color-text-muted)` | 보조 텍스트 색상 |
| `--field-icon-left` | `0.75rem` | 아이콘 왼쪽 위치 |

---

## m3-checkbox (체크박스)

### 기본 사용법

<Demo>
<label class="m3-checkbox">
  <input type="checkbox">
  <span>동의합니다</span>
</label>
</Demo>

### 상태 변형

<Demo>
<!-- 기본 -->
<label class="m3-checkbox">
  <input type="checkbox">
  <span>미선택</span>
</label>

<!-- 선택됨 -->
<label class="m3-checkbox">
  <input type="checkbox" checked>
  <span>선택됨</span>
</label>

<!-- 비활성화 -->
<label class="m3-checkbox">
  <input type="checkbox" disabled>
  <span>비활성화</span>
</label>

<!-- 비활성화 + 선택 -->
<label class="m3-checkbox">
  <input type="checkbox" checked disabled>
  <span>비활성화 (선택됨)</span>
</label>
</Demo>

### 색상 변형

<Demo>
<label class="m3-checkbox checkbox-color:primary">
  <input type="checkbox" checked>
  <span>Primary</span>
</label>

<label class="m3-checkbox checkbox-color:secondary">
  <input type="checkbox" checked>
  <span>Secondary</span>
</label>

<label class="m3-checkbox checkbox-color:tertiary">
  <input type="checkbox" checked>
  <span>Tertiary</span>
</label>

<label class="m3-checkbox checkbox-color:danger">
  <input type="checkbox" checked>
  <span>Danger</span>
</label>

<label class="m3-checkbox checkbox-color:success">
  <input type="checkbox" checked>
  <span>Success</span>
</label>

<label class="m3-checkbox checkbox-color:warning">
  <input type="checkbox" checked>
  <span>Warning</span>
</label>
</Demo>

### Variable API

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `--checkbox-size` | `1.125rem` | 체크박스 크기 (18dp) |
| `--checkbox-border-radius` | `0.125rem` | 모서리 둥글기 (2dp) |
| `--checkbox-border-width` | `0.125rem` | 테두리 두께 |
| `--checkbox-border-color` | `var(--color-text-muted)` | 테두리 색상 |
| `--checkbox-background` | `transparent` | 배경 |
| `--checkbox-check-color` | `var(--color-on-primary)` | 체크 마크 색상 |
| `--checkbox-check-background` | `var(--color-primary)` | 선택 시 배경 |
| `--checkbox-gap` | `0.75rem` | 라벨과의 간격 |
| `--checkbox-label-size` | `0.875rem` | 라벨 크기 |
| `--checkbox-label-color` | `var(--color-text)` | 라벨 색상 |
| `--checkbox-state-size` | `2.5rem` | State layer 크기 |
| `--checkbox-state-color` | `var(--color-primary)` | State layer 색상 |

---

## m3-radio (라디오 버튼)

### 기본 사용법

<Demo>
<label class="m3-radio">
  <input type="radio" name="option" value="1">
  <span>옵션 1</span>
</label>

<label class="m3-radio">
  <input type="radio" name="option" value="2">
  <span>옵션 2</span>
</label>

<label class="m3-radio">
  <input type="radio" name="option" value="3" checked>
  <span>옵션 3 (선택됨)</span>
</label>
</Demo>

### 비활성화

<Demo>
<label class="m3-radio">
  <input type="radio" name="disabled" disabled>
  <span>비활성화</span>
</label>

<label class="m3-radio">
  <input type="radio" name="disabled" checked disabled>
  <span>비활성화 (선택됨)</span>
</label>
</Demo>

### 색상 변형

<Demo>
<label class="m3-radio radio-color:primary">
  <input type="radio" name="color" value="1" checked>
  <span>Primary</span>
</label>

<label class="m3-radio radio-color:secondary">
  <input type="radio" name="color2" value="2" checked>
  <span>Secondary</span>
</label>

<label class="m3-radio radio-color:tertiary">
  <input type="radio" name="color3" value="3" checked>
  <span>Tertiary</span>
</label>

<label class="m3-radio radio-color:danger">
  <input type="radio" name="color4" value="4" checked>
  <span>Danger</span>
</label>
</Demo>

### Variable API

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `--radio-size` | `1.25rem` | 라디오 크기 (20dp) |
| `--radio-touch-size` | `2.5rem` | 터치 영역 |
| `--radio-stroke-width` | `0.125rem` | 테두리 두께 |
| `--radio-border-color` | `var(--color-text-muted)` | 테두리 색상 |
| `--radio-background` | `transparent` | 배경 |
| `--radio-dot-size` | `0.625rem` | 내부 점 크기 (10dp) |
| `--radio-dot-color` | `var(--color-primary)` | 내부 점 색상 |
| `--radio-selected-color` | `var(--color-primary)` | 선택 시 테두리 색상 |
| `--radio-gap` | `0.75rem` | 라벨과의 간격 |
| `--radio-label-size` | `0.875rem` | 라벨 크기 |
| `--radio-label-color` | `var(--color-text)` | 라벨 색상 |
| `--radio-state-hover-opacity` | `0.08` | 호버 투명도 |
| `--radio-state-pressed-opacity` | `0.12` | 눌림 투명도 |

---

## m3-switch (스위치)

토글 스위치입니다. 트랙 52x32dp, 핸들 16dp(off)/24dp(on)/28dp(pressed) 크기를 따릅니다.

### 기본 사용법

<Demo>
<label class="m3-switch">
  <input type="checkbox">
  <span class="switch-label">Wi-Fi</span>
</label>

<!-- 켜짐 상태 -->
<label class="m3-switch">
  <input type="checkbox" checked>
  <span class="switch-label">블루투스</span>
</label>
</Demo>

### 비활성화

<Demo>
<label class="m3-switch">
  <input type="checkbox" disabled>
  <span class="switch-label">비활성화</span>
</label>

<label class="m3-switch">
  <input type="checkbox" checked disabled>
  <span class="switch-label">비활성화 (켜짐)</span>
</label>
</Demo>

### 색상 변형

<Demo>
<label class="m3-switch switch-color:primary">
  <input type="checkbox" checked>
  <span class="switch-label">Primary</span>
</label>

<label class="m3-switch switch-color:secondary">
  <input type="checkbox" checked>
  <span class="switch-label">Secondary</span>
</label>

<label class="m3-switch switch-color:tertiary">
  <input type="checkbox" checked>
  <span class="switch-label">Tertiary</span>
</label>

<label class="m3-switch switch-color:danger">
  <input type="checkbox" checked>
  <span class="switch-label">Danger</span>
</label>

<label class="m3-switch switch-color:success">
  <input type="checkbox" checked>
  <span class="switch-label">Success</span>
</label>
</Demo>

### Variable API

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `--switch-gap` | `0.75rem` | 라벨과의 간격 |
| `--switch-track-width` | `3.25rem` | 트랙 너비 (52dp) |
| `--switch-track-height` | `2rem` | 트랙 높이 (32dp) |
| `--switch-track-radius` | `var(--radius-full)` | 트랙 모서리 |
| `--switch-track-color` | `var(--color-surface-muted)` | 트랙 색상 (꺼짐) |
| `--switch-track-border` | `0.125rem solid var(--color-border-strong)` | 트랙 테두리 (꺼짐) |
| `--switch-track-color-checked` | `var(--color-primary)` | 트랙 색상 (켜짐) |
| `--switch-track-border-checked` | `0.125rem solid var(--color-primary)` | 트랙 테두리 (켜짐) |
| `--switch-handle-size` | `1rem` | 핸들 크기 (꺼짐, 16dp) |
| `--switch-handle-size-checked` | `1.5rem` | 핸들 크기 (켜짐, 24dp) |
| `--switch-handle-size-pressed` | `1.75rem` | 핸들 크기 (눌림, 28dp) |
| `--switch-handle-radius` | `var(--radius-full)` | 핸들 모서리 |
| `--switch-handle-color` | `var(--color-border-strong)` | 핸들 색상 (꺼짐) |
| `--switch-handle-color-checked` | `var(--color-on-primary)` | 핸들 색상 (켜짐) |
| `--switch-handle-offset` | `0.375rem` | 핸들 오프셋 |
| `--switch-label-size` | `0.875rem` | 라벨 크기 |
| `--switch-label-color` | `var(--color-text)` | 라벨 색상 |

---

## m3-slider (슬라이더)

연속(continuous) 및 이산(discrete) 슬라이더를 지원합니다.

### 기본 사용법 (Continuous)

<Demo>
<div class="m3-slider">
  <input type="range" min="0" max="100" value="50">
</div>
</Demo>

### Discrete (눈금)

<Demo>
<div class="m3-slider slider:discrete">
  <input type="range" min="0" max="100" value="50" step="10">
</div>
</Demo>

### 색상 변형

<Demo>
<div class="m3-slider slider-color:primary">
  <input type="range" min="0" max="100" value="50">
</div>

<div class="m3-slider slider-color:secondary">
  <input type="range" min="0" max="100" value="50">
</div>

<div class="m3-slider slider-color:tertiary">
  <input type="range" min="0" max="100" value="50">
</div>
</Demo>

### Variable API

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `--slider-width` | `100%` | 슬라이더 너비 |
| `--slider-padding` | `0.5rem 0` | 여백 |
| `--slider-track-height` | `0.25rem` | 트랙 높이 (4dp) |
| `--slider-track-color` | `var(--color-primary-subtle)` | 비활성 트랙 색상 |
| `--slider-track-active-color` | `var(--color-primary)` | 활성 트랙 색상 |
| `--slider-track-border-radius` | `var(--radius-full)` | 트랙 모서리 |
| `--slider-handle-size` | `1.25rem` | 핸들 크기 (20dp) |
| `--slider-handle-color` | `var(--color-primary)` | 핸들 색상 |
| `--slider-handle-border-radius` | `var(--radius-full)` | 핸들 모서리 |
| `--slider-handle-shadow` | `var(--shadow-sm)` | 핸들 그림자 |
| `--slider-handle-border` | `none` | 핸들 테두리 |
