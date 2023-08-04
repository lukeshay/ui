import type { ReactNode } from "react"

import GettingStarted from "./components/getting-started/GettingStarted.mdx"
import { NavigationBar } from "./components/layout/NavigationBar"
import { CodeDemo } from "./components/ui/CodeDemo"
import { H1 } from "./components/ui/Typography"
import { demos } from "./demos"

function App(): ReactNode {
	return (
		<div>
			<NavigationBar />
			<main className="p-8 flex justify-center">
				<div className="space-y-16">
					<div className="mdx">
						<GettingStarted />
					</div>
					<section className="max-w-2xl space-y-10">
						<div className="space-y-6">
							<H1 id="toc">Components</H1>
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
				</div>
			</main>
		</div>
	)
}

export { App }
