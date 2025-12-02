import axios from 'axios'

// Unified env variable resolution - matches client.ts
const API_BASE_URL =
	import.meta.env.VITE_API_URL ||
	import.meta.env.VITE_API_BASE_URL ||
	import.meta.env.VITE_CLIENT_TARGET ||
	'http://localhost:4000'

if (
	!import.meta.env.VITE_API_URL &&
	!import.meta.env.VITE_API_BASE_URL &&
	!import.meta.env.VITE_CLIENT_TARGET
) {
	console.warn(
		'⚠️ No backend URL env var found. Using default: http://localhost:4000'
	)
}

export const api = axios.create({
	baseURL: API_BASE_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
})
console.log('API_BASE_URL ->', API_BASE_URL)
