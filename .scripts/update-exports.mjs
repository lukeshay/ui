#!/usr/bin/env node

import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";

import { globby } from "globby";

import packageJson from "../package.json" assert { type: "json" };

const run = async () => {
  const initialPaths = await globby("./dist/**/*.js");

  initialPaths.forEach((path) => {
    execSync(`mv ${path} ${path}x`);
  });

  const paths = await globby("./dist/**/*.jsx");

  packageJson.exports = Object.fromEntries(
    paths
      .filter((path) => !path.includes("chunk-"))
      .map((path) => {
        const withoutDist = path.replace("dist/", "");
        const withoutExtension = path.replace(/\.jsx$/u, "");
        const withoutDistAndExtension = withoutDist.replace(/\.jsx$/u, "");

        return [
          withoutDistAndExtension.replace("components/ui", "components"),
          {
            require: path,
            types: `${withoutExtension}.d.ts`,
            default: path,
          },
        ];
      })
  );

  packageJson.typesVersions = {
    "*": Object.fromEntries(
      Object.entries(packageJson.exports).map(([key, value]) => [
        key.replace("./", ""),
        [value.types.replace("./", "")],
      ])
    ),
  };

  writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));
};

void run();
