import * as React from "react"
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@lshay/ui/components/default/alert"
import { Terminal } from "lucide-react"

function AlertDemo(): React.ReactNode {
	return (
		<Alert>
			<Terminal className="h-4 w-4" />
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>
				You can add components and dependencies to your app using the cli.
			</AlertDescription>
		</Alert>
	)
}

export default AlertDemo
