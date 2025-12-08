'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Testimonial {
	_id: string
	name: string
	message: string
	createdAt: number
}

export function TestimonialsCarousel() {
	// Fake data for now - replace with API call later
	const items: Testimonial[] = [
		{
			_id: '1',
			name: 'Ali Ahmedov',
			message: "Bu kurs mening hayotimni o'zgartirdi. Rahmat!",
			createdAt: Date.now(),
		},
		{
			_id: '2',
			name: 'Malika Karimova',
			message: 'Juda foydali kurs. Barcha savollarimga javob oldim.',
			createdAt: Date.now(),
		},
		{
			_id: '3',
			name: 'Rustam Bekov',
			message: "Professional o'qituvchi va ajoyib materiallar.",
			createdAt: Date.now(),
		},
	]
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		if (items.length === 0) return

		const interval = setInterval(
			() => setCurrentIndex(prev => (prev + 1) % items.length),
			5000
		)

		return () => clearInterval(interval)
	}, [items.length])

	const next = () => {
		setCurrentIndex(prev => (prev + 1) % items.length)
	}

	const prev = () => {
		setCurrentIndex(prev => (prev - 1 + items.length) % items.length)
	}

	if (items.length === 0) return null

	return (
		<section className='py-20 bg-slate-50'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
						Talabalar <span className='text-sky-600'>Fikrlari</span>
					</h2>
					<p className='text-lg text-slate-600'>
						Mening talabalarimning muvaffaqiyatlari va fikrlarini o'qing
					</p>
				</motion.div>

				<div className='max-w-4xl mx-auto relative'>
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.5 }}
						className='bg-white rounded-2xl p-8 md:p-12 shadow-xl'
					>
						<div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
							<div className='flex-shrink-0'>
								<div className='w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center'>
									<span className='text-2xl font-bold text-sky-600'>
										{items[currentIndex].name[0].toUpperCase()}
									</span>
								</div>
							</div>

							<div className='flex-1 text-center md:text-left'>
								<div className='flex justify-center md:justify-start gap-1 mb-4'>
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className='w-5 h-5 fill-yellow-400 text-yellow-400'
										/>
									))}
								</div>

								<p className='text-lg text-slate-700 mb-6 leading-relaxed'>
									"{items[currentIndex].message}"
								</p>

								<div className='flex flex-col sm:flex-row items-center gap-4'>
									<div>
										<div className='font-semibold text-slate-900'>
											{items[currentIndex].name}
										</div>
										<div className='text-sm text-slate-500'>Student</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					<div className='flex justify-center gap-4 mt-8'>
						<Button
							variant='outline'
							size='icon'
							onClick={prev}
							className='rounded-full'
						>
							<ChevronLeft className='w-5 h-5' />
						</Button>

						<div className='flex items-center gap-2'>
							{items.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`w-2 h-2 rounded-full transition-all ${
										index === currentIndex
											? 'bg-sky-600 w-8'
											: 'bg-slate-300 hover:bg-slate-400'
									}`}
								/>
							))}
						</div>

						<Button
							variant='outline'
							size='icon'
							onClick={next}
							className='rounded-full'
						>
							<ChevronRight className='w-5 h-5' />
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
