import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
	// base: '/',  // ❗ Deploy uchun emas bo‘lsa, olib tashlagan yaxshi
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'~backend/client': path.resolve(__dirname, './client'),
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
