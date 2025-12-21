// app/components/NextFooter.tsx
'use client'

import { useTheme } from '@/hooks/useTheme'
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
	Youtube,
} from 'lucide-react'
import Link from 'next/link'

export function Footer() {
	const { theme } = useTheme()
	const isDark = theme === 'dark'

	const currentYear = new Date().getFullYear()

	const socialLinks = [
		{
			icon: MessageCircle,
			href: 'https://t.me/Tulkin_tour_guide',
			label: 'Telegram',
		},
		{
			icon: Instagram,
			href: 'https://www.instagram.com/tulkin_rajabbaev',
			label: 'Instagram',
		},
		{
			icon: Youtube,
			href: 'https://youtube.com/@alibekielts',
			label: 'YouTube',
		},
		{
			icon: Facebook,
			href: 'https://facebook.com/alibekenglish',
			label: 'Facebook',
		},
	]

	const quickLinks = [
		{ href: '/', label: 'Bosh sahifa' },
		{ href: '/courses', label: 'Kurslar' },
		{ href: '/about', label: 'Men haqimda' },
		{ href: '/resources', label: 'Resurslar' },
		{ href: '/contact', label: 'Aloqa' },
	]

	return (
		<footer
			className={`border-t ${
				isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
			}`}
		>
			<div className='container mx-auto px-6 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
					{/* Brend */}
					<div className='space-y-6'>
						<div className='flex items-center gap-4'>
							<div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl'>
								<span className='text-white font-black text-2xl'>T</span>
							</div>
							<div>
								<h3
									className={`font-bold text-xl ${
										isDark ? 'text-white' : 'text-slate-900'
									}`}
								>
									Tulkin Rajabbaev
								</h3>
								<p className='text-cyan-400 text-sm font-medium'>
									IELTS Expert
								</p>
							</div>
						</div>
						<p
							className={`text-sm leading-relaxed max-w-xs ${
								isDark ? 'text-slate-300' : 'text-slate-600'
							}`}
						>
							Professional ingliz tili o‘qituvchisi va IELTS mutaxassisi. 1000+
							talaba 7+ ball oldi.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3
							className={`font-bold text-lg mb-6 ${
								isDark ? 'text-white' : 'text-slate-900'
							}`}
						>
							Tezkor havolalar
						</h3>
						<ul className='space-y-3'>
							{quickLinks.map(link => (
								<li key={link.href}>
									<Link
										href={link.href}
										className={`flex items-center gap-2 group transition-colors ${
											isDark
												? 'text-slate-300 hover:text-cyan-400'
												: 'text-slate-600 hover:text-cyan-600'
										}`}
									>
										<span className='w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity' />
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Kontakt */}
					<div>
						<h3
							className={`font-bold text-lg mb-6 ${
								isDark ? 'text-white' : 'text-slate-900'
							}`}
						>
							Bog‘lanish
						</h3>
						<ul
							className={`space-y-4 ${
								isDark ? 'text-slate-300' : 'text-slate-600'
							}`}
						>
							<li className='flex items-center gap-3'>
								<Phone className='w-5 h-5 text-cyan-400' />
								<span className='text-sm'>+998 99 505 16 92</span>
							</li>
							<li className='flex items-center gap-3'>
								<Mail className='w-5 h-5 text-cyan-400' />
								<span className='text-sm'>trajabboyev@gmail.com</span>
							</li>
							<li className='flex items-center gap-3'>
								<MapPin className='w-5 h-5 text-cyan-400' />
								<span className='text-sm'>Xorazm, O‘zbekiston</span>
							</li>
						</ul>
					</div>

					{/* Ijtimoiy tarmoqlar */}
					<div>
						<h3
							className={`font-bold text-lg mb-6 ${
								isDark ? 'text-white' : 'text-slate-900'
							}`}
						>
							Meni kuzating
						</h3>
						<div className='flex gap-4'>
							{socialLinks.map(social => (
								<a
									key={social.label}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={social.label}
									className={`group w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
										isDark
											? 'bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-500/50'
											: 'bg-slate-100 border border-slate-300 hover:bg-cyan-50 hover:border-cyan-500'
									}`}
								>
									<social.icon
										className={`w-6 h-6 transition-colors ${
											isDark
												? 'text-slate-300 group-hover:text-cyan-400'
												: 'text-slate-600 group-hover:text-cyan-600'
										}`}
									/>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div
					className={`mt-16 pt-8 border-t text-center ${
						isDark ? 'border-slate-700' : 'border-slate-200'
					}`}
				>
					<p
						className={`text-sm ${
							isDark ? 'text-slate-400' : 'text-slate-500'
						}`}
					>
						© {currentYear} Tulkin Rajabbaev. Barcha huquqlar himoyalangan.
					</p>
					<p
						className={`text-xs mt-2 ${
							isDark ? 'text-slate-500' : 'text-slate-600'
						}`}
					>
						Made with ❤️ by Alibek
					</p>
				</div>
			</div>
		</footer>
	)
}
