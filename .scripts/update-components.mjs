#!/usr/bin/env node

import { rmSync, writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { execSync } from "node:child_process";

import { z } from "zod";
import { globby } from "globby";
import { pascalCase } from "change-case";

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
	// Remove the old components
	rmSync(INSTALL_DIR, {
		force: true,
		recursive: true,
	});

	// Fetch the components from ui.shadcn.com
	const response = await fetch(COMPONENTS_ENDPOINT);
	const resultJson = await response.json();
	const components = COMPONENTS_SCHEMA.parse(resultJson);

	// Make the directory where the components will be installed
	mkdirSync(INSTALL_DIR, {
		recursive: true,
	});

	// Write the metadata file which contains the response from ui.shadcn.com
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

		// Write each component to the directory
		component.files.forEach((file) => {
			writeFileSync(join(INSTALL_DIR, file.name), file.content);
		});

		// Add the component to the README
		const name = pascalCase(component.name);

		readme.push(`### ${name}`);
		readme.push("");
		readme.push("```tsx");
		readme.push(`import { ${name} } from "@lshay/ui/components/${component.files[0].name.replace(".tsx", "")}";`);
		readme.push("```");
	});

	// Add the timestamp to the README
	readme.push("## Updated At");
	readme.push(new Date().toISOString());

	// Write the README
	writeFileSync("./README.md", readme.join("\n"));

	// Install the dependencies
	execSync(`pnpm i ${dependencies.join(" ")}`, { stdio: "pipe" });

	// Rewrite imports to not use tsconfig.paths
	const initialPaths = await globby("./src/**/*.{tsx,ts}");

	const indexFile = initialPaths
		.map((path) => {
			if (path.includes("components/ui")) {
				const contents = readFileSync(path).toString("utf-8");
				const newContents = contents.replace(/@\/components\/ui/gu, ".").replace(/@\/lib\/utils/gu, "../../lib/utils");

				// BUG: Add the React import if it's missing. This is a bug in ui.shadcn.com.
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

	// Write the index file
	writeFileSync("./src/index.ts", indexFile);
};

void main();
