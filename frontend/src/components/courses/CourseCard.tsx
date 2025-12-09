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
		<article className='bg-[#071022] rounded-2xl overflow-hidden border border-white/5 shadow-[0_10px_30px_rgba(2,6,23,0.6)]'>
			{/* Top image / hero */}
			<div className='w-full h-44 bg-[#dff0f9] relative'>
				{course.image ? (
					<Image
						src={course.image}
						alt={course.title}
						fill
						className='object-cover'
						sizes='(max-width:768px) 100vw, 33vw'
					/>
				) : (
					<div className='w-full h-full flex items-center justify-center text-[#0C1222] font-semibold'>
						{course.category ?? ''}
					</div>
				)}
			</div>

			{/* Body */}
			<div className='p-6 text-white space-y-4'>
				{/* Category pill */}
				{course.category && (
					<div className='inline-block px-3 py-1 bg-[#0D4C73] rounded-full text-xs font-medium text-white/95'>
						{course.category}
					</div>
				)}

				{/* Title */}
				<h3 className='mt-2 text-2xl lg:text-3xl font-extrabold leading-snug'>
					{course.title}
				</h3>

				{/* Desc */}
				{course.description && (
					<p className='text-white/70 text-sm leading-relaxed'>
						{course.description}
					</p>
				)}

				{/* Meta row */}
				<div className='mt-2 space-y-2 text-sm text-white/70'>
					<div className='flex items-center gap-3'>
						<div className='flex items-center gap-2'>
							<Clock size={16} className='text-[#6fb7e6]' />{' '}
							<span>{course.duration ?? '—'}</span>
						</div>

						<div className='flex items-center gap-2'>
							<MapPin size={16} className='text-[#6fb7e6]' />{' '}
							<span>{course.format ?? "Format ko'rsatilmagan"}</span>
						</div>

						{course.startDate && (
							<div className='flex items-center gap-2'>
								<CalendarDays size={16} className='text-[#6fb7e6]' />{' '}
								<span>Boshlanishi: {course.startDate}</span>
							</div>
						)}
					</div>
				</div>

				{/* Actions: schedule button (full width) */}
				<div className='mt-3'>
					<button
						onClick={() => onOpenSchedule(course)}
						className='w-full flex items-center justify-center gap-3 border border-white/10 rounded-xl py-3 text-sm text-white/90 hover:bg-white/5 transition'
						aria-label={`Dars jadvali — ${course.title}`}
					>
						<CalendarDays size={18} /> Dars jadvali
					</button>
				</div>

				{/* Price + Buy */}
				<div className='mt-4 flex items-center justify-between gap-4'>
					<div>
						<div className='text-2xl lg:text-3xl font-extrabold text-white'>
							{course.price ? `${course.price} so'm` : "Narx yo'q"}
						</div>
						<div className='text-xs text-white/60'>kurs uchun</div>
					</div>

					<div className='shrink-0'>
						<button
							onClick={() => onOpenCourse(course)}
							className='bg-white text-[#0C1222] px-5 py-2 rounded-lg font-semibold hover:scale-[1.02] transition shadow-sm'
							aria-label={`Xarid qilish — ${course.title}`}
						>
							Xarid qilish →
						</button>
					</div>
				</div>
			</div>
		</article>
	)
}
