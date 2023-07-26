#!/bin/bash

set -eou pipefail

rm -rf dist src/components src/lib/styles.ts

./.scripts/update-components.mjs

pnpm add class-variance-authority@latest clsx@latest tailwind-merge@latest @radix-ui/react-icons@latest lucide-react@latest

pnpm tsup-node ./src/**/* --target es2020 --format cjs --clean --tsconfig tsconfig.json --out-dir ./dist --minify --treeshake recommended --shims --onSuccess 'pnpm tsc -p ./tsconfig.types.json'
# pnpm tsup-node ./src/**/* --target es2020 --format esm --clean --tsconfig tsconfig.json --out-dir ./dist/esm --minify --treeshake recommended --shims

./.scripts/update-package-json.mjs

pnpm format
