// components/courses/CourseModal.tsx  ← To'liq almashtiring!

'use client'

import { Course } from '@/types/course'
import { Check, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

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
	const router = useRouter()

	if (!course || !isOpen) return null

	const formatPrice = (price: number) => price.toLocaleString('ru-RU') + " so'm"

	const handlePayment = () => {
		router.push(`/payment-success?course=${encodeURIComponent(course.title)}`)
		onClose()
	}

	return (
		<>
			{/* Overlay — tashqariga bosganda yopiladi */}
			<div
				className='fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity'
				onClick={onClose}
			/>

			{/* Modal — faqat kerakli joyni egallaydi */}
			<div className='fixed inset-0 z-50 overflow-y-auto'>
				<div className='flex min-h-full items-center justify-center p-4'>
					<div
						className='relative w-full max-w-md rounded-3xl bg-[#0b1426] text-white shadow-2xl'
						onClick={e => e.stopPropagation()} // ichkariga bosganda yopilmasin
					>
						{/* Close Button */}
						<button
							onClick={onClose}
							className='absolute right-4 top-4 z-10 rounded-full p-2 transition hover:bg-white/10'
						>
							<X size={22} className='text-white/70' />
						</button>

						{/* Hero Image */}
						<div className='relative h-52 overflow-hidden rounded-t-3xl bg-gradient-to-br from-cyan-100 to-blue-100'>
							{course.image ? (
								<img
									src={course.image}
									alt={course.title}
									className='h-full w-full object-cover'
								/>
							) : (
								<div className='flex h-full items-center justify-center'>
									<span className='text-5xl font-bold text-[#0b1426]/20'>
										{course.category}
									</span>
								</div>
							)}
						</div>

						{/* Content */}
						<div className='p-6'>
							{/* Category */}
							<div className='mb-3 inline-block rounded-full bg-[#0ea5e9] px-4 py-1.5 text-sm font-bold'>
								{course.category}
							</div>

							{/* Title */}
							<h2 className='text-2xl font-black leading-tight'>
								{course.title}
							</h2>
							{course.description && (
								<p className='mt-2 text-sm text-white/70'>
									{course.description}
								</p>
							)}

							{/* Details */}
							<div className='mt-6'>
								<h3 className='mb-3 text-lg font-bold'>Kurs tili:</h3>
								<div className='grid grid-cols-2 gap-3 text-sm'>
									<div className='rounded-xl bg-white/5 p-3'>
										<span className='text-white/60'>Davomiyligi:</span>
										<p className='font-semibold'>{course.duration}</p>
									</div>
									<div className='rounded-xl bg-white/5 p-3'>
										<span className='text-white/60'>Format:</span>
										<p className='font-semibold'>{course.format}</p>
									</div>
									<div className='rounded-xl bg-white/5 p-3'>
										<span className='text-white/60'>Daraja:</span>
										<p className='font-semibold'>{course.level}</p>
									</div>
									<div className='rounded-xl bg-white/5 p-3'>
										<span className='text-white/60'>Boshlanishi:</span>
										<p className='font-semibold'>
											{new Date(course.startDate).toLocaleDateString('uz-UZ')}
										</p>
									</div>
								</div>
							</div>

							{/* Features */}
							{course.features && course.features.length > 0 && (
								<div className='mt-6'>
									<h3 className='mb-3 text-lg font-bold'>Kursga kiradi:</h3>
									<ul className='space-y-2'>
										{course.features.map((feature, i) => (
											<li key={i} className='flex items-center gap-3 text-sm'>
												<Check size={18} className='text-cyan-400' />
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Narx + Tugma – FINAL VERSIYA (ikki qator bo‘lmaydi, fontlar kichikroq) */}
							<div className='mt-8 border-t border-white/10 pt-6'>
								<div className='flex items-end justify-between gap-6'>
									{/* Narx qismi */}
									<div className='flex flex-col'>
										<span className='text-xs font-medium text-white/60 mb-1'>
											Jami narx
										</span>
										<div className='flex items-baseline gap-2'>
											<span className='text-4xl font-black text-white tracking-tighter'>
												{formatPrice(course.price).replace(" so'm", '')}
											</span>
											<span className='text-xl font-bold text-white/80'>
												so'm
											</span>
										</div>
										<span className='text-xs text-white/50 mt-1'>
											kurs uchun
										</span>
									</div>

									{/* Xarid qilish tugmasi */}
									<button
										onClick={handlePayment}
										className='flex shrink-0 items-center gap-3 whitespace-nowrap rounded-2xl bg-white px-7 py-3.5 text-lg font-bold text-[#0b1426] shadow-lg transition-all hover:shadow-xl active:scale-95'
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
