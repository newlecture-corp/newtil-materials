# @newtil/components 설계 가이드라인

이 문서는 M3 컴포넌트 CSS를 작성할 때 반드시 따라야 하는 규칙을 정의합니다.
새 컴포넌트를 추가하거나 기존 컴포넌트를 수정할 때 이 문서를 기준으로 검증합니다.

---

## 핵심 원칙

> **모든 시각적 속성은 변수를 통해 적용한다.**
> **옵션 클래스는 변수 값만 변경한다. CSS 속성을 직접 사용하지 않는다.**

이 원칙을 통해 사용자는 변수 오버라이드만으로 컴포넌트를 커스터마이징할 수 있습니다.

---

## 1. 파일 구조

하나의 컴포넌트 CSS 파일은 다음 순서로 구성합니다.

```
1. 파일 헤더 (용도, 사용법, Variable API 안내)
2. 변수 선언 블록 (기본값 정의)
3. 베이스 스타일 블록 (변수를 이용한 CSS 적용)
4. 자식 요소 스타일
5. 상태 (hover, focus, active, disabled)
6. 옵션 클래스 (타입, 크기, 색상 등)
7. 반응형
```

---

## 2. 변수 선언 블록

컴포넌트의 **모든 커스터마이징 가능한 값**을 변수로 선언합니다.

### 규칙

- 컴포넌트 최상위 셀렉터에서 한 번만 선언합니다.
- 네이밍: `--컴포넌트-속성` (예: `--btn-height`, `--card-border-radius`)
- 자식 요소 변수도 같은 블록에서 선언합니다. (예: `--card-avatar-size`)
- 카테고리별로 주석으로 구분합니다.
- 하드코딩된 숫자가 아닌, design-tokens 변수를 참조합니다. (가능한 경우)

### 좋은 예

```css
.m3-btn {
    /* -- typography -- */
    --btn-font-size: 0.875rem;
    --btn-font-weight: var(--font-weight-medium);

    /* -- dimensions -- */
    --btn-height: 2.5rem;
    --btn-padding: 0 1.5rem;

    /* -- colors -- */
    --btn-color: var(--color-on-primary);
    --btn-background-color: var(--color-primary);

    /* -- state layer -- */
    --btn-state-hover-opacity: 0.08;
}
```

### 나쁜 예

```css
/* X: 변수 선언 없이 나중에 하드코딩 */
.m3-btn .btn-icon {
    font-size: 1.125rem;  /* 변수 없이 직접 사용 */
}
```

---

## 3. 베이스 스타일 블록

변수를 이용해 실제 CSS 속성을 적용하는 블록입니다.

### 규칙

- 변수 선언 블록과 **같은 셀렉터**를 사용하되, **별도의 규칙 블록**으로 분리합니다.
- 모든 시각적 CSS 속성은 `var(--컴포넌트-속성)` 형태로 작성합니다.
- 구조적 속성(display, position, box-sizing 등)은 변수 없이 직접 사용해도 됩니다.

### 변수화 필수 vs 직접 사용 허용

| 분류 | 예시 | 변수화 |
|------|------|--------|
| **시각적 속성** | color, background, border, shadow, radius, opacity | 필수 |
| **크기/간격** | width, height, padding, margin, gap, font-size | 필수 |
| **구조적 속성** | display, position, box-sizing, overflow, flex-shrink | 직접 사용 허용 |
| **상호작용** | cursor, pointer-events, user-select | 필수 (상태에 따라 변경되므로) |
| **transition** | transition | 필수 |

### 좋은 예

```css
/* 변수 선언 */
.m3-chip {
    --chip-height: 2rem;
    --chip-border-radius: 0.5rem;
    --chip-background: transparent;
    --chip-box-shadow: none;
}

/* 베이스 스타일 — 변수 적용 */
.m3-chip {
    height: var(--chip-height);
    border-radius: var(--chip-border-radius);
    background-color: var(--chip-background);
    box-shadow: var(--chip-box-shadow);
    display: inline-flex;       /* 구조적 → 직접 사용 OK */
    align-items: center;        /* 구조적 → 직접 사용 OK */
    box-sizing: border-box;     /* 구조적 → 직접 사용 OK */
}
```

### 나쁜 예

```css
.m3-chip {
    border-radius: 0.5rem;  /* X: 변수 없이 직접 사용 */
    box-shadow: var(--shadow-sm);  /* X: 컴포넌트 변수가 아닌 토큰 직접 참조 */
}
```

---

## 4. 자식 요소 스타일

### 규칙

- 자식 요소의 커스터마이징 가능한 속성도 **부모 컴포넌트의 변수 블록**에서 선언합니다.
- 자식 요소 셀렉터에서는 CSS 속성에 변수를 연결만 합니다.
- `::before`, `::after`는 PostCSS 머지 방지를 위해 반드시 **별도 규칙 블록**으로 분리합니다.

### 좋은 예

```css
/* 부모에서 변수 선언 */
.m3-chip {
    --chip-icon-size: 1.125rem;
    --chip-close-radius: 50%;
    --chip-close-background: transparent;
}

/* 자식에서 변수 적용 */
.m3-chip .chip-close {
    border-radius: var(--chip-close-radius);
    background: var(--chip-close-background);
    width: var(--chip-icon-size);
    height: var(--chip-icon-size);
}
```

### 나쁜 예

```css
.m3-chip .chip-close {
    border-radius: 50%;           /* X: 하드코딩 */
    background: transparent;      /* X: 변수 미사용 */
}
```

---

## 5. 옵션 클래스

타입, 크기, 색상 등 변형을 제공하는 클래스입니다.

### 핵심 규칙: 변수만 변경한다

```
옵션 클래스 = 변수 값 변경만 허용
옵션 클래스 ≠ CSS 속성 직접 사용
```

### 좋은 예

```css
/* 타입 변형 */
.m3-btn.btn\:outlined {
    --btn-background-color: transparent;
    --btn-color: var(--color-primary);
    --btn-border-width: 0.0625rem;
    --btn-border-color: var(--color-border);
    --btn-box-shadow: none;
}

/* 크기 변형 */
.m3-btn.btn-size\:lg {
    --btn-height: 3rem;
    --btn-padding: 0 2rem;
    --btn-font-size: 1rem;
}

/* 색상 변형 */
.m3-btn.btn-color\:danger {
    --btn-background-color: var(--color-danger);
    --btn-color: var(--color-on-danger);
    --btn-state-layer-color: var(--color-on-danger);
}
```

### 나쁜 예

```css
.m3-chip.chip\:elevated {
    --chip-border: none;
    box-shadow: var(--shadow-sm);  /* X: CSS 속성 직접 사용 */
}

.m3-top-app-bar.bar\:center .bar-title {
    text-align: center;            /* X: 자식 요소에 CSS 속성 직접 사용 */
}
```

### 올바른 수정

```css
.m3-chip.chip\:elevated {
    --chip-border: none;
    --chip-box-shadow: var(--shadow-sm);  /* O: 변수 변경 */
}

.m3-top-app-bar.bar\:center {
    --bar-title-text-align: center;        /* O: 변수 변경 */
}
```

---

## 6. 상태 (State) 처리

### State Layer 패턴

M3의 hover/focus/active는 `background-image` 오버레이로 구현합니다.
`background-color`를 변경하면 CSS 변수 순환 참조가 발생하므로 **반드시 `background-image`**를 사용합니다.

```css
.m3-btn:hover {
    background-image: linear-gradient(
        color-mix(in srgb, var(--btn-state-layer-color) calc(var(--btn-state-hover-opacity) * 100%), transparent),
        color-mix(in srgb, var(--btn-state-layer-color) calc(var(--btn-state-hover-opacity) * 100%), transparent)
    );
}
```

### 인터랙티브 상태 opt-in 패턴

정적 컨테이너(예: card)는 기본적으로 hover 효과가 없어야 합니다.
opacity 변수를 0으로 설정하고, 옵션 클래스로 활성화합니다.

```css
/* 기본: hover 비활성 */
.m3-card {
    --card-state-hover-opacity: 0;
    --card-elevation-hover: var(--shadow-sm);  /* = 기본 shadow, 변화 없음 */
}

/* 옵션: hover 활성 */
.m3-card.card-hover\:enabled {
    --card-state-hover-opacity: 0.08;
    --card-elevation-hover: var(--shadow-md);
    --card-cursor: pointer;
}
```

### state opacity 변수를 사용하는 컴포넌트 vs 하드코딩 컴포넌트

모든 컴포넌트는 state layer opacity를 **변수**로 관리해야 합니다.

```css
/* O: 변수 사용 */
background-image: linear-gradient(
    color-mix(in srgb, var(--chip-color) calc(var(--chip-state-hover-opacity) * 100%), transparent),
    ...
);

/* X: 하드코딩 */
background-image: linear-gradient(
    color-mix(in srgb, var(--chip-color) 8%, transparent),
    ...
);
```

---

## 7. 네이밍 규칙

### 클래스명

| 용도 | 패턴 | 예시 |
|------|------|------|
| 컴포넌트 | `m3-컴포넌트` | `m3-btn`, `m3-card`, `m3-tabs` |
| 타입 변형 | `컴포넌트\:타입` | `btn:outlined`, `card:filled` |
| 속성 변형 | `컴포넌트-속성\:값` | `btn-size:lg`, `btn-color:danger` |
| 기능 변형 | `컴포넌트-기능\:값` | `card-hover:enabled`, `card-layout:horizontal` |
| 상태 강제 | `컴포넌트-state\:상태` | `card-state:disabled`, `chip-state:disabled` |
| 자식 요소 | `컴포넌트부분` (접두사 없음) | `card-header`, `list-item`, `tab-item` |
| 자식 옵션 | `부분\:값` 또는 `부분-속성\:값` | `list-divider:inset`, `btn-icon:leading` |

### 변수명

```
--컴포넌트-[자식]-[상태]-속성

예시:
--btn-font-size             컴포넌트 직접 속성
--btn-state-hover-opacity   상태 관련 속성
--card-avatar-size          자식 요소 속성
--card-elevation-hover      상태별 효과 속성
```

### 파일명

```
m3-컴포넌트.css

예시: m3-btn.css, m3-card.css, m3-text-field.css
예외 없음. icon-essential.css 같은 보조 파일도 m3- 접두사를 사용합니다.
```

---

## 8. 반응형

### 현재 방식 (반복 선언)

```css
@media (min-width: 640px) {
    .m3-card.sm\:card\:filled { --card-background: var(--color-surface-muted); --card-box-shadow: none; }
}
@media (min-width: 768px) {
    .m3-card.md\:card\:filled { --card-background: var(--color-surface-muted); --card-box-shadow: none; }
}
```

이 방식은 코드 중복이 심합니다. 매 브레이크포인트마다 동일한 변수를 반복 선언합니다.

### 권장: 필요한 경우에만 반응형 추가

- 레이아웃 전환이 필요한 속성만 반응형 제공 (예: `card-layout:horizontal`, `deco-pos:top`)
- 단순 크기/색상 변형은 반응형을 제공하지 않습니다.
  사용자가 필요하면 미디어쿼리에서 변수를 직접 오버라이드할 수 있습니다.

---

## 9. 체크리스트

새 컴포넌트를 추가하거나 기존 컴포넌트를 수정할 때 다음을 확인합니다.

### 변수화 검증

- [ ] 모든 시각적 CSS 속성이 `var(--컴포넌트-속성)` 형태로 적용되어 있는가?
- [ ] 자식 요소의 커스터마이징 가능한 속성도 변수화 되어 있는가?
- [ ] 옵션 클래스가 CSS 속성을 직접 사용하지 않고 변수만 변경하는가?

### 네이밍 검증

- [ ] 파일명이 `m3-컴포넌트.css` 형태인가?
- [ ] 클래스명이 `m3-컴포넌트` 형태인가?
- [ ] 변수명이 `--컴포넌트-속성` 패턴을 따르는가?
- [ ] 같은 개념에 대해 기존 컴포넌트와 동일한 네이밍 패턴을 사용하는가?

### 상태 검증

- [ ] hover/focus/active에 `background-image` 오버레이를 사용하는가? (`background-color` 변경이 아닌)
- [ ] state layer opacity가 변수로 관리되는가? (하드코딩 `8%`, `12%` 금지)
- [ ] 정적 컨테이너의 경우 hover가 기본 비활성인가?

### 구조 검증

- [ ] `::before` / `::after`가 별도 규칙 블록으로 분리되어 있는가?
- [ ] 같은 셀렉터 블록이 변수 선언 / 스타일 적용 두 개로만 존재하는가? (3개 이상 반복 없음)
- [ ] design-tokens 변수를 직접 CSS 속성에 사용하지 않고, 컴포넌트 변수를 거쳐서 참조하는가?

---

## 10. 안티패턴 목록

| 안티패턴 | 올바른 방법 |
|----------|------------|
| 옵션 클래스에서 `box-shadow: var(--shadow-sm)` | `--chip-box-shadow: var(--shadow-sm)` |
| 옵션 클래스에서 자식 셀렉터 + CSS 속성 | 부모에 변수 선언 → 옵션에서 변수만 변경 |
| hover에서 `background-color` 변경 | `background-image: linear-gradient(overlay)` |
| state opacity `8%` 하드코딩 | `calc(var(--state-hover-opacity) * 100%)` |
| `color: var(--color-primary)` (icon 옵션) | `--icon-color: var(--color-primary)` |
| `::before`를 부모 `&::before`로 중첩 | 별도 규칙 블록 `.component::before {}` |
| `--field-border: var(--field-border)` (순환 참조) | 다른 변수명 사용 또는 실제 값 지정 |
| display: none으로 숨기기 (옵션에서) | height/opacity를 0으로 설정하여 변수로 제어 |
