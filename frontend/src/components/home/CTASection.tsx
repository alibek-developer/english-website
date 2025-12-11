import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
	return (
		<section className='py-20'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='bg-gradient-to-br from-sky-600 to-blue-700 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden'
				>
					<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

					<div className='relative z-10'>
						<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
							Ingliz tilini o'rganish bugungi kunda!
						</h2>
						<p className='text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90'>
							Bepul konsultatsiya uchun hoziroq bog'laning va o'zingizga mos
							kursni toping
						</p>

						<div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
							{/* Birinchi button - qora fonli, oq matnli */}
							<Button
								size='lg'
								className='gap-3 text-base px-10 py-6 bg-gray-900 text-white hover:bg-gray-800 rounded-full font-medium shadow-lg'
								asChild
							>
								<Link href='/contact'>
									Bepul Konsultatsiya
									<ArrowRight className='w-5 h-5' />
								</Link>
							</Button>

							{/* Ikkinchi button - shaffof outline, Telegram */}
							<Button
								size='lg'
								variant='outline'
								className='gap-3 text-base px-10 py-6 bg-transparent border-2 border-white/50 text-white hover:bg-white/10 rounded-full font-medium backdrop-blur-sm'
								asChild
							>
								<a
									href='https://t.me/your_telegram_username' // O'zingizning Telegram linkingizni qo'ying
									target='_blank'
									rel='noopener noreferrer'
								>
									<MessageCircle className='w-5 h-5' />
									Telegram
								</a>
							</Button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
