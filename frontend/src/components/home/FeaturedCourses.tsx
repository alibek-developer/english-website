import { backend } from '@/client'
import { useQuery } from '@tanstack/react-query'

export function FeaturedCourses() {
	const { data } = useQuery({
		queryKey: ['courses'],
		queryFn: () => backend.get('/courses').then(res => res.data),
	})

	const featuredCourses = data?.data?.courses?.slice(0, 3)

	return (
		<>
			{/* 1. FAQ Bo'limi – Tez-tez Beriladigan Savollar */}
			<section className='py-20 bg-gray-900'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-5xl md:text-6xl font-bold text-center text-white mb-16'>
						Tez-tez Beriladigan Savollar
					</h2>

					<div className='max-w-4xl mx-auto space-y-6'>
						{[
							{
								q: 'Kurslar qancha davom etadi?',
								a: 'Intensiv IELTS kursi 3-6 oy davom etadi. Haftada 3-4 marta dars bilan qisqa muddatda IELTS 8.0+ ball olish mumkin. Umumiy ingliz tili kurslari talabaning darajasiga qarab moslashtiriladi.',
							},
							{
								q: "Darslar qanday formatda o'tadi?",
								a: "Gibrid format: online (Zoom orqali jonli darslar) yoki offline (Toshkentda). Siz o'zingiz qulayini tanlaysiz. Online darslar ham to'liq interaktiv – speaking va writing amaliyotlari bor.",
							},
							{
								q: 'Natija kafolati bormi?',
								a: "Ha! Tavsiyalarga to'liq amal qilsangiz va darslarga qatnashsangiz – o'rtacha 7.5-9.0 ball kafolatlanadi. Agar natija bo'lmasa, pulning bir qismi qaytariladi.",
							},
							{
								q: 'Birinchi dars bepulmi?',
								a: "Albatta! Bepul diagnostika va probniy dars o'tkazamiz. Darajangizni aniqlab, individual reja tuzamiz. Hech qanday majburiyat yo'q.",
							},
							{
								q: 'Qanday boshlash mumkin?',
								a: "Quyidagi tugma orqali bepul konsultatsiya oling yoki Telegram/WhatsApp ga yozing. 24 soat ichida siz bilan bog'lanamiz.",
							},
						].map((item, i) => (
							<details
								key={i}
								className='group bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700'
							>
								<summary className='px-8 py-6 text-xl md:text-2xl font-semibold text-sky-400 cursor-pointer flex items-center justify-between hover:text-sky-300 transition'>
									<span className='flex items-center gap-4'>
										<span className='text-3xl group-open:rotate-90 transition-transform'>
											▶
										</span>
										{item.q}
									</span>
								</summary>
								<div className='px-8 pb-8 pt-4 text-lg text-slate-300 leading-relaxed'>
									{item.a}
								</div>
							</details>
						))}
					</div>
				</div>
			</section>
			{/* 2. Bonus Materiallar Bo'limi
			<section className='py-20 bg-gray-900/95'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-5xl md:text-6xl font-bold text-center text-white mb-16'>
						Bonus Materiallar
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
						{[
							{
								icon: '📘',
								title: "IELTS So'z Boyligi Qo'llanmasi",
								desc: "100+ eng muhim so'z va iboralar ro'yxati",
								color: 'from-blue-500 to-cyan-500',
							},
							{
								icon: '📝',
								title: 'Grammatika Masalalari',
								desc: 'Writing va Speaking uchun eng zarur grammatika qoidalari',
								color: 'from-purple-500 to-pink-500',
							},
							{
								icon: '🎧',
								title: "Gapirayotgan Mavzular To'plami",
								desc: '100+ speaking mavzusi va namuna javoblar',
								color: 'from-green-500 to-teal-500',
							},
							{
								icon: '✍️',
								title: 'Yozish vazifasi 2 shablonlari',
								desc: 'Barcha turdagi essay uchun tayyor shablonlar',
								color: 'from-orange-500 to-red-500',
							},
						].map((item, i) => (
							<motion.div
								key={i}
								whileHover={{ scale: 1.05 }}
								className='bg-gray-800/60 backdrop-blur-md rounded-3xl p-8 border border-gray-700 hover:border-sky-500 transition-all'
							>
								<div
									className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl mb-6`}
								>
									{item.icon}
								</div>
								<h3 className='text-2xl font-bold text-white mb-3'>
									{item.title}
								</h3>
								<p className='text-slate-400 mb-6'>{item.desc}</p>
								<a
									href='#'
									className='text-sky-400 font-semibold flex items-center gap-2 hover:gap-4 transition-all'
								>
									Yuklab olish ↓
								</a>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* 3. Video Darslar Bo'limi */}
			{/* <section className='py-20 bg-black'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-5xl md:text-6xl font-bold text-center text-white mb-16'>
						Video darslar
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto'>
						{[1, 2, 3, 4, 5, 6].map(
							(
								i // Kerak bo'lsa ko'proq qo'shishingiz mumkin
							) => (
								<motion.div
									key={i}
									whileHover={{ scale: 1.05 }}
									className='relative group cursor-pointer'
								>
									<div className='bg-gray-800/80 backdrop-blur-sm rounded-3xl aspect-video flex items-center justify-center border border-gray-700 hover:border-sky-500 transition-all'>
										<div className='w-24 h-24 bg-sky-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform'>
											<svg
												className='w-16 h-16 text-sky-400 ml-4'
												fill='currentColor'
												viewBox='0 0 24 24'
											>
												<path d='M8 5v14l11-7z' />
											</svg>
										</div>
									</div>
									<p className='text-center text-white mt-6 text-xl'>
										Video dars {i}
									</p>
								</motion.div>
							)
						)}
					</div>
				</div>
			</section>{' '} */}
			*/
		</>
	)
}
