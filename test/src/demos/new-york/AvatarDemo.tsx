import { Avatar, AvatarFallback, AvatarImage } from "@lshay/ui/components/new-york/avatar";

export default function AvatarDemo() {
	return (
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	);
}
