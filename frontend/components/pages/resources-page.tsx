'use client'

import { useApp } from '@/contexts/app-context'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Icons with dynamic import to prevent hydration issues
const BookOpen = dynamic(
	() => import('lucide-react').then(mod => mod.BookOpen),
	{ ssr: false }
)
const FileText = dynamic(
	() => import('lucide-react').then(mod => mod.FileText),
	{ ssr: false }
)
const Headphones = dynamic(
	() => import('lucide-react').then(mod => mod.Headphones),
	{ ssr: false }
)
const Video = dynamic(() => import('lucide-react').then(mod => mod.Video), {
	ssr: false,
})
const ArrowRight = dynamic(
	() => import('lucide-react').then(mod => mod.ArrowRight),
	{ ssr: false }
)
const Sparkles = dynamic(
	() => import('lucide-react').then(mod => mod.Sparkles),
	{ ssr: false }
)

export function ResourcesPage() {
	const { language } = useApp()

	const content = {
		uz: {
			title: 'Bilimlar',
			titleAccent: 'Hazinasi',
			description:
				"Ingliz tilini mustaqil va samarali o'rganishingiz uchun barcha kerakli materiallar jamlanmasi.",
			additionalResources: "Qo'shimcha imkoniyatlar",
			viewDetails: "Batafsil ko'rish",
			getStarted: 'Hoziroq boshlash',
			useResources: "To'liq foydalanish",
			ctaText:
				"Barcha materiallar bepul va doimiy yangilanib boriladi. O'rganishni bugundan boshlang!",
		},
		en: {
			title: 'Knowledge',
			titleAccent: 'Hub',
			description:
				'A complete collection of materials for independent and effective English learning.',
			additionalResources: 'Extra Opportunities',
			viewDetails: 'Explore More',
			getStarted: 'Start Now',
			useResources: 'Full Access',
			ctaText:
				'All materials are free and constantly updated. Start learning today!',
		},
	}

	const t = content[language as 'uz' | 'en']

	const resources = [
		{
			id: 1,
			title: language === 'uz' ? 'Grammatika' : 'Grammar',
			icon: BookOpen,
			description:
				language === 'uz'
					? 'Asosiy qoidalardan murakkab tuzilmalargacha.'
					: 'From basic rules to complex structures.',
			items:
				language === 'uz'
					? ['Tense System', 'Modals', 'Passive Voice']
					: ['Tense System', 'Modals', 'Passive Voice'],
			color: 'blue',
			shadow: 'shadow-blue-500/10',
		},
		{
			id: 2,
			title: language === 'uz' ? "So'z Boyligi" : 'Vocabulary',
			icon: FileText,
			description:
				language === 'uz'
					? "Kunlik hayot va biznes uchun eng kerakli so'zlar."
					: 'Essential words for daily life and business.',
			items:
				language === 'uz'
					? ['Idioms', 'Phrasal Verbs', 'Daily Words']
					: ['Idioms', 'Phrasal Verbs', 'Daily Words'],
			color: 'emerald',
			shadow: 'shadow-emerald-500/10',
		},
		{
			id: 3,
			title: language === 'uz' ? 'Video Darslar' : 'Video Lessons',
			icon: Video,
			description:
				language === 'uz'
					? "Mahoratli ustozlardan vizual darsliklar to'plami."
					: 'Visual lessons from experienced mentors.',
			items:
				language === 'uz'
					? ['Speaking Tips', 'Pronunciation', 'Interviews']
					: ['Speaking Tips', 'Pronunciation', 'Interviews'],
			color: 'rose',
			shadow: 'shadow-rose-500/10',
		},
		{
			id: 4,
			title: language === 'uz' ? 'Listening' : 'Listening',
			icon: Headphones,
			description:
				language === 'uz'
					? 'Eshatish qobiliyatini rivojlantirish uchun audiolar.'
					: 'Audio materials to improve listening skills.',
			items:
				language === 'uz'
					? ['Podcasts', 'Audio Books', 'Song Lyrics']
					: ['Podcasts', 'Audio Books', 'Song Lyrics'],
			color: 'violet',
			shadow: 'shadow-violet-500/10',
		},
	]

	const colorVariants = {
		blue: 'text-blue-600 bg-blue-600/10 dark:text-blue-400 dark:bg-blue-400/10 border-blue-500/20',
		emerald:
			'text-emerald-600 bg-emerald-600/10 dark:text-emerald-400 dark:bg-emerald-400/10 border-emerald-500/20',
		rose: 'text-rose-600 bg-rose-600/10 dark:text-rose-400 dark:bg-rose-400/10 border-rose-500/20',
		violet:
			'text-violet-600 bg-violet-600/10 dark:text-violet-400 dark:bg-violet-400/10 border-violet-500/20',
	}

	return (
		<div className='min-h-screen pt-32 pb-20 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden'>
			{/* Dynamic Background */}
			<div className='absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none' />

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-20'
				>
					<div className='flex justify-center mb-6'>
						<span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 text-xs font-black uppercase tracking-widest border border-slate-200 dark:border-white/10'>
							<Sparkles className='w-3 h-3 text-blue-500' />
							Learning Materials
						</span>
					</div>
					<h1 className='text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter italic'>
						{t.title}{' '}
						<span className='text-blue-600 dark:text-blue-500 not-italic'>
							{t.titleAccent}
						</span>
					</h1>
					<p className='text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed'>
						{t.description}
					</p>
				</motion.div>

				{/* Main Resource Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-24'>
					{resources.map((resource, index) => {
						const Icon = resource.icon
						const colors =
							colorVariants[resource.color as keyof typeof colorVariants]

						return (
							<motion.div
								key={resource.id}
								initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className={`group relative p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all duration-500 ${resource.shadow} hover:shadow-2xl`}
							>
								<div className='flex items-start justify-between mb-8'>
									<div
										className={`p-4 rounded-2xl ${colors} border transition-transform duration-500 group-hover:scale-110`}
									>
										<Icon className='w-8 h-8' />
									</div>
									<div className='flex gap-2'>
										{resource.items.map((item, i) => (
											<span
												key={i}
												className='hidden lg:block px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full text-[10px] font-black uppercase tracking-tighter text-slate-500'
											>
												{item}
											</span>
										))}
									</div>
								</div>

								<h3 className='text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
									{resource.title}
								</h3>

								<p className='text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed max-w-sm'>
									{resource.description}
								</p>

								<button
									className={`flex items-center gap-3 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${colors} hover:brightness-110`}
								>
									{t.viewDetails}
									<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
								</button>
							</motion.div>
						)
					})}
				</div>

				{/* Additional Tools Section */}
				<div className='mb-24 text-center'>
					<h2 className='text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-12 tracking-tighter'>
						{t.additionalResources}
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{[
							{ title: 'Online Tests', icon: '📝', desc: 'Check your level' },
							{ title: 'Mobile App', icon: '📱', desc: 'Learn on the go' },
							{
								title: 'Digital Library',
								icon: '📚',
								desc: 'Books & Articles',
							},
						].map((item, idx) => (
							<motion.div
								key={idx}
								whileHover={{ y: -8 }}
								className='p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col items-center group cursor-pointer'
							>
								<span className='text-4xl mb-4 group-hover:scale-125 transition-transform duration-500'>
									{item.icon}
								</span>
								<h4 className='font-black text-slate-900 dark:text-white mb-2'>
									{item.title}
								</h4>
								<p className='text-sm font-medium text-slate-500 dark:text-slate-400'>
									{item.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>

				{/* Premium CTA Section */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					className='relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3.5rem] p-12 md:p-20 text-center shadow-2xl shadow-blue-500/30'
				>
					<div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
					<div className='relative z-10'>
						<h2 className='text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter'>
							{t.useResources}
						</h2>
						<p className='text-lg text-blue-100/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed'>
							{t.ctaText}
						</p>
						<button className='inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:scale-105 transition-all shadow-xl uppercase tracking-widest text-sm'>
							<BookOpen className='w-5 h-5' />
							{t.getStarted}
						</button>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
