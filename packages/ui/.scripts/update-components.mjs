#!/usr/bin/env node

import { resolve } from "node:path"
import { mkdir, readFile, rm, writeFile } from "node:fs/promises"

import { globby } from "globby"

import { fetchComponents, fetchStyles } from "./lib/registry.mjs"
import { execAsync } from "./lib/node.mjs"
import { createComponentsConfig } from "./lib/utils.mjs"

const INSTALL_DIR = resolve("src-gen", "components")

const main = async () => {
	// Remove the old components
	await rm(INSTALL_DIR, {
		force: true,
		recursive: true,
	})

	await mkdir("./src-gen/lib", {
		force: true,
		recursive: true,
	})

	const components = await fetchComponents()
	const styles = await fetchStyles()

	await writeFile(
		"./src-gen/lib/styles.ts",
		`export const styles = ${JSON.stringify(styles, null, 2)};`,
	)

	for (const { name } of styles) {
		await createComponentsConfig(name)

		await execAsync(
			`npx shadcn-ui@latest add --yes --overwrite --path ./src-gen/components/${name} ${components
				.map((c) => c.name)
				.join(" ")}`,
		)
	}

	const initialPaths = await globby("./src-gen/**/*.{tsx,ts}")

	await Promise.all(
		initialPaths
			.filter((path) => path.includes("components") && path.includes("ui"))
			.map(async (path) => {
				if (path.includes("components") && path.includes("ui")) {
					const contents = (await readFile(path)).toString("utf-8")

					// BUG: Add the React import if it's missing. This is a bug in ui.shadcn.com.
					await writeFile(
						path,
						contents.includes('import * as React from "react"')
							? contents
							: `import * as React from "react";\n${contents}`,
					)
				}
			}),
	)

	await writeFile(
		`./src-gen/lib/utils.ts`,
		`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const CONTENT = "./node_modules/@lshay/ui/dist/cjs/components/**/*.js" as const;
`,
	)
}

void main()
