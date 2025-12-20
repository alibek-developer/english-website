// app/resources/page.tsx
'use client'

import { motion } from 'framer-motion'
import {
	BookOpen,
	Download,
	FileText,
	Headphones,
	PlayCircle,
} from 'lucide-react'

export default function ResourcesPage() {
	const materials = [
		{
			title: 'IELTS So‘z Boyligi Qollanmasi',
			desc: '100+ eng muhim so‘z va iboralar ro‘yxati',
			icon: BookOpen,
			color: 'from-cyan-500 to-blue-600',
		},
		{
			title: 'Grammatika Masalatlari',
			desc: 'Writing va Speaking uchun eng zarur grammatika qoidalari',
			icon: FileText,
			color: 'from-purple-500 to-pink-600',
		},
		{
			title: 'Gapirayotgan Mavzular To‘plami',
			desc: '100+ speaking mavzusi va namuna javoblar',
			icon: Headphones,
			color: 'from-green-500 to-emerald-600',
		},
		{
			title: 'Yozish vazifasi 2 shablonlari',
			desc: 'Barcha turdagi essay uchun tayyor shablonlar',
			icon: FileText,
			color: 'from-orange-500 to-red-600',
		},
	]

	const videos = [
		{
			title: 'IELTS Speaking 1-qism – Maslahatlar va Strategiyalar',
			duration: '12:34',
		},
		{ title: 'Ingliz Tili Talaffuzini Qanday Yaxshilash', duration: '18:21' },
		{
			title: 'IELTS Writing Task 2 – Qadam-baqadam Qo‘llanma',
			duration: '25:10',
		},
	]

	const weeklySpeeches = [
		'O‘zingiz qilgan umrning sayohati haqida gapiring',
		'O‘rgimchakdan bog‘lanishni ko‘rmoq haqida gapiring',
		"Sizga ta'sir qilgan kitob haqida gapiring",
		'Yevropa qiyinchilik haqida gapiring',
	]

	return (
		<div className='min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-500'>
			{/* Hero */}
			<section className='pt-20 pb-16 text-center px-6'>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent'
				>
					O‘rganing va mashq qiling
				</motion.h1>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className='text-3xl md:text-4xl font-bold mt-4 text-gray-800 dark:text-gray-200'
				>
					Bepul
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
					className='text-gray-600 dark:text-gray-400 text-lg mt-4 max-w-3xl mx-auto'
				>
					Ingliz tilini yaxshilash uchun bepul materiallarni yuklab oling va
					qo‘y videolarni tomosha qiling
				</motion.p>
			</section>

			{/* Yuklab olish uchun materiallar */}
			<section className='py-16 px-6'>
				<div className='max-w-7xl mx-auto'>
					<motion.h2
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className='text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white'
					>
						Yuklab olish uchun materiallar
					</motion.h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						{materials.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className='group'
							>
								<div className='bg-white dark:bg-slate-800/70 backdrop-blur-md rounded-3xl p-8 border border-gray-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 dark:hover:shadow-sky-400/30'>
									<div
										className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
									>
										<item.icon className='w-9 h-9 text-white' />
									</div>
									<h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
										{item.title}
									</h3>
									<p className='text-gray-600 dark:text-gray-300 text-sm mb-6'>
										{item.desc}
									</p>
									<button className='flex items-center gap-3 text-sky-600 dark:text-sky-400 font-semibold hover:gap-4 transition-all'>
										Yuklab olish <Download className='w-5 h-5' />
									</button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Video darslar */}
			<section className='py-16 px-6 bg-gray-100 dark:bg-slate-800/50'>
				<div className='max-w-7xl mx-auto'>
					<motion.h2
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className='text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white'
					>
						Video darslar
					</motion.h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{videos.map((video, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className='group cursor-pointer'
							>
								<div className='bg-white dark:bg-slate-800/70 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-400 transition-all duration-300'>
									<div className='aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform'>
										<PlayCircle className='w-20 h-20 text-sky-600 dark:text-sky-400 group-hover:text-sky-500 dark:group-hover:text-sky-300 transition-colors' />
									</div>
									<div className='p-6'>
										<h3 className='font-bold text-lg mb-2 text-gray-900 dark:text-white'>
											{video.title}
										</h3>
										<p className='text-gray-500 dark:text-gray-400 text-sm'>
											{video.duration}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Haftalik nutq so‘rovlar */}
			<section className='py-16 px-6 pb-24'>
				<div className='max-w-4xl mx-auto'>
					<motion.h2
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className='text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white'
					>
						Haftalik nutq so‘rovlar
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='bg-white dark:bg-slate-800/70 backdrop-blur-lg rounded-3xl p-10 border border-gray-200 dark:border-slate-700 shadow-2xl'
					>
						<div className='space-y-6'>
							{weeklySpeeches.map((speech, i) => (
								<div
									key={i}
									className='flex items-center gap-6 p-6 bg-gray-50 dark:bg-slate-700/50 rounded-2xl border border-gray-200 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all'
								>
									<div className='w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500 flex items-center justify-center font-bold text-lg text-white flex-shrink-0 shadow-md'>
										{i + 1}-hafta
									</div>
									<p className='text-lg text-gray-800 dark:text-gray-200'>
										{speech}
									</p>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
