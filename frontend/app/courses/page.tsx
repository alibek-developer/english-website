'use client'

import { CourseCard, CourseModal } from '@/components/courses'
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
		schedule: [
			{ day: 'Dushanba', time: '19:00 dan 21:00 gacha' },
			{ day: 'Chorshanba', time: '19:00 dan 21:00 gacha' },
		],
	},
]

export default function CoursesPage() {
	const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

	const [isCourseModalOpen, setIsCourseModalOpen] = useState(false)
	const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-6'>
			{demoCourses.map(course => (
				<CourseCard
					key={course.id}
					course={course}
					onOpenCourse={() => {
						setSelectedCourse(course)
						setIsCourseModalOpen(true)
					}}
					onOpenSchedule={() => {
						if (!course.schedule) return // jadvali yo‘q bo‘lsa ochmaymiz
						setSelectedCourse(course)
						setIsScheduleModalOpen(true)
					}}
				/>
			))}

			{/* COURSE MODAL */}
			<CourseModal
				course={selectedCourse}
				isOpen={isCourseModalOpen}
				onClose={() => setIsCourseModalOpen(false)}
			/>

			{/* SCHEDULE MODAL */}
			{selectedCourse?.schedule && (
				<ScheduleModal
					isOpen={isScheduleModalOpen}
					onClose={() => setIsScheduleModalOpen(false)}
					courseTitle={selectedCourse.title}
					schedule={selectedCourse.schedule}
				/>
			)}
		</div>
	)
}
