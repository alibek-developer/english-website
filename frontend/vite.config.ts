import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base: '/', // ← YANGI QATOR (eng muhimi shu!)
	resolve: {
		alias: {
			'@': path.resolve(__dirname),
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
