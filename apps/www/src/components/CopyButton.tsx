import { Button } from "@lshay/ui/components/default/button"
import { Check, Copy } from "lucide-react"
import { type HTMLAttributes, type ReactNode, useEffect, useState } from "react"

import { TWO_THOUSAND } from "../lib/constants"

type CopyButtonProperties = HTMLAttributes<HTMLButtonElement> & {
	value: string
}

function CopyButton({ value, ...properties }: CopyButtonProperties): ReactNode {
	const [hasCopied, setHasCopied] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setHasCopied(false)
		}, TWO_THOUSAND)
	}, [hasCopied])

	function handleClick() {
		void navigator.clipboard.writeText(value)

		setHasCopied(true)
	}

	return (
		<Button onClick={handleClick} size="icon" variant="ghost" {...properties}>
			{hasCopied ? <Check size={16} /> : <Copy size={16} />}
		</Button>
	)
}

export { CopyButton, type CopyButtonProperties }
