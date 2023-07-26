#!/bin/bash

set -eo pipefail

rm -rf dist

./.scripts/clear-package-json.mjs

pnpm add class-variance-authority@latest clsx@latest tailwind-merge@latest
pnpm add --save-peer @radix-ui/react-icons@latest lucide-react@latest react@^18.0.0 react-dom@^18.0.0 tailwindcss@^3.0.0
pnpm add --save-dev @types/react @types/react-dom

if [[ -z "${SKIP_UPDATE}" ]]; then
  rm -rf src-gen
  ./.scripts/update-components.mjs
else
  echo "__SCRIPTS__: Skipping update"
fi

pnpm tsup-node ./src-gen/**/* --target es2020 --format esm --clean --tsconfig tsconfig.json --out-dir ./dist/esm --minify --treeshake recommended
pnpm tsup-node ./src-gen/**/* --target es2020 --format cjs --clean --tsconfig tsconfig.json --out-dir ./dist/cjs --minify --treeshake recommended --onSuccess 'pnpm tsc -p ./tsconfig.types.json'

./.scripts/update-package-json.mjs

pnpm install
pnpm format
