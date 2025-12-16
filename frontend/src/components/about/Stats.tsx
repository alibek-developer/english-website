'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Target, Users } from 'lucide-react'
import Image from 'next/image'

// Rasmni import qilish (eng yaxshi usul – Next.js avtomatik optimallashtiradi)
import teacher2 from '@/assents/images/about-img/teacher-2.jpg'

export default function AboutPage() {
	const stats = [
		{ number: '1000+', label: 'O‘qitilgan talabalar', icon: Users },
		{ number: '8+', label: 'Yillik tajriba', icon: Clock },
		{ number: '8.5', label: 'IELTS natijasi', icon: Target },
		{ number: '95%', label: 'Muvaffaqiyat darajasi', icon: Award },
	]

	const certificates = [
		{ title: 'IELTS sertifikati – Band 8.5', year: '2022' },
		{
			title: 'CELTA (ingliz tilini o‘rgatish bo‘yicha sertifikat)',
			year: '2019',
		},
		{ title: 'TESOL sertifikati', year: '2018' },
		{ title: 'Kembrij ingliz tilini o‘qitish diplomi', year: '2020' },
	]

	return (
		<div className='min-h-screen bg-[#0b1327] text-white'>
			{/* Hero Section */}
			<section className='pt-20 pb-10 text-center'>
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className='text-4xl md:text-5xl font-bold text-white'
				>
					About
				</motion.h2>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className='text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-4'
				>
					Tulkin Rajabbaev
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
					className='text-gray-300 text-lg mt-4'
				>
					Professional English Teacher & IELTS Expert
				</motion.p>
			</section>

			{/* My Story */}
			<section className='py-16 px-6'>
				<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Rasm */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className='relative'
					>
						<div>
							<Image
								src={teacher2}
								alt="Ikkinchi o'qituvchi - Wave English jamoasi"
								width={400} // o'zingizga mos o'lcham qo'ying
								height={500} // yoki placeholder bilan
								className=' rounded-3xl w-full   aspect-square flex items-center justify-center shadow-2xl object-cover'
								priority // agar about sahifasi muhim bo'lsa (tez yuklansin)
							/>
						</div>
					</motion.div>

					{/* Matn */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className='space-y-5'
					>
						<h3 className='text-3xl font-bold text-cyan-400'>Mening hikoyam</h3>
						<p className='text-gray-300 leading-relaxed'>
							Salom! Men Alibek Allaberganov, professional ingliz tili
							o‘qituvchisi va IELTS mutaxassisiman. 8 yildan ortiq tajribada
							o‘qituvchisi va IELTS mutaxassisiman. 8 yildan ortiq tajribada
							dunyo bo‘ylab 1000 dan ortiq talabaga ingliz tilini o‘rgatdim va
							ularning IELTS imtihonlarida yuqori natijalar olishlariga yordam
							berdim.
						</p>
						<p className='text-gray-300 leading-relaxed'>
							O‘zim IELTS imtihonida 8.5 ball to‘pladim va bu tajribamni
							talabalarimga o‘tkazaman. Mening metodologiyam zamonaviy va
							samarali bo‘lib, har bir talabaning individual ehtiyojiga
							qaratilgan.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Stats – Animatsiya bilan */}
			<section className='py-16 px-6'>
				<div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6'>
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className='group'
						>
							<div className='bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20'>
								<stat.icon className='w-12 h-12 mx-auto mb-4 text-cyan-400 group-hover:scale-125 transition' />
								<div className='text-4xl font-black text-cyan-300'>
									{stat.number}
								</div>
								<p className='text-gray-300 text-sm mt-2'>{stat.label}</p>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Sertifikatlar */}
			<section className='py-16 px-6'>
				<div className='max-w-5xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='bg-white/5 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/10'
					>
						<h2 className='text-center text-3xl font-bold mb-10 text-cyan-400'>
							Sertifikatlar va malakalar
						</h2>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{certificates.map((cert, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.1 }}
									className='flex items-center gap-5 p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/10'
								>
									<div className='w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg'>
										<Award className='w-8 h-8 text-white' />
									</div>
									<div>
										<p className='font-semibold text-white'>{cert.title}</p>
										<p className='text-cyan-300 text-sm mt-1'>{cert.year}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
