import tailwindcss from '@tailwindcss/vite' // agar ishlatsangiz, aks holda olib tashlang
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
	plugins: [tailwindcss(), react()], // agar tailwind yo‘q bo‘lsa: plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'), // FRONTEND src papkasiga point qiladi
			'~backend': path.resolve(__dirname, '../backend'),
		},
	},
})
