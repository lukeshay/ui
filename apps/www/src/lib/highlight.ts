/* eslint-disable import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member */
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/a11y-light.css";
/* eslint-enable import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member */

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("bash", bash);

export function highlight(code: string, language: string): string {
	return hljs.highlight(code, { language }).value;
}
