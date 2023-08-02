import { writeFile } from "node:fs/promises"

/**
 * Creates the components.json file,.
 *
 * @param {string} style - The style of the components.
 * @returns {Promise<void>} - A promise that resolves when the file is created.
 */
export const createComponentsConfig = async (style) => {
	const config = {
		$schema: "https://ui.shadcn.com/schema.json",
		aliases: {
			components: `@/components/${style}`,
			utils: "@/lib/utils",
		},
		rsc: false,
		style,
		tailwind: {
			baseColor: "slate",
			config: "./tailwind.config.js",
			css: "./main.css",
			cssVariables: true,
		},
		tsx: true,
	}

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	await writeFile("./components.json", JSON.stringify(config, undefined, 2))
}
