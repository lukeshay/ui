import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "./App.tsx"
import "./styles/base.css"

ReactDOM.createRoot(document.querySelector("#root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
