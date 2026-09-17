// 기계가 읽는 컴포넌트 규격 생성기 — css/component/m3/*.css 를 파싱해 dist/spec.json 을 만든다.
// 문서는 사람용, spec.json 은 AI·도구용. 둘 다 같은 소스에서 나오므로 어긋나지 않는다.
//
// 컴포넌트마다: name, class, description(파일 머리 주석), slots(자식 클래스), options({그룹: [값…]}),
//               flags(값 없는 모디파이어), variables({이름: {default, note}}), usage(docs 의 첫 <Demo> 마크업)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CSS_DIR = path.join(ROOT, "css/component/m3");
const DOCS_DIR = path.join(ROOT, "docs/guide");
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));

const strip = (css) => css.replace(/\/\*[\s\S]*?\*\//g, "");
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");

// docs 의 <Demo> 블록을 컴포넌트 클래스별로 모아 둔다 (첫 번째 = 기본 사용법)
const demos = {};
for (const f of fs.readdirSync(DOCS_DIR).filter((f) => f.endsWith(".md"))) {
	const md = fs.readFileSync(path.join(DOCS_DIR, f), "utf8");
	for (const m of md.matchAll(/<Demo[^>]*>\n?([\s\S]*?)<\/Demo>/g)) {
		const html = m[1].trim();
		for (const c of new Set([...html.matchAll(/class="(m3-[a-z-]+)/g)].map((x) => x[1]))) (demos[c] ||= []).push(html);
	}
}

const components = [];
for (const f of fs.readdirSync(CSS_DIR).filter((f) => f.startsWith("m3-") && f.endsWith(".css")).sort()) {
	const raw = fs.readFileSync(path.join(CSS_DIR, f), "utf8");
	// 기본 클래스는 파일명이 아니라 CSS 의 첫 `.m3-xxx {` 선언에서 읽는다 (m3-radio-btn.css 의 클래스는 .m3-radio)
	const firstSel = strip(raw).match(/^\.(m3-[a-z-]+)\s*\{/m);
	const cls = firstSel ? firstSel[1] : f.replace(/\.css$/, "");
	const C = esc(cls);
	// 머리 주석
	const head = raw.match(/^\/\*([\s\S]*?)\*\//);
	const description = head
		? head[1].split("\n").map((l) => l.replace(/^\s*\*\s?/, "").replace(/^=+\s*|\s*=+$/g, "")).filter((l) => l.trim() && !/^=+$/.test(l.trim())).slice(0, 6).join("\n")
		: "";
	// 변수: 기본 블록 `.m3-x {` 안의 --x-*: 값; /* 주석 */
	const variables = {};
	const baseBlock = raw.match(new RegExp(`^\\.${C}\\s*\\{([\\s\\S]*?)^\\}`, "m"));
	if (baseBlock)
		for (const m of baseBlock[1].matchAll(/^\s*(--[\w-]+)\s*:\s*([^;]+);[ \t]*(?:\/\*\s*([^*]*?)\s*\*\/)?/gm))
			variables[m[1]] = { default: m[2].trim(), ...(m[3] ? { note: m[3].trim() } : {}) };
	// 옵션: .m3-x.group\:value  →  { group: [value…] }   (반응형 접두 sm:/md:/lg:/xl: 는 제외)
	const options = {};
	for (const m of strip(raw).matchAll(new RegExp(`\\.${C}\\.([a-z][a-z-]*)\\\\:([a-z0-9-]+)`, "g"))) {
		if (/^(sm|md|lg|xl)$/.test(m[1])) continue;
		(options[m[1]] ||= new Set()).add(m[2]);
	}
	// 값 없는 단독 모디파이어 (.m3-card.card-clickable)
	const flags = new Set();
	for (const m of strip(raw).matchAll(new RegExp(`\\.${C}\\.([a-z][a-z-]*)(?![\\\\a-z0-9-])`, "g")))
		if (!/^(sm|md|lg|xl)$/.test(m[1]) && m[1] !== cls) flags.add(m[1]);
	// 슬롯: .m3-x .child
	const slots = new Set();
	for (const m of strip(raw).matchAll(new RegExp(`\\.${C}(?:\\.[\\w\\\\:-]+)*\\s+\\.([a-z][a-z0-9-]*)`, "g")))
		if (!m[1].startsWith("m3-") && !/^(sm|md|lg|xl)$/.test(m[1])) slots.add(m[1]);
	// 슬롯 옵션: .m3-x .slot.slot-group\:value  → slotOptions[slot][group] = [value…]   (예: card-media:square, site-body:aside)
	const slotOptions = {};
	for (const m of strip(raw).matchAll(new RegExp(`\\.${C}(?:\\.[\\w\\\\:-]+)*\\s+\\.([a-z][a-z0-9-]*)\\.([a-z][a-z-]*)\\\\:([a-z0-9-]+)`, "g"))) {
		if (/^(sm|md|lg|xl)$/.test(m[2])) continue;
		((slotOptions[m[1]] ||= {})[m[2]] ||= new Set()).add(m[3]);
	}
	components.push({
		name: cls.replace(/^m3-/, ""),
		class: cls,
		description,
		slots: [...slots].sort(),
		slotOptions: Object.fromEntries(Object.entries(slotOptions).map(([slot, g]) => [slot, Object.fromEntries(Object.entries(g).map(([k, v]) => [k, [...v].sort()]))])),
		options: Object.fromEntries(Object.entries(options).map(([k, v]) => [k, [...v].sort()])),
		flags: [...flags].sort(),
		variables,
		usage: demos[cls] ? demos[cls][0] : null,
	});
}

// 토큰 이름 목록 (design-tokens dist) — AI 가 없는 토큰을 지어내지 않도록
let tokens = null;
try {
	const tok = fs.readFileSync(path.join(ROOT, "node_modules/@newtil/design-tokens/dist/tokens.css"), "utf8");
	const names = [...new Set([...strip(tok).matchAll(/(--[a-z][\w-]*)\s*:/g)].map((m) => m[1]))].filter((n) => !n.startsWith("--_"));
	const groups = {};
	for (const n of names) {
		const g = n.match(/^--([a-z]+(?:-[a-z]+)?)/)[1];
		(groups[g] ||= []).push(n);
	}
	tokens = { package: "@newtil/design-tokens", count: names.length, groups };
} catch {}

const spec = {
	$schema: "newtil-component-spec/1",
	package: pkg.name,
	version: pkg.version,
	generatedAt: new Date().toISOString().slice(0, 10),
	conventions: {
		option: "클래스 `그룹:값` — 예 `btn:outlined`, `btn-size:sm`. 값이 없는 옵션은 flags. slotOptions 는 슬롯 요소에 붙이는 옵션 (예 card-media 에 `card-media:square`).",
		variable: "컴포넌트 요소 자신에 준다: 인라인 style 또는 `.scope .m3-x { --x-*: … }`. 부모 요소의 style 은 상속되지 않는다.",
		order: "타입(class) → 옵션(options/flags) → 변수(variables). 변수는 옵션으로 안 될 때만.",
		tokens: "색·간격·모서리·글꼴은 design-tokens 변수만. tokens.groups 에 없는 이름은 존재하지 않는다.",
		brand: "브랜드색은 씨앗 하나 `--brand` (design-tokens 0.2.3). 램프와 on-primary 는 계산된다. 회색조는 --_hue-gray-* 를 hex 로.",
	},
	components,
	tokens,
};
fs.mkdirSync(path.join(ROOT, "dist"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "dist/spec.json"), JSON.stringify(spec, null, 1));
const nOpt = components.reduce((a, c) => a + Object.values(c.options).reduce((x, v) => x + v.length, 0), 0);
const nVar = components.reduce((a, c) => a + Object.keys(c.variables).length, 0);
console.log(
	`spec.json: ${components.length} components, ${nOpt} option values, ${nVar} variables, usage ${components.filter((c) => c.usage).length}/${components.length}, tokens ${tokens ? tokens.count : "-"}`,
);
