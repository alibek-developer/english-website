// components/Footer.tsx
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
;<MessageCircle className='w-6 h-6' />

export function Footer() {
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
		<footer className='bg-[#0b1327] border-t border-white/10'>
			<div className='container mx-auto px-6 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
					{/* Brend */}
					<div className='space-y-6'>
						<div className='flex items-center gap-4'>
							<div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl'>
								<span className='text-white font-black text-2xl'>T</span>
							</div>
							<div>
								<h3 className='font-bold text-xl text-white'>
									Tulkin Rajabbaev
								</h3>
								<p className='text-cyan-400 text-sm font-medium'>
									IELTS Expert
								</p>
							</div>
						</div>
						<p className='text-gray-400 text-sm leading-relaxed max-w-xs'>
							Professional ingliz tili o‘qituvchisi va IELTS mutaxassisi. 1000+
							talaba 7+ ball oldi.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='font-bold text-lg text-white mb-6'>
							Tezkor havolalar
						</h3>
						<ul className='space-y-3'>
							{quickLinks.map(link => (
								<li key={link.href}>
									<Link
										href={link.href}
										className='text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group'
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
						<h3 className='font-bold text-lg text-white mb-6'>Bog‘lanish</h3>
						<ul className='space-y-4 text-gray-400'>
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
						<h3 className='font-bold text-lg text-white mb-6'>Meni kuzating</h3>
						<div className='flex gap-4'>
							{socialLinks.map(social => (
								<a
									key={social.label}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={social.label}
									className='group w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:scale-110'
								>
									<social.icon className='w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors' />
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='mt-16 pt-8 border-t border-white/10 text-center'>
					<p className='text-gray-500 text-sm'>
						© {currentYear} Tulkin Rajabbaev. Barcha huquqlar himoyalangan.
					</p>
					<p className='text-gray-600 text-xs mt-2'>Made with by Alibek</p>
				</div>
			</div>
		</footer>
	)
}
