import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@lshay/ui/components/default/select"
import * as React from "react"

import type { Language } from "../../lib/highlight"

import { CodeBlock } from "./CodeBlock"

type PackageManagers = "npm" | "pnpm" | "yarn"

type PackageManagerCodeBlockProperties = {
	language: Language
	render: (properties: { packageManager: PackageManagers }) => string
}

function PackageManagerCodeBlock({
	language,
	render,
}: PackageManagerCodeBlockProperties): React.ReactNode {
	const [packageManager, setPackageManager] =
		React.useState<PackageManagers>("npm")

	function handleChange(value: PackageManagers) {
		setPackageManager(value)
	}

	return (
		<div className="space-y-2">
			<Select onValueChange={handleChange} value={packageManager}>
				<SelectTrigger className="h-7 w-[80px] text-xs [&_svg]:h-4 [&_svg]:w-4">
					<SelectValue placeholder="Select package manager" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem className="text-xs" value="npm">
						npm
					</SelectItem>
					<SelectItem className="text-xs" value="yarn">
						yarn
					</SelectItem>
					<SelectItem className="text-xs" value="pnpm">
						pnpm
					</SelectItem>
				</SelectContent>
			</Select>
			<CodeBlock code={render({ packageManager })} language={language} />
		</div>
	)
}

export { PackageManagerCodeBlock, type PackageManagerCodeBlockProperties }
