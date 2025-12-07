// Examples of how to use the backend API client
import { backend } from '@/api'

/**
 * Example: Login component
 */
export const loginUser = async (email: string, password: string) => {
	try {
		const response = await backend.auth.login({ email, password })
		return response.data
	} catch (error) {
		console.error('Login failed:', error)
		throw error
	}
}

/**
 * Example: Fetch courses in a React component
 */
export const useCourses = () => {
	const fetchCourses = async () => {
		try {
			const response = await backend.courses.getAll()
			return response.data
		} catch (error) {
			console.error('Failed to fetch courses:', error)
			return []
		}
	}

	const enrollInCourse = async (courseId: number) => {
		try {
			const response = await backend.courses.enroll({ courseId })
			return response.data
		} catch (error) {
			console.error('Failed to enroll:', error)
			throw error
		}
	}

	return { fetchCourses, enrollInCourse }
}

/**
 * Example: Admin operations
 */
export const adminOperations = {
	createCourse: async (courseData: any) => {
		const response = await backend.admin.addCourse(courseData)
		return response.data
	},

	deleteCourse: async (courseId: number) => {
		const response = await backend.admin.deleteCourse(courseId)
		return response.data
	},

	getUsers: async () => {
		const response = await backend.admin.getUsers()
		return response.data
	},
}

/**
 * Example: User profile management
 */
export const userProfile = {
	getProfile: async () => {
		const response = await backend.users.getProfile()
		return response.data
	},

	updateProfile: async (data: any) => {
		const response = await backend.users.updateProfile(data)
		return response.data
	},

	changePassword: async (currentPassword: string, newPassword: string) => {
		const response = await backend.users.updatePassword({
			currentPassword,
			newPassword,
		})
		return response.data
	},
}

/**
 * Example: Payment processing
 */
export const paymentService = {
	processPayment: async (courseId: number, amount: number, method: string) => {
		const response = await backend.payments.create({
			courseId,
			amount,
			method,
		})
		return response.data
	},

	getPaymentHistory: async () => {
		const response = await backend.payments.history()
		return response.data
	},

	getPaymentStatus: async (paymentId: string | number) => {
		const response = await backend.payments.status(paymentId)
		return response.data
	},

	refundPayment: async (paymentId: string | number, data?: any) => {
		const response = await backend.payments.refund(paymentId, data)
		return response.data
	},
}

/**
 * Example: Contact form submission
 */
export const contactService = {
	submitContactForm: async (contactData: {
		name: string
		phone: string
		email: string
		courseInterest: string
		message: string
	}) => {
		try {
			const response = await backend.contact.submit(contactData)
			return response.data
		} catch (error) {
			console.error('Failed to submit contact form:', error)
			throw error
		}
	},
}
