import { axiosInstance } from './axios'
import type { AxiosResponse } from 'axios'
import type { Course, EnrollmentData } from './backend'

// Courses API endpoints
export const courses = {
	async getAll() {
		const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/courses`)
		return res.data
	},

	async getById(id: number | string) {
		const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`)
		return res.data
	},

	async search(query: string) {
		const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/courses/search`, { params: { q: query } })
		return res.data
	},

	async getByCategory(category: string) {
		const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/courses/category`, { params: { category } })
		return res.data
	},

	// Legacy compatibility - enroll method for existing code
	async enroll(data: EnrollmentData) {
		const res = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/student/enroll`, data)
		return res.data
	},

	async getMyCourses() {
		const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/student/courses`)
		return res.data
	},
}