#!/usr/bin/env node

import { writeFile } from "node:fs/promises"

import packageJson from "../package.json" assert { type: "json" }
import { env } from "node:process"

const run = async () => {
	if (!env.SKIP_UPDATE) {
		packageJson.dependencies = undefined
		packageJson.typesVersions = undefined
		packageJson.exports = undefined
	}

	packageJson.peerDependencies = undefined
	packageJson.peerDependenciesMeta = undefined
	packageJson.devDependencies["tailwindcss"] = undefined
	packageJson.devDependencies["@radix-ui/react-icons"] = undefined
	packageJson.devDependencies["lucide-react"] = undefined
	packageJson.devDependencies["react"] = undefined
	packageJson.devDependencies["react-dom"] = undefined
	packageJson.devDependencies["@types/react"] = undefined
	packageJson.devDependencies["@types/react-dom"] = undefined

	await writeFile("./package.json", JSON.stringify(packageJson, null, 2))
}

void run()
