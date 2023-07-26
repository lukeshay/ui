import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@lshay/ui/components/default/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@lshay/ui/components/default/tabs";
import { ExternalLink, ArrowUp } from "lucide-react";
import { useState } from "react";

import { Demo } from "../demos";
import { LazyLoad } from "./LazyLoad";
import { H2 } from "./Typography";
import { CodeBlock } from "./CodeBlock";
import { CopyButton } from "./CopyButton";

export function CodeDemo({ demo }: { demo: Demo }) {
	const title = demo.name;
	const [selectedStyle, setSelectedStyle] = useState(0);
	const style = demo.styles[selectedStyle];

	return (
		<div className={"max-w-2xl container space-y-6"}>
			<H2 className={"flex justify-between border-0"} id={title}>
				<a
					className={"hover:underline underline-offset-2 flex items-center space-x-3"}
					href={`https://github.com/lukeshay/ui/blob/main/test/src/examples/${title.replace(" ", "")}Demo.tsx`}
					rel="noreferrer"
					target="_blank"
				>
					<span>{title}</span>
					<ExternalLink size={16} />
				</a>
				<a
					className={"font-normal text-base flex items-center space-x-2 hover:underline underline-offset-2"}
					href="#toc"
				>
					<span>{"Back to top"}</span>
					<ArrowUp size={16} />
				</a>
			</H2>

			<Tabs defaultValue="preview" className="relative mr-auto w-full">
				<div className="flex items-center justify-between pb-3">
					<TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
						<TabsTrigger
							value="preview"
							className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
						>
							{"Preview"}
						</TabsTrigger>
						<TabsTrigger
							value="code"
							className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
						>
							{"Code"}
						</TabsTrigger>
					</TabsList>
				</div>
				<TabsContent value="preview" className="relative rounded-md border">
					<div className="flex items-center justify-between p-4">
						<Select
							value={String(selectedStyle)}
							onValueChange={(value) => {
								setSelectedStyle(Number(value));
							}}
						>
							<SelectTrigger className={"h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4"}>
								<span className="text-muted-foreground">Style: </span>
								<SelectValue placeholder="Select style" />
							</SelectTrigger>
							<SelectContent>
								{demo.styles.map((style, idx) => (
									<SelectItem key={style.name} value={String(idx)} className="text-xs">
										{style.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className={"preview flex min-h-[350px] w-full justify-center p-10 items-center"}>
						<LazyLoad import={demo.styles[selectedStyle].component} />
					</div>
				</TabsContent>
				<TabsContent value="code" className="relative rounded-md border">
					<div className="flex items-center justify-between p-4">
						<Select
							value={String(selectedStyle)}
							onValueChange={(value) => {
								setSelectedStyle(Number(value));
							}}
						>
							<SelectTrigger className={"h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4"}>
								<span className="text-muted-foreground">Style: </span>
								<SelectValue placeholder="Select style" />
							</SelectTrigger>
							<SelectContent>
								{demo.styles.map((style, idx) => (
									<SelectItem key={style.name} value={String(idx)} className="text-xs">
										{style.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<CopyButton value={style.content} />
					</div>
					<CodeBlock code={style.content} language="typescript" />
				</TabsContent>
			</Tabs>
		</div>
	);
}
