// components/courses/CourseModal.tsx

'use client'

import { Course } from '@/types/course'
import { Check, X } from 'lucide-react'

interface CourseModalProps {
	course: Course | null
	isOpen: boolean
	onClose: () => void
}

export default function CourseModal({
	course,
	isOpen,
	onClose,
}: CourseModalProps) {
	if (!course || !isOpen) return null

	const formatPrice = (price: number) => price.toLocaleString('ru-RU') + " so'm"

	const handleBuy = () => {
		// Telegramga o‘tish – o‘zingizning Telegram linkingizni qo‘ying
		const telegramLink = `https://t.me/your_username?text=Salom! ${encodeURIComponent(
			course.title
		)} kursi haqida ma'lumot bering. Narxi: ${course.price} so'm`

		// Yangi oynada ochiladi
		window.open(telegramLink, '_blank')

		// Modalni yopamiz
		onClose()
	}

	return (
		<>
			{/* Overlay – tashqariga bosganda yopiladi (100% ishlaydi) */}
			<div
				className='fixed inset-0 z-50 bg-black/60 dark:bg-black/70 backdrop-blur-sm transition-opacity'
				onClick={onClose}
			/>

			{/* Modal */}
			<div className='fixed inset-0 z-50 overflow-y-auto'>
				<div className='flex min-h-full items-center justify-center p-4'>
					<div
						className='relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-2xl transition-all'
						onClick={e => e.stopPropagation()} // ichkariga bosganda yopilmasin
					>
						{/* Close tugmasi – tepa o‘ng burchakda */}
						<button
							onClick={onClose}
							className='absolute right-4 top-4 z-10 rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-slate-800'
						>
							<X size={22} className='text-gray-500 dark:text-gray-400' />
						</button>

						{/* Hero Image */}
						<div className='relative h-52 overflow-hidden rounded-t-3xl bg-gray-100 dark:bg-slate-800'>
							{course.image ? (
								<img
									src={course.image}
									alt={course.title}
									className='h-full w-full object-cover'
								/>
							) : (
								<div className='flex h-full items-center justify-center'>
									<span className='text-5xl font-bold text-gray-300 dark:text-slate-700'>
										{course.category}
									</span>
								</div>
							)}
						</div>

						{/* Content */}
						<div className='p-6 pt-12'>
							{' '}
							{/* pt-12 – close tugmasi uchun joy */}
							{/* Category */}
							<div className='mb-3 inline-block rounded-full bg-sky-100 dark:bg-sky-900/50 px-4 py-2 text-sm font-bold text-sky-700 dark:text-sky-300'>
								{course.category}
							</div>
							{/* Title */}
							<h2 className='text-2xl font-black leading-tight'>
								{course.title}
							</h2>
							{course.description && (
								<p className='mt-3 text-sm text-gray-600 dark:text-gray-300'>
									{course.description}
								</p>
							)}
							{/* Details */}
							<div className='mt-6'>
								<h3 className='mb-3 text-lg font-bold text-gray-800 dark:text-gray-200'>
									Kurs haqida
								</h3>
								<div className='grid grid-cols-2 gap-3 text-sm'>
									<div className='rounded-xl bg-gray-100 dark:bg-slate-800 p-4'>
										<span className='text-gray-600 dark:text-gray-400'>
											Davomiyligi:
										</span>
										<p className='font-semibold mt-1'>{course.duration}</p>
									</div>
									<div className='rounded-xl bg-gray-100 dark:bg-slate-800 p-4'>
										<span className='text-gray-600 dark:text-gray-400'>
											Format:
										</span>
										<p className='font-semibold mt-1'>{course.format}</p>
									</div>
									<div className='rounded-xl bg-gray-100 dark:bg-slate-800 p-4'>
										<span className='text-gray-600 dark:text-gray-400'>
											Daraja:
										</span>
										<p className='font-semibold mt-1'>{course.level}</p>
									</div>
									<div className='rounded-xl bg-gray-100 dark:bg-slate-800 p-4'>
										<span className='text-gray-600 dark:text-gray-400'>
											Boshlanishi:
										</span>
										<p className='font-semibold mt-1'>
											{new Date(course.startDate).toLocaleDateString('uz-UZ')}
										</p>
									</div>
								</div>
							</div>
							{/* Features */}
							{course.features && course.features.length > 0 && (
								<div className='mt-6'>
									<h3 className='mb-3 text-lg font-bold text-gray-800 dark:text-gray-200'>
										Kursga kiradi:
									</h3>
									<ul className='space-y-3'>
										{course.features.map((feature, i) => (
											<li key={i} className='flex items-center gap-3 text-sm'>
												<Check
													size={20}
													className='text-sky-600 dark:text-sky-400 flex-shrink-0'
												/>
												<span className='text-gray-700 dark:text-gray-300'>
													{feature}
												</span>
											</li>
										))}
									</ul>
								</div>
							)}
							{/* Narx + Tugma – tugma chiqib ketmasligi uchun flex optimallashtirildi */}
							<div className='mt-8 border-t border-gray-200 dark:border-slate-700 pt-6'>
								<div className='flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4'>
									{/* Narx qismi */}
									<div className='flex flex-col'>
										<span className='text-xs font-medium text-gray-600 dark:text-gray-400 mb-1'>
											Jami narx
										</span>
										<div className='flex items-baseline gap-2'>
											<span className='text-4xl font-black tracking-tighter'>
												{formatPrice(course.price).replace(" so'm", '')}
											</span>
											<span className='text-xl font-bold text-gray-600 dark:text-gray-400'>
												so'm
											</span>
										</div>
										<span className='text-xs text-gray-500 dark:text-gray-500 mt-1'>
											kurs uchun
										</span>
									</div>

									{/* Xarid qilish tugmasi – yonida X yo‘q, Telegramga o‘tadi */}
									<button
										onClick={handleBuy}
										className='w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-sky-600 dark:bg-sky-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-sky-700 dark:hover:bg-sky-400 active:scale-95'
									>
										Xarid qilish
										<svg
											width='20'
											height='20'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='3'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path d='M7 17l9.2-9.2M17 17l-9.2-9.2' />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
