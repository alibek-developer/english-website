'use client'

import { CourseCard } from '@/components/courses/CourseCard'
import { CourseModal } from '@/components/courses/CourseModal'
import { ScheduleModal } from '@/components/courses/ScheduleModal'
import { CourseType } from '@/types/course'

import { useState } from 'react'

const coursesData: CourseType[] = [
	{
		id: 1,
		title: 'IELTS intensiv kursi',
		description:
			'Bizning keng qamrovli IELTS dasturimiz bilan 7-9 bandga erishing',
		duration: '3 oy',
		price: "1 500 000 so'm",
		image: '/images/ielts.jpg',
	},
	{
		id: 2,
		title: 'Umumiy ingliz (A1-C1)',
		description: 'Ingliz tilini asosiydan yuqori darajagacha o‘rgating',
		duration: '6 oy',
		price: "900 000 so'm",
		image: '/images/general.jpg',
	},
	{
		id: 3,
		title: 'Nutq klubi',
		description: 'Gapirishni rivojlantirish uchun nutq klubi',
		duration: '1 oy',
		price: "400 000 so'm",
		image: '/images/speaking.jpg',
	},
]

export default function CoursesPage() {
	const [openCourse, setOpenCourse] = useState<CourseType | null>(null)
	const [openSchedule, setOpenSchedule] = useState<CourseType | null>(null)

	return (
		<div className='w-full max-w-6xl mx-auto px-4 py-10'>
			<h1 className='text-3xl font-bold mb-8 text-center'>Bizning kurslar</h1>

			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{coursesData.map(course => (
					<CourseCard
						key={course.id}
						course={course}
						onOpenCourse={() => setOpenCourse(course)}
						onOpenSchedule={() => setOpenSchedule(course)}
					/>
				))}
			</div>
			{openCourse && (
				<CourseModal
					open={!!openCourse}
					course={openCourse}
					onClose={() => setOpenCourse(null)}
				/>
			)}

			<ScheduleModal
				open={!!openSchedule}
				course={openSchedule}
				onClose={() => setOpenSchedule(null)}
			/>
		</div>
	)
}
