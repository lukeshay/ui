import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@lshay/ui/components/default/select"
import { type ReactNode, useState } from "react"

import { CodeBlock } from "./components/CodeBlock"
import { CodeDemo } from "./components/CodeDemo"
import { H1, H2, H3 } from "./components/Typography"
import { demos } from "./demos"

function ShadcnUILink(): ReactNode {
	return (
		<a
			className="underline"
			href="https://ui.shadcn.com/"
			rel="noreferrer"
			target="_blank"
		>
			@shadcn/ui
		</a>
	)
}

function Callout({ children }: { children: ReactNode }): ReactNode {
	return (
		<p className="bg-slate-100 rounded-sm border border-slate-200 p-4">
			{children}
		</p>
	)
}

function InlineCode({ children }: { children: ReactNode }): ReactNode {
	return (
		<span className="font-mono px-1 py-0.5 bg-slate-300 rounded text-sm">
			{children}
		</span>
	)
}

function App(): ReactNode {
	const [packageManager, setPackageManager] = useState<"npm" | "pnpm" | "yarn">(
		"npm",
	)

	const installCommand = packageManager === "npm" ? "install" : "add"

	function handleChange(value: "npm" | "pnpm" | "yarn") {
		setPackageManager(value)
	}

	return (
		<main className="space-y-16 p-8">
			<section className="container space-y-6">
				<H1 className="text-center">
					<span>{"@lshay/ui - Published version of "}</span>
					<ShadcnUILink />
				</H1>
			</section>
			<section className="max-w-2xl container space-y-6">
				<div className="space-y-4">
					<H2>Introduction</H2>
					<p>
						{
							"This package contains the published components that were created by "
						}
						<ShadcnUILink />. All credit to the components and demos goes to
						them.
					</p>
				</div>
				<div className="space-y-8">
					<H2>Getting Started</H2>
					<div className="space-y-4">
						<H3>1. Installation</H3>
						<div className="space-y-2">
							<Select onValueChange={handleChange} value={packageManager}>
								<SelectTrigger className="h-7 w-[80px] text-xs [&_svg]:h-4 [&_svg]:w-4">
									<SelectValue placeholder="Select package manager" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem className="text-xs" value="npm">
										npm
									</SelectItem>
									<SelectItem className="text-xs" value="yarn">
										yarn
									</SelectItem>
									<SelectItem className="text-xs" value="pnpm">
										pnpm
									</SelectItem>
								</SelectContent>
							</Select>
							<CodeBlock
								code={`${packageManager} ${installCommand} @lshay/ui`}
								language="bash"
							/>
						</div>
					</div>
					<div className="space-y-4">
						<H3>
							{"2. Follow "}
							<ShadcnUILink />
							{" Directions"}
						</H3>
						<div className="space-y-2">
							<p>
								{"Follow the steps "}
								<a
									className="underline"
									href="https://ui.shadcn.com/docs/installation"
									rel="noreferrer"
									target="_blank"
								>
									linked here
								</a>
								.
							</p>
							<Callout>
								<span className="font-bold">{"NOTE: "}</span>
								{"When creating the "}
								<InlineCode>components.json</InlineCode>
								{" file, the only configuration that matters is "}
								<InlineCode>tailwind</InlineCode>
								{". The rest is handled by "}
								<InlineCode>@lshay/ui</InlineCode>
							</Callout>
							<Callout>
								<span className="font-bold">{"NOTE: "}</span>
								{"You do not need to install "}
								<InlineCode>class-variance-authority</InlineCode>
								{", "}
								<InlineCode>clsx</InlineCode>
								{", and "}
								<InlineCode>tailwind-merge</InlineCode>
								{" because "}
								<InlineCode>@lshay/ui</InlineCode>
								{" provides an export for "}
								<InlineCode>cn</InlineCode>
								{", "}
								<InlineCode>
									{'import { cn } from "@lshay/ui/lib/utils"'}
								</InlineCode>
								.
							</Callout>
						</div>
					</div>
					<div className="space-y-4">
						<H3>3. Modify Tailwind CSS Config</H3>
						<div className="space-y-2">
							<p>
								{"Add the following to "}
								<InlineCode>tailwind.config.js</InlineCode>.
							</p>
							<CodeBlock
								code={`const { CONTENT } = require("@lshay/ui/lib/utils")

/** @type {import('tailwindcss').Config} */
module.exports = {
	// ...
	content: [
		CONTENT,
		"./src/**/*.{ts,tsx}",
		/* Other paths here */
	],
	// ...
}`}
								language="typescript"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="max-w-2xl container space-y-10">
				<div className="space-y-6">
					<H2 id="toc">Components</H2>
					<ul className="list-disc px-10">
						{demos.map(({ name }) => (
							<li key={name}>
								<a
									className="hover:underline underline-offset-2"
									href={`#${name}`}
								>
									{name}
								</a>
							</li>
						))}
					</ul>
				</div>
				{demos.map((demo) => (
					<CodeDemo demo={demo} key={demo.name} />
				))}
			</section>
		</main>
	)
}

export { App }
