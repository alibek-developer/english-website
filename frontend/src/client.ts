// Re-export the unified client from the client/index.ts file
import axios from 'axios'

export const backend = axios.create({
	baseURL: 'https://backend-c28d.onrender.com',
	withCredentials: true,
})
