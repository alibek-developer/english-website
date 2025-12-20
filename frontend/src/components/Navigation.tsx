'use client'

import { ThemeToggle } from '@/components/ThemeToggle'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	const navItems = [
		{ path: '/', label: 'Bosh sahifa' },
		{ path: '/courses', label: 'Kurslar' },
		{ path: '/about', label: 'Men haqimda' },
		{ path: '/resources', label: 'Resurslar' },
		{ path: '/contact', label: 'Aloqa' },
	]

	return (
		<nav className='fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-slate-800/50'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-20'>
					{/* Logo */}
					<Link href='/' className='flex items-center gap-3 group'>
						<div className='w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300'>
							<span className='text-white font-black text-xl'>T</span>
						</div>
						<div className='hidden lg:block'>
							<div className='font-bold text-lg text-slate-900 dark:text-white'>
								Tulkin Rajabbaev
							</div>
							<div className='text-xs text-slate-600 dark:text-cyan-400 font-medium'>
								IELTS Expert
							</div>
						</div>
					</Link>

					{/* Desktop Menu */}
					<div className='hidden md:flex items-center gap-3'>
						{navItems.map(item => {
							const isActive = pathname === item.path

							return (
								<Link
									key={item.path}
									href={item.path}
									className={`relative px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
										isActive ? 'z-10' : ''
									}`}
								>
									<span
										className={`relative z-10 ${
											isActive
												? 'text-cyan-600 dark:text-cyan-400'
												: 'text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
										}`}
									>
										{item.label}
									</span>

									{/* Active pill background */}
									<AnimatePresence>
										{isActive && (
											<motion.div
												layoutId='activePill'
												className='absolute inset-0 rounded-2xl bg-cyan-100 dark:bg-cyan-900/40 border border-cyan-300 dark:border-cyan-600 shadow-md'
												initial={{ opacity: 0, scale: 0.9 }}
												animate={{ opacity: 1, scale: 1 }}
												exit={{ opacity: 0, scale: 0.9 }}
												transition={{
													type: 'spring',
													stiffness: 500,
													damping: 30,
												}}
											/>
										)}
									</AnimatePresence>

									{/* Hover background */}
									<div className='absolute inset-0 rounded-2xl bg-cyan-100/40 dark:bg-cyan-900/20 opacity-0 hover:opacity-100 transition-opacity duration-300 border border-transparent hover:border-cyan-300 dark:hover:border-cyan-600' />
								</Link>
							)
						})}
					</div>

					{/* Right side – faqat ThemeToggle qoldi */}
					<div className='flex items-center gap-4'>
						<ThemeToggle />

						{/* Mobile menu button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='md:hidden p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition-all'
						>
							{isOpen ? (
								<X className='w-6 h-6 text-slate-700 dark:text-white' />
							) : (
								<Menu className='w-6 h-6 text-slate-700 dark:text-white' />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className='md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-gray-200 dark:border-slate-800 shadow-2xl'
					>
						<div className='container mx-auto px-6 py-6 space-y-3'>
							{navItems.map(item => (
								<Link
									key={item.path}
									href={item.path}
									onClick={() => setIsOpen(false)}
									className={`block px-6 py-4 rounded-2xl text-lg font-medium transition-all ${
										pathname === item.path
											? 'bg-cyan-500 text-white shadow-lg'
											: 'text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800'
									}`}
								>
									{item.label}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}
