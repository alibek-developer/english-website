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
		<div className='min-h-screen bg-[#0b1327] text-white'>
			{/* Hero */}
			<section className='pt-20 pb-16 text-center px-6'>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'
				>
					O‘rganing va mashq qiling
				</motion.h1>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className='text-3xl md:text-4xl font-bold mt-4'
				>
					Bepul
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
					className='text-gray-300 text-lg mt-4 max-w-3xl mx-auto'
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
						className='text-3xl md:text-4xl font-bold mb-12 text-center'
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
								<div className='bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20'>
									<div
										className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
									>
										<item.icon className='w-9 h-9 text-white' />
									</div>
									<h3 className='text-xl font-bold mb-3'>{item.title}</h3>
									<p className='text-gray-300 text-sm mb-6'>{item.desc}</p>
									<button className='flex items-center gap-3 text-cyan-400 font-semibold hover:gap-4 transition-all'>
										Yuklab olish <Download className='w-5 h-5' />
									</button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Video darslar */}
			<section className='py-16 px-6 bg-black/30'>
				<div className='max-w-7xl mx-auto'>
					<motion.h2
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className='text-3xl md:text-4xl font-bold mb-12 text-center'
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
								<div className='bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300'>
									<div className='aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform'>
										<PlayCircle className='w-20 h-20 text-cyan-400 group-hover:text-white transition-colors' />
									</div>
									<div className='p-6'>
										<h3 className='font-bold text-lg mb-2'>{video.title}</h3>
										<p className='text-gray-400 text-sm'>{video.duration}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Haftalik nutq so‘rovlar */}
			<section className='py-16 px-6'>
				<div className='max-w-4xl mx-auto'>
					<motion.h2
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className='text-3xl md:text-4xl font-bold mb-12 text-center'
					>
						Haftalik nutq so‘rovlar
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/10 shadow-2xl'
					>
						<div className='space-y-6'>
							{weeklySpeeches.map((speech, i) => (
								<div
									key={i}
									className='flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all'
								>
									<div className='w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-lg flex-shrink-0'>
										{i + 1}-hafta
									</div>
									<p className='text-lg text-gray-200'>{speech}</p>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
