'use client'

import { Course } from '@/types/course'
import React from 'react'

type ModalProps = {
	course: Course | null
	isOpen: boolean
	onClose: () => void
}

export const CourseModal: React.FC<ModalProps> = ({
	course,
	isOpen,
	onClose,
}) => {
	if (!isOpen || !course) return null

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50'>
			<div className='bg-white rounded p-6 w-full max-w-lg relative'>
				<button className='absolute top-2 right-2' onClick={onClose}>
					✖
				</button>

				{course.image && (
					<img
						src={course.image}
						alt={course.title}
						className='w-full h-48 object-cover rounded mb-4'
					/>
				)}

				<h2 className='text-2xl font-semibold mb-2'>{course.title}</h2>
				<p className='text-gray-700 mb-2'>{course.description}</p>

				{course.category && (
					<p>
						<strong>Kategoriya:</strong> {course.category}
					</p>
				)}

				{course.duration && (
					<p>
						<strong>Davomiyligi:</strong> {course.duration}
					</p>
				)}

				{course.level && (
					<p>
						<strong>Daraja:</strong> {course.level}
					</p>
				)}

				{course.format && (
					<p>
						<strong>Format:</strong> {course.format}
					</p>
				)}

				{course.startDate && (
					<p>
						<strong>Boshlanish sanasi:</strong> {course.startDate}
					</p>
				)}

				<p className='font-semibold mt-3'>Narxi: {course.price} so’m</p>

				{course.schedule && (
					<div className='mt-3'>
						<h3 className='font-semibold mb-1'>Dars jadvali:</h3>
						<ul className='list-disc ml-5'>
							{course.schedule.map((s, index) => (
								<li key={index}>
									{s.day}: {s.time}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}
