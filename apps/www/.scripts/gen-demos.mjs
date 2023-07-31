#!/usr/bin/env node
/* eslint-disable security/detect-non-literal-fs-filename */
import { styles } from "@lshay/ui/lib/styles";
import { globby } from "globby";
import { exec } from "node:child_process";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";

const demos = await globby("./src/demos/default/*.tsx");

// eslint-disable-next-line fp/no-mutating-methods
const sortedStyles = styles.sort((first, second) => first.name.localeCompare(second.name));

const allDemos = await Promise.all(
	demos.map(async (demo) => {
		const fileContents = await readFile(demo);

		return {
			demo: {
				content: fileContents.toString("utf8"),
				path: demo,
			},
			styles: sortedStyles,
		};
	}),
);

await Promise.all(
	styles
		.filter((style) => style.name !== "default")
		.map(async (style) => {
			const dirname = `./src/demos/${style.name}`;

			await rm(dirname, {
				force: true,
				recursive: true,
			});
			await mkdir(dirname, {
				force: true,
				recursive: true,
			});
		}),
);

const writtenDemos = await Promise.all(
	allDemos.map(async ({ demo, styles: styless }) => ({
		demo,
		styles: await Promise.all(
			styless.map(async (style) => {
				let styleContent = demo.content;
				let writePath = demo.path;

				if (style.name !== "default") {
					styleContent = demo.content.replace("@lshay/ui/components/default", `@lshay/ui/components/${style.name}`);
					writePath = demo.path.replace("default", style.name);

					await writeFile(writePath, styleContent);
				}

				return { ...style, content: styleContent, path: writePath };
			}),
		),
	})),
);

const demosExport = writtenDemos.map(({ demo, styles: styless }) => ({
	name: demo.path
		.replace("./src/demos/default/", "")
		.replace("Demo.tsx", "")
		// eslint-disable-next-line prefer-named-capture-group
		.replaceAll(/([A-Z])/gu, " $1")
		.trim(),
	styles: styless.map((style) => ({
		content: style.content,
		label: style.label,
		name: style.name,
		path: style.path.replace("./src", ".").replace(".tsx", ""),
	})),
}));

const demosIndex = [
	`export type Style<T> = {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		component: () => Promise<{ default: React.ComponentType<any> }>;
		content: string;
		label: string;
		name: T;
		path: string;
	};`,
	`export type Demo = { name: string; styles: [${styles.map(({ name }) => `Style<"${name}">`).join(", ")}] };`,
	"",
	`export const demos: ReadonlyArray<Demo> = [${demosExport
		.map(
			(demo) =>
				`{name: "${demo.name}", styles: [${demo.styles
					.map(
						(style) =>
							`{ name: "${style.name}", label: "${style.label}", path: "${style.path}", content: \`${
								style.content
							}\`, component: async () => import("${style.path.replace("./demos", ".")}") }`,
					)
					.join(",")}]}`,
		)
		.join(",")}];`,
];

await writeFile("./src/demos/index.ts", demosIndex.join("\n"));

exec("pnpm run format");
