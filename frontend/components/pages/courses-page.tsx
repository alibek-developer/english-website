'use client'

import { useApp } from '@/contexts/app-context'
import { supabase } from '@/lib/supabase/client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Icons
const BookOpen = dynamic(
	() => import('lucide-react').then(mod => mod.BookOpen),
	{ ssr: false }
)
const Clock = dynamic(() => import('lucide-react').then(mod => mod.Clock), {
	ssr: false,
})
const Star = dynamic(() => import('lucide-react').then(mod => mod.Star), {
	ssr: false,
})
const Users = dynamic(() => import('lucide-react').then(mod => mod.Users), {
	ssr: false,
})
const CheckCircle2 = dynamic(
	() => import('lucide-react').then(mod => mod.CheckCircle2),
	{ ssr: false }
)
const ArrowRight = dynamic(
	() => import('lucide-react').then(mod => mod.ArrowRight),
	{ ssr: false }
)

interface Course {
	id: string | number
	title_uz: string
	title_en: string
	description_uz: string
	description_en: string
	price: string
	duration: string
	rating?: string
	students?: string
	popular?: boolean
	features?: string[] // Bazada bo'lmasa, kodda default beramiz
}

export function CoursesPage() {
	const { language } = useApp()
	const [courses, setCourses] = useState<Course[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchCourses = async () => {
			try {
				const { data, error } = await supabase
					.from('courses')
					.select('*')
					.order('created_at', { ascending: false })

				if (error) throw error
				if (data) setCourses(data)
			} catch (error) {
				console.error('Kurslarni yuklashda xatolik:', error)
			} finally {
				setLoading(false)
			}
		}
		fetchCourses()
	}, [])

	const content = {
		uz: {
			title: 'Bilim darajangizni',
			titleAccent: 'yuksaltiring',
			description:
				"Professional metodika va tajribali ustozlar yordamida ingliz tilini tizimli o'rganing.",
			students: 'talaba',
			enrollNow: 'Kursga yozilish',
			whichCourse: 'Qaysi kurs sizga mos?',
			ctaText:
				'Bepul konsultatsiya oling va mutaxassislarimiz yordamida darajangizni aniqlang.',
			freeTrial: 'Konsultatsiya olish',
			defaultFeatures: [
				'Xalqaro sertifikat',
				'Amaliy darslar',
				'Speaking club',
			],
		},
		en: {
			title: 'Elevate your',
			titleAccent: 'knowledge',
			description:
				'Learn English systematically with professional methodology and experienced mentors.',
			students: 'students',
			enrollNow: 'Enroll Now',
			whichCourse: 'Which course fits you?',
			ctaText:
				'Get a free consultation and determine your level with the help of our experts.',
			freeTrial: 'Get Consultation',
			defaultFeatures: [
				'International Certificate',
				'Practical lessons',
				'Speaking club',
			],
		},
	}

	const t = content[language as 'uz' | 'en']

	return (
		<div className='min-h-screen pt-32 pb-20 bg-white dark:bg-[#020617] transition-colors duration-500'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-20'
				>
					<span className='px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-6 inline-block'>
						{language === 'uz' ? 'Kurslar katalogi' : 'Course Catalog'}
					</span>
					<h1 className='text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter'>
						{t.title}{' '}
						<span className='text-blue-600 dark:text-blue-500'>
							{t.titleAccent}
						</span>
					</h1>
					<p className='text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium'>
						{t.description}
					</p>
				</motion.div>

				{loading ? (
					<div className='flex justify-center items-center h-40'>
						<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600'></div>
					</div>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24'>
						{courses.map((course, index) => {
							// Har doim 2-kursni "popular" qilib ko'rsatish (yoki bazadan kelsa o'shani)
							const isPopular = course.popular || index === 1
							const courseFeatures = course.features || t.defaultFeatures

							return (
								<motion.div
									key={course.id}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className={`relative group rounded-[2.5rem] p-8 transition-all duration-500 border ${
										isPopular
											? 'bg-slate-900 dark:bg-blue-600 border-transparent shadow-2xl scale-105 z-10'
											: 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-blue-500/50'
									}`}
								>
									<div className='flex justify-between items-start mb-8'>
										<div
											className={`p-3 rounded-2xl ${
												isPopular ? 'bg-white/10' : 'bg-blue-600/10'
											}`}
										>
											<BookOpen
												className={`w-6 h-6 ${
													isPopular
														? 'text-white'
														: 'text-blue-600 dark:text-blue-400'
												}`}
											/>
										</div>
										<div className='flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5'>
											<Star className='w-3.5 h-3.5 text-amber-500 fill-amber-500' />
											<span
												className={`text-xs font-black ${
													isPopular
														? 'text-white/80'
														: 'text-slate-600 dark:text-slate-400'
												}`}
											>
												{course.rating || '4.9'}
											</span>
										</div>
									</div>

									<h3
										className={`text-2xl font-black mb-4 ${
											isPopular
												? 'text-white'
												: 'text-slate-900 dark:text-white'
										}`}
									>
										{language === 'uz' ? course.title_uz : course.title_en}
									</h3>

									<p
										className={`text-sm mb-8 font-medium leading-relaxed ${
											isPopular
												? 'text-blue-100/80'
												: 'text-slate-500 dark:text-slate-400'
										}`}
									>
										{language === 'uz'
											? course.description_uz
											: course.description_en}
									</p>

									<div className='space-y-4 mb-8'>
										<div
											className={`flex items-center gap-3 text-sm font-bold ${
												isPopular
													? 'text-white'
													: 'text-slate-700 dark:text-slate-300'
											}`}
										>
											<Clock className='w-4 h-4 opacity-60' /> {course.duration}
										</div>
										<div
											className={`flex items-center gap-3 text-sm font-bold ${
												isPopular
													? 'text-white'
													: 'text-slate-700 dark:text-slate-300'
											}`}
										>
											<Users className='w-4 h-4 opacity-60' />{' '}
											{course.students || '100+'} {t.students}
										</div>
									</div>

									{/* Narx qismi */}
									<div className='mb-8 pt-8 border-t border-slate-200/50 dark:border-white/5'>
										<div className='flex items-baseline gap-1'>
											<span
												className={`text-3xl font-black ${
													isPopular
														? 'text-white'
														: 'text-slate-900 dark:text-white'
												}`}
											>
												{course.price}
											</span>
											<span
												className={`text-xs font-bold uppercase ${
													isPopular ? 'text-white/60' : 'text-slate-400'
												}`}
											>
												{language === 'uz' ? "so'm / oy" : '$ / month'}
											</span>
										</div>
									</div>

									{/* Features (Ro'yxat) qismi qo'shildi */}
									<div className='space-y-3 mb-10'>
										{courseFeatures.map((feature, idx) => (
											<div key={idx} className='flex items-center gap-3'>
												<CheckCircle2
													className={`w-4 h-4 ${
														isPopular ? 'text-blue-200' : 'text-blue-500'
													}`}
												/>
												<span
													className={`text-xs font-bold ${
														isPopular
															? 'text-white/90'
															: 'text-slate-600 dark:text-slate-400'
													}`}
												>
													{feature}
												</span>
											</div>
										))}
									</div>

									<button
										className={`w-full py-4 rounded-2xl font-black text-sm uppercase transition-all active:scale-95 flex items-center justify-center gap-2 ${
											isPopular
												? 'bg-white text-blue-600 shadow-xl'
												: 'bg-blue-600 text-white shadow-lg'
										}`}
									>
										{t.enrollNow} <ArrowRight className='w-4 h-4' />
									</button>
								</motion.div>
							)
						})}
					</div>
				)}

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					className='relative overflow-hidden bg-slate-900 dark:bg-white/5 rounded-[3rem] p-10 md:p-16 border border-white/5'
				>
					<div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-10'>
						<div className='max-w-xl text-center md:text-left'>
							<h2 className='text-3xl md:text-4xl font-black text-white mb-6'>
								{t.whichCourse}
							</h2>
							<p className='text-lg text-slate-400 font-medium'>{t.ctaText}</p>
						</div>
						<button className='group whitespace-nowrap px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-2xl flex items-center gap-3 uppercase text-sm'>
							{t.freeTrial}{' '}
							<ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
						</button>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
