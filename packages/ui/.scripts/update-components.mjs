#!/usr/bin/env node
import { globby } from "globby"
import { execSync } from "node:child_process"
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { resolve } from "node:path"

import shadcnPackageJson from "../../../ui/apps/www/package.json" assert { type: "json" }
import { fetchComponents, fetchStyles } from "./lib/registry.mjs"

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

const styles = await fetchStyles()
const components = await fetchComponents()

execSync(
	`pnpm i ${components
		.flatMap((comp) => comp.dependencies)
		.map((dep) => `${dep}@${shadcnPackageJson.dependencies[dep] ?? "latest"}`)
		.join(" ")}`,
)

await writeFile(
	"./src-gen/lib/styles.ts",
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	`export const styles = ${JSON.stringify(styles, undefined, 2)};`,
)

for (const { name } of styles) {
	await mkdir(`src-gen/components/${name}/ui`, {
		force: true,
		recursive: true,
	})

	await cp(
		`../../ui/apps/www/registry/${name}/ui`,
		`src-gen/components/${name}/ui`,
		{
			recursive: true,
		},
	)
}

const initialPaths = await globby("./src-gen/**/*.{tsx,ts}")

await Promise.all(
	initialPaths
		.filter((path) => path.includes("components") && path.includes("ui"))
		.map(async (path) => {
			const contentsBuffer = await readFile(path)
			const contents = contentsBuffer
				.toString("utf8")
				// eslint-disable-next-line unicorn/prefer-string-replace-all
				.replace(/@\/registry\/(default|new-york)\/ui/gu, ".")

			// BUG: Add the React import if it's missing. This is a bug in ui.shadcn.com.
			await writeFile(
				path,
				contents.includes('import * as React from "react"')
					? contents
					: `import * as React from "react";\n${contents}`,
			)
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
