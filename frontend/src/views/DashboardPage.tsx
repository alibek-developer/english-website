'use client'

import { motion } from 'framer-motion'
import { UserButton } from '@clerk/nextjs'

export function DashboardPage() {
	return (
		<div className="min-h-screen pt-20 pb-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto"
				>
					<div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8">
						<div className="flex items-center justify-between mb-8">
							<h1 className="text-3xl font-bold text-slate-900 dark:text-white">
								Dashboard
							</h1>
							<UserButton />
						</div>
						<p className="text-slate-600 dark:text-slate-400">
							Siz muvaffaqiyatli tizimga kirdingiz!
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
