import { z } from "zod"

const SHADCN_UI_REGISTRY_ENDPOINT = "https://ui.shadcn.com/registry"

const fetchRegistry = async (endpoint, schema) => {
	const response = await fetch(
		[SHADCN_UI_REGISTRY_ENDPOINT, endpoint, "index.json"]
			.filter(Boolean)
			.join("/"),
	)
	const resultJson = await response.json()

	return schema.parse(resultJson)
}

const fetchComponents = async () =>
	fetchRegistry(
		undefined,
		z.array(
			z.object({
				dependencies: z.array(z.string()).optional(),
				files: z.array(z.string()),
				name: z.string(),
				type: z.string(),
			}),
		),
	)

const fetchStyles = async () =>
	fetchRegistry(
		"styles",
		z.array(
			z.object({
				label: z.string(),
				name: z.string(),
			}),
		),
	)

export { fetchComponents, fetchRegistry, fetchStyles }
