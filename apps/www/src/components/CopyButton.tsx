import { Button } from "@lshay/ui/components/default/button"
import { Check, Copy } from "lucide-react"
import { HTMLAttributes, useState, useEffect } from "react"

export type CopyButtonProps = HTMLAttributes<HTMLButtonElement> & {
	value: string
}

export function CopyButton({ value, ...props }: CopyButtonProps) {
	const [hasCopied, setHasCopied] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setHasCopied(false)
		}, 2000)
	}, [hasCopied])

	return (
		<Button
			onClick={async () => {
				await navigator.clipboard.writeText(value)

				setHasCopied(true)
			}}
			variant="ghost"
			size="icon"
			{...props}
		>
			{hasCopied ? <Check size={16} /> : <Copy size={16} />}
		</Button>
	)
}
