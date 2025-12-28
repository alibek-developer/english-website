'use client'

import { useApp } from '@/contexts/app-context'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Icons with dynamic import to prevent hydration errors
const Facebook = dynamic(
	() => import('lucide-react').then(mod => mod.Facebook),
	{ ssr: false }
)
const Instagram = dynamic(
	() => import('lucide-react').then(mod => mod.Instagram),
	{ ssr: false }
)
const Mail = dynamic(() => import('lucide-react').then(mod => mod.Mail), {
	ssr: false,
})
const MapPin = dynamic(() => import('lucide-react').then(mod => mod.MapPin), {
	ssr: false,
})
const Phone = dynamic(() => import('lucide-react').then(mod => mod.Phone), {
	ssr: false,
})
const Send = dynamic(() => import('lucide-react').then(mod => mod.Send), {
	ssr: false,
})
const MessageCircle = dynamic(
	() => import('lucide-react').then(mod => mod.MessageCircle),
	{ ssr: false }
)
const Clock = dynamic(() => import('lucide-react').then(mod => mod.Clock), {
	ssr: false,
})

export function ContactPage() {
	const { language } = useApp()

	const content = {
		uz: {
			title: 'Bog’lanish',
			subtitle: 'Savollaringiz bormi? Biz yordam berishga tayyormiz',
			description:
				'Ingliz tili olamiga sayohatingizni biz bilan boshlang. Mutaxassislarimiz sizga mos kursni tanlashda yordam beradi.',
			contactCards: {
				phone: {
					title: 'Telefon',
					value: '+998 90 123 45 67',
					sub: 'Har kuni 9:00 - 18:00',
				},
				email: {
					title: 'Email',
					value: 'info@waveenglish.uz',
					sub: '24 soat ichida javob',
				},
				address: {
					title: 'Manzil',
					value: 'Toshkent, Shayxontohur',
					sub: "Bunyodkor ko'chasi, 12-uy",
				},
			},
			form: {
				title: 'Xabar yuborish',
				name: 'Ismingiz',
				phone: 'Telefon raqamingiz',
				email: 'Email manzilingiz',
				course: 'Qiziqtirgan kursingiz',
				message: 'Xabaringiz',
				placeholderName: 'Masalan: Ali Valiyev',
				placeholderMessage: 'Savollaringizni shu yerga yozing...',
				button: 'Xabarni yuborish',
			},
			courses: {
				'': 'Kursni tanlang',
				beginner: "Boshlang'ich (General)",
				ielts: 'IELTS Preparation',
				kids: 'Kids English',
				business: 'Business English',
			},
			findUs: 'Bizning joylashuvimiz',
		},
		en: {
			title: 'Contact Us',
			subtitle: 'Have questions? We are here to help',
			description:
				'Start your English journey with us. Our experts will help you choose the right course for your goals.',
			contactCards: {
				phone: {
					title: 'Call Us',
					value: '+998 90 123 45 67',
					sub: 'Daily 9:00 - 18:00',
				},
				email: {
					title: 'Email Us',
					value: 'info@waveenglish.uz',
					sub: 'Response within 24h',
				},
				address: {
					title: 'Visit Us',
					value: 'Tashkent, Shaykhantakhur',
					sub: '12, Bunyodkor street',
				},
			},
			form: {
				title: 'Send a Message',
				name: 'Full Name',
				phone: 'Phone Number',
				email: 'Email Address',
				course: 'Interested Course',
				message: 'Your Message',
				placeholderName: 'e.g. John Doe',
				placeholderMessage: 'Type your message here...',
				button: 'Send Message Now',
			},
			courses: {
				'': 'Select a course',
				beginner: 'General English',
				ielts: 'IELTS Preparation',
				kids: 'Kids English',
				business: 'Business English',
			},
			findUs: 'Find us on map',
		},
	}

	const t = content[language as 'uz' | 'en']

	return (
		<div className='min-h-screen pt-32 pb-20 bg-white dark:bg-[#020617] transition-colors duration-500'>
			{/* Decorative Blur */}
			<div className='absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -mr-64 -mt-64' />

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='text-center mb-20'
				>
					<span className='text-blue-600 dark:text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block'>
						{t.title}
					</span>
					<h1 className='text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter'>
						{t.subtitle}
					</h1>
					<p className='text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium'>
						{t.description}
					</p>
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20'>
					{/* Info Cards */}
					<div className='lg:col-span-1 space-y-4'>
						{[
							{
								icon: Phone,
								data: t.contactCards.phone,
								color: 'text-blue-600',
								bg: 'bg-blue-50 dark:bg-blue-500/10',
							},
							{
								icon: Mail,
								data: t.contactCards.email,
								color: 'text-emerald-600',
								bg: 'bg-emerald-50 dark:bg-emerald-500/10',
							},
							{
								icon: MapPin,
								data: t.contactCards.address,
								color: 'text-rose-600',
								bg: 'bg-rose-50 dark:bg-rose-500/10',
							},
						].map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: i * 0.1 }}
								className='p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex items-start gap-5'
							>
								<div className={`p-4 rounded-2xl ${item.bg} ${item.color}`}>
									<item.icon className='w-6 h-6' />
								</div>
								<div>
									<h3 className='font-bold text-slate-900 dark:text-white'>
										{item.data.title}
									</h3>
									<p className='text-slate-600 dark:text-slate-300 font-semibold my-1'>
										{item.data.value}
									</p>
									<p className='text-xs text-slate-400 font-medium uppercase tracking-wider'>
										{item.data.sub}
									</p>
								</div>
							</motion.div>
						))}

						{/* Socials Card */}
						<div className='p-8 rounded-[2rem] bg-blue-600 text-white shadow-xl shadow-blue-500/20'>
							<h3 className='font-bold mb-6 italic text-xl'>
								Follow our journey
							</h3>
							<div className='flex gap-4'>
								<a
									href='#'
									className='w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors'
								>
									<Instagram className='w-6 h-6' />
								</a>
								<a
									href='#'
									className='w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors'
								>
									<Facebook className='w-6 h-6' />
								</a>
								<a
									href='#'
									className='w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors'
								>
									<MessageCircle className='w-6 h-6' />
								</a>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						className='lg:col-span-2 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-none'
					>
						<h2 className='text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tight italic'>
							{t.form.title}
						</h2>
						<form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div className='space-y-2'>
								<label className='text-xs font-black uppercase tracking-widest text-slate-400 ml-2'>
									{t.form.name}
								</label>
								<input
									type='text'
									className='w-full px-6 py-4 bg-slate-50 dark:bg-white/5 border-none rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all font-medium'
									placeholder={t.form.placeholderName}
								/>
							</div>
							<div className='space-y-2'>
								<label className='text-xs font-black uppercase tracking-widest text-slate-400 ml-2'>
									{t.form.phone}
								</label>
								<input
									type='tel'
									className='w-full px-6 py-4 bg-slate-50 dark:bg-white/5 border-none rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all font-medium'
									placeholder='+998'
								/>
							</div>
							<div className='md:col-span-2 space-y-2'>
								<label className='text-xs font-black uppercase tracking-widest text-slate-400 ml-2'>
									{t.form.course}
								</label>
								<select className='w-full px-6 py-4 bg-slate-50 dark:bg-white/5 border-none rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all font-medium appearance-none'>
									{Object.entries(t.courses).map(([val, label]) => (
										<option
											key={val}
											value={val}
											className='bg-white dark:bg-slate-900'
										>
											{label}
										</option>
									))}
								</select>
							</div>
							<div className='md:col-span-2 space-y-2'>
								<label className='text-xs font-black uppercase tracking-widest text-slate-400 ml-2'>
									{t.form.message}
								</label>
								<textarea
									rows={4}
									className='w-full px-6 py-4 bg-slate-50 dark:bg-white/5 border-none rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all font-medium resize-none'
									placeholder={t.form.placeholderMessage}
								/>
							</div>
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className='md:col-span-2 w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-sm'
							>
								<Send className='w-5 h-5' />
								{t.form.button}
							</motion.button>
						</form>
					</motion.div>
				</div>

				{/* Map Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='relative rounded-[3.5rem] overflow-hidden group shadow-2xl'
				>
					<div className='absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse group-hover:hidden' />
					{/* Placeholder for real map. You can integrate Google Maps iframe here */}
					<div className='h-[500px] w-full bg-slate-100 dark:bg-white/5 flex flex-col items-center justify-center border border-slate-200 dark:border-white/10'>
						<div className='p-6 bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl text-center relative z-10 border border-slate-100 dark:border-white/5'>
							<MapPin className='w-12 h-12 text-blue-600 mx-auto mb-4' />
							<h3 className='text-xl font-black dark:text-white mb-2'>
								{t.findUs}
							</h3>
							<p className='text-slate-500 dark:text-slate-400 max-w-xs'>
								{t.contactCards.address.sub}
							</p>
						</div>
						{/* Decorative map-like lines in background */}
						<div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
					</div>
				</motion.div>
			</div>
		</div>
	)
}
