import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";
import copy from "rollup-plugin-copy";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default {
	input: "src/index.ts",
	output: [
		{
			file: pkg.main,
			format: "cjs",
			exports: "named",
			sourcemap: true,
			strict: false,
		},
		{
			file: pkg.module,
			format: "esm",
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		scss({
			output: true,
			outputStyle: "compressed",
			exclude: ["src/assets/themes", "src/assets/_example_theme.scss"],
		}),
		copy({
			targets: [
				{
					src: "src/assets",
					dest: "build",
				},
			],
		}),
		typescript({ useTsconfigDeclarationDir: true }),
	],
	external: ["react", "react-dom"],
};
