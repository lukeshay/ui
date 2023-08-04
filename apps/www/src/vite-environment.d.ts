/// <reference types="vite/client" />

declare module "*.mdx" {
	let MDXComponent: (props: any) => React.ReactNode
	export default MDXComponent
}
