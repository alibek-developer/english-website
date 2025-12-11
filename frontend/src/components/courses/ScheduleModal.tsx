// components/courses/ScheduleModal.tsx   ← bu fayl alohida bo‘lsin!

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
			{/* Overlay */}
			<div
				className='fixed inset-0 z-50 bg-black/70 backdrop-blur-sm'
				onClick={onClose}
			/>

			{/* Modal */}
			<div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
				<div className='relative w-full max-w-md rounded-3xl bg-[#0f172a] text-white shadow-2xl'>
					{/* Header */}
					<div className='px-6 pt-6 pb-4'>
						<div className='flex items-start justify-between'>
							<div>
								<h2 className='text-2xl font-bold'>Dars jadvali</h2>
								<p className='mt-1 text-sm text-white/60'>{courseTitle}</p>
							</div>
							<button
								onClick={onClose}
								className='rounded-full p-2 transition hover:bg-white/10'
							>
								<X size={22} className='text-white/70' />
							</button>
						</div>
					</div>

					{/* Schedule Items */}
					<div className='space-y-3 px-6 pb-6'>
						{sortedSchedule.map(item => (
							<div
								key={item.day}
								className='flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4 transition hover:bg-white/10'
							>
								<div className='flex items-center gap-4'>
									<div className='flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20'>
										<Calendar size={20} className='text-cyan-400' />
									</div>
									<span className='font-semibold'>{item.day}</span>
								</div>
								<div className='flex items-center gap-2 text-cyan-300'>
									<Clock size={18} />
									<span className='text-sm font-medium'>{item.time}</span>
								</div>
							</div>
						))}
					</div>

					{/* Banner */}
					<div className='rounded-b-3xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 px-6 py-5'>
						<div className='flex items-start gap-3'>
							<div className='mt-0.5 rounded-full bg-pink-500/20 p-2'>
								<div className='h-5 w-5 rounded-full bg-pink-400' />
							</div>
							<p className='text-sm font-medium leading-relaxed'>
								Dars vaqti o‘zingiz mumkin. Aniq ma’lumot uchun bog‘laning.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
