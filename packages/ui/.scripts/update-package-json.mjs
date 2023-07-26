#!/usr/bin/env node

import { writeFile } from "node:fs/promises"

import { globby } from "globby"

import packageJson from "../package.json" assert { type: "json" }

const run = async () => {
	const paths = await globby("./dist/cjs/**/*.js")

	packageJson.exports = Object.fromEntries(
		paths
			.filter((path) => !path.includes("chunk-"))
			.map((path) => {
				const withoutDist = path.replace("./dist/cjs/", "")
				const withoutDistAndExtension = withoutDist.replace(/\.js$/u, "")
				const cjsPath = path
				const esmPath = `./dist/esm/${withoutDistAndExtension}.mjs`
				const typesPath = `./dist/types/${withoutDistAndExtension}.d.ts`

				return [
					`./${withoutDistAndExtension.replace("/ui/", "/")}`.replace(
						"./index",
						".",
					),
					{
						require: cjsPath,
						import: esmPath,
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

	// packageJson.main = "./dist/index.js";
	// packageJson.types = "./dist/index.d.ts";

	packageJson.main = undefined
	packageJson.module = undefined
	packageJson.types = undefined

	await writeFile("./package.json", JSON.stringify(packageJson, null, 2))
}

void run()
