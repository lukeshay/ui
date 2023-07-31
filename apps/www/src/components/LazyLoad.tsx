import { type ComponentType, type ReactNode, Suspense, lazy } from "react";

export type LazyLoadPathProperties = {
	path: string;
};

export type LazyLoadImportProperties<PROPS> = {
	import: () => Promise<{ default: ComponentType<PROPS> }>;
};

export type LazyLoadProperties<PROPS> = LazyLoadImportProperties<PROPS> | LazyLoadPathProperties;

export function LazyLoad<PROPS>(properties: LazyLoadProperties<PROPS>): ReactNode {
	const Component = lazy(
		// eslint-disable-next-line jsdoc/check-tag-names, no-inline-comments
		"path" in properties ? async () => import(/** @vite-ignore */ properties.path) : properties.import,
	);

	return (
		<Suspense
			fallback={
				<div className="flex items-center text-sm text-muted-foreground">
					<svg
						className="mr-2 h-4 w-4 animate-spin"
						fill="none"
						height="24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
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
