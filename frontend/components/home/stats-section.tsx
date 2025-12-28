'use client'

import { useApp } from '@/contexts/app-context'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

// Dynamic imports for icons
const Award = dynamic(() => import('lucide-react').then(mod => mod.Award), {
	ssr: false,
})
const BookOpen = dynamic(
	() => import('lucide-react').then(mod => mod.BookOpen),
	{ ssr: false }
)
const Star = dynamic(() => import('lucide-react').then(mod => mod.Star), {
	ssr: false,
})
const Users = dynamic(() => import('lucide-react').then(mod => mod.Users), {
	ssr: false,
})

const icons = [Users, BookOpen, Star, Award]

export function StatsSection() {
	const { language } = useApp()
	const sectionRef = useRef(null)
	const isInView = useInView(sectionRef, { once: true })

	const content = {
		uz: {
			title: 'Bizning yutuqlarimiz',
			description:
				"Yillar davomida minglab o'quvchilarga sifatli ta'lim berganmiz",
			stats: [
				{ value: 500, suffix: '+', label: "O'quvchilar" },
				{ value: 50, suffix: '+', label: 'Kurslar' },
				{ value: 98, suffix: '%', label: 'Qoniqish' },
				{ value: 10, suffix: '+', label: 'Yillar' },
			],
		},
		en: {
			title: 'Our Achievements',
			description:
				'We have provided quality education to thousands of students over the years',
			stats: [
				{ value: 500, suffix: '+', label: 'Students' },
				{ value: 50, suffix: '+', label: 'Courses' },
				{ value: 98, suffix: '%', label: 'Satisfaction' },
				{ value: 10, suffix: '+', label: 'Years' },
			],
		},
	}

	const t = content[language]

	return (
		<section
			ref={sectionRef}
			className='py-24 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-gray-900 dark:to-slate-950 
      transition-all duration-500 relative overflow-hidden'
		>
			{/* Subtle divider line */}
			<div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent' />

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl font-extrabold text-slate-900 dark:text-white mb-4'>
						{t.title}
					</h2>
					<p className='text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg'>
						{t.description}
					</p>
				</motion.div>

				<div className='grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12'>
					{t.stats.map((stat, index) => (
						<StatCounter
							key={index}
							icon={icons[index]}
							value={stat.value}
							suffix={stat.suffix}
							label={stat.label}
							index={index}
							isInView={isInView}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

function StatCounter({
	icon: Icon,
	value,
	suffix,
	label,
	index,
	isInView,
}: any) {
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!isInView) return

		const duration = 2000
		const steps = 60
		const stepValue = value / steps
		const stepDuration = duration / steps

		let currentStep = 0
		const timer = setInterval(() => {
			currentStep++
			setCount(Math.min(Math.floor(stepValue * currentStep), value))
			if (currentStep >= steps) clearInterval(timer)
		}, stepDuration)

		return () => clearInterval(timer)
	}, [isInView, value])

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.7, delay: index * 0.15 }}
			className='text-center group'
		>
			<div
				className='w-20 h-20 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-3xl 
        flex items-center justify-center mx-auto mb-6 shadow-md dark:shadow-2xl 
        transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/20 
        dark:group-hover:shadow-blue-900/50'
			>
				<Icon className='w-10 h-10 text-blue-600 dark:text-blue-400' />
			</div>
			<div className='text-5xl font-black text-slate-900 dark:text-white mb-2'>
				{count}
				{suffix}
			</div>
			<div className='text-base font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider'>
				{label}
			</div>
		</motion.div>
	)
}
