import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@lshay/ui/components/new-york/avatar"


export default function AvatarDemo() {
	return (
		<Avatar>
			<AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	)
}
