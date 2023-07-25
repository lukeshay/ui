#!/usr/bin/env node

import { rmSync, writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { exec } from "node:child_process";

import { z } from "zod";
import { globby } from "globby";
import { promisify } from "node:util";

const execAsync = promisify(exec);

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

	const currentReadme = readFileSync("./README.template.md").toString("utf-8");

	await execAsync(
		`npx shadcn-ui@latest add --yes --overwrite --path ./src/components ${components.map((c) => c.name).join(" ")}`,
	);

	/**
	 * @type {string[]}
	 */
	const readme = [currentReadme, "## Components", "## Updated At", new Date().toISOString()];

	// Write the README
	writeFileSync("./README.md", readme.join("\n"));

	const initialPaths = await globby("./src/**/*.{tsx,ts}");

	const indexFile = initialPaths
		.map((path) => {
			if (path.includes("components/ui")) {
				const contents = readFileSync(path).toString("utf-8");

				// BUG: Add the React import if it's missing. This is a bug in ui.shadcn.com.
				writeFileSync(
					path,
					contents.includes('import * as React from "react"')
						? contents
						: `import * as React from "react";\n${contents}`,
				);
			}

			return `export * from "${path.replace(/(src\/|\.tsx?)/gu, "")}";`;
		})
		.join("\n");

	// Write the index file
	writeFileSync("./src/index.ts", indexFile);
};

void main();
