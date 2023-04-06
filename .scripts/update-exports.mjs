#!/usr/bin/env node

import { writeFileSync } from "node:fs";

import { globby } from "globby";

import packageJson from "../package.json" assert { type: "json" };
import { execSync } from "node:child_process";

const run = async () => {
	const initialPaths = await globby("./dist/**/*.js");

	const paths = initialPaths.map((path) => {
		execSync(`mv ${path} ${path}x`, { stdio: "pipe" });

		return `${path}x`;
	});

	packageJson.exports = Object.fromEntries(
		paths
			.filter((path) => !path.includes("chunk-"))
			.map((path) => {
				const withoutDist = path.replace("dist/", "");
				const withoutExtension = path.replace(/\.jsx$/u, "");
				const withoutDistAndExtension = withoutDist.replace(/\.jsx$/u, "");

				return [
					withoutDistAndExtension.replace("components/ui", "components").replace("./index", "."),
					{
						require: path,
						types: `${withoutExtension}.d.ts`,
						default: path,
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

	packageJson.main = "./dist/index.jsx";
	packageJson.types = "./dist/index.d.ts";

	writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));
};

void run();
