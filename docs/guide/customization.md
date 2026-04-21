# 커스터마이징

`@newtil/components`를 원하는 모양으로 만드는 방법.

## 3단계 우선순위

**반드시 이 순서로 시도하세요:**

```
1. 클래스 타입 (기본 컴포넌트)
        ↓ 원하는 모양이 안 나오면
2. 옵션 클래스 (variant)
        ↓ 옵션에도 없으면
3. CSS 변수 오버라이드 (최후의 수단)
```

**왜 순서가 중요한가:**

- **타입**은 "가장 자주 쓰는 모양" → 대부분 이것만 써도 충분
- **옵션**은 "자주 있는 변형"을 미리 정의한 프리셋 → 변수 여러 개 조합을 한 클래스로 응축
- **변수**는 "한 번 쓰는 고유 조정" → 반복되면 옵션이 부족하다는 신호

---

## 1단계: 클래스 타입만 사용

<Demo>
<div style="display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center;">
  <button class="m3-btn">저장</button>
  <div class="m3-text-field" style="max-width: 14rem;">
    <input type="text" placeholder=" ">
    <label>이름</label>
  </div>
  <label class="m3-checkbox"><input type="checkbox" checked> 동의</label>
</div>
</Demo>

```html
<button class="m3-btn">저장</button>
<div class="m3-text-field">
  <input type="text" placeholder=" ">
  <label>이름</label>
</div>
<label class="m3-checkbox">
  <input type="checkbox" checked> 동의
</label>
```

기본 타입으로 원하는 모양이면 **여기서 끝**. 다른 수정 불필요.

---

## 2단계: 옵션 클래스 (variant)

기본으로 부족하면 **이미 정의된 옵션**을 조합. 각 컴포넌트는 자주 쓰는 변형을 옵션으로 제공합니다.

### 버튼 예시

<Demo>
<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center;">
  <button class="m3-btn btn:outlined">Outlined</button>
  <button class="m3-btn btn:text">Text</button>
  <button class="m3-btn btn:outlined btn-size:xs">XS</button>
  <button class="m3-btn btn:outlined btn-color:danger">Danger</button>
  <button class="m3-btn btn-icon:leading"><i class="m3-icon" data-icon="add"></i>추가</button>
</div>
</Demo>

```html
<button class="m3-btn btn:outlined">Outlined</button>
<button class="m3-btn btn:outlined btn-size:xs btn-color:danger">삭제</button>
```

**옵션은 여러 축에서 조합 가능합니다:** type(filled/outlined/text/...) + size(xs/sm/md/lg/xl) + color(primary/danger/...) + icon(leading/trailing).

### 텍스트 필드 예시

<Demo>
<div style="display: flex; flex-direction: column; gap: 0.75rem; max-width: 22rem;">
  <div class="m3-text-field field:outlined field-size:xs">
    <input type="text" placeholder=" ">
    <label>XS Outlined</label>
  </div>
  <div class="m3-text-field field-label:top">
    <label>이름</label>
    <input type="text" placeholder="예: 홍길동">
  </div>
  <div class="m3-text-field field-label:none">
    <input type="search" placeholder="검색...">
  </div>
</div>
</Demo>

각 컴포넌트의 전체 옵션은 해당 가이드 페이지에서 확인하세요.

---

## 3단계: CSS 변수 오버라이드 (최후의 수단)

옵션으로도 표현 안 되는 조정이 필요할 때만 변수를 건드립니다.

### 인스턴스 한정 (인라인 style)

**한 곳에서만** 쓰는 조정은 인라인 스타일로:

```html
<button
  class="m3-btn btn:outlined"
  style="--btn-border-radius: 0.25rem;"
>
  저장
</button>
```

인라인 style은 특이성이 최고라 newtil variant를 안정적으로 덮어씁니다.

### 섹션 스코프 (부모 요소)

**같은 섹션에서 반복**되는 조정은 부모 컨테이너에서:

```html
<div style="--btn-border-radius: 0.25rem;">
  <button class="m3-btn">A</button>
  <button class="m3-btn btn:outlined">B</button>
  <button class="m3-btn btn:text">C</button>
</div>
```

CSS 변수는 부모→자식으로 상속되므로 컨테이너에서 한 번 설정하면 내부 모든 컴포넌트에 적용.

### 앱 전역 브랜드 (`:root`)

브랜드 색 전환은 예외적으로 권장되는 변수 사용입니다. `globals.css`에서 한 번 설정하고 끝:

```css
@import "@newtil/components/index.css";

:root {
  --color-primary: #4f46e5;
  --color-primary-hover: #4338ca;
  --color-primary-active: #3730a3;
  --color-primary-subtle: rgba(79, 70, 229, 0.1);
  --color-on-primary: #ffffff;
}
```

이건 **앱 정체성**을 정의하는 설정이라 변수로 처리하는 게 맞습니다.

---

## 변수 오버라이드가 반복되면 — 옵션 부재의 신호

같은 변수 오버라이드가 여러 곳에서 반복되고 있다면 멈추고 확인하세요:

```html
<!-- ⚠️ 이런 반복 -->
<button class="m3-btn" style="--btn-border-radius: 0.25rem;">A</button>
<button class="m3-btn" style="--btn-border-radius: 0.25rem;">B</button>
<button class="m3-btn" style="--btn-border-radius: 0.25rem;">C</button>
```

이건 **"radius가 작은 버튼" 옵션이 필요하다**는 신호입니다. 이미 정의된 옵션이 있는지 먼저 확인:

```html
<!-- ✓ btn-shape:square 옵션 활용 -->
<button class="m3-btn btn-shape:square">A</button>
<button class="m3-btn btn-shape:square">B</button>
<button class="m3-btn btn-shape:square">C</button>
```

**원하는 옵션이 없다면** → 라이브러리에 요청하세요 (아래 참조).

---

## 부족한 옵션·타입은 요청해주세요

라이브러리의 기본 타입이 실전에 안 맞거나, 필요한 옵션이 없다면 **변수로 우회하지 말고** 요청해주세요. 같은 요구가 반복된다는 신호일 가능성이 높고, 정식 옵션으로 추가되면 모든 사용자가 혜택을 봅니다.

**요청 채널:**

- **GitHub Issue**
  - [@newtil/components](https://github.com/newlecture-corp/newtil-components/issues)
  - [@newtil/css](https://github.com/newlecture-corp/newtil-css/issues)
  - [@newtil/design-tokens](https://github.com/newlecture-corp/newtil-design-tokens/issues)
- **뉴렉처 프로젝트 피드백:** https://www.newlecture.com/projects/feedback

**요청 시 포함하면 좋은 내용:**

- 어떤 컴포넌트의 어떤 모양이 필요한지 (스크린샷/그림 첨부)
- 현재 변수 오버라이드로 어떻게 우회하고 있는지
- 비슷한 요구가 얼마나 반복되는지

---

## 자주 하는 실수

### 1. 옵션 확인 없이 바로 변수 오버라이드

```css
/* ❌ 옵션이 있는데 변수를 먼저 건드림 */
.my-btn {
  --btn-background-color: transparent;
  --btn-color: var(--color-primary);
  --btn-border-width: 1px;
  --btn-border-color: var(--color-primary);
}
```

```html
<!-- ✓ btn:outlined 한 옵션 -->
<button class="m3-btn btn:outlined">저장</button>
```

### 2. variant와 충돌하는 조합

```html
<!-- ❌ btn:outlined + btn-color:danger → 의도: outlined+빨간글자. 실제: filled+빨간배경 -->
<button class="m3-btn btn:outlined btn-color:danger">삭제</button>
```

`btn-color:*`는 filled 기준 variant라 outlined와 조합 시 outlined 효과가 무효화됩니다. 이 경우는 인라인 style로 텍스트/보더 색만 오버라이드:

```html
<!-- ✓ outlined 유지 + 색상만 변경 -->
<button
  class="m3-btn btn:outlined"
  style="--btn-color: var(--color-danger); --btn-border-color: var(--color-danger);"
>
  삭제
</button>
```

### 3. `@import` 순서 실수

오버라이드는 반드시 **import 이후**에:

```css
/* ❌ */
:root { --color-primary: #4f46e5; }
@import "@newtil/components";

/* ✓ */
@import "@newtil/components";
:root { --color-primary: #4f46e5; }
```

### 4. 파생 토큰 누락

`--color-primary`만 바꾸고 `--color-primary-hover`, `--color-primary-subtle`를 빠뜨리면 hover 상태가 원래 색으로 남습니다. 관련 파생 토큰은 함께 조정해야 합니다.

### 5. CSS 모듈에서 특이성 부족

newtil variant는 2-클래스 선택자(`.m3-btn.btn\:outlined`)라 CSS 모듈의 단일 클래스로는 덮기 어렵습니다. CSS 모듈을 쓰기 전에 **인라인 style**이나 **부모 스코프**를 먼저 고려하세요. 꼭 CSS 모듈이 필요하면 `:global(.m3-btn).myClass` 패턴.
