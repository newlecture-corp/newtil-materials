import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import url from "postcss-url";
import copy from "rollup-plugin-copy";
import fs from "fs";
import path from "path";
import terser from "@rollup/plugin-terser";

const designTokensPath = path.resolve(
	"./node_modules/@newtil/design-tokens/css/variables.css"
);

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
						// 외부 URL은 그대로 유지하고, @newtil/design-tokens는 node_modules에서 해석
						filter: (id) => !id.startsWith("http://") && !id.startsWith("https://"),
						resolve: (id, basedir) => {
							if (id === "@newtil/design-tokens/variables.css") {
								return designTokensPath;
							}
							return null;
						},
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
