---
layout: home
hero:
  name: "@newtil/materials"
  text: "Material Design 3 CSS 구현체"
  tagline: Google M3 스펙을 충실히 구현한 m3- prefix 컴포넌트. @newtil/design-tokens 위에 동작.
  actions:
    - theme: brand
      text: 시작하기
      link: /guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/newlecture-corp/newtil-materials
---

## 핵심 특징

| 특징 | 설명 |
|------|------|
| **Material Design 3** | Google M3 스펙 기반 컴포넌트 — 버튼, 카드, 다이얼로그, 탭 등 |
| **CSS 변수 커스터마이징** | `--color-primary` 등 design-tokens 변수만 바꾸면 전체 브랜드 색상 변경. 컴포넌트마다 `--btn-*`, `--card-*` Variable API 제공 |
| **디자인 토큰 공유** | `@newtil/design-tokens`와 동일한 토큰 — `@newtil/css`와 시각적 일관성 자동 유지 |
| **다크모드 내장** | 시스템 자동 + 수동 토글. 모든 컴포넌트가 다크모드 지원 |
| **프레임워크 무관** | 순수 CSS 클래스 — React, Vue, Svelte, 바닐라 HTML 어디서든 사용 |
| **순수 CSS** | JavaScript 런타임 없음. `@newtil/materials/index.css` 하나로 모든 컴포넌트 제공 |

## 가이드

- [시작하기](/guide/getting-started) — 설치, 기본 사용법
- [아이콘](/guide/icons) — Material Symbols 아이콘 설정
- [콤비네이션](/guide/customization) — 타입·옵션 클래스를 조합해 모양을 만드는 법(변수 오버라이드는 마지막)

## 컴포넌트

- [버튼](/guide/buttons) — Button, FAB, Icon Button
- [입력](/guide/inputs) — Text Field, Checkbox, Radio, Switch, Slider
- [컨테이너](/guide/containment) — Card, Dialog, Bottom Sheet, Chips
- [커뮤니케이션](/guide/communication) — Badge, Progress, Snackbar, Tooltip
- [네비게이션](/guide/navigation) — Tabs, Top App Bar, Nav Bar, Nav Rail, Nav Drawer, Menu, List
- [레이아웃](/guide/layout) — Adaptive Layout, Divider
