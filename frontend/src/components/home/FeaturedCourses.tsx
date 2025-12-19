import { backend } from '@/client'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function FeaturedCourses() {
	const { data } = useQuery({
		queryKey: ['courses'],
		queryFn: () => backend.get('/courses').then(res => res.data),
	})

	const featuredCourses = data?.data?.courses?.slice(0, 3)

	return (
		<section className='py-20 bg-gray-900'>
			{' '}
			{/* Fonni butun section ga qo'ydim */}
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<h2 className='text-5xl md:text-6xl font-bold text-white mb-10'>
						Mashhur <span className='text-sky-400'>Kurslar</span>
					</h2>

					<p className='text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed'>
						O'zingizga mos kursni tanlang va ingliz tilini professional darajada
						o'rganing. Bizning kurslarimiz qisqa muddatda real natija berishga
						mo'ljallangan – IELTS tayyorgarligi yoki umumiy suhbatdosh ingliz
						tili.
					</p>

					<p className='text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed'>
						Har bir dars Cambridge va British Council materiallariga asoslangan.
						Kichik guruhlarda (6-8 kishi) o'tkaziladi, shuning uchun har bir
						talabaga shaxsiy e'tibor beriladi. Haftalik mock testlar va xatolar
						tahlili bilan natijangizni doimiy kuzatib boramiz.
					</p>

					<ul className='list-disc list-inside text-xl text-slate-200 max-w-3xl mx-auto space-y-6 mb-16'>
						<li>
							<strong className='text-white'>IELTS Intensiv Kursi:</strong> 3-6
							oyda 7.0–9.0 ballga tayyorlaning
						</li>
						<li>
							<strong className='text-white'>Umumiy Ingliz Tili:</strong>{' '}
							Speaking va real hayotda ishlatishga urg'u
						</li>
						<li>
							<strong className='text-white'>Gibrid format:</strong> Online yoki
							offline – o'zingiz tanlang
						</li>
						<li>
							<strong className='text-white'>Bepul probniy dars:</strong>{' '}
							Birinchi dars bepul, darajangizni aniqlaymiz
						</li>
						<li>
							<strong className='text-white'>Natija kafolati:</strong>{' '}
							Tavsiyalarga amal qilsangiz – yuqori ball kafolatlanadi
						</li>
					</ul>

					<div className='text-center'>
						<Link href='/courses'>
							<Button
								size='lg'
								className='bg-sky-500 hover:bg-sky-600 text-white px-12 py-6 text-xl font-semibold rounded-lg gap-3'
							>
								Barcha kurslarni ko'rish
								<ArrowRight className='w-5 h-5' />
							</Button>
						</Link>
					</div>
				</motion.div>

				{/* Agar kelajakda kurs kartochkalari qo'shmoqchi bo'lsangiz, bu qismni oching */}
				{/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>
					{featuredCourses?.map((course: any, index: number) => (
						<CourseCard key={course.id} course={course} index={index} />
					))}
				</div> */}
			</div>
		</section>
	)
}
