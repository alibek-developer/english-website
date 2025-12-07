import { axiosInstance } from './axios'
import type { AxiosResponse } from 'axios'
import type { Course, Lesson, User } from './backend'

// Admin API endpoints
export const admin = {
	async addCourse(data: Partial<Course>) {
		const res = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/courses`, data)
		return res.data
	},

	async updateCourse(id: number | string, data: Partial<Course>) {
		const res = await axiosInstance.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/courses/${id}`, data)
		return res.data
	},

	async deleteCourse(id: number | string) {
		const res = await axiosInstance.delete(`${process.env.NEXT_PUBLIC_API_URL}/admin/courses/${id}`)
		return res.data
	},

	async getCourses() {
		const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/courses`)
		return res.data
	},

	async addLesson(data: Partial<Lesson>) {
		const res = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/lessons`, data)
		return res.data
	},

	async updateLesson(id: string | number, data: Partial<Lesson>) {
		const res = await axiosInstance.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/lessons/${id}`, data)
		return res.data
	},

	async deleteLesson(id: string | number) {
		const res = await axiosInstance.delete(`${process.env.NEXT_PUBLIC_API_URL}/admin/lessons/${id}`)
		return res.data
	},

	async getUsers() {
		const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/users`)
		return res.data
	},

	async updateUser(id: string | number, data: Partial<User>) {
		const res = await axiosInstance.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/users/${id}`, data)
		return res.data
	},

	async deleteUser(id: string | number) {
		const res = await axiosInstance.delete(`${process.env.NEXT_PUBLIC_API_URL}/admin/users/${id}`)
		return res.data
	},

	async getStats() {
		const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/stats`)
		return res.data
	},
}