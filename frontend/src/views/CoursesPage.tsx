import CourseCard from '@/components/courses/CourseCard'
import { backend } from '@/lib'
import { Course } from '@/types/course'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
export default function CoursesPage() {
	const { data, isLoading } = useQuery<{ courses: Course[] }>({
		queryKey: ['courses'],
		queryFn: async () => {
			const res = await backend.get('/courses')
			return res.data
		},
	})

	const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
	const [isCourseModalOpen, setIsCourseModalOpen] = useState(false)
	const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)

	if (isLoading) {
		return (
			<div className='min-h-screen flex items-center justify-center'>
				Loading...
			</div>
		)
	}

	return (
		<div className='min-h-screen py-12'>
			<div className='container mx-auto px-4'>
				<h1 className='text-3xl font-bold text-center mb-12'>Our Courses</h1>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{data?.courses?.map((course, index) => (
						<CourseCard
							key={course.id}
							course={course}
							// index={index}
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
		</div>
	)
}
