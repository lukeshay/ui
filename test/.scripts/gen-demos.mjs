#!/usr/bin/env node

import { mkdir, rm, readFile, writeFile } from "node:fs/promises";

import { styles } from "@lshay/ui/lib/styles";
import { globby } from "globby";
import { exec } from "node:child_process";

const demos = await globby("./src/demos/default/*.tsx");

const sortedStyles = styles.sort((a, b) => a.name.localeCompare(b.name));

const allDemos = (
	await Promise.all(demos.map(async (demo) => ({ content: (await readFile(demo)).toString("utf-8"), path: demo })))
).map((demo) => ({
	demo,
	styles: sortedStyles,
}));

await Promise.all(
	styles
		.filter((style) => style.name !== "default")
		.map(async (style) => {
			const dirname = `./src/demos/${style.name}`;

			await rm(dirname, { recursive: true });
			await mkdir(dirname, { recursive: true });
		}),
);

const writtenDemos = await Promise.all(
	allDemos.map(async ({ demo, styles }) => ({
		demo,
		styles: await Promise.all(
			styles.map(async (style) => {
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

const demosExport = writtenDemos.map(({ demo, styles }) => ({
	name: demo.path.replace("./src/demos/default/", "").replace("Demo.tsx", ""),
	styles: styles.map((style) => {
		return {
			name: style.name,
			label: style.label,
			path: style.path.replace("./src", ".").replace(".tsx", ""),
			content: style.content,
		};
	}),
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
	`export type Demo = { name: string; styles: [${styles.map(({ name }) => `Style<"${name}">`)}] };`,
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
