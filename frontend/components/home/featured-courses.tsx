'use client'

import { useApp } from '@/contexts/app-context'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Dynamic imports for Lucide icons to prevent hydration issues
const ArrowRight = dynamic(
	() => import('lucide-react').then(mod => mod.ArrowRight),
	{
		ssr: false,
		loading: () => <div className='w-5 h-5' />,
	}
)
const Clock = dynamic(() => import('lucide-react').then(mod => mod.Clock), {
	ssr: false,
	loading: () => <div className='w-5 h-5' />,
})
const Star = dynamic(() => import('lucide-react').then(mod => mod.Star), {
	ssr: false,
	loading: () => <div className='w-5 h-5' />,
})
const Users = dynamic(() => import('lucide-react').then(mod => mod.Users), {
	ssr: false,
	loading: () => <div className='w-5 h-5' />,
})

const formatPrice = (price: number) => {
	return new Intl.NumberFormat('uz-UZ', {
		style: 'currency',
		currency: 'UZS',
		minimumFractionDigits: 0,
	}).format(price)
}

const courses = [
	{
		id: 1,
		title_uz: 'Foundation English',
		title_en: 'Foundation English',
		description_uz:
			"Ingliz tilining asoslarini o'rganing. Boshlang'ich darajada o'quvchilar uchun.",
		description_en: 'Learn the basics of English. For beginners.',
		duration: '3 oy',
		duration_en: '3 months',
		level: "Boshlang'ich",
		level_en: 'Beginner',
		students: 120,
		rating: 4.8,
		price: 500000,
		features_uz: [
			'Grammar asoslari',
			'Speaking practice',
			'Reading skills',
			'Writing practice',
		],
		features_en: [
			'Grammar basics',
			'Speaking practice',
			'Reading skills',
			'Writing practice',
		],
	},
	{
		id: 2,
		title_uz: 'Intermediate English',
		title_en: 'Intermediate English',
		description_uz:
			"O'rta darajada ingliz tilini rivojlantiring. Kengaytirilgan mavzular.",
		description_en: 'Improve your intermediate English. Extended topics.',
		duration: '4 oy',
		duration_en: '4 months',
		level: "O'rta",
		level_en: 'Intermediate',
		students: 85,
		rating: 4.9,
		price: 750000,
		features_uz: [
			'Advanced grammar',
			'Business English',
			'Idioms & phrasal verbs',
			'Presentation skills',
		],
		features_en: [
			'Advanced grammar',
			'Business English',
			'Idioms & phrasal verbs',
			'Presentation skills',
		],
	},
	{
		id: 3,
		title_uz: 'Advanced English',
		title_en: 'Advanced English',
		description_uz:
			"Professional darajada ingliz tilini o'rganing. IELTS va TOEFL tayyorgarligi.",
		description_en:
			'Learn English at a professional level. IELTS and TOEFL preparation.',
		duration: '6 oy',
		duration_en: '6 months',
		level: 'Yuqori',
		level_en: 'Advanced',
		students: 65,
		rating: 5.0,
		price: 1000000,
		features_uz: [
			'IELTS preparation',
			'Academic writing',
			'Professional speaking',
			'Literature analysis',
		],
		features_en: [
			'IELTS preparation',
			'Academic writing',
			'Professional speaking',
			'Literature analysis',
		],
	},
]

export function FeaturedCourses() {
	const { language } = useApp()

	// Multilingual content
	const content = {
		uz: {
			title: 'Tanlangan kurslar',
			description:
				'Bizning eng mashhur kurslarimiz. Har xil darajalar uchun mos keladi.',
			viewAllButton: "Barcha kurslarni ko'rish",
			courseImageText: 'Kurs rasmi',
			paymentSoonText: "To'lov tez orada",
		},
		en: {
			title: 'Featured Courses',
			description: 'Our most popular courses. Suitable for all levels.',
			viewAllButton: 'View All Courses',
			courseImageText: 'Course image',
			paymentSoonText: 'Payment coming soon',
		},
	}

	const t = content[language]

	return (
		<section className='py-24 bg-gray-50 dark:bg-slate-900'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='text-center mb-16'
				>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
						{t.title}
					</h2>
					<p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
						{t.description}
					</p>
				</motion.div>

				{/* Courses Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
					{courses.map((course, index) => (
						<motion.div
							key={course.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className='group bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
						>
							{/* Course Image Placeholder */}
							<div className='aspect-video bg-gradient-to-br from-blue-600/10 to-blue-600/5 dark:from-blue-400/10 dark:to-blue-400/5 rounded-t-xl flex items-center justify-center'>
								<div className='text-center'>
									<div className='w-16 h-16 bg-blue-600/10 dark:bg-blue-400/10 rounded-full flex items-center justify-center mx-auto mb-2'>
										<Users className='w-8 h-8 text-blue-600 dark:text-blue-400' />
									</div>
									<p className='text-sm text-gray-600 dark:text-gray-400'>
										{t.courseImageText}
									</p>
								</div>
							</div>

							<div className='p-6'>
								{/* Level Badge */}
								<div className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 mb-3'>
									{language === 'uz' ? course.level : course.level_en}
								</div>

								{/* Title and Description */}
								<h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
									{language === 'uz' ? course.title_uz : course.title_en}
								</h3>
								<p className='text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2'>
									{language === 'uz'
										? course.description_uz
										: course.description_en}
								</p>

								{/* Features */}
								<ul className='space-y-1 mb-4'>
									{(language === 'uz' ? course.features_uz : course.features_en)
										.slice(0, 3)
										.map((feature, idx) => (
											<li
												key={idx}
												className='flex items-center text-sm text-gray-600 dark:text-gray-400'
											>
												<div className='w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2' />
												{feature}
											</li>
										))}
								</ul>

								{/* Stats */}
								<div className='flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4'>
									<div className='flex items-center'>
										<Clock className='w-4 h-4 mr-1 text-blue-600 dark:text-blue-400' />
										{language === 'uz' ? course.duration : course.duration_en}
									</div>
									<div className='flex items-center'>
										<Users className='w-4 h-4 mr-1 text-blue-600 dark:text-blue-400' />
										{course.students}
									</div>
									<div className='flex items-center'>
										<Star className='w-4 h-4 mr-1 fill-yellow-400 text-yellow-400' />
										{course.rating}
									</div>
								</div>

								{/* Price and CTA */}
								<div className='flex items-center justify-between'>
									<div className='text-2xl font-bold text-gray-900 dark:text-white'>
										{formatPrice(course.price)}
									</div>
									<button
										disabled
										className='px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-sm opacity-60 cursor-not-allowed'
									>
										{t.paymentSoonText}
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* View All Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className='text-center'
				>
					<Link href='/courses'>
						<button className='inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors group'>
							{t.viewAllButton}
							<ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
						</button>
					</Link>
				</motion.div>
			</div>
		</section>
	)
}
