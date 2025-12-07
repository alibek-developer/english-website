import { axiosInstance } from './axios'

// TypeScript interfaces for API data
export interface User {
	id: number
	email: string
	name?: string
	role?: string
}

export interface Course {
	id: number
	title: string
	titleUz: string
	description: string
	descriptionUz: string
	price: number
	duration: string
	format: 'online' | 'offline' | 'hybrid'
	level: string
	startDate: string
	image: string
	category: string
	features?: string[]
	featuresUz?: string[]
}

export interface Lesson {
	id: number
	courseId: number
	title: string
	titleUz: string
	content: string
	contentUz: string
	orderIndex: number
}

export interface ContactFormData {
	name: string
	phone: string
	email: string
	courseInterest: string
	message: string
}

export interface EnrollmentData {
	courseId: number | string
	paymentMethod?: string
}

export interface PaymentData {
	courseId: number | string
	amount: number
	method: string
}

// Import API groups from their respective files
import { admin } from './admin'
import { auth } from './auth'
import { contact } from './contact'
import { courses } from './courses'
import { payments } from './payments'
import { testimonials } from './testimonials'
import { users } from './users'

// Student API (alias for courses)
const student = {
	enrollCourse: courses.enroll,
	getMyCourses: courses.getMyCourses,
}

// Unified backend object with all API groups
const backend = {
	axios: axiosInstance,

	auth,
	admin,
	courses,
	student,
	users,
	contact,
	payments,
	testimonials,
}

export default backend
