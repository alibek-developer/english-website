import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Toaster } from '@/components/ui/toaster'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ThemeProvider } from '@/hooks/useTheme'
import { AboutPage } from '@/views/AboutPage'
import { AdminPage } from '@/views/AdminPage'
import { ContactPage } from '@/views/ContactPage'
import { CoursesPage } from '@/views/CoursesPage'
import { DashboardPage } from '@/views/DashboardPage'
import { HomePage } from '@/views/HomePage'
import { LoginPage } from '@/views/LoginPage'
import { PaymentCancelPage } from '@/views/PaymentCancelPage'
import { PaymentSuccessPage } from '@/views/PaymentSuccessPage'
import { ResourcesPage } from '@/views/ResourcesPage'
import { TeacherPage } from '@/views/TeacherPage'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const queryClient = new QueryClient()
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || ''

export default function App() {
	if (!PUBLISHABLE_KEY) {
		console.error(
			'❌ VITE_CLERK_PUBLISHABLE_KEY is missing! Check your .env file.'
		)
		return (
			<div style={{ padding: '2rem', textAlign: 'center' }}>
				<h1>Configuration Error</h1>
				<p>
					VITE_CLERK_PUBLISHABLE_KEY is not set. Please check your environment
					variables.
				</p>
			</div>
		)
	}

	return (
		<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<BrowserRouter>
						<div className='min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300'>
							<Navigation />
							<Routes>
								<Route path='/' element={<HomePage />} />
								<Route path='/courses' element={<CoursesPage />} />
								<Route path='/about' element={<AboutPage />} />
								<Route path='/resources' element={<ResourcesPage />} />
								<Route path='/contact' element={<ContactPage />} />
								<Route path='/login' element={<LoginPage />} />
								<Route
									path='/dashboard'
									element={
										<>
											<SignedIn>
												<DashboardPage />
											</SignedIn>
											<SignedOut>
												<Navigate to='/login' replace />
											</SignedOut>
										</>
									}
								/>
								<Route path='/admin' element={<AdminPage />} />
								<Route path='/teacher' element={<TeacherPage />} />
								<Route
									path='/payment-success'
									element={<PaymentSuccessPage />}
								/>
								<Route path='/payment-cancel' element={<PaymentCancelPage />} />
							</Routes>
							<Footer />
							<WhatsAppButton />
							<ScrollToTop />
							<Toaster />
						</div>
					</BrowserRouter>
				</ThemeProvider>
			</QueryClientProvider>
		</ClerkProvider>
	)
}
