#!/usr/bin/env node

import { writeFile } from "node:fs/promises"
import { argv } from "node:process"
import { inc, parse } from "semver"

import packageJson from "../package.json" assert { type: "json" }

const run = async () => {
	const oldVersion = packageJson.version
	const version = parse(packageJson.version)
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	const newVersion = inc(version, argv[2] ?? "patch")

	packageJson.version = newVersion

	// eslint-disable-next-line no-console
	console.log(`Bumping version from ${oldVersion} to ${newVersion}`)

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	await writeFile("./package.json", JSON.stringify(packageJson, undefined, 2))
}

void run()
