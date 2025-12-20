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
			{/* FAQ Bo'limi – Tez-tez Beriladigan Savollar */}
			<section className='py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-5xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-16'>
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
								className='group bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700 shadow-sm dark:shadow-xl transition-all'
							>
								<summary className='px-8 py-6 text-xl md:text-2xl font-semibold text-sky-600 dark:text-sky-400 cursor-pointer flex items-center justify-between hover:text-sky-700 dark:hover:text-sky-300 transition'>
									<span className='flex items-center gap-4'>
										<span className='text-3xl group-open:rotate-90 transition-transform'>
											▶
										</span>
										{item.q}
									</span>
								</summary>
								<div className='px-8 pb-8 pt-4 text-lg text-gray-700 dark:text-slate-300 leading-relaxed'>
									{item.a}
								</div>
							</details>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
