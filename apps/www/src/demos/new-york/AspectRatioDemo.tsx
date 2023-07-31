import { AspectRatio } from "@lshay/ui/components/new-york/aspect-ratio"


export default function AspectRatioDemo() {
	return (
		<AspectRatio className="bg-muted overflow-hidden" ratio={16 / 9}>
			<img
				alt="Photo by Drew Beamer"
				className="rounded-md object-cover"
				src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
			/>
		</AspectRatio>
	)
}
