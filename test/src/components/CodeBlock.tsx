import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/a11y-light.css";

hljs.registerLanguage("typescript", typescript);

export function CodeBlock({ code, language }: { code: string; language: string }) {
	const highlightedCode = hljs.highlight(code, { language }).value;

	return (
		<div className="font-mono text-sm min-h-[350px] w-full justify-center p-10 items-center overflow-scroll">
			<pre style={{ tabSize: 2 }}>
				<code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
			</pre>
		</div>
	);
}
