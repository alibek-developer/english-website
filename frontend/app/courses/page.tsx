;('use client')

import { CourseCard, CourseModal } from '@/components/courses'

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
		schedule: [
			{ day: 'Dushanba', time: '18:00 - 20:00' },
			{ day: 'Chorshanba', time: '18:00 - 20:00' },
		],
	},
	{
		id: 2,
		title: 'Next.js Full Course',
		description: 'Next.js + SSR + Routing + API Routes.',
		category: 'Frontend',
		price: 650000,
	},
]

export default function CoursesPage() {
	const [modalCourse, setModalCourse] = useState<Course | null>(null)
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-6'>
			{demoCourses.map(course => (
				<CourseCard
					key={course.id}
					course={course}
					onOpenCourse={() => {
						setModalCourse(course)
						setIsModalOpen(true)
					}}
					onOpenSchedule={() => {
						setModalCourse(course)
						setIsModalOpen(true)
					}}
				/>
			))}

			<CourseModal
				course={modalCourse}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	)
}
