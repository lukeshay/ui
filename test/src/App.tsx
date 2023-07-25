import { cn } from "@lshay/ui/lib/utils";
import { ReactNode } from "react";
import { ArrowUp, ExternalLink } from "lucide-react";

import { H2 } from "./components/Typography";
import { AccordionDemo } from "./examples/AccordionDemo";
import { AlertDemo } from "./examples/AlertDemo";
import { AlertDialogDemo } from "./examples/AlertDialogDemo";
import { AspectRatioDemo } from "./examples/AspectRatioDemo";
import { AvatarDemo } from "./examples/AvatarDemo";
import { BadgeDemo } from "./examples/BadgeDemo";

function Container({ children, title }: { children: ReactNode; title: string }) {
	return (
		<div className={cn("max-w-2xl container space-y-6")}>
			<H2 className={cn("flex justify-between")} id={title}>
				<a
					className={cn("hover:underline underline-offset-2 flex items-center space-x-3")}
					href={`https://github.com/lukeshay/ui/blob/main/test/src/examples/${title.replace(" ", "")}Demo.tsx`}
					rel="noreferrer"
					target="_blank"
				>
					<span>{title}</span>
					<ExternalLink size={16} />
				</a>
				<a
					className={cn("font-normal text-base flex items-center space-x-2 hover:underline underline-offset-2")}
					href="#toc"
				>
					<span>{"Back to top"}</span>
					<ArrowUp size={16} />
				</a>
			</H2>

			<div className={cn("py-16 rounded-lg px-10 border border-slate-200 dark:border-slate-700")}>
				<div className={cn("w-full max-w-lg flex justify-center")}>{children}</div>
			</div>
		</div>
	);
}

const DEMOS = [
	{
		title: "Accordion",
		component: AccordionDemo,
	},
	{
		title: "Alert",
		component: AlertDemo,
	},
	{
		title: "Alert Dialog",
		component: AlertDialogDemo,
	},
	{
		title: "Aspect Ratio",
		component: AspectRatioDemo,
	},
	{
		title: "Avatar",
		component: AvatarDemo,
	},
	{
		title: "Badge",
		component: BadgeDemo,
	},
].sort((a, b) => a.title.localeCompare(b.title));

export function App() {
	return (
		<main className={cn("space-y-16 p-8")}>
			<div className={cn("max-w-2xl container space-y-6")}>
				<H2 id="toc">{"Table of Contents"}</H2>
				<ul className={cn("list-disc px-10")}>
					{DEMOS.map(({ title }) => (
						<li>
							<a className={cn("hover:underline underline-offset-2")} href={`#${title}`}>
								{title}
							</a>
						</li>
					))}
				</ul>
			</div>
			{DEMOS.map(({ title, component: Component }) => (
				<Container title={title}>
					<Component />
				</Container>
			))}
		</main>
	);
}
