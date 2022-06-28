import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	// To access env vars here use process.env.TEST_VAR
	plugins: [
		react({
			babel: {
				plugins: [
					[
						"module-resolver",
						{
							alias: {
								"~": "./src",
							},
						},
					],
				],
			},
		}),
	],
	define: {
		"process.env": process.env,
	},
})
