#!/usr/bin/env node

import { rmSync, writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { execSync } from "node:child_process";

import { z } from "zod";
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

	const currentReadme = readFileSync("./README.template.md").toString("utf-8");

	/**
	 * @type {string[]}
	 */
	const dependencies = [];

	/**
	 * @type {string[]}
	 */
	const readme = [currentReadme, "## Components"];

	components.forEach((component) => {
		dependencies.push(...(component.dependencies ?? []));

		component.files.forEach((file) => {
			writeFileSync(join(INSTALL_DIR, file.name), file.content);
		});

		readme.push(`### ${component.name}`);
		readme.push("");
		readme.push("```tsx");
		readme.push(
			`import { ${component.name} } from "@lshay/ui/components/${component.files[0].name.replace(".tsx", "")}";`,
		);
		readme.push("```");
	});

	readme.push("## Updated At");
	readme.push(new Date().toISOString());

	writeFileSync("./README.md", readme.join("\n"));

	execSync(`pnpm i ${dependencies.join(" ")}`, { stdio: "pipe" });

	const initialPaths = await globby("./src/**/*.{tsx,ts}");

	const indexFile = initialPaths
		.map((path) => {
			if (path.includes("components/ui")) {
				const contents = readFileSync(path).toString("utf-8");
				const newContents = contents.replace(/@\/components\/ui/gu, ".").replace(/@\/lib\/utils/gu, "../../lib/utils");

				writeFileSync(
					path,
					newContents.includes('import * as React from "react"')
						? newContents
						: `import * as React from "react";\n${newContents}`,
				);
			}

			return `export * from "${path.replace(/(src\/|\.tsx?)/gu, "")}";`;
		})
		.join("\n");

	writeFileSync("./src/index.ts", indexFile);
};

void main();
