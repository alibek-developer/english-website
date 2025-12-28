'use client'

import { useApp } from '@/contexts/app-context'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Icons with dynamic import
const Award = dynamic(() => import('lucide-react').then(mod => mod.Award), {
	ssr: false,
})
const BookOpen = dynamic(
	() => import('lucide-react').then(mod => mod.BookOpen),
	{ ssr: false }
)
const Globe = dynamic(() => import('lucide-react').then(mod => mod.Globe), {
	ssr: false,
})
const Heart = dynamic(() => import('lucide-react').then(mod => mod.Heart), {
	ssr: false,
})
const Star = dynamic(() => import('lucide-react').then(mod => mod.Star), {
	ssr: false,
})
const Target = dynamic(() => import('lucide-react').then(mod => mod.Target), {
	ssr: false,
})
const Users = dynamic(() => import('lucide-react').then(mod => mod.Users), {
	ssr: false,
})
const Zap = dynamic(() => import('lucide-react').then(mod => mod.Zap), {
	ssr: false,
})
const ArrowRight = dynamic(
	() => import('lucide-react').then(mod => mod.ArrowRight),
	{ ssr: false }
)

export function AboutPage() {
	const { language } = useApp()

	const content = {
		uz: {
			subtitle: 'Bizning tariximiz va maqsadimiz',
			title: 'Bilim chegarasini',
			titleAccent: 'kengaytiramiz',
			description:
				"Wave English — 2015-yildan buyon O'zbekistonda zamonaviy va innovatsion ingliz tili ta'limini taqdim etib kelayotgan yetakchi markazdir.",
			mission: 'Bizning missiyamiz',
			missionText:
				"Har bir o'quvchiga nafaqat til o'rgatish, balki uning global imkoniyatlar dunyosiga eshigini ochish. Biz individual yondashuv va natijaga yo'naltirilgan metodikani qadrlaymiz.",
			stats: [
				{ label: "O'quvchilar", value: '5,000+' },
				{ label: 'Tajriba', value: '9 yil' },
				{ label: 'Filiallar', value: '4 ta' },
				{ label: 'Muvaffaqiyat', value: '98%' },
			],
			values: 'Asosiy qadriyatlarimiz',
			team: 'Professional jamoamiz',
			ctaTitle: 'Siz ham oilamizga qo’shiling',
			ctaText:
				'Sifatli ta’lim va do’stona muhit sizni kutmoqda. Birinchi darsimiz mutlaqo bepul!',
			ctaButton: 'Bepul darsga yozilish',
		},
		en: {
			subtitle: 'Our history and goals',
			title: 'Expanding boundaries of',
			titleAccent: 'knowledge',
			description:
				'Wave English is a leading center in Uzbekistan providing modern and innovative English language education since 2015.',
			mission: 'Our Mission',
			missionText:
				'To not just teach a language, but to open doors to a world of global opportunities for every student. We value an individual approach and result-oriented methodology.',
			stats: [
				{ label: 'Students', value: '5,000+' },
				{ label: 'Experience', value: '9 years' },
				{ label: 'Branches', value: '4' },
				{ label: 'Success Rate', value: '98%' },
			],
			values: 'Our Core Values',
			team: 'Our Experts',
			ctaTitle: 'Join Our Community',
			ctaText:
				'Quality education and a friendly atmosphere await you. Your first lesson is completely free!',
			ctaButton: 'Book Free Lesson',
		},
	}

	const t = content[language as 'uz' | 'en']

	const valueCards = [
		{
			icon: Heart,
			color: 'text-rose-500',
			bg: 'bg-rose-500/10',
			title: language === 'uz' ? 'G’amxo’rlik' : 'Caring',
			desc:
				language === 'uz'
					? "Har bir o'quvchi biz uchun muhim."
					: 'Every student matters to us.',
		},
		{
			icon: Target,
			color: 'text-emerald-500',
			bg: 'bg-emerald-500/10',
			title: language === 'uz' ? 'Natija' : 'Efficiency',
			desc:
				language === 'uz'
					? 'Qisqa vaqtda aniq natijalar.'
					: 'Clear results in short time.',
		},
		{
			icon: Zap,
			color: 'text-amber-500',
			bg: 'bg-amber-500/10',
			title: language === 'uz' ? 'Innovatsiya' : 'Innovation',
			desc:
				language === 'uz'
					? "Eng so'nggi texnologiyalar."
					: 'Latest teaching technologies.',
		},
	]

	return (
		<div className='min-h-screen pt-32 pb-20 bg-white dark:bg-[#020617] transition-colors duration-500'>
			{/* Background Decor */}
			<div className='absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none' />

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Hero Section */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32'>
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<span className='text-blue-600 dark:text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block'>
							{t.subtitle}
						</span>
						<h1 className='text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1.1]'>
							{t.title}{' '}
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500'>
								{t.titleAccent}
							</span>
						</h1>
						<p className='text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium'>
							{t.description}
						</p>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
							{t.stats.map((stat, i) => (
								<div key={i} className='flex flex-col'>
									<span className='text-3xl font-black text-slate-900 dark:text-white'>
										{stat.value}
									</span>
									<span className='text-xs font-bold text-slate-400 uppercase tracking-widest mt-1'>
										{stat.label}
									</span>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						className='relative'
					>
						<div className='aspect-square bg-blue-600 rounded-[3rem] overflow-hidden rotate-3 shadow-2xl relative'>
							{/* Bu yerga markaz yoki jamoa rasmini qo'yish mumkin */}
							<div className='absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent' />
							<Globe className='absolute inset-0 m-auto w-40 h-40 text-white/10' />
						</div>
						<div className='absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-white/5 -rotate-3 hidden md:block'>
							<Award className='w-12 h-12 text-amber-500 mb-4' />
							<p className='font-black dark:text-white leading-tight'>
								Best Language <br />
								Center 2024
							</p>
						</div>
					</motion.div>
				</div>

				{/* Mission & Values */}
				<div className='mb-32'>
					<div className='text-center max-w-3xl mx-auto mb-20'>
						<h2 className='text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight'>
							{t.values}
						</h2>
						<p className='text-slate-500 dark:text-slate-400 font-medium italic'>
							"{t.missionText}"
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{valueCards.map((card, i) => (
							<motion.div
								key={i}
								whileHover={{ y: -10 }}
								className='p-10 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all'
							>
								<div
									className={`w-16 h-16 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-8`}
								>
									<card.icon className='w-8 h-8' />
								</div>
								<h3 className='text-2xl font-black text-slate-900 dark:text-white mb-4 italic'>
									{card.title}
								</h3>
								<p className='text-slate-600 dark:text-slate-400 font-medium leading-relaxed'>
									{card.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>

				{/* Team Section */}
				<div className='mb-32'>
					<h2 className='text-4xl font-black text-slate-900 dark:text-white text-center mb-20 tracking-tight'>
						{t.team}
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
						{[1, 2, 3].map((_, i) => (
							<motion.div key={i} className='group cursor-pointer'>
								<div className='aspect-[4/5] rounded-[2.5rem] bg-slate-100 dark:bg-white/5 mb-6 overflow-hidden relative border border-slate-200 dark:border-white/10'>
									{/* Teacher Image placeholder */}
									<div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
								</div>
								<h4 className='text-xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors'>
									{i === 0
										? 'Dilnoza Karimova'
										: i === 1
										? 'Jasur Umarov'
										: 'Malika Toshmatova'}
								</h4>
								<p className='text-blue-600 dark:text-blue-500 text-xs font-black uppercase tracking-widest'>
									{i === 0 ? 'Head of Education' : 'Senior IELTS Mentor'}
								</p>
							</motion.div>
						))}
					</div>
				</div>

				{/* Action CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='bg-slate-900 dark:bg-blue-600 rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-500/20'
				>
					<div className='absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] -mr-48 -mt-48' />
					<div className='relative z-10'>
						<h2 className='text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter'>
							{t.ctaTitle}
						</h2>
						<p className='text-lg md:text-xl text-blue-100/70 mb-12 max-w-2xl mx-auto font-medium'>
							{t.ctaText}
						</p>
						<button className='group bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-3 mx-auto shadow-xl active:scale-95'>
							{t.ctaButton}
							<ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
						</button>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
