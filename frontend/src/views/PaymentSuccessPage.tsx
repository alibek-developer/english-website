'use client'

import { motion } from 'framer-motion'

export function PaymentSuccessPage() {
	return (
		<div className="min-h-screen pt-20 pb-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-md mx-auto text-center"
				>
					<div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8">
						<div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<h1 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
							To'lov muvaffaqiyatli!
						</h1>
						<p className="text-green-600 dark:text-green-400">
							Sizning to'lovingiz qabul qilindi.
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
