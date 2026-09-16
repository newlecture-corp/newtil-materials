# 시작하기

`@newtil/materials` 는 Material Design 3 를 CSS 로 구현한 `m3-` 컴포넌트 라이브러리입니다. 별도의 JavaScript 없이 순수 CSS 클래스만으로 버튼, 입력 필드, 카드, 내비게이션 등을 구현하며, 모든 시각 속성은 `@newtil/design-tokens` 의 변수 위에서 동작합니다.

## 설치

```bash
npm install @newtil/materials
```

`@newtil/design-tokens` 는 의존성으로 함께 설치됩니다.

## CSS 가져오기

패키지가 공개하는 진입점은 두 개뿐입니다. 개별 컴포넌트 파일(`css/component/m3/*.css`)은 패키지 외부에서 가져올 수 없습니다.

### JavaScript import (Vite, Webpack 등)

패키지를 그대로 가져오면 `dist/index.css` 가 로드됩니다.

```js
import "@newtil/materials";
```

### CSS `@import`

```css
@import "@newtil/materials/index.css";
```

### HTML link 태그

번들러 없이 쓸 때는 `node_modules` 의 빌드 결과를 직접 참조합니다.

```html
<link rel="stylesheet" href="node_modules/@newtil/materials/dist/index.css">
```

## index.css 에 들어 있는 것

`index.css` 하나가 다음을 순서대로 포함합니다.

1. `@newtil/design-tokens` — 색·간격·글꼴·모서리·그림자·층 변수
2. reset
3. Material Symbols 폰트 `@import` (Google Fonts, Outlined·Rounded·Sharp)
4. 모든 `m3-*` 컴포넌트와 `icon:*` 아이콘 클래스

::: warning 아이콘 폰트는 네트워크 의존성입니다
Material Symbols 폰트는 패키지에 포함되지 않고 런타임에 `fonts.googleapis.com` 에서 받아옵니다. 오프라인 환경이나 CSP 로 Google Fonts 가 막힌 환경에서는 아이콘이 이름 텍스트로 보입니다. 자세한 내용은 [아이콘](./icons.md) 문서를 참고하세요.
:::

## 첫 번째 예제

버튼과 아이콘을 조합한 간단한 예제입니다.

<Demo>
<!-- 기본 filled 버튼 -->
<button class="m3-btn">저장</button>

<!-- 아이콘이 포함된 버튼 -->
<button class="m3-btn btn-icon:leading">
  <i class="m3-icon icon:save"></i>저장하기
</button>

<!-- 단독 아이콘 -->
<i class="m3-icon icon:home icon-color:primary"></i>
</Demo>

## 클래스 규칙

| 용도 | 패턴 | 예시 |
|------|------|------|
| 컴포넌트 | `m3-컴포넌트` | `m3-btn`, `m3-card`, `m3-text-field` |
| 타입 변형 | `컴포넌트:타입` | `btn:outlined`, `card:filled` |
| 속성 변형 | `컴포넌트-속성:값` | `btn-size:lg`, `btn-color:danger` |
| 자식 요소 | 접두사 없는 `컴포넌트부분` | `card-header`, `list-item` |

옵션 클래스는 컴포넌트 클래스와 **같은 요소**에 붙입니다(선택자가 `.m3-btn.btn-size\:lg` 형태).

## 커스터마이징 미리보기

모든 컴포넌트는 `--btn-*`, `--field-*` 등 CSS 변수로 시각 속성이 노출됩니다. inline style 이나 커스텀 클래스로 간단히 오버라이드할 수 있습니다.

```html
<!-- inline style로 버튼 높이 변경 -->
<button class="m3-btn" style="--btn-height: 3rem; --btn-border-radius: 0.5rem;">
  커스텀 버튼
</button>

<!-- 커스텀 클래스로 일괄 적용 -->
<style>
  .my-theme .m3-btn {
    --btn-background-color: #6750a4;
    --btn-color: #ffffff;
    --btn-border-radius: 0.75rem;
  }
</style>
```

변수를 건드리기 전에 타입 → 옵션 클래스를 먼저 확인하세요. 자세한 내용은 [커스터마이징 가이드](./customization.md)를 참고하세요.
