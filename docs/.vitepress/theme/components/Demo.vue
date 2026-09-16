<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'

const props = defineProps({
  initialCode: { type: String, default: '' }
})

const slotRef = ref(null)
const editorRef = ref(null)
const highlightRef = ref(null)
const editing = ref(false)
const code = ref('')
const originalCode = ref('')
const liveHtml = ref('')

onMounted(async () => {
  await nextTick()
  // slot 내용이 있으면 slot에서, 없으면 prop에서
  let raw = ''
  if (slotRef.value) raw = slotRef.value.innerHTML
  if (!raw.trim() && props.initialCode) raw = props.initialCode
  const pretty = prettyHtml(raw)
  code.value = pretty
  originalCode.value = pretty
  liveHtml.value = pretty
})

watch(code, (val) => {
  liveHtml.value = val
  nextTick(autoGrow)
})

watch(editing, (on) => { if (on) nextTick(autoGrow) })

// ───── HTML 정렬 ─────
// 요소 자식이 없거나 인라인 요소·텍스트만 있으면 한 줄, 아니면 자식마다 줄을 나눠 들여쓴다.
const INLINE = new Set(['a', 'span', 'i', 'b', 'strong', 'em', 'code', 'img', 'br', 'small', 'sup', 'sub', 'label', 'kbd', 'abbr'])
const VOID = new Set(['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'track', 'wbr'])

function prettyHtml(html) {
  if (typeof DOMParser === 'undefined') return html.trim()
  const doc = new DOMParser().parseFromString(`<body>${html.replace(/<!--[\s\S]*?-->/g, '')}</body>`, 'text/html')
  const out = []
  for (const node of doc.body.childNodes) {
    const s = serialize(node, 0)
    if (s.trim()) out.push(s)
  }
  return out.join('\n')
}

function isInlineOnly(el) {
  for (const c of el.childNodes) {
    if (c.nodeType === 1 && !INLINE.has(c.tagName.toLowerCase())) return false
    if (c.nodeType === 1 && !isInlineOnly(c)) return false
  }
  return true
}

function openTag(el) {
  const attrs = [...el.attributes].map((a) => (a.value === '' ? a.name : `${a.name}="${a.value.replace(/"/g, '&quot;')}"`))
  return `<${el.tagName.toLowerCase()}${attrs.length ? ' ' + attrs.join(' ') : ''}>`
}

function serialize(node, depth) {
  const pad = '  '.repeat(depth)
  if (node.nodeType === 3) {
    const t = node.textContent.replace(/\s+/g, ' ').trim()
    return t ? pad + t : ''
  }
  if (node.nodeType !== 1) return ''
  const tag = node.tagName.toLowerCase()
  if (VOID.has(tag)) return pad + openTag(node)
  if (isInlineOnly(node)) {
    const inner = [...node.childNodes].map((c) => {
      if (c.nodeType === 3) return c.textContent.replace(/\s+/g, ' ')
      if (c.nodeType === 1) return VOID.has(c.tagName.toLowerCase()) ? openTag(c) : `${openTag(c)}${serializeInline(c)}</${c.tagName.toLowerCase()}>`
      return ''
    }).join('').trim()
    return `${pad}${openTag(node)}${inner}</${tag}>`
  }
  const kids = [...node.childNodes].map((c) => serialize(c, depth + 1)).filter((s) => s.trim())
  return `${pad}${openTag(node)}\n${kids.join('\n')}\n${pad}</${tag}>`
}

function serializeInline(el) {
  return [...el.childNodes].map((c) => {
    if (c.nodeType === 3) return c.textContent.replace(/\s+/g, ' ')
    if (c.nodeType === 1) return VOID.has(c.tagName.toLowerCase()) ? openTag(c) : `${openTag(c)}${serializeInline(c)}</${c.tagName.toLowerCase()}>`
    return ''
  }).join('')
}

// ───── 하이라이트 (의존성 없는 HTML 토크나이저) ─────
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function highlightHtml(src) {
  let out = ''
  const re = /<!--[\s\S]*?-->|<\/?[a-zA-Z][^>]*>/g
  let last = 0, m
  while ((m = re.exec(src))) {
    out += esc(src.slice(last, m.index))
    const t = m[0]
    if (t.startsWith('<!--')) out += `<span class="hl-comment">${esc(t)}</span>`
    else out += highlightTag(t)
    last = m.index + t.length
  }
  out += esc(src.slice(last))
  return out + '\n'   // 마지막 줄 높이 확보 (textarea 와 pre 의 줄 수 일치)
}

function highlightTag(t) {
  const m = t.match(/^(<\/?)([\w-]+)([\s\S]*?)(\/?>)$/)
  if (!m) return esc(t)
  const [, open, name, rest, close] = m
  const attrs = rest.replace(/([\w:.-]+)(?:(=)("[^"]*"|'[^']*'|[^\s"'>]+))?/g, (_, n, eq, v) =>
    `<span class="hl-attr">${esc(n)}</span>${eq ? `<span class="hl-punct">=</span><span class="hl-value">${esc(v)}</span>` : ''}`)
  return `<span class="hl-punct">${esc(open)}</span><span class="hl-tag">${esc(name)}</span>${attrs}<span class="hl-punct">${esc(close)}</span>`
}

const highlighted = computed(() => highlightHtml(code.value))

function autoGrow() {
  const ta = editorRef.value
  if (!ta) return
  ta.style.height = 'auto'
  ta.style.height = `${ta.scrollHeight}px`
}

function syncScroll() {
  if (highlightRef.value && editorRef.value) {
    highlightRef.value.scrollTop = editorRef.value.scrollTop
    highlightRef.value.scrollLeft = editorRef.value.scrollLeft
  }
}

function onTab(e) {
  // Tab 으로 들여쓰기 (포커스 이동 대신)
  const ta = e.target
  const { selectionStart: s, selectionEnd: en } = ta
  code.value = code.value.slice(0, s) + '  ' + code.value.slice(en)
  nextTick(() => { ta.selectionStart = ta.selectionEnd = s + 2 })
}

function resetCode() {
  code.value = originalCode.value
  liveHtml.value = originalCode.value
}

function toggleEdit() {
  editing.value = !editing.value
}
</script>

<template>
  <!-- 숨겨진 slot 캡처용 -->
  <div ref="slotRef" style="display:none"><slot /></div>

  <div class="demo-container">
    <!-- 라이브 프리뷰 -->
    <div class="demo-preview" v-html="liveHtml"></div>

    <!-- 툴바 -->
    <div class="demo-toolbar">
      <button class="demo-toolbar-btn" @click="toggleEdit">
        {{ editing ? '편집 닫기' : '코드 편집' }}
      </button>
      <button v-if="editing" class="demo-toolbar-btn demo-reset" @click="resetCode">
        초기화
      </button>
    </div>

    <!-- 편집 모드: 하이라이트 pre 위에 투명 textarea 를 겹친다 -->
    <div v-if="editing" class="demo-editor-wrap">
      <pre ref="highlightRef" class="demo-code demo-editor-highlight" aria-hidden="true" v-html="highlighted"></pre>
      <textarea
        ref="editorRef"
        v-model="code"
        class="demo-code demo-editor"
        spellcheck="false"
        autocapitalize="off"
        autocomplete="off"
        @scroll="syncScroll"
        @keydown.tab.prevent="onTab"
      ></textarea>
    </div>

    <!-- 보기 모드: 소스 코드 -->
    <details v-else class="demo-details">
      <summary class="demo-summary">소스 코드 보기</summary>
      <pre class="demo-code demo-source" v-html="highlighted"></pre>
    </details>
  </div>
</template>

<style scoped>
.demo-container {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  margin: 1rem 0 1.5rem;
  overflow: hidden;
}

.demo-preview {
  padding: 1.5rem;
  background: var(--vp-c-bg);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  /* transform 이 있는 요소는 position: fixed 자손의 기준 상자가 된다.
     다이얼로그·바텀시트·스낵바·드로어처럼 fixed 로 그려지는 컴포넌트가 문서 화면 전체를 덮지 않고
     이 상자 안에서 미리보기로 보이게 한다. */
  position: relative;
  transform: translateZ(0);
}
/* fixed 자손은 상자 높이에 기여하지 않으므로 그런 데모는 높이를 확보한다 */
.demo-preview:has(dialog, .m3-bottom-sheet, .m3-nav-drawer, .m3-snackbar, .m3-layout, .m3-nav-bar, .m3-nav-rail) {
  min-height: 26rem;
}

.demo-toolbar {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-border);
}

.demo-toolbar-btn {
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.8125rem;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.15s;
}

.demo-toolbar-btn:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.demo-reset {
  color: var(--vp-c-text-3);
}

/* 편집 pre 와 textarea 는 글꼴·여백·줄바꿈 규칙이 완전히 같아야 글자가 겹친다 */
.demo-code {
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace;
  font-size: 0.8125rem;
  line-height: 1.6;
  tab-size: 2;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-all;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
}

.demo-editor-wrap {
  position: relative;
  border-top: 1px solid var(--vp-c-border);
}

.demo-editor-highlight {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.demo-editor {
  position: relative;
  display: block;
  min-height: 8rem;
  border: none;
  background: transparent;
  color: transparent;
  caret-color: var(--vp-c-text-1);
  resize: none;
  outline: none;
  overflow: hidden;
}
.demo-editor::selection {
  background: var(--vp-c-brand-soft);
}

.demo-details {
  border-top: 1px solid var(--vp-c-border);
}

.demo-summary {
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
  color: var(--vp-c-text-3);
  cursor: pointer;
  user-select: none;
  background: var(--vp-c-bg-soft);
}

.demo-summary:hover {
  color: var(--vp-c-brand-1);
}

.demo-source {
  overflow-x: auto;
}

/* 하이라이트 색 — vitepress 테마 변수라 라이트·다크 자동 */
.demo-code :deep(.hl-tag)     { color: var(--vp-c-brand-1); }
.demo-code :deep(.hl-attr)    { color: var(--vp-c-purple-1); }
.demo-code :deep(.hl-value)   { color: var(--vp-c-yellow-1); }
.demo-code :deep(.hl-punct)   { color: var(--vp-c-text-3); }
.demo-code :deep(.hl-comment) { color: var(--vp-c-text-3); font-style: italic; }
</style>
