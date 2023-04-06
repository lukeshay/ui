#!/usr/bin/env node

import { rmSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";

import { z } from "zod";
import { mkdirSync, readFileSync } from "fs";
import { execSync } from "child_process";
import { globby } from "globby";

const INSTALL_DIR = resolve("src", "components", "ui");
const COMPONENTS_ENDPOINT = "https://ui.shadcn.com/api/components";

const COMPONENT_SCHEMA = z.object({
	name: z.string(),
	dependencies: z.array(z.string()).optional(),
	files: z.array(
		z.object({
			name: z.string(),
			dir: z.string(),
			content: z.string(),
		}),
	),
});

const COMPONENTS_SCHEMA = z.array(COMPONENT_SCHEMA);

const main = async () => {
	rmSync(INSTALL_DIR, {
		force: true,
		recursive: true,
	});

	const response = await fetch(COMPONENTS_ENDPOINT);
	const resultJson = await response.json();
	const components = COMPONENTS_SCHEMA.parse(resultJson);

	mkdirSync(INSTALL_DIR, {
		recursive: true,
	});

	writeFileSync(join(INSTALL_DIR, "metadata.json"), JSON.stringify(components, undefined, 4));

	/**
	 * @type {string[]}
	 */
	const dependencies = [];

	components.forEach((component) => {
		dependencies.push(...(component.dependencies ?? []));

		component.files.forEach((file) => {
			writeFileSync(join(INSTALL_DIR, file.name), file.content);
		});
	});

	execSync(`pnpm i ${dependencies.join(" ")}`, { stdio: "pipe" });

	const initialPaths = await globby("./src/**/*.{tsx,ts}");

	const indexFile = initialPaths
		.map((path) => {
			if (path.includes("components/ui")) {
				const contents = readFileSync(path).toString("utf-8");
				const newContents = contents.replace(/@\/components\/ui/gu, ".").replace(/@\/lib\/utils/gu, "../../lib/utils");

				writeFileSync(path, newContents);
			}

			return `export * from "${path.replace(/(src\/|\.tsx?)/gu, "")}";`;
		})
		.join("\n");

	writeFileSync("./src/index.ts", indexFile);
};

void main();
