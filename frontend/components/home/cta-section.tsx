'use client'

import { useApp } from '@/contexts/app-context'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
	const { language } = useApp()

	// Multilingual content
	const content = {
		uz: {
			title: "Ingliz tilini bugundan o'rganishni boshlang!",
			description:
				"Bepul konsultatsiya uchun hoziroq bog'laning va o'zingizga mos kursni toping",
			buttons: {
				viewCourses: 'Bepul Konsultatsiya',
				telegram: "Telegram orqali bog'lanish",
			},
		},
		en: {
			title: 'Start learning English today!',
			description:
				'Contact us now for a free consultation and find the perfect course for you',
			buttons: {
				viewCourses: 'Free Consultation',
				telegram: 'Contact via Telegram',
			},
		},
	}

	const t = content[language]

	return (
		<section className='py-20 bg-white dark:bg-slate-950 transition-colors duration-500'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-900 
            rounded-[2.5rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/20'
				>
					{/* Background Grid Pattern (SVG) */}
					<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />

					{/* Decorative Blur Circles */}
					<div className='absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none' />
					<div className='absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none' />

					<div className='relative z-10'>
						<motion.h2
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className='text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight'
						>
							{t.title}
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className='text-lg md:text-xl mb-12 max-w-2xl mx-auto text-blue-50 font-medium'
						>
							{t.description}
						</motion.p>

						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.4 }}
							className='flex flex-col sm:flex-row gap-5 justify-center items-center'
						>
							{/* Primary Action Button */}
							<Link
								href='/contact'
								className='group relative flex items-center gap-3 px-10 py-5 bg-slate-900 text-white 
                  hover:bg-black rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105 active:scale-95'
							>
								{t.buttons.viewCourses}
								<ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
							</Link>

							{/* Secondary Telegram Button */}
							<a
								href='https://t.me/your_telegram_username'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border-2 
                  border-white/30 text-white hover:bg-white/20 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95'
							>
								<MessageCircle className='w-6 h-6' />
								{t.buttons.telegram.split(' ')[0]}{' '}
								{/* Qisqaroq ko'rinishi uchun */}
							</a>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
