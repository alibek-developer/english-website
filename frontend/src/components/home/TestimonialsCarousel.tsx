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

	const next = () => setCurrentIndex(prev => (prev + 1) % items.length)
	const prev = () =>
		setCurrentIndex(prev => (prev - 1 + items.length) % items.length)

	if (items.length === 0) return null

	return (
		<section className='py-24 bg-slate-50 dark:bg-gray-900 transition-colors duration-500'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4'>
						Talabalar{' '}
						<span className='text-sky-600 dark:text-sky-400'>Fikrlari</span>
					</h2>
					<p className='text-lg text-slate-600 dark:text-slate-300'>
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
						className='bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 
							shadow-xl dark:shadow-2xl border border-slate-200 dark:border-gray-700 
							transition-all duration-300'
					>
						<div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
							<div className='flex-shrink-0'>
								<div
									className='w-24 h-24 rounded-full bg-sky-100 dark:bg-sky-900/40 
									flex items-center justify-center ring-4 ring-sky-200 dark:ring-sky-800/50'
								>
									<span className='text-3xl font-bold text-sky-600 dark:text-sky-400'>
										{items[currentIndex].name[0].toUpperCase()}
									</span>
								</div>
							</div>

							<div className='flex-1 text-center md:text-left'>
								<div className='flex justify-center md:justify-start gap-1 mb-6'>
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className='w-6 h-6 fill-yellow-400 dark:fill-yellow-500 
												text-yellow-400 dark:text-yellow-500'
										/>
									))}
								</div>

								<p className='text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-8 leading-relaxed italic'>
									"{items[currentIndex].message}"
								</p>

								<div className='font-semibold text-slate-900 dark:text-white text-lg'>
									{items[currentIndex].name}
								</div>
								<div className='text-sm text-slate-500 dark:text-slate-400'>
									Talaba
								</div>
							</div>
						</div>
					</motion.div>

					{/* Navigation */}
					<div className='flex justify-center items-center gap-6 mt-10'>
						<Button
							variant='outline'
							size='icon'
							onClick={prev}
							className='rounded-full border-slate-300 dark:border-slate-600 
								hover:bg-sky-50 dark:hover:bg-sky-900/30'
						>
							<ChevronLeft className='w-5 h-5' />
						</Button>

						<div className='flex items-center gap-3'>
							{items.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`transition-all duration-300 ${
										index === currentIndex
											? 'w-10 h-3 bg-sky-600 dark:bg-sky-400 rounded-full'
											: 'w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full hover:bg-slate-400 dark:hover:bg-slate-500'
									}`}
								/>
							))}
						</div>

						<Button
							variant='outline'
							size='icon'
							onClick={next}
							className='rounded-full border-slate-300 dark:border-slate-600 
								hover:bg-sky-50 dark:hover:bg-sky-900/30'
						>
							<ChevronRight className='w-5 h-5' />
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
