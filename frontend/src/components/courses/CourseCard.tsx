'use client'

import { Course } from '@/types/course'
import { CalendarDays, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'

type Props = {
	course: Course
	onOpenCourse: (course: Course) => void
	onOpenSchedule: (course: Course) => void
}

export default function CourseCard({
	course,
	onOpenCourse,
	onOpenSchedule,
}: Props) {
	return (
		<article className='w-full max-w-sm mx-auto overflow-hidden rounded-3xl bg-[#0b1327] shadow-2xl'>
			{/* Hero Image */}
			<div className='relative h-52 bg-[#e6f3f9]'>
				{course.image ? (
					<Image
						src={course.image}
						alt={course.title}
						fill
						className='object-cover'
						sizes='(max-width: 768px) 100vw, 380px'
					/>
				) : (
					<div className='flex h-full items-center justify-center'>
						<span className='text-4xl font-bold text-[#0b1327]/10'>
							{course.category}
						</span>
					</div>
				)}
			</div>

			{/* Body */}
			<div className='p-5 text-white'>
				{/* Category Pill */}
				<div className='mb-3 inline-block rounded-full bg-[#0ea5e9] px-3.5 py-1.5 text-xs font-bold'>
					{course.category || 'Frontend'}
				</div>

				{/* Title */}
				<h3 className='text-2xl font-black leading-tight'>{course.title}</h3>

				{/* Description */}
				{course.description && (
					<p className='mt-2 text-sm leading-relaxed text-white/70'>
						{course.description}
					</p>
				)}

				{/* Meta Info */}
				<div className='mt-4 space-y-2.5 text-sm text-white/80'>
					{course.duration && (
						<div className='flex items-center gap-3'>
							<Clock size={18} className='text-[#0ea5e9]' />
							<span>{course.duration}</span>
						</div>
					)}
					{course.format && (
						<div className='flex items-center gap-3'>
							<MapPin size={18} className='text-[#0ea5e9]' />
							<span>{course.format}</span>
						</div>
					)}
					{course.startDate && (
						<div className='flex items-center gap-3'>
							<CalendarDays size={18} className='text-[#0ea5e9]' />
							<span>Boshlanish vaqti: {course.startDate}</span>
						</div>
					)}
				</div>

				{/* Schedule Button */}
				<button
					onClick={() => onOpenSchedule(course)}
					className='mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-white/5 py-3.5 text-sm font-medium text-white/90 transition hover:bg-white/10'
				>
					<CalendarDays size={19} />
					Dars jadvali
				</button>

				{/* Price + Buy */}
				<div className='mt-5 flex items-end justify-between'>
					<div>
						<div className='text-4xl font-black leading-none text-white'>
							{course.price ? course.price.toLocaleString('ru-RU') : '500 000'}
						</div>
						<div className='text-[13px] text-white/50'>so'm kurs uchun</div>
					</div>

					<button
						onClick={() => onOpenCourse(course)}
						className='flex h-12 items-center justify-center rounded-2xl bg-white px-6 font-bold text-[#0b1327] shadow-lg transition hover:shadow-xl active:scale-95'
					>
						Xarid qilish →
					</button>
				</div>
			</div>
		</article>
	)
}
