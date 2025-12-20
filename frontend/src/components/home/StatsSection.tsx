import { motion, useInView } from 'framer-motion'
import { Award, BookOpen, Star, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function StatsSection() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	const stats = [
		{ icon: Users, value: 1000, suffix: '+', label: "O'qitilgan talabalar" },
		{ icon: Award, value: 8, suffix: '+', label: 'Yillik tajriba' },
		{ icon: Star, value: 95, suffix: '%', label: 'Muvaffaqiyat darajasi' },
		{ icon: BookOpen, value: 50, suffix: '+', label: 'Tugatilgan kurslar' },
	]

	return (
		<section
			ref={ref}
			className='py-24 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-gray-800 dark:to-gray-900 
				transition-all duration-500 relative overflow-hidden'
		>
			{/* Qo'shimcha: nozik ajratuvchi chiziq pastda */}
			<div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent' />

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12'>
					{stats.map((stat, index) => (
						<StatCounter
							key={index}
							{...stat}
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

			if (currentStep >= steps) {
				clearInterval(timer)
			}
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
				className='w-18 h-18 bg-sky-100/80 dark:bg-sky-900/40 backdrop-blur-sm rounded-3xl 
				flex items-center justify-center mx-auto mb-6 shadow-lg dark:shadow-2xl 
				transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl 
				dark:group-hover:shadow-sky-900/50'
			>
				<Icon className='w-9 h-9 text-sky-600 dark:text-sky-400' />
			</div>
			<div className='text-5xl font-extrabold text-slate-900 dark:text-white mb-3'>
				{count}
				{suffix}
			</div>
			<div className='text-base font-medium text-slate-600 dark:text-slate-300'>
				{label}
			</div>
		</motion.div>
	)
}
