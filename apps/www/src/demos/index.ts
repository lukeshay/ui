export type Style<T> = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	component: () => Promise<{ default: React.ComponentType<any> }>
	content: string
	label: string
	name: T
	path: string
}
export type Demo = {
	name: string
	styles: [Style<"default">, Style<"new-york">]
}

export const demos: ReadonlyArray<Demo> = [
	{
		name: "Accordion",
		styles: [
			{
				name: "default",
				label: "Default",
				path: "./demos/default/AccordionDemo",
				content: `import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@lshay/ui/components/default/accordion"

export default function AccordionDemo() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it styled?</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styles that matches the other
					components&apos; aesthetic.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. It&apos;s animated by default, but you can disable it if you
					prefer.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
`,
				component: async () => import("./default/AccordionDemo"),
			},
			{
				name: "new-york",
				label: "New York",
				path: "./demos/new-york/AccordionDemo",
				content: `import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@lshay/ui/components/new-york/accordion"

export default function AccordionDemo() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it styled?</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styles that matches the other
					components&apos; aesthetic.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. It&apos;s animated by default, but you can disable it if you
					prefer.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
`,
				component: async () => import("./new-york/AccordionDemo"),
			},
		],
	},
	{
		name: "Alert",
		styles: [
			{
				name: "default",
				label: "Default",
				path: "./demos/default/AlertDemo",
				content: `import { Terminal } from "lucide-react"

import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@lshay/ui/components/default/alert"

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
`,
				component: async () => import("./default/AlertDemo"),
			},
			{
				name: "new-york",
				label: "New York",
				path: "./demos/new-york/AlertDemo",
				content: `import { Terminal } from "lucide-react"

import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@lshay/ui/components/new-york/alert"

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
`,
				component: async () => import("./new-york/AlertDemo"),
			},
		],
	},
	{
		name: "Alert Dialog",
		styles: [
			{
				name: "default",
				label: "Default",
				path: "./demos/default/AlertDialogDemo",
				content: `import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@lshay/ui/components/default/alert-dialog"
import { Button } from "@lshay/ui/components/default/button"

export default function AlertDialogDemo() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="outline">Show Dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
`,
				component: async () => import("./default/AlertDialogDemo"),
			},
			{
				name: "new-york",
				label: "New York",
				path: "./demos/new-york/AlertDialogDemo",
				content: `import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@lshay/ui/components/new-york/alert-dialog"
import { Button } from "@lshay/ui/components/default/button"

export default function AlertDialogDemo() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="outline">Show Dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
`,
				component: async () => import("./new-york/AlertDialogDemo"),
			},
		],
	},
	{
		name: "Aspect Ratio",
		styles: [
			{
				name: "default",
				label: "Default",
				path: "./demos/default/AspectRatioDemo",
				content: `import { AspectRatio } from "@lshay/ui/components/default/aspect-ratio"

export default function AspectRatioDemo() {
	return (
		<AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
			<img
				src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
				alt="Photo by Drew Beamer"
				className="rounded-md object-cover"
			/>
		</AspectRatio>
	)
}
`,
				component: async () => import("./default/AspectRatioDemo"),
			},
			{
				name: "new-york",
				label: "New York",
				path: "./demos/new-york/AspectRatioDemo",
				content: `import { AspectRatio } from "@lshay/ui/components/new-york/aspect-ratio"

export default function AspectRatioDemo() {
	return (
		<AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
			<img
				src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
				alt="Photo by Drew Beamer"
				className="rounded-md object-cover"
			/>
		</AspectRatio>
	)
}
`,
				component: async () => import("./new-york/AspectRatioDemo"),
			},
		],
	},
	{
		name: "Avatar",
		styles: [
			{
				name: "default",
				label: "Default",
				path: "./demos/default/AvatarDemo",
				content: `import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@lshay/ui/components/default/avatar"

export default function AvatarDemo() {
	return (
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	)
}
`,
				component: async () => import("./default/AvatarDemo"),
			},
			{
				name: "new-york",
				label: "New York",
				path: "./demos/new-york/AvatarDemo",
				content: `import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@lshay/ui/components/new-york/avatar"

export default function AvatarDemo() {
	return (
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	)
}
`,
				component: async () => import("./new-york/AvatarDemo"),
			},
		],
	},
	{
		name: "Badge",
		styles: [
			{
				name: "default",
				label: "Default",
				path: "./demos/default/BadgeDemo",
				content: `import { Badge } from "@lshay/ui/components/default/badge"

export default function BadgeDemo() {
	return <Badge>Badge</Badge>
}
`,
				component: async () => import("./default/BadgeDemo"),
			},
			{
				name: "new-york",
				label: "New York",
				path: "./demos/new-york/BadgeDemo",
				content: `import { Badge } from "@lshay/ui/components/new-york/badge"

export default function BadgeDemo() {
	return <Badge>Badge</Badge>
}
`,
				component: async () => import("./new-york/BadgeDemo"),
			},
		],
	},
]
