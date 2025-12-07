import { axiosInstance } from './axios'
import type { AxiosResponse } from 'axios'
import type { User } from './backend'

// Auth API endpoints
export const auth = {
	async login(data: { email: string; password: string }) {
		const res = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)
		return res.data
	},

	async signup(data: { email: string; password: string; name?: string }) {
		const res = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, data)
		return res.data
	},

	async logout() {
		const res = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
		return res.data
	},

	async refresh() {
		const res = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`)
		return res.data
	},

	async me() {
		const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`)
		return res.data
	},
}