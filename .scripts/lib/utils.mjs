import { writeFileAsync } from "./node.mjs";

/**
 *
 * @param {string} style
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
	};

	await writeFileAsync("./components.json", JSON.stringify(config, null, 2));
};
