'use client'

import { useTheme } from '@/hooks/useTheme'
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
	const { theme } = useTheme() // Theme ni o‘qiymiz

	const isDark = theme === 'dark'

	return (
		<footer
			className={`py-12 ${
				isDark ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'
			} border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}
		>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div>
						<div className='flex items-center gap-3 mb-4'>
							<div
								className={`w-10 h-10 ${
									isDark ? 'bg-sky-500' : 'bg-sky-600'
								} rounded-lg flex items-center justify-center`}
							>
								<span className='text-white font-bold text-xl'>T</span>
							</div>
							<div>
								<div
									className={`${
										isDark ? 'text-white' : 'text-slate-900'
									} font-bold`}
								>
									Tulkin Rajabbaev
								</div>
								<div
									className={`text-xs ${
										isDark ? 'text-slate-400' : 'text-slate-500'
									}`}
								>
									English Teacher
								</div>
							</div>
						</div>
						<p
							className={`text-sm ${
								isDark ? 'text-slate-300' : 'text-slate-600'
							}`}
						>
							Professional English Teacher & IELTS Expert based in Tashkent,
							Uzbekistan
						</p>
					</div>

					<div>
						<h3
							className={`font-semibold ${
								isDark ? 'text-white' : 'text-slate-900'
							} mb-4`}
						>
							Quick Links
						</h3>
						<ul className='space-y-2 text-sm'>
							{[
								'Bosh sahifa',
								'Kurslar',
								'Men haqimda',
								'Resurslar',
								'Aloqa',
							].map((link, i) => (
								<li key={i}>
									<Link
										href={
											i === 0 ? '/' : `/${link.toLowerCase().replace(' ', '-')}`
										}
										className={`${
											isDark
												? 'text-slate-300 hover:text-sky-400'
												: 'text-slate-600 hover:text-sky-600'
										} transition-colors`}
									>
										{link}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3
							className={`font-semibold ${
								isDark ? 'text-white' : 'text-slate-900'
							} mb-4`}
						>
							Bog'lanish
						</h3>
						<ul
							className={`space-y-3 text-sm ${
								isDark ? 'text-slate-300' : 'text-slate-600'
							}`}
						>
							<li className='flex items-start gap-3'>
								<Phone
									className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
										isDark ? 'text-sky-400' : 'text-sky-600'
									}`}
								/>
								<span>+998 99 505 16 92</span>
							</li>
							<li className='flex items-start gap-3'>
								<Mail
									className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
										isDark ? 'text-sky-400' : 'text-sky-600'
									}`}
								/>
								<span>trjabboev@gmail.com</span>
							</li>
							<li className='flex items-start gap-3'>
								<MapPin
									className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
										isDark ? 'text-sky-400' : 'text-sky-600'
									}`}
								/>
								<span>Xorazm, O'zbekiston</span>
							</li>
						</ul>
					</div>

					<div>
						<h3
							className={`font-semibold ${
								isDark ? 'text-white' : 'text-slate-900'
							} mb-4`}
						>
							Meni kuzating
						</h3>
						<div className='flex gap-3'>
							{[{ Icon: Instagram }, { Icon: Facebook }, { Icon: Youtube }].map(
								({ Icon }, i) => (
									<a
										key={i}
										href='#'
										className={`w-10 h-10 ${
											isDark
												? 'bg-slate-800 hover:bg-sky-500'
												: 'bg-slate-100 hover:bg-sky-600'
										} rounded-lg 
                    flex items-center justify-center transition-all duration-300 group`}
									>
										<Icon
											className={`w-5 h-5 ${
												isDark
													? 'text-slate-300 group-hover:text-white'
													: 'text-slate-600 group-hover:text-white'
											}`}
										/>
									</a>
								)
							)}
						</div>
					</div>
				</div>

				<div
					className={`border-t ${
						isDark ? 'border-slate-800' : 'border-slate-200'
					} mt-12 pt-8 text-center text-sm ${
						isDark ? 'text-slate-400' : 'text-slate-500'
					}`}
				>
					<p>© 2025 Tulkin Rajabbaev. Barcha huquqlar himoyalangan.</p>
					<p className='mt-2 text-xs'>Made with ❤️ by Alibek</p>
				</div>
			</div>
		</footer>
	)
}
