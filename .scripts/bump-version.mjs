#!/usr/bin/env node

import { writeFileSync } from "node:fs";

import { parse, inc } from "semver";

import packageJson from "../package.json" assert { type: "json" };

const run = async () => {
	const oldVersion = packageJson.version;
	const version = parse(packageJson.version);
	const newVersion = inc(version, process.argv[2] ?? "patch");

	packageJson.version = newVersion;

	console.log(`Bumping version from ${oldVersion} to ${newVersion}`);

	writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));
};

void run();
