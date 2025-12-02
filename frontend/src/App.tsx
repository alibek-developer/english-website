import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Toaster } from '@/components/ui/toaster'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ThemeProvider } from '@/hooks/useTheme'
import { AboutPage } from '@/pages/AboutPage'
import { AdminPage } from '@/pages/AdminPage'
import { ContactPage } from '@/pages/ContactPage'
import { CoursesPage } from '@/pages/CoursesPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'
import { PaymentCancelPage } from '@/pages/PaymentCancelPage'
import { PaymentSuccessPage } from '@/pages/PaymentSuccessPage'
import { ResourcesPage } from '@/pages/ResourcesPage'
import { TeacherPage } from '@/pages/TeacherPage'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const queryClient = new QueryClient()
const PUBLISHABLE_KEY =
	'pk_test_aW5mb3JtZWQtbXVsZS04NS5jbGVyay5hY2NvdW50cy5kZXYk'

export default function App() {
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
