import axios from 'axios'

// Axios instance with proper configuration
export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true,
})

// Import all API modules
import { auth } from '../api/auth'
import { admin } from '../api/admin'
import { courses } from '../api/courses'
import { users } from '../api/users'
import { contact } from '../api/contact'
import { payments } from '../api/payments'
import { testimonials } from '../api/testimonials'

// Student API (alias for courses enrollment methods)
const student = {
	enrollCourse: courses.enroll,
	getMyCourses: courses.getMyCourses,
}

// Unified client object with all API groups
const client = {
	// Axios instance for direct usage
	api,

	// API modules
	auth,
	admin,
	courses,
	student,
	users,
	contact,
	payments,
	testimonials,
}

export default client
