# Backend API Client

A complete and production-ready Axios API client for Next.js 16 with modular architecture and full TypeScript support.

## 📁 Files Structure

```
src/api/
├── index.ts       # Main exports and backend object
├── axios.ts       # Axios instance configuration
├── auth.ts        # Authentication API
├── admin.ts       # Admin management API
├── contact.ts     # Contact form API
├── courses.ts     # Courses API
├── users.ts       # User profile API
├── payments.ts    # Payment processing API
├── axios.d.ts     # TypeScript declarations
├── examples.ts    # Usage examples
└── README.md      # This documentation
```

## 🚀 Quick Start

```typescript
import { backend } from '@/api'

// Use structured API methods
const courses = await backend.courses.getAll()
const user = await backend.auth.login({ email, password })
```

## 🔧 Configuration

### Environment Variables

Add to your `.env.local`:

```bash
# Primary API URL (recommended)
NEXT_PUBLIC_API_URL=http://localhost:8080

# Fallback API URL
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
```

### Axios Instance Configuration

- **Base URL**: `NEXT_PUBLIC_API_URL` → `NEXT_PUBLIC_BACKEND_URL` → `http://localhost:8080`
- **Credentials**: `withCredentials: true` (sends cookies with requests)
- **Headers**: `Content-Type: application/json`

## 📚 API Groups

### 🔐 Auth API

```typescript
import { backend } from '@/api'

// Login user
const response = await backend.auth.login({
  email: 'user@example.com',
  password: 'password123'
})

// Logout user
await backend.auth.logout()

// Get current user
const user = await backend.auth.me()

// Signup new user
await backend.auth.signup({
  email: 'user@example.com',
  password: 'password123',
  name: 'John Doe'
})

// Refresh token
await backend.auth.refresh()
```

### 📞 Contact API

```typescript
import { backend } from '@/api'

// Submit contact form
await backend.contact.submit({
  name: 'John Doe',
  phone: '+998901234567',
  email: 'john@example.com',
  courseInterest: 'ielts',
  message: 'I am interested in IELTS course'
})
```

### 👨‍💼 Admin API

```typescript
import { backend } from '@/api'

// Course management
await backend.admin.addCourse(courseData)
await backend.admin.updateCourse(courseId, courseData)
await backend.admin.deleteCourse(courseId)
const courses = await backend.admin.getCourses()

// Lesson management
await backend.admin.addLesson(lessonData)
await backend.admin.updateLesson(lessonId, lessonData)
await backend.admin.deleteLesson(lessonId)
const lessons = await backend.admin.getLessons()

// User management
const users = await backend.admin.getUsers()
await backend.admin.updateUser(userId, userData)
await backend.admin.deleteUser(userId)

// Statistics
const stats = await backend.admin.getStats()
```

### 📚 Courses API

```typescript
import { backend } from '@/api'

// Get all courses
const courses = await backend.courses.getAll()

// Get course by ID
const course = await backend.courses.getById(courseId)

// Search courses
const results = await backend.courses.search('english')

// Get courses by category
const categoryCourses = await backend.courses.getByCategory('ielts')

// Enroll in course
await backend.courses.enroll({
  courseId: 1,
  paymentMethod: 'card'
})

// Get user's enrolled courses
const myCourses = await backend.courses.getMyCourses()
```

### 👤 Users API

```typescript
import { backend } from '@/api'

// Get user profile
const profile = await backend.users.getProfile()

// Update profile
await backend.users.updateProfile({
  name: 'New Name',
  bio: 'Updated bio'
})

// Change password
await backend.users.updatePassword({
  currentPassword: 'oldpass',
  newPassword: 'newpass'
})

// Get learning progress
const progress = await backend.users.getProgress()

// Get certificates
const certificates = await backend.users.getCertificates()
```

### 💳 Payments API

```typescript
import { backend } from '@/api'

// Create payment
const payment = await backend.payments.createPayment({
  courseId: 1,
  amount: 99.99,
  method: 'card'
})

// Get payment history
const history = await backend.payments.getPaymentHistory()

// Check payment status
const status = await backend.payments.getPaymentStatus(paymentId)

// Refund payment
await backend.payments.refund(paymentId, refundData)

// Webhook endpoint (server-side)
await backend.payments.webhook(webhookData)
```

## 🔧 Advanced Usage

### Custom Headers

```typescript
import { backend } from '@/api'

// Add authorization header
backend.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
```

### Request/Response Interceptors

```typescript
import { backend } from '@/api'

// Add request interceptor
backend.axios.interceptors.request.use(
  (config) => {
    // Add auth token, etc.
    return config
  },
  (error) => Promise.reject(error)
)

// Add response interceptor
backend.axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response?.status === 401) {
      // Redirect to login
    }
    return Promise.reject(error)
  }
)
```

### Error Handling

```typescript
import { backend } from '@/api'

try {
  const courses = await backend.courses.getAll()
} catch (error) {
  if (error.response) {
    // Server responded with error status
    console.error('API Error:', error.response.status, error.response.data)
  } else if (error.request) {
    // Network error
    console.error('Network Error:', error.request)
  } else {
    // Other error
    console.error('Error:', error.message)
  }
}
```

## 📝 TypeScript Support

All API methods return `Promise<AxiosResponse<any>>` and are fully typed with IntelliSense support.

```typescript
import { backend } from '@/api'

// ✅ TypeScript knows these methods exist
const courses = await backend.courses.getAll()
const login = await backend.auth.login({ email: 'test@test.com', password: '123' })

// ❌ TypeScript catches errors
const invalid = await backend.courses.nonExistent() // Type error!
```

## 🛠️ Development

### Adding New API Methods

1. Add the method to the appropriate module (e.g., `courses.ts`)
2. Export it from the module
3. The method will automatically be available in the `backend` object

Example:
```typescript
// In courses.ts
export const courses = {
  // ... existing methods
  getFeatured: () => axiosInstance.get('/courses/featured'),
}

// Now available as: backend.courses.getFeatured()
```

### Direct Module Imports

You can also import specific modules directly:

```typescript
import { auth, courses } from '@/api'

// Use specific modules
const user = await auth.login(credentials)
const coursesList = await courses.getAll()
```

## 🔒 Security Notes

- `withCredentials: true` sends cookies with requests
- All requests include `Content-Type: application/json`
- CORS must be properly configured on the backend
- Consider adding request/response interceptors for authentication
- Never commit API keys to version control

## 🎯 Migration from Legacy Code

### Old way (still works):
```typescript
import backend from '@/client'
```

### New recommended way:
```typescript
import { backend } from '@/api'
```

Both work, but the new way is more explicit and follows modern import patterns.
