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
				targets: [{ src: "index.d.ts", dest: "dist" }],
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
	// CSS bundle
	{
		input: "css/index.css",
		output: {
			dir: "dist",
		},
		plugins: [
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
