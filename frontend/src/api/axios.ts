import axios from 'axios'

// Railway yoki Vite env dagi backend URL
const API_BASE_URL =
	import.meta.env.VITE_API_URL ||
	import.meta.env.VITE_BACKEND_URL ||
	'http://localhost:8080' // fallback to'g'ri HTTP URL

if (!API_BASE_URL) {
	console.warn('⚠️ API URL topilmadi. .env ichida VITE_API_URL ni kiriting.')
}

export const api = axios.create({
	baseURL: API_BASE_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
})

console.log('API_BASE_URL ->', API_BASE_URL)
