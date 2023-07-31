import { cn } from "@lshay/ui/lib/utils"
import { ExternalLink } from "lucide-react"
import { ReactNode } from "react"

export type LinkProps = {
	href: string
	external?: boolean
	children: ReactNode
	className?: string
}

export function Link({
	external,
	children,
	className,
	...props
}: LinkProps): ReactNode {
	return (
		<a
			{...props}
			className={cn(
				"hover:underline underline-offset-2",
				external && "flex space-x-3 items-center",
				className,
			)}
			rel={external ? "noreferrer" : undefined}
			target={external ? "_blank" : undefined}
		>
			{children}
			{external && <ExternalLink size={16} />}
		</a>
	)
}
