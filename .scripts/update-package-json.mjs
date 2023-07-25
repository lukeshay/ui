#!/usr/bin/env node

import { writeFileSync } from "node:fs";

import { globby } from "globby";

import packageJson from "../package.json" assert { type: "json" };

const run = async () => {
	const paths = await globby("./dist/**/*.js");

	packageJson.exports = Object.fromEntries(
		paths
			.filter((path) => !path.includes("chunk-"))
			.map((path) => {
				const withoutDist = path.replace("./dist/", "");
				const withoutDistAndExtension = withoutDist.replace(/\.js$/u, "");
				const cjsPath = `./dist/${withoutDistAndExtension}.js`;

				return [`./${withoutDistAndExtension.replace("components/ui", "components")}`.replace("./index", "."), cjsPath];
			}),
	);

	// packageJson.typesVersions = {
	// 	"*": Object.fromEntries(
	// 		Object.entries(packageJson.exports).map(([key, value]) => [
	// 			key.replace("./", ""),
	// 			[value.types.replace("./", "")],
	// 		]),
	// 	),
	// };

	packageJson.main = "./dist/index.js";
	packageJson.types = "./dist/index.d.ts";

	writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));
};

void run();
