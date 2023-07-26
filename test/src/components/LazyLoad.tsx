import { lazy, Suspense } from "react";

export type LazyLoadPathProps = {
	path: string;
};

export type LazyLoadImportProps<T> = {
	import: () => Promise<{ default: React.ComponentType<T> }>;
};

export type LazyLoadProps<T> = LazyLoadPathProps | LazyLoadImportProps<T>;

export function LazyLoad<T>(props: LazyLoadProps<T>) {
	const Component = lazy("path" in props ? () => import(/* @vite-ignore */ props.path) : props.import);

	return (
		<Suspense
			fallback={
				<div className="flex items-center text-sm text-muted-foreground">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="mr-2 h-4 w-4 animate-spin"
					>
						<path d="M21 12a9 9 0 1 1-6.219-8.56" />
					</svg>
					Loading...
				</div>
			}
		>
			<Component />
		</Suspense>
	);
}
