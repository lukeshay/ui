import { H2 } from "./components/Typography";
import { demos } from "./demos";
import { CodeDemo } from "./components/CodeDemo";

export function App() {
	return (
		<main className={"space-y-16 p-8"}>
			<div className={"max-w-2xl container space-y-6"}>
				<H2 id="toc">{"Table of Contents"}</H2>
				<ul className={"list-disc px-10"}>
					{demos.map(({ name }) => (
						<li key={name}>
							<a className={"hover:underline underline-offset-2"} href={`#${name}`}>
								{name}
							</a>
						</li>
					))}
				</ul>
			</div>
			{demos.map((demo) => (
				<CodeDemo key={demo.name} demo={demo} />
			))}
		</main>
	);
}
