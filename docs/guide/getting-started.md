# 시작하기

@newtil/components는 CSS 변수 기반의 Material Design 3 컴포넌트 라이브러리입니다. 별도의 JavaScript 없이 순수 CSS만으로 버튼, 입력 필드, 아이콘 등 UI 컴포넌트를 구현합니다.

## 설치

```bash
npm install @newtil/components
```

## CSS 가져오기

### HTML link 태그

```html
<link rel="stylesheet" href="node_modules/@newtil/components/css/component/m3/m3-btn.css">
<link rel="stylesheet" href="node_modules/@newtil/components/css/component/m3/m3-icon.css">
<link rel="stylesheet" href="node_modules/@newtil/components/css/component/m3/icon-essential.css">
```

### JavaScript import (Vite, Webpack 등)

```js
import '@newtil/components/css/component/m3/m3-btn.css';
import '@newtil/components/css/component/m3/m3-icon.css';
import '@newtil/components/css/component/m3/icon-essential.css';
```

## 첫 번째 예제

버튼과 아이콘을 조합한 간단한 예제입니다.

```html
<!-- 기본 filled 버튼 -->
<button class="m3-btn">저장</button>

<!-- 아이콘이 포함된 버튼 -->
<button class="m3-btn btn-icon:leading">
  <i class="m3-icon icon:save"></i>저장하기
</button>

<!-- 단독 아이콘 -->
<i class="m3-icon icon:home icon-color:primary"></i>
```

## 프로젝트 구조

```
@newtil/components/
└── css/
    └── component/
        └── m3/
            ├── m3-icon.css          # 아이콘 기본 스타일
            ├── icon-essential.css   # Essential 60개 아이콘 정의
            ├── m3-btn.css           # 버튼
            ├── m3-fab.css           # FAB (Floating Action Button)
            ├── m3-icon-btn.css      # 아이콘 버튼
            ├── m3-text-field.css    # 텍스트 입력 필드
            ├── m3-checkbox.css      # 체크박스
            ├── m3-radio-btn.css     # 라디오 버튼
            ├── m3-switch.css        # 스위치 (토글)
            ├── m3-slider.css        # 슬라이더
            ├── m3-card.css          # 카드
            ├── m3-dialog.css        # 다이얼로그
            ├── m3-chips.css         # 칩
            ├── m3-tabs.css          # 탭
            ├── m3-nav-bar.css       # 내비게이션 바
            ├── m3-nav-drawer.css    # 내비게이션 드로어
            ├── m3-nav-rail.css      # 내비게이션 레일
            ├── m3-menu.css          # 메뉴
            ├── m3-list.css          # 리스트
            ├── m3-snackbar.css      # 스낵바
            ├── m3-progress.css      # 프로그레스
            ├── m3-tooltip.css       # 툴팁
            └── ...
```

## 커스터마이징 미리보기

모든 컴포넌트는 `--btn-*`, `--field-*` 등 CSS 변수로 시각 속성이 노출됩니다. inline style이나 커스텀 클래스로 간단히 오버라이드할 수 있습니다.

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

자세한 내용은 [커스터마이징 가이드](./customization.md)를 참고하세요.
