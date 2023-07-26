const { createConfig } = require("@lshay/eslint-config")

module.exports = createConfig(
	{
		ecmaVersion: "2020",
		html: true,
		prettier: true,
		react: true,
		typescript: true,
	},
	{
		root: true,
	},
)
