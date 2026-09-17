# 테마 파일 (Brand theme)

newtil 컴포넌트 위에 얹는 **브랜드가 정한 값 한 벌**입니다. 컴포넌트 규격(`dist/spec.json`)이 "무엇이 있고 무엇을 바꿀 수 있는가"라면, 테마는 "이 브랜드는 어느 값을 쓰는가"입니다. 이 층이 없으면 페이지마다 그 결정을 새로 내려 같은 사이트의 화면들이 서로 달라집니다.

## 자리와 순서

프로젝트마다 테마 파일 하나. 로드 순서는 고정입니다.

```html
<link rel="stylesheet" href="…/@newtil/design-tokens/dist/tokens.css">
<link rel="stylesheet" href="…/@newtil/materials/dist/index.css">
<link rel="stylesheet" href="theme/<brand>.css">        <!-- 브랜드 테마 -->
<link rel="stylesheet" href="page.css">                 <!-- 페이지 레이아웃만 -->
```

페이지 CSS 는 레이아웃(그리드·간격·페이지 고유 블록)만 갖고, 컴포넌트 변수(`--btn-*`, `--card-*`, `--field-*` …)는 **테마에서만** 정합니다.

## 형식

세 부분으로 이루어집니다. `ncafe.css` 가 예시입니다.

1. **사용 규약** (머리 주석) — 마크업에서 어느 자리에 어느 옵션을 쓰는지. 기본 버튼·보조 버튼·위험 버튼·크기 단계, 카드 타입, 입력 필드 조합, 배지. 여기 적힌 것만 쓰고 적히지 않은 옵션(`btn-shape` 등)은 쓰지 않습니다. AI·도구는 이 절을 규격처럼 읽습니다.
2. **브랜드 씨앗** — `:root { --brand: #5c3d2e; }` 한 줄. design-tokens 0.2.3 부터 램프(`--_hue-green-*`)와 `--color-on-primary` 가 이 값에서 계산되어 라이트·다크가 같이 따라옵니다. 회색조를 바꾸려면 `--_hue-gray-*` 는 hex 로 덮고, 브랜드 램프의 특정 단계를 손으로 정하고 싶을 때만 `--_hue-green-N` 을 hex 로 덮습니다.
3. **컴포넌트 변수** — 컴포넌트 셀렉터(`.m3-btn`, `.m3-card`, `.m3-text-field.field\:outlined.field-label\:top` …)에 변수 값. 옵션으로 되는 것은 옵션으로 두고, 옵션이 없는 것만 여기서.

## 만드는 법

기존 사이트가 있으면 그 CSS 에서 값을 뽑습니다. 버튼 높이·모서리·글꼴 크기의 최빈값, 카드 모서리·여백, 입력 높이, 브랜드 색(씨앗 하나)과 회색 램프. 없으면 M3 기본값을 그대로 두고 씨앗만 씁니다.

테마가 필요한 변수가 규격에 없으면 그건 materials 의 빈 자리입니다. 페이지 CSS 로 우회하지 말고 이슈로 남깁니다.
