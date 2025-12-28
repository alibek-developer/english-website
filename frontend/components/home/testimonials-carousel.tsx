'use client'

import { useApp } from '@/contexts/app-context'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

export function TestimonialsCarousel() {
	const { language } = useApp()
	const [currentIndex, setCurrentIndex] = useState(0)

	const content = {
		uz: {
			title: "O'quvchilar fikrlari",
			description: "Bizning kurslarimiz haqida o'quvchilarimizning fikrlari",
			testimonials: [
				{
					id: 1,
					name: 'Azizbek Rahimov',
					role: 'Dasturchi',
					message:
						"Wave English kurslari mening ingliz tilimni professional darajada oshirishimga yordam berdi. O'qituvchilar juda tajribali va kurs materiali juda sifatli.",
					rating: 5,
				},
				{
					id: 2,
					name: 'Malika Karimova',
					role: 'Talaba',
					message:
						"Ingliz tilini noldan o'rgandim. Kurs juda qiziqarli va interaktiv. Endi IELTS imtihoniga tayyorlanayotganman.",
					rating: 5,
				},
				{
					id: 3,
					name: 'Rustam Aliyev',
					role: 'Biznesmen',
					message:
						"Business English kursi mening biznesim uchun juda foydali bo'ldi. Endi chet ellik hamkorlar bilan bemalol muloqot qila olaman.",
					rating: 5,
				},
			],
		},
		en: {
			title: 'Student Reviews',
			description: 'What our students say about our courses',
			testimonials: [
				{
					id: 1,
					name: 'Azizbek Rahimov',
					role: 'Software Developer',
					message:
						'Wave English courses helped me improve my English to a professional level. The teachers are very experienced and the course material is of high quality.',
					rating: 5,
				},
				{
					id: 2,
					name: 'Malika Karimova',
					role: 'Student',
					message:
						"I learned English from scratch. The course is very interesting and interactive. Now I'm preparing for the IELTS exam.",
					rating: 5,
				},
				{
					id: 3,
					name: 'Rustam Aliyev',
					role: 'Businessman',
					message:
						'The Business English course was very useful for my business. Now I can communicate freely with foreign partners.',
					rating: 5,
				},
			],
		},
	}

	const t = content[language]
	const items = t.testimonials

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prev => (prev + 1) % items.length)
		}, 6000)
		return () => clearInterval(interval)
	}, [items.length])

	const next = () => setCurrentIndex(prev => (prev + 1) % items.length)
	const prev = () =>
		setCurrentIndex(prev => (prev - 1 + items.length) % items.length)

	return (
		<section className='py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-500 overflow-hidden'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Sarlavha qismi */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4'>
						{t.title}
					</h2>
					<p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
						{t.description}
					</p>
				</motion.div>

				{/* Karusel qismi */}
				<div className='max-w-4xl mx-auto relative'>
					{/* Orqa fondagi Quote belgisi */}
					<div className='absolute -top-10 -left-6 md:-left-12 opacity-10 dark:opacity-20 hidden sm:block'>
						<Quote className='w-24 h-24 md:w-32 md:h-32 text-blue-600' />
					</div>

					<AnimatePresence mode='wait'>
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 40 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -40 }}
							transition={{ duration: 0.5, ease: 'easeOut' }}
							className='bg-white dark:bg-slate-800/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-14 
                shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-2xl border border-slate-100 dark:border-slate-700/50 relative z-10'
						>
							<div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start'>
								{/* Avatar (Harf bilan) */}
								<div className='flex-shrink-0'>
									<div
										className='w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 
                    flex items-center justify-center shadow-lg transform rotate-3'
									>
										<span className='text-4xl font-bold text-white -rotate-3'>
											{items[currentIndex].name[0]}
										</span>
									</div>
								</div>

								{/* Matnli kontent */}
								<div className='flex-1 text-center md:text-left'>
									<div className='flex justify-center md:justify-start gap-1 mb-6'>
										{[...Array(items[currentIndex].rating)].map((_, i) => (
											<Star
												key={i}
												className='w-5 h-5 fill-yellow-400 text-yellow-400'
											/>
										))}
									</div>

									<p className='text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-8 leading-relaxed italic font-medium'>
										"{items[currentIndex].message}"
									</p>

									<div>
										<div className='font-bold text-slate-900 dark:text-white text-xl'>
											{items[currentIndex].name}
										</div>
										<div className='text-blue-600 dark:text-blue-400 font-semibold'>
											{items[currentIndex].role}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>

					{/* Navigatsiya tugmalari (Pure Tailwind) */}
					<div className='flex justify-center items-center gap-6 mt-12'>
						<button
							onClick={prev}
							className='group p-3 rounded-2xl border border-slate-200 dark:border-slate-700 
                hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300'
							aria-label='Previous testimonial'
						>
							<ChevronLeft className='w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600' />
						</button>

						{/* Pagination nuqtalari */}
						<div className='flex items-center gap-3'>
							{items.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`transition-all duration-500 h-3 rounded-full ${
										index === currentIndex
											? 'w-10 bg-blue-600 dark:bg-blue-500'
											: 'w-3 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
									}`}
								/>
							))}
						</div>

						<button
							onClick={next}
							className='group p-3 rounded-2xl border border-slate-200 dark:border-slate-700 
                hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300'
							aria-label='Next testimonial'
						>
							<ChevronRight className='w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-blue-600' />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
