import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@lshay/ui/components/default/select"
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@lshay/ui/components/default/tabs"
import { snakeCase } from "change-case"
import { ArrowUp } from "lucide-react"
import { type ReactNode, useState } from "react"

import type { Demo } from "../../demos"

import { ZERO } from "../../lib/constants"
import { CodeBlock } from "./CodeBlock"
import { CopyButton } from "./CopyButton"
import { LazyLoad } from "./LazyLoad"
import { Link } from "./Link"
import { H3 } from "./Typography"

function CodeDemo({ demo }: { demo: Demo }): ReactNode {
	const [selectedStyleName, setSelectedStyleName] = useState("default")
	const selectedStyle =
		demo.styles.find((style) => style.name === selectedStyleName) ??
		// eslint-disable-next-line security/detect-object-injection
		demo.styles[ZERO]

	function handleValueChange(value: string) {
		setSelectedStyleName(value)
	}

	function StyleSelect() {
		return (
			<Select
				onValueChange={handleValueChange}
				value={String(selectedStyleName)}
			>
				<SelectTrigger className="h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4">
					<span className="text-muted-foreground">Style: </span>
					<SelectValue placeholder="Select style" />
				</SelectTrigger>
				<SelectContent>
					{demo.styles.map((style) => (
						<SelectItem className="text-xs" key={style.name} value={style.name}>
							{style.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		)
	}

	return (
		<div className="space-y-6">
			<div className="flex justify-between" id={demo.name}>
				<Link
					href={`https://github.com/lukeshay/ui/blob/main/test/src/demos/${
						selectedStyle.name
					}/${demo.name.replace(" ", "")}Demo.tsx`}
					isExternal
				>
					<H3 className="border-0">{demo.name}</H3>
				</Link>
				<div>
					<Link className="flex items-center space-x-2" href="#toc">
						<span>Back to top</span>
						<ArrowUp size={16} />
					</Link>
					<Link
						href={`https://ui.shadcn.com/docs/components/${snakeCase(
							demo.name,
						).replace("_", "-")}`}
						className="space-x-2"
						isExternal
					>
						<span>@shadcn/ui</span>
					</Link>
				</div>
			</div>

			<Tabs className="relative mr-auto w-full" defaultValue="preview">
				<div className="flex items-center justify-between pb-3">
					<TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
						<TabsTrigger
							className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
							value="preview"
						>
							Preview
						</TabsTrigger>
						<TabsTrigger
							className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
							value="code"
						>
							Code
						</TabsTrigger>
					</TabsList>
				</div>
				<TabsContent
					className="relative rounded-md border p-4 space-y-6"
					value="preview"
				>
					<div className="flex items-center justify-between h-8">
						<StyleSelect />
					</div>
					<div className="flex min-h-[350px] w-full justify-center items-center px-4">
						<LazyLoad import={selectedStyle.component} />
					</div>
				</TabsContent>
				<TabsContent
					className="relative rounded-md border p-4 space-y-6"
					value="code"
				>
					<div className="flex items-center justify-between h-8">
						<StyleSelect />
						<CopyButton value={selectedStyle.content} />
					</div>
					<CodeBlock code={selectedStyle.content} language="typescript" />
				</TabsContent>
			</Tabs>
		</div>
	)
}

export { CodeDemo }
