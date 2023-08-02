import * as React from "react"
import { useToast } from "@lshay/ui/components/new-york/use-toast"
import { Button } from "@lshay/ui/components/default/button"

function ToastDemo(): React.ReactNode {
	const { toast } = useToast()

	return (
		<Button
			onClick={() => {
				toast({
					title: "Scheduled: Catch up",
					description: "Friday, February 10, 2023 at 5:57 PM",
				})
			}}
		>
			Show Toast
		</Button>
	)
}

export default ToastDemo
