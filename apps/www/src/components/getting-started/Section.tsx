import { cn } from "@lshay/ui/lib/utils"
import * as React from "react"

export type SectionProperties = {
	children: React.ReactNode
	isFullWidth?: boolean
}

function Section({
	children,
	isFullWidth,
}: SectionProperties): React.ReactNode {
	return (
		<section className={cn("container space-y-6", !isFullWidth && "max-w-2xl")}>
			{children}
		</section>
	)
}

export { Section }
