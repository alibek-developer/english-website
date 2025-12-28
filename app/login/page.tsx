import { LoginPage } from '@/components/pages/login-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Login - Wave English',
	description: 'Login to your Wave English account.',
}

export default function Login() {
	return <LoginPage />
}
