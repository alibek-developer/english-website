'use client'

import { useApp } from '@/contexts/app-context'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Ikonkalarni hydration xatosiz yuklash
const MapPin = dynamic(() => import('lucide-react').then(mod => mod.MapPin), {
	ssr: false,
})
const Phone = dynamic(() => import('lucide-react').then(mod => mod.Phone), {
	ssr: false,
})
const Mail = dynamic(() => import('lucide-react').then(mod => mod.Mail), {
	ssr: false,
})
const Instagram = dynamic(
	() => import('lucide-react').then(mod => mod.Instagram),
	{ ssr: false }
)
const Facebook = dynamic(
	() => import('lucide-react').then(mod => mod.Facebook),
	{ ssr: false }
)
const Send = dynamic(() => import('lucide-react').then(mod => mod.Send), {
	ssr: false,
})

export function Footer() {
	const { language } = useApp()

	const content = {
		uz: {
			about:
				"Professional o'qituvchilar bilan O'zbekistonda interaktiv ingliz tili kurslari.",
			quickLinks: 'Tezkor havolalar',
			contact: 'Aloqa',
			address: 'Toshkent sh., Yunusobod tumani',
			rights: 'Barcha huquqlar himoyalangan.',
		},
		en: {
			about:
				'Interactive English courses with professional teachers in Uzbekistan.',
			quickLinks: 'Quick Links',
			contact: 'Contact',
			address: 'Tashkent, Yunusobod district',
			rights: 'All rights reserved.',
		},
	}

	const t = content[language as 'uz' | 'en']

	const socialLinks = [
		{ icon: Instagram, href: '#', color: 'hover:text-pink-500' },
		{ icon: Facebook, href: '#', color: 'hover:text-blue-500' },
		{ icon: Send, href: '#', color: 'hover:text-sky-500' },
	]

	return (
		<footer className='relative bg-slate-50 dark:bg-[#020617] pt-20 pb-10 overflow-hidden transition-colors duration-500'>
			{/* Background Decor - Dark modeda chiroyli ko'rinadi */}
			<div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none' />

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
					{/* 1. Brand Section */}
					<div className='space-y-6'>
						<Link href='/' className='inline-block'>
							<span className='text-3xl font-black text-slate-900 dark:text-white tracking-tighter'>
								Wave
								<span className='text-blue-600 dark:text-blue-400'>
									English
								</span>
							</span>
						</Link>
						<p className='text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xs'>
							{t.about}
						</p>
						<div className='flex gap-3'>
							{socialLinks.map((social, i) => (
								<Link
									key={i}
									href={social.href}
									className={`p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 transition-all hover:scale-110 shadow-sm ${social.color}`}
								>
									<social.icon className='w-5 h-5' />
								</Link>
							))}
						</div>
					</div>

					{/* 2. Quick Links */}
					<div className='lg:ml-auto'>
						<h4 className='text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm mb-8'>
							{t.quickLinks}
						</h4>
						<ul className='space-y-4'>
							{['Home', 'Courses', 'About', 'Contact'].map(item => (
								<li key={item}>
									<Link
										href={`/${
											item.toLowerCase() === 'home' ? '' : item.toLowerCase()
										}`}
										className='text-slate-600 dark:text-slate-400 font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group'
									>
										<span className='w-0 group-hover:w-4 h-[2px] bg-blue-600 dark:bg-blue-400 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100' />
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* 3. Contact Info */}
					<div className='lg:ml-auto'>
						<h4 className='text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm mb-8'>
							{t.contact}
						</h4>
						<ul className='space-y-5'>
							<li className='flex items-start gap-4'>
								<div className='p-2 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400'>
									<MapPin className='w-5 h-5' />
								</div>
								<span className='text-slate-600 dark:text-slate-400 font-medium'>
									{t.address}
								</span>
							</li>
							<li className='flex items-center gap-4'>
								<div className='p-2 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400'>
									<Phone className='w-5 h-5' />
								</div>
								<span className='text-slate-600 dark:text-slate-400 font-medium tracking-wide'>
									+998 90 123 45 67
								</span>
							</li>
							<li className='flex items-center gap-4'>
								<div className='p-2 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400'>
									<Mail className='w-5 h-5' />
								</div>
								<span className='text-slate-600 dark:text-slate-400 font-medium'>
									info@waveenglish.uz
								</span>
							</li>
						</ul>
					</div>

					{/* 4. Newsletter / Minimalist Card */}
					<div className='p-6 rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden group'>
						<div className='absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700' />
						<h5 className='font-black text-xl mb-2'>Wave English App</h5>
						<p className='text-blue-100 text-sm font-medium mb-4'>
							Tez kunda mobil ilovamiz ishga tushadi!
						</p>
						<div className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-xs font-bold border border-white/20 uppercase tracking-tighter'>
							Coming Soon
						</div>
					</div>
				</div>

				{/* Bottom Line */}
				<div className='pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4'>
					<p className='text-slate-500 dark:text-slate-500 text-sm font-bold'>
						© {new Date().getFullYear()} Wave English. {t.rights}
					</p>
					<div className='flex gap-8 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-600'>
						<Link href='#' className='hover:text-blue-500 transition-colors'>
							Privacy Policy
						</Link>
						<Link href='#' className='hover:text-blue-500 transition-colors'>
							Terms of Use
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
