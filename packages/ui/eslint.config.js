const { createConfig } = require("@lshay/eslint-config-flat")

module.exports = [
	...createConfig({
		globalIgnores: [".turbo", "src-gen"],
		ignores: ["eslint.config.js"],
		parserOptions: {
			project: ["./tsconfig.json"],
		},
		prettier: true,
		react: true,
	}),
	...createConfig({
		commonjs: true,
		includes: ["eslint.config.js"],
		parserOptions: {
			project: ["./tsconfig.json"],
		},
		prettier: true,
	}),
]
