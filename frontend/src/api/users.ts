import { axiosInstance } from './axios'
import type { User } from './backend'

// Users API endpoints
export const users = {
	async getProfile() {
		const res = await axiosInstance.get(
			`${process.env.NEXT_PUBLIC_API_URL}/users/profile`
		)
		return res.data
	},

	async updateProfile(data: Partial<User>) {
		const res = await axiosInstance.put(
			`${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
			data
		)
		return res.data
	},

	async updatePassword(data: { currentPassword: string; newPassword: string }) {
		const res = await axiosInstance.put(
			`${process.env.NEXT_PUBLIC_API_URL}/users/password`,
			data
		)
		return res.data
	},

	async progress() {
		const res = await axiosInstance.get(
			`${process.env.NEXT_PUBLIC_API_URL}/users/progress`
		)
		return res.data
	},

	async certificates() {
		const res = await axiosInstance.get(
			`${process.env.NEXT_PUBLIC_API_URL}/users/certificates`
		)
		return res.data
	},
}
