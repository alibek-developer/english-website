// components/Navigation.tsx
'use client'

import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/useLanguage'
import { AnimatePresence, motion } from 'framer-motion'
import { Globe, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()
	const { language, setLanguage, t } = useLanguage()

	const navItems = [
		{ path: '/', labelUz: 'Bosh sahifa' },
		{ path: '/courses', labelUz: 'Kurslar' },
		{ path: '/about', labelUz: 'Men haqimda' },
		{ path: '/resources', labelUz: 'Resurslar' },
		{ path: '/contact', labelUz: 'Aloqa' },
	]

	return (
		<nav className='fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0b1327]/90 backdrop-blur-xl border-b border-white/10 dark:border-white/5'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-20'>
					{/* Logo */}
					<Link href='/' className='flex items-center gap-3 group'>
						<div className='w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300'>
							<span className='text-white font-black text-xl'>A</span>
						</div>
						<div className='hidden lg:block'>
							<div className='font-bold text-lg text-slate-900 dark:text-white'>
								Alibek Allaberganov
							</div>
							<div className='text-xs text-slate-600 dark:text-cyan-400 font-medium'>
								IELTS Expert
							</div>
						</div>
					</Link>

					{/* Desktop Menu */}
					<div className='hidden md:flex items-center gap-1'>
						{navItems.map(item => (
							<Link
								key={item.path}
								href={item.path}
								className='relative px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 group'
							>
								<span
									className={`relative z-10 ${
										pathname === item.path
											? 'text-cyan-500 dark:text-cyan-400'
											: 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
									}`}
								>
									{item.labelUz}
								</span>

								{/* Hover background */}
								<motion.div
									className='absolute inset-0 rounded-xl bg-cyan-500/10 dark:bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity'
									layoutId={pathname === item.path ? 'activeBg' : undefined}
								/>

								{/* Active indicator */}
								{pathname === item.path && (
									<motion.div
										layoutId='activeIndicator'
										className='absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-500 dark:bg-cyan-400 rounded-full'
										transition={{ type: 'spring', stiffness: 380, damping: 30 }}
									/>
								)}
							</Link>
						))}
					</div>

					{/* Right side */}
					<div className='flex items-center gap-3'>
						<ThemeToggle />

						<Button
							variant='ghost'
							size='sm'
							onClick={() => setLanguage(language === 'uz' ? 'en' : 'uz')}
							className='gap-2 hover:bg-white/10 dark:hover:bg-white/5 rounded-xl'
						>
							<Globe className='w-4 h-4 text-slate-600 dark:text-slate-300' />
							<span className='text-sm font-medium'>
								{language.toUpperCase()}
							</span>
						</Button>

						{/* Mobile menu button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='md:hidden p-3 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-all'
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
						className='md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-[#0b1327]/95 backdrop-blur-xl border-t border-white/10 dark:border-white/5 shadow-2xl'
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
											: 'text-slate-700 dark:text-slate-200 hover:bg-white/10 dark:hover:bg-white/5'
									}`}
								>
									{item.labelUz}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}
