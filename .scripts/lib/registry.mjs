import { z } from "zod";

const SHADCN_UI_REGISTRY_ENDPOINT = "https://ui.shadcn.com/registry";

/**
 * @template Schema
 * @param {string | undefined} endpoint
 * @param {Schema} schema
 * @returns {Promise<z.infer<Schema>>}
 */
export const fetchRegistry = async (endpoint, schema) => {
	const response = await fetch([SHADCN_UI_REGISTRY_ENDPOINT, endpoint, "index.json"].filter(Boolean).join("/"));
	const resultJson = await response.json();

	return schema.parse(resultJson);
};

export const fetchComponents = async () =>
	fetchRegistry(
		undefined,
		z.array(
			z.object({
				name: z.string(),
				dependencies: z.array(z.string()).optional(),
				files: z.array(z.string()),
				type: z.string(),
			}),
		),
	);

export const fetchStyles = async () =>
	fetchRegistry(
		"styles",
		z.array(
			z.object({
				name: z.string(),
				label: z.string(),
			}),
		),
	);
