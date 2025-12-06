'use client'

import { motion } from 'framer-motion'

export function AboutPage() {
	return (
		<div className="min-h-screen pt-20 pb-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto text-center"
				>
					<h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
						<span className="text-sky-600">Men haqimda</span>
					</h1>
					<div className="prose prose-lg mx-auto text-left">
						<p className="text-lg text-slate-600 mb-6">
							Assalomu alaykum! Men Alibek Allaberganov, professional ingliz tili o'qituvchisi va IELTS eksperti.
						</p>
						<p className="text-lg text-slate-600 mb-6">
							8+ yillik tajriba va 1000+ muvaffaqiyatli o'quvchi bilan, sizga individual yondashuv va eng zamonaviy o'quv usullarini taklif qilaman.
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
