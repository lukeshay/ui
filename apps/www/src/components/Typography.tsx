import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

import { cn } from "@lshay/ui/lib/utils"

export type TypographyProperties = DetailedHTMLProps<
	HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>

export function H1({
	children,
	className,
	...properties
}: TypographyProperties): ReactNode {
	return (
		<h1
			className={cn(
				"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
				className,
			)}
			{...properties}
		>
			{children}
		</h1>
	)
}

export function H2({
	children,
	className,
	...properties
}: TypographyProperties): ReactNode {
	return (
		<h2
			className={cn(
				"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
				className,
			)}
			{...properties}
		>
			{children}
		</h2>
	)
}

export function H3({
	children,
	className,
	...properties
}: TypographyProperties): ReactNode {
	return (
		<h3
			className={cn(
				"scroll-m-20 text-2xl font-semibold tracking-tight",
				className,
			)}
			{...properties}
		>
			{children}
		</h3>
	)
}

export function H4({
	children,
	className,
	...properties
}: TypographyProperties): ReactNode {
	return (
		<h4
			className={cn(
				"scroll-m-20 text-xl font-semibold tracking-tight",
				className,
			)}
			{...properties}
		>
			{children}
		</h4>
	)
}
