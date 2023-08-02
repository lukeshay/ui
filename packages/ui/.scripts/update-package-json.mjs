#!/usr/bin/env node

import { globby } from "globby"
import { writeFile } from "node:fs/promises"

import packageJson from "../package.json" assert { type: "json" }

const run = async () => {
	const paths = await globby("./dist/cjs/**/*.js")

	packageJson.exports = Object.fromEntries(
		paths
			.filter((path) => !path.includes("chunk-"))
			.map((path) => {
				const withoutDistribution = path.replace("./dist/cjs/", "")
				const withoutDistributionAndExtension = withoutDistribution.replace(
					/\.js$/u,
					"",
				)
				const cjsPath = path
				const esmPath = `./dist/esm/${withoutDistributionAndExtension}.mjs`
				const typesPath = `./dist/types/${withoutDistributionAndExtension}.d.ts`

				return [
					`./${withoutDistributionAndExtension.replace("/ui/", "/")}`.replace(
						"./index",
						".",
					),
					{
						import: esmPath,
						require: cjsPath,
						types: typesPath,
					},
				]
			}),
	)

	packageJson.typesVersions = {
		"*": Object.fromEntries(
			Object.entries(packageJson.exports).map(([key, value]) => [
				key.replace("./", ""),
				[value.types.replace("./", "")],
			]),
		),
	}

	packageJson.peerDependenciesMeta = {
		"@radix-ui/react-icons": {
			optional: true,
		},
		"lucide-react": {
			optional: true,
		},
		react: {
			optional: false,
		},
		"react-dom": {
			optional: false,
		},
		tailwindcss: {
			optional: false,
		},
	}

	/*
	 * PackageJson.main = "./dist/index.js";
	 * packageJson.types = "./dist/index.d.ts";
	 */

	packageJson.main = undefined
	packageJson.module = undefined
	packageJson.types = undefined

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	await writeFile("./package.json", JSON.stringify(packageJson, undefined, 2))
}

void run()
