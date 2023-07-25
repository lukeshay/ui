#!/bin/bash

set -eou pipefail

./.scripts/update-components-v2.mjs

pnpm add class-variance-authority@latest clsx@latest tailwind-merge@latest

rm -rf dist
pnpm tsup-node ./src/index.ts ./src/**/* --target es2020 --format cjs --clean --tsconfig tsconfig.json --out-dir ./dist/cjs
pnpm tsup-node ./src/index.ts ./src/**/* --target es2020 --format esm --clean --tsconfig tsconfig.json --out-dir ./dist/esm --onSuccess 'pnpm tsc -p ./tsconfig.types.json'

./.scripts/update-package-json.mjs

pnpm format
