'use client'

import { useApp } from '@/contexts/app-context'
import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

// Hydration xatolarini oldini olish uchun iconlarni dynamic yuklaymiz
const Globe = dynamic(() => import('lucide-react').then(mod => mod.Globe), {
	ssr: false,
})
const Moon = dynamic(() => import('lucide-react').then(mod => mod.Moon), {
	ssr: false,
})
const Sun = dynamic(() => import('lucide-react').then(mod => mod.Sun), {
	ssr: false,
})
const Menu = dynamic(() => import('lucide-react').then(mod => mod.Menu), {
	ssr: false,
})
const X = dynamic(() => import('lucide-react').then(mod => mod.X), {
	ssr: false,
})

const navigation = [
	{ name: 'home', href: '/', uz: 'Bosh sahifa', en: 'Home' },
	{ name: 'courses', href: '/courses', uz: 'Kurslar', en: 'Courses' },
	{ name: 'resources', href: '/resources', uz: 'Resurslar', en: 'Resources' },
	{ name: 'about', href: '/about', uz: 'Biz haqimizda', en: 'About' },
	{ name: 'contact', href: '/contact', uz: 'Aloqa', en: 'Contact' },
]

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const pathname = usePathname()
	const { theme, language, toggleTheme, toggleLanguage } = useApp()

	// Skroll bo'lganda Navbar ko'rinishini o'zgartirish
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 10)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
				isScrolled
					? 'py-3 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 shadow-xl shadow-blue-500/5'
					: 'py-5 bg-transparent'
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<Link href='/' className='flex items-center group'>
						<span className='text-2xl font-black text-slate-900 dark:text-white tracking-tighter transition-colors'>
							Wave
							<span className='text-blue-600 dark:text-blue-400 group-hover:text-indigo-500'>
								English
							</span>
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center bg-slate-100/50 dark:bg-white/5 p-1 rounded-2xl border border-slate-200/50 dark:border-white/5'>
						{navigation.map(item => {
							const isActive = pathname === item.href
							return (
								<Link
									key={item.name}
									href={item.href}
									className={`px-5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all duration-300 relative ${
										isActive
											? 'text-blue-600 dark:text-white'
											: 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
									}`}
								>
									{isActive && (
										<motion.div
											layoutId='nav-active'
											className='absolute inset-0 bg-white dark:bg-blue-600 shadow-sm rounded-xl z-[-1]'
											transition={{ type: 'spring', duration: 0.5 }}
										/>
									)}
									{item[language as 'uz' | 'en']}
								</Link>
							)
						})}
					</div>

					{/* Right Actions */}
					<div className='hidden md:flex items-center gap-3'>
						{/* Language Toggle */}
						<button
							onClick={toggleLanguage}
							className='flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10 transition-all'
						>
							<Globe className='w-4 h-4 text-blue-500' />
							{language}
						</button>

						{/* Theme Toggle */}
						<button
							onClick={toggleTheme}
							className='p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:scale-110 active:scale-90 transition-all shadow-sm'
						>
							{theme === 'light' ? (
								<Moon className='w-5 h-5' />
							) : (
								<Sun className='w-5 h-5' />
							)}
						</button>
					</div>

					{/* Mobile Menu Button */}
					<div className='md:hidden flex items-center gap-2'>
						<button
							onClick={toggleTheme}
							className='p-2 text-slate-700 dark:text-slate-300'
						>
							{theme === 'light' ? (
								<Moon className='w-5 h-5' />
							) : (
								<Sun className='w-5 h-5' />
							)}
						</button>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='p-2 text-slate-900 dark:text-white'
						>
							{isOpen ? <X /> : <Menu />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Drawer */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className='md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/5 overflow-hidden'
					>
						<div className='px-4 py-6 space-y-2'>
							{navigation.map(item => (
								<Link
									key={item.name}
									href={item.href}
									onClick={() => setIsOpen(false)}
									className={`block px-4 py-3 rounded-xl text-lg font-bold transition-all ${
										pathname === item.href
											? 'bg-blue-600 text-white'
											: 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
									}`}
								>
									{item[language as 'uz' | 'en']}
								</Link>
							))}
							<div className='pt-4 flex items-center justify-between'>
								<button
									onClick={toggleLanguage}
									className='flex items-center gap-2 font-black text-blue-600 uppercase'
								>
									<Globe className='w-5 h-5' /> {language}
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}
