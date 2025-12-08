import axios from 'axios'

// Axios instance with proper configuration
export const api = axios.create({
	baseURL: 'https://backend-c28d.onrender.com',
	withCredentials: true,
})

// Import all API modules
import { admin } from '../api/admin'
import { auth } from '../api/auth'
import { contact } from '../api/contact'
import { courses } from '../api/courses'
import { payments } from '../api/payments'
import { testimonials } from '../api/testimonials'
import { users } from '../api/users'

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
