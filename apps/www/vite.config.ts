// import million from "million/compiler"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import mdx from "@mdx-js/rollup"

// million.vite({ auto: true, mute: true, optimize: true }),

// https://vitejs.dev/config/
export default defineConfig({
	base: "/ui/",
	plugins: [
		mdx({
			providerImportSource: "@mdx-js/react",
		}),
		react(),
	],
})
