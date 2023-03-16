#!/usr/bin/env node

import { writeFileSync } from "node:fs";

import { globby } from "globby";

const run = async () => {
  const initialPaths = await globby("./src/**/*.{tsx,ts}");

  const indexFile = initialPaths
    .map((path) => `export * from "${path.replace(/(src\/|\.tsx?)/gu, "")}";`)
    .join("\n");

  writeFileSync("./src/index.ts", indexFile);
};

void run();
