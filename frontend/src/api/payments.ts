import { axiosInstance } from './axios'
import type { PaymentData } from './backend'

// Payments API endpoints
export const payments = {
	async create(data: PaymentData) {
		const res = await axiosInstance.post(
			`${process.env.NEXT_PUBLIC_API_URL}/payments/create`,
			data
		)
		return res.data
	},

	async history() {
		const res = await axiosInstance.get(
			`${process.env.NEXT_PUBLIC_API_URL}/payments/history`
		)
		return res.data
	},

	async status(paymentId: number | string) {
		const res = await axiosInstance.get(
			`${process.env.NEXT_PUBLIC_API_URL}/payments/${paymentId}/status`
		)
		return res.data
	},

	async refund(paymentId: number | string, data?: any) {
		const res = await axiosInstance.post(
			`${process.env.NEXT_PUBLIC_API_URL}/payments/${paymentId}/refund`,
			data
		)
		return res.data
	},

	async webhook(data: any) {
		const res = await axiosInstance.post(
			`${process.env.NEXT_PUBLIC_API_URL}/payments/webhook`,
			data
		)
		return res.data
	},
}
