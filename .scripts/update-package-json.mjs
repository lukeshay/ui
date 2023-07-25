#!/usr/bin/env node

import { writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

import { globby } from "globby";

import packageJson from "../package.json" assert { type: "json" };

const run = async () => {
	const paths = await globby("./dist/cjs/**/*.js");

	packageJson.exports = Object.fromEntries(
		paths
			.filter((path) => !path.includes("chunk-"))
			.map((path) => {
				const withoutDist = path.replace("./dist/cjs/", "");
				const withoutDistAndExtension = withoutDist.replace(/\.js$/u, "");
				const cjsPath = `./dist/cjs/${withoutDistAndExtension}.js`;
				const esmPath = `./dist/esm/${withoutDistAndExtension}.mjs`;

				return [
					`./${withoutDistAndExtension.replace("components/ui", "components").replace("./index", ".")}`,
					{
						require: cjsPath,
						types: `./dist/types/${withoutDistAndExtension}.d.ts`,
						default: cjsPath,
						module: esmPath,
					},
				];
			}),
	);

	packageJson.typesVersions = {
		"*": Object.fromEntries(
			Object.entries(packageJson.exports).map(([key, value]) => [
				key.replace("./", ""),
				[value.types.replace("./", "")],
			]),
		),
	};

	packageJson.main = "./dist/cjs/index.jsx";
	packageJson.module = "./dist/esm/index.mjs";
	packageJson.types = "./dist/types/index.d.ts";

	writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));
};

void run();
