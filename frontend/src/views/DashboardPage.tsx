'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Calendar, User } from 'lucide-react'

export function DashboardPage() {
	const user = { firstName: 'Guest', email: 'guest@example.com' }

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='container mx-auto px-4'>
				<div className='mb-8 flex justify-between items-center'>
					<div>
						<h1 className='text-3xl font-bold text-gray-900 mb-2'>Dashboard</h1>
						<p className='text-gray-600'>
							Welcome back, {user.firstName || user.email}
						</p>
					</div>
					<Button variant='outline' asChild>
						<a href='/login'>Login</a>
					</Button>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
					<Card>
						<CardHeader className='flex flex-row items-center space-y-0 pb-2'>
							<CardTitle className='text-sm font-medium'>My Courses</CardTitle>
							<BookOpen className='h-4 w-4 text-muted-foreground' />
						</CardHeader>
						<CardContent>
							<div className='text-2xl font-bold'>3</div>
							<p className='text-xs text-muted-foreground'>
								Active enrollments
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className='flex flex-row items-center space-y-0 pb-2'>
							<CardTitle className='text-sm font-medium'>
								Upcoming Lessons
							</CardTitle>
							<Calendar className='h-4 w-4 text-muted-foreground' />
						</CardHeader>
						<CardContent>
							<div className='text-2xl font-bold'>5</div>
							<p className='text-xs text-muted-foreground'>This week</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className='flex flex-row items-center space-y-0 pb-2'>
							<CardTitle className='text-sm font-medium'>Profile</CardTitle>
							<User className='h-4 w-4 text-muted-foreground' />
						</CardHeader>
						<CardContent>
							<div className='text-2xl font-bold'>Complete</div>
							<p className='text-xs text-muted-foreground'>Profile setup</p>
						</CardContent>
					</Card>
				</div>

				<div className='flex gap-4'>
					<Button variant='outline' asChild>
						<a href='/courses'>Browse Courses</a>
					</Button>
				</div>
			</div>
		</div>
	)
}
