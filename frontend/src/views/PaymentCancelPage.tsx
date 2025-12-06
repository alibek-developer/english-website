'use client'

import { motion } from 'framer-motion'

export function PaymentCancelPage() {
	return (
		<div className="min-h-screen pt-20 pb-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-md mx-auto text-center"
				>
					<div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-8">
						<div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
							</svg>
						</div>
						<h1 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">
							To'lov bekor qilindi
						</h1>
						<p className="text-yellow-600 dark:text-yellow-400">
							To'lov jarayoni tugadi.
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
