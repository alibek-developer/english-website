import axios, { AxiosInstance } from 'axios'

/**
 * API Base URL Configuration
 *
 * Priority order:
 * 1. NEXT_PUBLIC_API_URL (recommended for production)
 * 2. NEXT_PUBLIC_BACKEND_URL (fallback)
 * 3. http://localhost:8080 (development fallback)
 */
const API_BASE_URL = 'https://backend-c28d.onrender.com'

/**
 * Axios instance configuration
 * - withCredentials: true - sends cookies with requests
 * - Content-Type: application/json - default header
 */
export const axiosInstance: AxiosInstance = axios.create({
	baseURL: API_BASE_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
})

// Development logging
if (process.env.NODE_ENV === 'development') {
	console.log('🚀 API Base URL:', API_BASE_URL)
	console.log('🌐 Axios Instance Configured')
}

// Export for direct usage if needed
export default axiosInstance
