import type { ReactNode } from "react"

import { cn } from "@lshay/ui/lib/utils"
import { ExternalLink } from "lucide-react"

export type LinkProperties = {
	children: ReactNode
	className?: string
	href: string
	isExternal?: boolean
}

export function Link({
	children,
	className,
	isExternal,
	...properties
}: LinkProperties): ReactNode {
	return (
		<a
			{...properties}
			className={cn(
				"hover:underline underline-offset-2",
				isExternal && "flex space-x-3 items-center",
				className,
			)}
			rel={isExternal ? "noreferrer" : undefined}
			target={isExternal ? "_blank" : undefined}
		>
			{children}
			{isExternal && <ExternalLink size={16} />}
		</a>
	)
}
