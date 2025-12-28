'use client'

import { useApp } from '@/contexts/app-context'
import { motion } from 'framer-motion'
import { ArrowRight, Award, BookOpen, Play, Users } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
	const { language } = useApp()

	const content = {
		uz: {
			title: 'Wave English bilan',
			subtitle: 'Ingliz tilini zabt eting',
			description:
				"Professional o'qituvchilar bilan interaktiv kurslar. O'rganish uslubingizni yangi darajaga olib chiqing.",
			stats: {
				students: "O'quvchilar",
				courses: 'Kurslar',
				satisfaction: 'Qoniqish',
			},
			buttons: {
				startLearning: "Kurslarni ko'rish",
				watchDemo: "Demo ko'rish",
			},
			placeholderText: 'Interaktiv platforma',
		},
		en: {
			title: 'Master English with',
			subtitle: 'Wave English Platform',
			description:
				'Interactive courses with professional teachers. Take your learning experience to the next level.',
			stats: {
				students: 'Students',
				courses: 'Courses',
				satisfaction: 'Satisfaction',
			},
			buttons: { startLearning: 'Start Learning', watchDemo: 'Watch Demo' },
			placeholderText: 'Interactive Platform',
		},
	}

	const t = content[language]

	return (
		<section className='relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500'>
			{/* 1. MESH GRADIENT BACKGROUND */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/20 dark:bg-blue-500/10 rounded-full blur-[120px] animate-pulse' />
				<div className='absolute top-[20%] -right-[5%] w-[30%] h-[50%] bg-indigo-600/20 dark:bg-indigo-500/10 rounded-full blur-[120px]' />
				<div className='absolute -bottom-[10%] left-[20%] w-[50%] h-[30%] bg-sky-400/20 dark:bg-sky-500/10 rounded-full blur-[120px]' />
			</div>

			{/* 2. GRID PATTERN */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDEwMCwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					{/* LEFT CONTENT */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='space-y-10 text-center lg:text-left'
					>
						<div className='space-y-6'>
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								className='inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide uppercase'
							>
								🚀 Future of Learning
							</motion.div>

							<h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight'>
								{t.title} <br />
								<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-400'>
									{t.subtitle}
								</span>
							</h1>

							<p className='text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium'>
								{t.description}
							</p>
						</div>

						{/* STATS WITH HOVER TILT */}
						<div className='grid grid-cols-3 gap-4 md:gap-8'>
							{[
								{ icon: Users, val: '500+', label: t.stats.students },
								{ icon: BookOpen, val: '50+', label: t.stats.courses },
								{ icon: Award, val: '98%', label: t.stats.satisfaction },
							].map((stat, i) => (
								<motion.div
									key={i}
									whileHover={{ y: -5, scale: 1.05 }}
									className='p-4 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm'
								>
									<stat.icon className='w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto lg:mx-0 mb-2' />
									<div className='text-xl md:text-2xl font-black text-slate-900 dark:text-white'>
										{stat.val}
									</div>
									<div className='text-xs md:text-sm text-slate-500 dark:text-slate-500 font-bold uppercase tracking-wider'>
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>

						{/* BUTTONS WITH SHIMMER */}
						<div className='flex flex-col sm:flex-row gap-5 justify-center lg:justify-start'>
							<Link
								href='/courses'
								className='relative group overflow-hidden px-10 py-5 bg-blue-600 dark:bg-blue-500 rounded-2xl shadow-xl shadow-blue-500/20 transition-all active:scale-95'
							>
								<div className='absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-[45deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out' />
								<span className='relative flex items-center justify-center gap-2 text-white font-bold text-lg'>
									{t.buttons.startLearning} <ArrowRight className='w-5 h-5' />
								</span>
							</Link>

							<button className='flex items-center justify-center gap-2 px-10 py-5 bg-white dark:bg-white/5 backdrop-blur-md border-2 border-slate-200 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white font-bold text-lg hover:bg-slate-50 dark:hover:bg-white/10 transition-all active:scale-95'>
								<Play className='w-5 h-5 fill-current' /> {t.buttons.watchDemo}
							</button>
						</div>
					</motion.div>

					{/* RIGHT VISUAL - GLASSMORPHISM CARD */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, ease: 'easeOut' }}
						className='relative'
					>
						<div className='relative aspect-square md:aspect-[4/5] lg:aspect-square bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-[3rem] border border-white/20 dark:border-white/10 backdrop-blur-2xl shadow-2xl flex items-center justify-center overflow-hidden group'>
							{/* Animated Inner Glow */}
							<div className='absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

							<div className='text-center space-y-6 relative z-10'>
								<motion.div
									animate={{ rotate: [0, 10, -10, 0] }}
									transition={{ duration: 6, repeat: Infinity }}
									className='w-28 h-28 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[2rem] shadow-2xl flex items-center justify-center mx-auto'
								>
									<BookOpen className='w-14 h-14 text-white' />
								</motion.div>
								<p className='text-2xl font-black text-slate-800 dark:text-white tracking-tight uppercase px-4'>
									{t.placeholderText}
								</p>
							</div>

							{/* Floating Glass Chips */}
							<motion.div
								animate={{ y: [0, -20, 0] }}
								transition={{ duration: 4, repeat: Infinity }}
								className='absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl'
							>
								<Users className='w-8 h-8 text-blue-500' />
							</motion.div>
							<motion.div
								animate={{ y: [0, 20, 0] }}
								transition={{ duration: 5, repeat: Infinity, delay: 1 }}
								className='absolute bottom-10 left-10 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl'
							>
								<Award className='w-8 h-8 text-indigo-500' />
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
