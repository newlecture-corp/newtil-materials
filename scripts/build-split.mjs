// 컴포넌트를 골라 쓰는 진입을 만든다 (0.4.27) — dist/base.css + dist/component/<이름>.css.
// index.css(37개 전부, 142KB)를 통째로 싣던 앱이 바탕 + 쓰는 컴포넌트만 가져갈 수 있게. CSS 는 tree-shaking 이 없다.
// rollup 뒤에 돈다. 파이프라인(postcss-import · postcss-url · 외부 @import 끌어올리기 · cssnano)은 rollup 설정과 같다.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import postcss from "postcss";
import postcssImport from "postcss-import";
import url from "postcss-url";
import cssnano from "cssnano";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "css/component/m3");
const OUT = path.join(ROOT, "dist/component");

const hoistExternalImports = {
	postcssPlugin: "hoist-external-imports",
	OnceExit(root) {
		const external = [];
		root.walkAtRules("import", (node) => {
			if (/^url\(\s*["']?https?:/.test(node.params) || /^["']https?:/.test(node.params)) external.push(node.remove());
		});
		root.prepend(...external);
	},
};

const pipeline = postcss([
	postcssImport({ path: ["node_modules"], filter: (id) => !id.startsWith("http://") && !id.startsWith("https://") }),
	url({ url: (asset) => asset.url.replace(/\.\.\//g, "") }),
	hoistExternalImports,
	cssnano({ preset: ["default", { discardComments: { removeAll: true }, normalizeWhitespace: true }] }),
]);

async function build(from, to) {
	const css = fs.readFileSync(from, "utf8");
	const result = await pipeline.process(css, { from, to });
	fs.mkdirSync(path.dirname(to), { recursive: true });
	fs.writeFileSync(to, result.css);
	return result.css.length;
}

const baseBytes = await build(path.join(ROOT, "css/base.css"), path.join(ROOT, "dist/base.css"));
const files = fs.readdirSync(SRC).filter((f) => f.endsWith(".css")).sort();
let total = 0;
for (const f of files) total += await build(path.join(SRC, f), path.join(OUT, f));
console.log(`split: base.css ${baseBytes} B, component/ ${files.length}개 ${total} B`);
