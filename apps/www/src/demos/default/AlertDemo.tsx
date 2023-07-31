import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@lshay/ui/components/default/alert"
import { Terminal } from "lucide-react"


export default function AlertDemo() {
	return (
		<Alert>
			<Terminal className="h-4 w-4" />
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>
				You can add components to your app using the cli.
			</AlertDescription>
		</Alert>
	)
}
