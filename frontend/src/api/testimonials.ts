import { axiosInstance } from './axios'
import type { AxiosResponse } from 'axios'

// Testimonials API endpoints
export const testimonials = {
	async list() {
		const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`)
		return res.data
	},

	async create(data: any) {
		const res = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`, data)
		return res.data
	},

	async update(id: string | number, data: any) {
		const res = await axiosInstance.put(`${process.env.NEXT_PUBLIC_API_URL}/testimonials/${id}`, data)
		return res.data
	},

	async delete(id: string | number) {
		const res = await axiosInstance.delete(`${process.env.NEXT_PUBLIC_API_URL}/testimonials/${id}`)
		return res.data
	},
}

