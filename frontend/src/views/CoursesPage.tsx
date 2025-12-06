'use client'

import { motion } from 'framer-motion'

export function CoursesPage() {
	return (
		<div className="min-h-screen pt-20 pb-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					<h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
						Bizning <span className="text-sky-600">Kurslar</span>
					</h1>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						O'zingizga mos kursni tanlang va ingliz tilini professional darajada o'rganing
					</p>
				</motion.div>
			</div>
		</div>
	)
}
