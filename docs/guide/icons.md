# 아이콘

Material Symbols 폰트 기반의 아이콘 컴포넌트입니다. 두 가지 방법으로 아이콘을 사용할 수 있습니다.

## 방법 1. icon:이름 클래스 (Essential 아이콘)

미리 정의된 60개 핵심 아이콘을 클래스 이름으로 사용합니다.

<Demo>
<i class="m3-icon icon:home"></i>
<i class="m3-icon icon:search"></i>
<i class="m3-icon icon:settings"></i>
</Demo>

## 방법 2. data-icon 속성 (전체 아이콘)

Essential에 없는 아이콘은 `data-icon` 속성으로 사용합니다. Material Symbols 폰트의 ligature 기능을 이용하므로, 별도의 CSS 정의 없이 아이콘 이름만으로 렌더링됩니다.

<Demo>
<i class="m3-icon" data-icon="shopping_cart"></i>
<i class="m3-icon" data-icon="rocket_launch"></i>
<i class="m3-icon" data-icon="account_circle"></i>
</Demo>

전체 아이콘 목록은 [Google Material Symbols](https://fonts.google.com/icons)에서 검색할 수 있습니다. 아이콘 이름은 소문자 + 언더스코어 형식입니다 (예: `shopping_cart`, `arrow_forward`, `dark_mode`).

## Essential 60개 아이콘 목록

### Navigation

| 클래스 | 아이콘 이름 |
|--------|------------|
| `icon:home` | 홈 |
| `icon:menu` | 메뉴 |
| `icon:close` | 닫기 |
| `icon:arrow_back` | 뒤로 |
| `icon:arrow_forward` | 앞으로 |
| `icon:expand_more` | 펼치기 |
| `icon:expand_less` | 접기 |
| `icon:chevron_left` | 왼쪽 |
| `icon:chevron_right` | 오른쪽 |
| `icon:more_vert` | 더보기 (세로) |
| `icon:more_horiz` | 더보기 (가로) |
| `icon:refresh` | 새로고침 |
| `icon:settings` | 설정 |
| `icon:apps` | 앱 |
| `icon:launch` | 실행 |

### Actions

| 클래스 | 아이콘 이름 |
|--------|------------|
| `icon:add` | 추가 |
| `icon:remove` | 제거 |
| `icon:edit` | 편집 |
| `icon:delete` | 삭제 |
| `icon:save` | 저장 |
| `icon:check` | 체크 |
| `icon:clear` | 지우기 |
| `icon:cancel` | 취소 |
| `icon:done` | 완료 |
| `icon:search` | 검색 |
| `icon:share` | 공유 |
| `icon:download` | 다운로드 |
| `icon:upload` | 업로드 |
| `icon:copy` | 복사 |
| `icon:visibility` | 보이기 |
| `icon:visibility_off` | 숨기기 |
| `icon:lock` | 잠금 |
| `icon:lock_open` | 잠금 해제 |
| `icon:sync` | 동기화 |
| `icon:info` | 정보 |

### Communication

| 클래스 | 아이콘 이름 |
|--------|------------|
| `icon:email` | 이메일 |
| `icon:phone` | 전화 |
| `icon:chat` | 채팅 |
| `icon:notifications` | 알림 |
| `icon:send` | 보내기 |
| `icon:reply` | 답장 |
| `icon:help` | 도움말 |
| `icon:feedback` | 피드백 |

### Media

| 클래스 | 아이콘 이름 |
|--------|------------|
| `icon:play_arrow` | 재생 |
| `icon:pause` | 일시정지 |
| `icon:stop` | 정지 |
| `icon:volume_up` | 볼륨 높임 |
| `icon:volume_off` | 음소거 |
| `icon:mic` | 마이크 |
| `icon:mic_off` | 마이크 꺼짐 |

### Files

| 클래스 | 아이콘 이름 |
|--------|------------|
| `icon:folder` | 폴더 |
| `icon:folder_open` | 폴더 열기 |
| `icon:attach_file` | 파일 첨부 |
| `icon:cloud` | 클라우드 |
| `icon:description` | 문서 |

### Social

| 클래스 | 아이콘 이름 |
|--------|------------|
| `icon:person` | 사용자 |
| `icon:people` | 그룹 |
| `icon:favorite` | 좋아요 |
| `icon:star` | 별 |
| `icon:thumb_up` | 추천 |

## 크기 옵션

`icon-size:` 클래스로 아이콘 크기를 변경합니다.

<Demo>
<i class="m3-icon icon:home icon-size:xs"></i>  <!-- 16dp -->
<i class="m3-icon icon:home icon-size:sm"></i>  <!-- 20dp -->
<i class="m3-icon icon:home icon-size:md"></i>  <!-- 24dp (기본) -->
<i class="m3-icon icon:home icon-size:lg"></i>  <!-- 40dp -->
<i class="m3-icon icon:home icon-size:xl"></i>  <!-- 48dp -->
</Demo>

숫자 별칭도 사용 가능합니다: `icon-size:1` ~ `icon-size:5`

| 클래스 | 별칭 | 크기 | Optical Size |
|--------|------|------|-------------|
| `icon-size:xs` | `icon-size:1` | 1rem (16dp) | 20 |
| `icon-size:sm` | `icon-size:2` | 1.25rem (20dp) | 20 |
| `icon-size:md` | `icon-size:3` | 1.5rem (24dp) | 24 |
| `icon-size:lg` | `icon-size:4` | 2.5rem (40dp) | 40 |
| `icon-size:xl` | `icon-size:5` | 3rem (48dp) | 48 |

## 색상 옵션

`icon-color:` 클래스로 아이콘 색상을 지정합니다.

<Demo>
<!-- Brand 색상 -->
<i class="m3-icon icon:favorite icon-color:primary"></i>
<i class="m3-icon icon:favorite icon-color:secondary"></i>
<i class="m3-icon icon:favorite icon-color:tertiary"></i>

<!-- 상태 색상 -->
<i class="m3-icon icon:check icon-color:success"></i>
<i class="m3-icon icon:warning icon-color:warning" data-icon="warning"></i>
<i class="m3-icon icon:delete icon-color:danger"></i>

<!-- Surface / Text -->
<i class="m3-icon icon:info icon-color:text-muted"></i>
</Demo>

| 클래스 | 설명 |
|--------|------|
| `icon-color:primary` | 주요 색상 |
| `icon-color:primary-hover` | 주요 색상 (hover) |
| `icon-color:primary-active` | 주요 색상 (active) |
| `icon-color:secondary` | 보조 색상 |
| `icon-color:secondary-hover` | 보조 색상 (hover) |
| `icon-color:tertiary` | 3차 색상 |
| `icon-color:tertiary-hover` | 3차 색상 (hover) |
| `icon-color:surface` | 표면 색상 |
| `icon-color:on-surface` | 표면 위 색상 |
| `icon-color:text` | 텍스트 색상 |
| `icon-color:text-muted` | 흐린 텍스트 |
| `icon-color:text-subtle` | 미묘한 텍스트 |
| `icon-color:success` | 성공 |
| `icon-color:warning` | 경고 |
| `icon-color:danger` | 위험 |
| `icon-color:white` | 흰색 (#ffffff) |
| `icon-color:black` | 검정 (#000000) |

## Filled (채움) 옵션

`icon-filled:1` 클래스로 아이콘을 채움 스타일로 전환합니다.

<Demo>
<i class="m3-icon icon:favorite"></i>                    <!-- outlined -->
<i class="m3-icon icon:favorite icon-filled:1"></i>      <!-- filled -->
<i class="m3-icon icon:favorite icon-filled:1 icon-color:danger"></i>  <!-- filled + 색상 -->
</Demo>

## 아이콘 스타일

Material Symbols는 3가지 스타일을 지원합니다.

<Demo>
<i class="m3-icon icon:home icon-style:outlined"></i>  <!-- 기본 -->
<i class="m3-icon icon:home icon-style:rounded"></i>
<i class="m3-icon icon:home icon-style:sharp"></i>
</Demo>

## 세밀한 조정

| 클래스 | 값 | 설명 |
|--------|------|------|
| `icon-weight:100` ~ `icon-weight:700` | 100~700 | 굵기 조정 |
| `icon-grade:low` | -25 | 가는 그레이드 |
| `icon-grade:normal` | 0 | 기본 그레이드 |
| `icon-grade:high` | 200 | 굵은 그레이드 |
| `icon-optical:20` ~ `icon-optical:48` | 20, 24, 40, 48 | 광학 크기 |

## m3-deco와의 조합

`m3-deco` 컴포넌트에서도 아이콘 클래스와 data-icon 속성을 동일하게 사용할 수 있습니다.

<Demo>
<!-- icon 클래스 사용 -->
<span class="m3-deco icon:home deco-pos:top">홈</span>

<!-- data-icon 속성 사용 -->
<span class="m3-deco deco-pos:top" data-icon="shopping_cart">장바구니</span>
</Demo>

## 버튼 안에서 아이콘 사용

<Demo>
<button class="m3-btn btn-icon:leading">
  <i class="m3-icon icon:save"></i>저장
</button>

<button class="m3-btn btn-icon:trailing">
  보내기<i class="m3-icon icon:send"></i>
</button>

<!-- data-icon으로 -->
<button class="m3-btn btn-icon:leading">
  <i class="m3-icon" data-icon="rocket_launch"></i>발사
</button>
</Demo>

## Variable API

| 변수 | 기본값 | 설명 |
|------|--------|------|
| `--icon-size` | `1.5rem` | 아이콘 크기 (24dp) |
| `--icon-family` | `"Material Symbols Outlined"` | 폰트 패밀리 |
| `--icon-fill` | `0` | 채움 (0=outlined, 1=filled) |
| `--icon-weight` | `400` | 굵기 (100~700) |
| `--icon-grade` | `0` | 그레이드 (-25, 0, 200) |
| `--icon-optical-size` | `24` | 광학 크기 (20, 24, 40, 48) |
| `--icon-hover-border-radius` | `50%` | 호버 효과 모서리 |
| `--icon-hover-scale` | `1.3` | 호버 시 확대 비율 |
| `--icon-hover-inner-scale` | `0.8` | 호버 시 내부 축소 비율 |
