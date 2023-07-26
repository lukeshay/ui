import { cn } from "@lshay/ui/lib/utils"
import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
import bash from "highlight.js/lib/languages/bash"
import "highlight.js/styles/a11y-light.css"

hljs.registerLanguage("typescript", typescript)
hljs.registerLanguage("bash", bash)

export function CodeBlock({
	code,
	language,
	className,
}: {
	code: string
	language: string
	className?: string
}) {
	const highlightedCode = hljs.highlight(language, code).value

	return (
		<div
			className={cn(
				"font-mono text-sm w-full justify-center p-4 items-center overflow-scroll rounded bg-slate-100 border border-slate-200",
				className,
			)}
		>
			<pre style={{ tabSize: 2 }}>
				<code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
			</pre>
		</div>
	)
}
