import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@lshay/ui/components/default/avatar"


export default function AvatarDemo() {
	return (
		<Avatar>
			<AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	)
}
