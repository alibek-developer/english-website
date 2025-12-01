import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname), // <-- frontend root bo‘lgani uchun to‘g‘ri
			'~backend/client': path.resolve(__dirname, '../backend/client'),
			'~backend': path.resolve(__dirname, '../backend'),
		},
	},
	plugins: [tailwindcss(), react()],
	server: {
		port: 5173,
	},
	build: {
		minify: true,
	},
})
