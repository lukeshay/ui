import { Button } from "@lshay/ui/components/default/button"
import * as React from "react"
import { CgNpm } from "react-icons/cg"
import { DiGithubBadge } from "react-icons/di"

import { H2 } from "../ui/Typography"

function NavigationBar(): React.ReactNode {
	return (
		<nav className="flex justify-between container max-w-4xl p-4">
			<H2 className="border-0">@lshay/ui</H2>
			<div className="flex space-x-2">
				<Button asChild size="icon" variant="ghost">
					<a
						href="https://www.npmjs.com/package/@lshay/ui"
						rel="noreferrer"
						target="_blank"
					>
						<span className="sr-only">NPM</span>
						<CgNpm className="h-6 w-6" />
					</a>
				</Button>
				<Button asChild size="icon" variant="ghost">
					<a
						href="https://github.com/lukeshay/ui"
						rel="noreferrer"
						target="_blank"
					>
						<span className="sr-only">GitHub</span>
						<DiGithubBadge className="h-6 w-6" />
					</a>
				</Button>
			</div>
		</nav>
	)
}

export { NavigationBar }
