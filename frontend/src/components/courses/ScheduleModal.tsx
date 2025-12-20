// components/courses/ScheduleModal.tsx

'use client'

import { Calendar, Clock, X } from 'lucide-react'

interface ScheduleItem {
	day: string
	time: string
}

interface ScheduleModalProps {
	isOpen: boolean
	onClose: () => void
	courseTitle: string
	schedule: ScheduleItem[]
}

const dayOrder = [
	'Dushanba',
	'Seshanba',
	'Chorshanba',
	'Payshanba',
	'Juma',
	'Shanba',
	'Yakshanba',
]

export function ScheduleModal({
	isOpen,
	onClose,
	courseTitle,
	schedule,
}: ScheduleModalProps) {
	if (!isOpen) return null

	const sortedSchedule = [...schedule].sort((a, b) => {
		return dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day)
	})

	return (
		<>
			{/* Overlay – tashqariga bosganda yopiladi */}
			<div
				className='fixed inset-0 z-50 bg-black/60 dark:bg-black/70 backdrop-blur-sm'
				onClick={onClose}
			/>

			{/* Modal */}
			<div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
				<div
					className='relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-2xl'
					onClick={e => e.stopPropagation()}
				>
					{/* Header */}
					<div className='px-6 pt-6 pb-4 flex items-start justify-between'>
						<div>
							<h2 className='text-2xl font-bold'>Dars jadvali</h2>
							<p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
								{courseTitle}
							</p>
						</div>
						<button
							onClick={onClose}
							className='rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-slate-800'
						>
							<X size={22} className='text-gray-500 dark:text-gray-400' />
						</button>
					</div>

					{/* Schedule Items – border qo‘shildi */}
					<div className='space-y-3 px-6 pb-6'>
						{sortedSchedule.map(item => (
							<div
								key={item.day}
								className='flex items-center justify-between rounded-2xl bg-gray-100 dark:bg-slate-800 
                  px-5 py-4 transition hover:bg-gray-200 dark:hover:bg-slate-700
                  border border-gray-200 dark:border-slate-700'
							>
								<div className='flex items-center gap-4'>
									<div className='flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/50'>
										<Calendar
											size={20}
											className='text-sky-600 dark:text-sky-400'
										/>
									</div>
									<span className='font-semibold text-gray-800 dark:text-gray-200'>
										{item.day}
									</span>
								</div>
								<div className='flex items-center gap-2 text-sky-600 dark:text-sky-400'>
									<Clock size={18} />
									<span className='text-sm font-medium'>{item.time}</span>
								</div>
							</div>
						))}
					</div>

					{/* Banner */}
					<div className='rounded-b-3xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/30 dark:to-blue-900/30 px-6 py-5'>
						<div className='flex items-start gap-3'>
							<div className='mt-0.5 rounded-full bg-sky-200 dark:bg-sky-800/50 p-2'>
								<div className='h-5 w-5 rounded-full bg-sky-500 dark:bg-sky-400' />
							</div>
							<p className='text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-300'>
								Dars vaqti o‘zingiz mumkin. Aniq ma’lumot uchun bog‘laning.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
