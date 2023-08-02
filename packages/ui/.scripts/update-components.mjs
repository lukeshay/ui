#!/usr/bin/env node
import { globby } from "globby"
import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { resolve } from "node:path"

import { execAsync } from "./lib/node.mjs"
import { fetchComponents, fetchStyles } from "./lib/registry.mjs"
import { createComponentsConfig } from "./lib/utils.mjs"

const INSTALL_DIR = resolve("src-gen", "components")

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
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	`export const styles = ${JSON.stringify(styles, undefined, 2)};`,
)

// eslint-disable-next-line fp/no-loops
for (const { name } of styles) {
	// eslint-disable-next-line no-await-in-loop
	await createComponentsConfig(name)

	// eslint-disable-next-line no-await-in-loop
	await execAsync(
		`npx shadcn-ui@latest add --yes --overwrite --path ./src-gen/components/${name} ${components
			.map((component) => component.name)
			.join(" ")}`,
	)
}

const initialPaths = await globby("./src-gen/**/*.{tsx,ts}")

await Promise.all(
	initialPaths
		.filter((path) => path.includes("components") && path.includes("ui"))
		.map(async (path) => {
			if (path.includes("components") && path.includes("ui")) {
				const contentsBuffer = await readFile(path)
				const contents = contentsBuffer.toString("utf8")

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
