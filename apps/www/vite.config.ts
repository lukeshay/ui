import million from "million/compiler"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [million.vite({ auto: true, mute: true, optimize: true }), react()],
})
