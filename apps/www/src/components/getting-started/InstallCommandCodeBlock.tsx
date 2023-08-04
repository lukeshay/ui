import * as React from "react"

import {
	PackageManagerCodeBlock,
	type PackageManagerCodeBlockProperties,
} from "../ui/PackageManagerCodeBlock"

const render: PackageManagerCodeBlockProperties["render"] = ({
	packageManager,
}) => {
	const installCommand = packageManager === "npm" ? "install" : "add"

	return `${packageManager} ${installCommand} @lshay/ui`
}

function InstallCommandCodeBlock(): React.ReactNode {
	return <PackageManagerCodeBlock language="bash" render={render} />
}

export { InstallCommandCodeBlock }
