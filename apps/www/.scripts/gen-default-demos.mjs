#!/usr/bin/env node
/* eslint-disable security/detect-non-literal-fs-filename, max-statements, sonarjs/cognitive-complexity, no-console, @typescript-eslint/no-magic-numbers, consistent-return */
import { styles } from "@lshay/ui/lib/styles"
import { capitalCase, pascalCase } from "change-case"
import { globby } from "globby"
import { existsSync } from "node:fs"
import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { dirname } from "node:path"
import { format } from "prettier"

import prettierConfig from "../.prettierrc.cjs"

const demoFiles = await globby("./ui/**/*.mdx")

const demosContent = await Promise.all(
	demoFiles.map(async (demoFile) => {
		const directory = dirname(demoFile)

		const fileName = demoFile.replace(`${directory}/`, "").replace(".mdx", "")
		const name = `${pascalCase(fileName)}Demo`
		const overrideFileName = `src/overrides/${name}.tsx`

		if (existsSync(overrideFileName)) {
			console.log(`Overriding ${name} with ${overrideFileName}`)

			const fileContents = await readFile(overrideFileName, "utf8")
			const content = fileContents.toString()

			return {
				name,
				overridden: true,
				styles: styles.map((style) => {
					const styleContent = content.replaceAll(
						"@lshay/ui/components/default/",
						`@lshay/ui/components/${style.name}/`,
					)

					return {
						component: "REPLACE_COMPONENT",
						content: styleContent,
						path: `src/demos/${style.name}/${name}.tsx`,
						...style,
					}
				}),
			}
		}

		const fileContents = await readFile(demoFile, "utf8")
		const contentLines = fileContents.toString().split("\n")

		const usageIndex = contentLines.findIndex((line) =>
			line.startsWith("## Usage"),
		)
		const usageEndIndex = contentLines.findIndex(
			(line, index) => index > usageIndex && line.startsWith("#"),
		)
		const usageLines = contentLines.slice(usageIndex + 1, usageEndIndex)
		const importStartIndex = usageLines.findIndex((line) =>
			line.startsWith("```"),
		)
		const importEndIndex = usageLines.findIndex(
			(line, index) => index > importStartIndex && line.startsWith("```"),
		)
		const componentStartIndex = usageLines.findIndex(
			(line, index) => index > importEndIndex && line.startsWith("```"),
		)
		const componentEndIndex = usageLines.findIndex(
			(line, index) => index > componentStartIndex && line.startsWith("```"),
		)

		const importLines = usageLines.slice(importStartIndex + 1, importEndIndex)
		const componentLines = usageLines.slice(
			componentStartIndex + 1,
			componentEndIndex,
		)

		if (componentStartIndex > -1) {
			if (
				componentLines[0].includes(`const ${name}`) ||
				componentLines[0].includes(`function ${name}`)
			) {
				componentLines[0] = `function ${name}(): React.ReactNode {`
			} else {
				const hasReturn = componentLines.some((line) => line.includes("return"))

				if (!hasReturn) {
					componentLines.unshift("	return (")
				}

				componentLines.unshift(`function ${name}(): React.ReactNode {`)

				if (!hasReturn) {
					componentLines.push(" )")
				}

				componentLines.push("}")
			}
		}

		const newContentsLines =
			componentStartIndex === -1
				? importLines.map((line) =>
						line.startsWith(`function ${name}()`)
							? `function ${name}(): React.ReactNode {`
							: line,
				  )
				: [...importLines, "\n", ...componentLines]

		if (!newContentsLines.some((line) => line.includes("* as React"))) {
			newContentsLines.unshift(`import * as React from "react"`)
		}

		newContentsLines.push("\n", `export default ${name}`)

		const content = newContentsLines
			.join("\n")
			.replaceAll("@/components/ui", `@lshay/ui/components/REPLACE_STYLE`)
			.replaceAll("@/lib/utils", "@lshay/ui/lib/utils")

		if (content.includes("<ComponentPreview")) {
			console.log(`Skipping ${name} as it uses <ComponentPreview />`)

			return
		}

		const formattedContent = await format(content, {
			...prettierConfig,
			parser: "typescript",
			plugins: [],
		})

		return {
			name,
			overridden: false,
			styles: styles.map((style) => {
				const styleContent = formattedContent.replaceAll(
					"REPLACE_STYLE",
					style.name,
				)

				return {
					component: "REPLACE_COMPONENT",
					content: styleContent,
					path: `src/demos/${style.name}/${name}.tsx`,
					...style,
				}
			}),
		}
	}),
)

const demos = demosContent.filter(Boolean)

await rm("./src/demos", { force: true, recursive: true })

await Promise.all(
	demos.map(async ({ name, overridden, styles: styless }) => {
		await Promise.all(
			styless.map(async ({ content, path }) => {
				console.log(`Writing ${name} to ${path}`, { overridden })

				const directory = dirname(path)

				await mkdir(directory, { recursive: true })

				await writeFile(path, content)
			}),
		)
	}),
)

const demosIndex = [
	`export type Style<T> = {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		component: () => Promise<{ default: React.ComponentType<any> }>;
		content: string;
		label: string;
		name: T;
		path: string;
	};`,
	`export type Demo = { name: string; styles: [${styles
		.map(({ name }) => `Style<"${name}">`)
		.join(", ")}] };`,
	"",
	`export const demos: ReadonlyArray<Demo> = [${demos
		.map((demo) => {
			const stylesJson = demo.styles
				.map((style) => {
					const json = JSON.stringify(style)

					return json.replace(
						'"REPLACE_COMPONENT"',
						`async () => import("${style.path.replace("src/demos", ".")}")`,
					)
				})
				.join(", ")

			return `{ name: "${capitalCase(
				demo.name.replace("Demo", ""),
			)}", styles: [${stylesJson}] }`
		})
		.join(",")}];`,
]

await writeFile("./src/demos/index.ts", demosIndex.join("\n"))
