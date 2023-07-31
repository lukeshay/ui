import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@lshay/ui/components/default/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@lshay/ui/components/default/tabs";
import { ArrowUp, ExternalLink } from "lucide-react";
import { type ReactNode, useState } from "react";

import type { Demo } from "../demos";

import { ZERO } from "../lib/constants";
import { CodeBlock } from "./CodeBlock";
import { CopyButton } from "./CopyButton";
import { LazyLoad } from "./LazyLoad";
import { H3 } from "./Typography";

export function CodeDemo({ demo }: { demo: Demo }): ReactNode {
	const title = demo.name;
	const [selectedStyleIndex, setSelectedStyleIndex] = useState(ZERO);
	// eslint-disable-next-line security/detect-object-injection
	const selectedStyle = demo.styles[selectedStyleIndex];

	function handleValueChange(value: string) {
		setSelectedStyleIndex(Number(value));
	}

	function StyleSelect() {
		return (
			<Select onValueChange={handleValueChange} value={String(selectedStyleIndex)}>
				<SelectTrigger className="h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4">
					<span className="text-muted-foreground">Style: </span>
					<SelectValue placeholder="Select style" />
				</SelectTrigger>
				<SelectContent>
					{demo.styles.map((style, index) => (
						<SelectItem className="text-xs" key={style.name} value={String(index)}>
							{style.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		);
	}

	return (
		<div className="space-y-6">
			<H3 className="flex justify-between border-0" id={title}>
				<a
					href={
						selectedStyle &&
						`https://github.com/lukeshay/ui/blob/main/test/src/demos/${selectedStyle.name}/${title.replace(
							" ",
							"",
						)}Demo.tsx`
					}
					className="hover:underline underline-offset-2 flex items-center space-x-3"
					rel="noreferrer"
					target="_blank"
				>
					<span>{title}</span>
					<ExternalLink size={16} />
				</a>
				<a className="font-normal text-base flex items-center space-x-2 hover:underline underline-offset-2" href="#toc">
					<span>Back to top</span>
					<ArrowUp size={16} />
				</a>
			</H3>

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
				<TabsContent className="relative rounded-md border p-4 space-y-6" value="preview">
					<div className="flex items-center justify-between h-8">
						<StyleSelect />
					</div>
					<div className="flex min-h-[350px] w-full justify-center items-center px-4">
						{selectedStyle && <LazyLoad import={selectedStyle.component} />}
					</div>
				</TabsContent>
				<TabsContent className="relative rounded-md border p-4 space-y-6" value="code">
					<div className="flex items-center justify-between h-8">
						<StyleSelect />
						{selectedStyle && <CopyButton value={selectedStyle.content} />}
					</div>
					{selectedStyle && <CodeBlock code={selectedStyle.content} language="typescript" />}
				</TabsContent>
			</Tabs>
		</div>
	);
}
