import { createConfig } from "@lshay/eslint-config-flat";

const BASE_CONFIG = {
	globalIgnores: ["src/demos", ".turbo"],
	parserOptions: {
		project: ["./tsconfig.json", "./tsconfig.node.json"],
	},
	prettier: true,
	react: true,
};

export default [
	...createConfig({
		...BASE_CONFIG,
		ignores: ["src/components", "src/App.tsx"],
	}),
	...createConfig({
		...BASE_CONFIG,
		fileNameCases: ["pascalCase"],
		files: ["src/components/**/*.{ts,tsx}", "src/App.tsx"],
	}),
];
