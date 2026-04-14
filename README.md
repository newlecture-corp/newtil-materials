# @newtil/ui

newtil 디자인 시스템의 **UI 컴포넌트 라이브러리**.

변수 기반의 일관된 컴포넌트 (버튼, 카드, 다이얼로그, 아이콘 등 Material 3 스타일)를 제공합니다.

## 설계 철학

- 모든 컴포넌트는 [`@newtil/design-tokens`](https://github.com/newlecture-corp/newtil-design-tokens)의 변수만 참조 (하드코딩 금지)
- 사용자가 토큰만 재정의하면 모든 컴포넌트가 일관되게 변함
- 다크모드 지원

## 설치

```bash
npm install @newtil/ui
```

`@newtil/design-tokens`는 자동으로 함께 설치됩니다.

## 사용

### CSS만 사용

```html
<link rel="stylesheet" href="node_modules/@newtil/ui/dist/index.css">
```

또는 빌드 도구에서:

```js
import "@newtil/ui";
```

### 컴포넌트 동작 JS

```js
import "@newtil/ui/dist/js/n-bar.js";
import "@newtil/ui/dist/js/n-layout.js";
```

## 커스터마이징

```css
@import "@newtil/ui";

:root {
	--color-main-1: #ff6b00;
	--space-4: 1.25rem;
}
```

## 출처

이 패키지는 `@newtil/css@0.4.0`에서 분리되어 나왔습니다.
원본 commit: `2f5cc313c563222ddfb7231b780cce6a384dabd9`

## 라이선스

MIT
