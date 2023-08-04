import * as React from "react"

import { CodeBlock } from "../ui/CodeBlock"

const CODE = `const { CONTENT } = require("@lshay/ui/lib/utils")

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  content: [
    CONTENT,
    "./src/**/*.{ts,tsx}",
    /* Other paths here */
  ],
  // ...
}`

function TailwindCssConfigCodeBlock(): React.ReactNode {
	return <CodeBlock code={CODE} language="typescript" />
}

export { TailwindCssConfigCodeBlock }
