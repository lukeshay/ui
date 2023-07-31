import { cn } from "@lshay/ui/lib/utils"
import { type ReactNode, useMemo } from "react"

import { highlight } from "../lib/highlight"

const style = { tabSize: 2 }

export function CodeBlock({
	className,
	code,
	language,
}: {
	className?: string
	code: string
	language: "typescript" | "bash"
}): ReactNode {
	const dangerouslySetInnerHTML = useMemo(
		() => ({ __html: highlight(code, language) }),
		[language, code],
	)

	return (
		<div
			className={cn(
				"font-mono text-sm w-full justify-center p-4 items-center overflow-scroll rounded bg-slate-100 border border-slate-200",
				className,
			)}
		>
			<pre style={style}>
				{/* eslint-disable-next-line react/no-danger */}
				<code dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
			</pre>
		</div>
	)
}
