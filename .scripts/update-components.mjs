#!/usr/bin/env node

import { resolve } from "node:path";

import { globby } from "globby";
import { fetchComponents, fetchStyles } from "./lib/registry.mjs";
import { execAsync, readFileAsync, rmAsync, writeFileAsync } from "./lib/node.mjs";
import { createComponentsConfig } from "./lib/utils.mjs";

const INSTALL_DIR = resolve("src", "components");

const main = async () => {
	// Remove the old components
	await rmAsync(INSTALL_DIR, {
		force: true,
		recursive: true,
	});

	const components = await fetchComponents();
	const styles = await fetchStyles();

	const currentReadme = (await readFileAsync("./README.template.md")).toString("utf-8");

	await writeFileAsync("./src/lib/styles.ts", `export const styles = ${JSON.stringify(styles, null, 2)};`);

	for (const { name } of styles) {
		await createComponentsConfig(name);

		await execAsync(
			`npx shadcn-ui@latest add --yes --overwrite --path ./src/components/${name} ${components
				.map((c) => c.name)
				.join(" ")}`,
		);
	}

	/**
	 * @type {string[]}
	 */
	const readme = [currentReadme, "## Components", "## Updated At", new Date().toISOString()];

	// Write the README
	void writeFileAsync("./README.md", readme.join("\n"));

	const initialPaths = await globby("./src/**/*.{tsx,ts}");

	await Promise.all(
		initialPaths
			.filter((path) => path.includes("components") && path.includes("ui"))
			.map(async (path) => {
				if (path.includes("components") && path.includes("ui")) {
					const contents = (await readFileAsync(path)).toString("utf-8");

					// BUG: Add the React import if it's missing. This is a bug in ui.shadcn.com.
					await writeFileAsync(
						path,
						contents.includes('import * as React from "react"')
							? contents
							: `import * as React from "react";\n${contents}`,
					);
				}
			}),
	);

	// const indexFile = (
	// 	await Promise.all(
	// 		initialPaths.map(async (path) => {
	// 			if (path.includes("components") && path.includes("ui")) {
	// 				const contents = (await readFileAsync(path)).toString("utf-8");

	// 				// BUG: Add the React import if it's missing. This is a bug in ui.shadcn.com.
	// 				await writeFileAsync(
	// 					path,
	// 					contents.includes('import * as React from "react"')
	// 						? contents
	// 						: `import * as React from "react";\n${contents}`,
	// 				);
	// 			}

	// 			return `export * from "${path.replace(/(src\/|\.tsx?)/gu, "")}";`;
	// 		}),
	// 	)
	// ).join("\n");

	// // Write the index file
	// await writeFileAsync("./src/index.ts", indexFile);
};

void main();
