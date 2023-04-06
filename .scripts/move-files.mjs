#!/usr/bin/env node

import { execSync } from "node:child_process";

import { globby } from "globby";

const run = async () => {
	const initialPaths = await globby("./dist/**/*.js");

	initialPaths.forEach((path) => {
		execSync(`mv ${path} ${path}x`);
	});
};

void run();
