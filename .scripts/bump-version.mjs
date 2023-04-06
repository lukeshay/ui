#!/usr/bin/env node

import { writeFileSync } from "node:fs";

import { parse, inc } from "semver";

import packageJson from "../package.json" assert { type: "json" };

const run = async () => {
	const version = parse(packageJson.version);

	packageJson.version = inc(version, "patch");

	writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));
};

void run();
