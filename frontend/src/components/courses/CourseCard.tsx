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
		<article className='w-full max-w-sm mx-auto overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-xl dark:shadow-2xl transition-all duration-500 flex flex-col h-full'>
			{/* Hero Image */}
			<div className='relative h-52 bg-gray-100 dark:bg-slate-800 flex-shrink-0'>
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
						<span className='text-4xl font-bold text-gray-300 dark:text-slate-700'>
							{course.category}
						</span>
					</div>
				)}
			</div>

			{/* Body – flex-grow bilan tavsif joy egallaydi */}
			<div className='p-6 flex flex-col flex-grow'>
				{/* Category Pill */}
				<div className='mb-3 inline-block rounded-full bg-sky-100 dark:bg-sky-900/50 px-4 py-2 text-xs font-bold text-sky-700 dark:text-sky-300'>
					{course.category || 'Frontend'}
				</div>

				{/* Title */}
				<h3 className='text-2xl font-black leading-tight'>{course.title}</h3>

				{/* Description */}
				{course.description && (
					<p className='mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 flex-grow'>
						{course.description}
					</p>
				)}

				{/* Meta Info */}
				<div className='mt-5 space-y-3 text-sm text-gray-600 dark:text-gray-300'>
					{course.duration && (
						<div className='flex items-center gap-3'>
							<Clock size={18} className='text-sky-600 dark:text-sky-400' />
							<span>{course.duration}</span>
						</div>
					)}
					{course.format && (
						<div className='flex items-center gap-3'>
							<MapPin size={18} className='text-sky-600 dark:text-sky-400' />
							<span>{course.format}</span>
						</div>
					)}
					{course.startDate && (
						<div className='flex items-center gap-3'>
							<CalendarDays
								size={18}
								className='text-sky-600 dark:text-sky-400'
							/>
							<span>Boshlanish vaqti: {course.startDate}</span>
						</div>
					)}
				</div>

				{/* Schedule Button */}
				<button
					onClick={() => onOpenSchedule(course)}
					className='mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-gray-100 dark:bg-slate-800 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 transition hover:bg-gray-200 dark:hover:bg-slate-700'
				>
					<CalendarDays size={19} />
					Dars jadvali
				</button>

				{/* Price + Buy – HAR DOIM BIR XIL VA CHIROYLI */}
				<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6'>
					{/* Narx qismi – chapda, to‘liq joy egallaydi */}
					<div className='flex flex-col justify-end'>
						<div className='text-4xl font-black leading-none tabular-nums'>
							{course.price ? course.price.toLocaleString('ru-RU') : '500 000'}
						</div>
						<div className='text-[13px] text-gray-500 dark:text-gray-400 mt-1'>
							so'm kurs uchun
						</div>
					</div>

					{/* Xarid qilish tugmasi – o‘ngda, har doim bir xil o‘lcham va joylashuv */}
					<div className='flex items-end justify-start sm:justify-end'>
						<button
							onClick={() => onOpenCourse(course)}
							className='w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-sky-600 dark:bg-sky-500 px-2 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-sky-700 dark:hover:bg-sky-400 active:scale-95'
						>
							Xarid qilish →
						</button>
					</div>
				</div>
			</div>
		</article>
	)
}
