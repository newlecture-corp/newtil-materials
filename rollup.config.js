import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import url from "postcss-url";
import copy from "rollup-plugin-copy";
import fs from "fs";
import path from "path";
import terser from "@rollup/plugin-terser";

export default [
	// JavaScript files
	{
		input: fs
			.readdirSync("./js")
			.filter((file) => !file.endsWith(".d.ts"))
			.map((file) => `js/${file}`),
		output: {
			dir: "dist/js",
			format: "es",
			entryFileNames: "[name].js",
			plugins: [terser()],
		},
		plugins: [
			copy({
				// index.d.ts 의 "./dist/index.css" 는 dist 안에서는 "./index.css" 여야 한다 (index.js 와 같은 보정)
				targets: [{ src: "index.d.ts", dest: "dist", transform: (c) => c.toString().replace(/["']\.\/dist\//g, '"./') }],
			}),
			{
				name: "copy-and-fix-index-js",
				writeBundle() {
					const indexJsPath = path.join(process.cwd(), "index.js");
					const distIndexJsPath = path.join(process.cwd(), "dist", "index.js");
					if (fs.existsSync(indexJsPath)) {
						let content = fs.readFileSync(indexJsPath, "utf8");
						content = content.replace(/import\s+["']\.\/dist\//g, 'import "./');
						fs.writeFileSync(distIndexJsPath, content, "utf8");
					}
				},
			},
		],
		external: (id) => id.endsWith(".d.ts"),
	},
	// CSS bundle — rollup 은 입력마다 JS 청크를 하나 내놓는다. 이름을 dist/index.js 로 두면 위에서 만든
	// 진입 파일을 빈 모듈로 덮어써 `import "@newtil/materials"` 가 CSS 를 안 불러온다(0.4.0 게시본 결함).
	// 청크 이름을 따로 주고 쓰고 난 뒤 지운다.
	{
		input: "css/index.css",
		output: {
			dir: "dist",
			entryFileNames: "_css-chunk.js",
		},
		plugins: [
			{
				name: "drop-css-chunk",
				writeBundle() {
					const chunk = path.join(process.cwd(), "dist", "_css-chunk.js");
					if (fs.existsSync(chunk)) fs.unlinkSync(chunk);
				},
			},
			postcss({
				plugins: [
					postcssImport({
						// node_modules 경로 추가 — @newtil/design-tokens 같은 패키지 import 해석용
						path: ["node_modules"],
						// 외부 URL은 그대로 유지
						filter: (id) =>
							!id.startsWith("http://") && !id.startsWith("https://"),
					}),
					url({
						url: (asset) => asset.url.replace(/\.\.\//g, ""),
					}),
					// 외부 URL @import(폰트)를 최종 CSS 맨 앞으로 끌어올린다.
					// postcss-import 는 filter 로 남긴 외부 @import 를 "일반 규칙" 으로 취급하므로 소스에서 맨 앞에 두면
					// 뒤따르는 로컬 @import 를 해석하지 않는다(dist 가 431 바이트로 비던 원인).
					// 그래서 소스는 로컬 import 뒤에 두고, 합친 결과에서 앞으로 옮긴다. 브라우저·번들러는 다른 규칙 뒤의 @import 를 버린다.
					{
						postcssPlugin: "hoist-external-imports",
						OnceExit(root) {
							const external = [];
							root.walkAtRules("import", (node) => {
								if (/^url\(\s*["']?https?:/.test(node.params) || /^["']https?:/.test(node.params)) external.push(node.remove());
							});
							root.prepend(...external);
						},
					},
				],
				extract: "index.css",
				minimize: {
					preset: [
						"default",
						{
							discardComments: { removeAll: true },
							normalizeWhitespace: true,
						},
					],
				},
			}),
		],
	},
];
