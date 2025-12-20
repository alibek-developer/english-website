// app/courses/page.tsx
'use client'

import CourseCard from '@/components/courses/CourseCard'
import CourseModal from '@/components/courses/CourseModal'
import { ScheduleModal } from '@/components/courses/ScheduleModal'
import { Course } from '@/types/course'
import { useState } from 'react'

const demoCourses: Course[] = [
	{
		id: 1,
		title: 'React Bootcamp',
		description: 'React asoslarini 0 dan o’rgatamiz.',
		image: '/react.png',
		category: 'Frontend',
		duration: '2 oy',
		level: 'Boshlang’ich',
		format: 'Offline',
		startDate: '2025-01-15',
		price: 500000,
		features: [
			'Amaliy loyihalar',
			'Zoom yozuvlari',
			'Uyga vazifalar va mentorlik',
		],
		schedule: [
			{ day: 'Dushanba', time: '19:00 dan 21:00 gacha' },
			{ day: 'Chorshanba', time: '19:00 dan 21:00 gacha' },
			{ day: 'Juma', time: '19:00 dan 21:00 gacha' },
		],
	},
	{
		id: 2,
		title: 'IELTS intensiv kursi',
		description:
			'Bizning keng qamrovli IELTS tayyorgarlik dasturimiz bilan 7-9 bandiga erishing',
		image: '/ielts.jpg',
		category: 'IELTS',
		duration: '3 oy',
		level: "O'rta va yuqori",
		format: 'Gibrid',
		startDate: '2025-02-01',
		price: 1500000,
		features: [
			'Haftada 3 marta dars',
			'Mock testlar',
			'Speaking klub',
			'Shaxsiy mentor',
		],
		schedule: [
			{ day: 'Dushanba', time: '19:00 dan 21:00 gacha' },
			{ day: 'Chorshanba', time: '19:00 dan 21:00 gacha' },
			{ day: 'Juma', time: '19:00 dan 21:00 gacha' },
		],
	},
]

export default function CoursesPage() {
	const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
	const [isCourseModalOpen, setIsCourseModalOpen] = useState(false)
	const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)

	return (
		<div className='min-h-screen bg-gray-50 dark:bg-slate-900 px-6 py-12 transition-colors duration-500'>
			<div className='mx-auto max-w-7xl'>
				<h1 className='mb-12 text-center text-5xl font-black text-gray-900 dark:text-white md:text-6xl'>
					Bizning kurslar
				</h1>

				<div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
					{demoCourses.map(course => (
						<CourseCard
							key={course.id}
							course={course}
							onOpenCourse={() => {
								setSelectedCourse(course)
								setIsCourseModalOpen(true)
							}}
							onOpenSchedule={() => {
								setSelectedCourse(course)
								setIsScheduleModalOpen(true)
							}}
						/>
					))}
				</div>
			</div>

			{/* Modallar */}
			<CourseModal
				course={selectedCourse}
				isOpen={isCourseModalOpen}
				onClose={() => setIsCourseModalOpen(false)}
			/>

			<ScheduleModal
				isOpen={isScheduleModalOpen}
				onClose={() => setIsScheduleModalOpen(false)}
				courseTitle={selectedCourse?.title || ''}
				schedule={selectedCourse?.schedule || []}
			/>
		</div>
	)
}
