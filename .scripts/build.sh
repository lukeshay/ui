#!/bin/bash

# @/ -> ../../

rm -rf dist
pnpm tsup-node ./src/index.ts ./src/**/* --target es2017 --format cjs --clean --tsconfig tsconfig.json --onSuccess 'pnpm tsc -p ./tsconfig.types.json'
