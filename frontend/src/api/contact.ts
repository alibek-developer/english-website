import { axiosInstance } from './axios'
import type { AxiosResponse } from 'axios'
import type { ContactFormData } from './backend'

// Contact API endpoints
export const contact = {
	async submit(data: ContactFormData) {
		const res = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, data)
		return res.data
	},
}