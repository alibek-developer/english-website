import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
	plugins: [tailwindcss(), react()],
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			{
				find: '~backend/client',
				replacement: path.resolve(__dirname, 'src/client.ts'),
			},
			{ find: '~backend', replacement: path.resolve(__dirname, '../backend') },
		],
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
	},
	build: {
		rollupOptions: {
			output: {
				entryFileNames: 'assets/[name]-[hash].js',
				chunkFileNames: 'assets/[name]-[hash].js',
				assetFileNames: 'assets/[name]-[hash][extname]',
			},
		},
	},
})
