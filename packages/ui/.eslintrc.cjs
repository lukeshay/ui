const { createConfig } = require("@lshay/eslint-config")

module.exports = createConfig(
	{
		ecmaVersion: "2020",
		prettier: true,
		sourceType: "module",
	},
	{
		root: true,
	},
)
