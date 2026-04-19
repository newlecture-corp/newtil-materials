# 커스터마이징

@newtil/components는 CSS 변수(Custom Properties)를 통해 모든 시각 속성을 외부에 노출합니다. JavaScript 없이 CSS만으로 컴포넌트의 외관을 완전히 제어할 수 있습니다.

## 변수 기반 커스터마이징 철학

각 컴포넌트는 `--btn-*`, `--field-*`, `--switch-*` 등 네이밍 규칙을 따르는 CSS 변수를 정의합니다. 이 변수들이 곧 컴포넌트의 커스터마이징 API입니다.

- 내부 구현은 감추고, 변수만 공개합니다
- 변수를 오버라이드하면 하위 구조가 자동으로 반영합니다
- 색상 변수만으로 일관된 UI를 유지합니다

## 컴포넌트 변수 오버라이드 방법

### 방법 1. inline style

가장 간단한 방법입니다. 특정 인스턴스만 변경할 때 사용합니다.

```html
<!-- 버튼 높이와 모서리 변경 -->
<button class="m3-btn" style="--btn-height: 3rem; --btn-border-radius: 0.5rem;">
  커스텀 버튼
</button>

<!-- 텍스트 필드 배경 변경 -->
<div class="m3-text-field" style="--field-background: #f5f0ff;">
  <input type="text" placeholder=" ">
  <label>커스텀 필드</label>
</div>

<!-- 스위치 트랙 너비 변경 -->
<label class="m3-switch" style="--switch-track-width: 4rem; --switch-track-height: 2.5rem;">
  <input type="checkbox">
  <span class="switch-label">넓은 스위치</span>
</label>
```

### 방법 2. 커스텀 클래스

동일한 스타일을 여러 요소에 적용할 때 사용합니다.

```html
<style>
  .btn-compact {
    --btn-height: 2rem;
    --btn-padding: 0 0.75rem;
    --btn-font-size: 0.75rem;
    --btn-border-radius: 0.375rem;
  }
</style>

<button class="m3-btn btn-compact">작은 버튼</button>
<button class="m3-btn btn:outlined btn-compact">작은 아웃라인</button>
```

### 방법 3. 부모 요소에서 일괄 오버라이드

섹션이나 페이지 단위로 스타일을 변경할 때 사용합니다.

```html
<style>
  .admin-panel .m3-btn {
    --btn-border-radius: 0.25rem;
    --btn-font-weight: 600;
  }

  .admin-panel .m3-text-field {
    --field-border-radius: 0.25rem 0.25rem 0 0;
  }
</style>

<div class="admin-panel">
  <button class="m3-btn">저장</button>
  <div class="m3-text-field">
    <input type="text" placeholder=" ">
    <label>관리자 메모</label>
  </div>
</div>
```

## 테마 만들기

CSS 변수를 일괄 변경하여 프로젝트 전용 테마를 만들 수 있습니다.

### 브랜드 색상 테마

```css
/* brand-theme.css */
:root {
  /* 주요 색상 오버라이드 */
  --color-primary: #6750a4;
  --color-on-primary: #ffffff;
  --color-primary-hover: #5b44a0;
  --color-primary-active: #4f389c;

  --color-secondary: #625b71;
  --color-on-secondary: #ffffff;

  --color-tertiary: #7d5260;
  --color-on-tertiary: #ffffff;

  /* 표면 색상 */
  --color-surface: #fffbfe;
  --color-on-surface: #1c1b1f;
  --color-surface-muted: #f4eff4;
  --color-surface-subtle: #e7e0ec;
}
```

### 컴포넌트 테마

특정 컴포넌트의 기본 스타일을 프로젝트 전체에서 변경합니다.

```css
/* component-theme.css */

/* 모든 버튼을 사각형으로 */
.m3-btn {
  --btn-border-radius: 0.5rem;
}

/* 모든 텍스트 필드의 포커스 색상 변경 */
.m3-text-field {
  --field-indicator-color-focus: #6750a4;
  --field-label-color-focus: #6750a4;
  --field-caret-color: #6750a4;
}

/* 체크박스 기본 색상 변경 */
.m3-checkbox {
  --checkbox-check-background: #6750a4;
  --checkbox-state-color: #6750a4;
}
```

## design-tokens 연동

`@newtil/design-tokens`와 함께 사용하면 색상 체계를 통합 관리할 수 있습니다.

```css
@import '@newtil/design-tokens/tokens.css';
@import '@newtil/components/css/component/m3/m3-btn.css';
@import '@newtil/components/css/component/m3/m3-text-field.css';
```

design-tokens가 정의하는 `--color-primary`, `--color-surface` 등의 변수를 컴포넌트가 자동으로 참조합니다. 토큰 값을 바꾸면 모든 컴포넌트가 일괄 변경됩니다.

```css
/* design-tokens 값을 프로젝트에 맞게 오버라이드 */
:root {
  --color-primary: #0066cc;
  --color-on-primary: #ffffff;
  --color-secondary: #44a844;
  --color-on-secondary: #ffffff;
}
```

## 다크모드 지원

`prefers-color-scheme` 미디어 쿼리 또는 클래스 토글로 다크모드를 구현합니다.

### 미디어 쿼리 방식

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #d0bcff;
    --color-on-primary: #381e72;
    --color-surface: #1c1b1f;
    --color-on-surface: #e6e1e5;
    --color-surface-muted: #2b2930;
    --color-surface-subtle: #36343b;
    --color-border-strong: #49454f;
    --color-text: #e6e1e5;
    --color-text-muted: #cac4d0;
    --color-text-subtle: #938f99;
  }
}
```

### 클래스 토글 방식

```css
.dark-theme {
  --color-primary: #d0bcff;
  --color-on-primary: #381e72;
  --color-surface: #1c1b1f;
  --color-on-surface: #e6e1e5;
  --color-surface-muted: #2b2930;
  --color-surface-subtle: #36343b;
  --color-border-strong: #49454f;
  --color-text: #e6e1e5;
  --color-text-muted: #cac4d0;
}
```

```html
<body class="dark-theme">
  <button class="m3-btn">다크모드 버튼</button>
</body>
```

```js
// 토글 예시
document.body.classList.toggle('dark-theme');
```

컴포넌트 CSS를 직접 수정할 필요 없이 색상 토큰만 바꾸면 모든 컴포넌트에 다크모드가 적용됩니다. 이것이 변수 기반 설계의 핵심 장점입니다.

## 커스터마이징 예시 모음

### 그라디언트 버튼

<Demo>
<button class="m3-btn" style="
  --btn-background-color: transparent;
  --btn-background-image: linear-gradient(135deg, #667eea, #764ba2);
  --btn-color: #ffffff;
  --btn-state-layer-color: #ffffff;
">
  그라디언트
</button>
</Demo>

### 큰 라운드 FAB

<Demo>
<button class="m3-fab" style="
  --fab-size: 5rem;
  --fab-icon-size: 2rem;
  --fab-border-radius: var(--radius-full);
  --fab-background: #6750a4;
  --fab-color: #ffffff;
">
  <i class="m3-icon icon:add"></i>
</button>
</Demo>

### 밑줄 없는 텍스트 필드

<Demo>
<div class="m3-text-field" style="
  --field-background: transparent;
  --field-indicator-height: 0;
  --field-border-radius: 0.5rem;
  --field-border: 1px solid var(--color-border-strong);
">
  <input type="text" placeholder=" ">
  <label>커스텀 필드</label>
</div>
</Demo>
