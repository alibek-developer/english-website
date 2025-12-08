'use client'

import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
	return (
		<div className='min-h-screen bg-[#020617] text-white py-20'>
			<div className='container mx-auto grid md:grid-cols-2 gap-12 items-center'>
				{/* LEFT CONTENT */}
				<motion.div
					initial={{ opacity: 0, x: -80 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='space-y-6'
				>
					<h1 className='text-5xl font-bold leading-tight'>
						Sayohatingizni boshlang <br />
						<span className='text-blue-400'>Bugun</span>
					</h1>

					<p className='text-gray-400 max-w-lg'>
						Bepul konsultatsiyani bron qilish yoki savollaringizni berish uchun
						bog‘laning.
					</p>

					{/* CARDS */}
					<div className='space-y-4'>
						{/* PHONE */}
						<div className='bg-white/10 backdrop-blur p-4 rounded-xl flex items-center gap-4'>
							<Phone className='text-blue-400' />
							<div>
								<p className='text-sm text-gray-300'>Telefon</p>
								<p className='font-semibold'>+998 90 123 45 67</p>
							</div>
						</div>

						{/* EMAIL */}
						<div className='bg-white/10 backdrop-blur p-4 rounded-xl flex items-center gap-4'>
							<Mail className='text-blue-400' />
							<div>
								<p className='text-sm text-gray-300'>Elektron pochta</p>
								<p className='font-semibold'>alibek@english.uz</p>
							</div>
						</div>

						{/* ADDRESS */}
						<div className='bg-white/10 backdrop-blur p-4 rounded-xl flex items-center gap-4'>
							<MapPin className='text-blue-400' />
							<div>
								<p className='text-sm text-gray-300'>Manzil</p>
								<p className='font-semibold'>Toshkent, O‘zbekiston</p>
							</div>
						</div>

						{/* WORK TIME */}
						<div className='bg-white/10 backdrop-blur p-4 rounded-xl flex items-center gap-4'>
							<Clock className='text-blue-400' />
							<div>
								<p className='text-sm text-gray-300'>Ish vaqti</p>
								<p className='font-semibold'>Dushanba - Shanba: 9:00 - 19:00</p>
							</div>
						</div>
					</div>

					{/* FREE CONSULTATION */}
					<div className='bg-white/10 backdrop-blur p-6 rounded-xl'>
						<p className='font-semibold mb-2'>Bepul maslahat</p>
						<p className='text-gray-300 text-sm mb-4'>
							30 daqiqalik bepul konsultatsiya sizning darajangizni bilib eng
							mos o‘quv rejasini tanlaymiz.
						</p>

						<div className='flex gap-4'>
							<button className='bg-green-500 text-white px-4 py-2 rounded-lg'>
								WhatsApp orqali
							</button>
							<button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>
								Qo‘ng‘iroq qilish
							</button>
						</div>
					</div>
				</motion.div>

				{/* RIGHT FORM */}
				<motion.div
					initial={{ opacity: 0, x: 80 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='bg-white text-black p-8 rounded-2xl shadow-xl'
				>
					<h2 className='text-2xl font-bold mb-4'>
						Bog‘lanish uchun formani to‘ldiring
					</h2>

					<form className='space-y-4'>
						<input
							type='text'
							placeholder='Ismingizni kiriting'
							className='w-full border p-3 rounded-lg'
						/>

						<input
							type='text'
							placeholder='+998 90 123 45 67'
							className='w-full border p-3 rounded-lg'
						/>

						<input
							type='email'
							placeholder='email@example.com'
							className='w-full border p-3 rounded-lg'
						/>

						<select className='w-full border p-3 rounded-lg'>
							<option>Kursni tanlash</option>
							<option>General English</option>
							<option>IELTS</option>
							<option>Speaking Club</option>
						</select>

						<textarea
							rows={4}
							placeholder='Savollaringiz yoki sharhlaringizni yozing...'
							className='w-full border p-3 rounded-lg'
						/>

						<button className='w-full bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center gap-2'>
							✈️ Yuborish
						</button>
					</form>
				</motion.div>
			</div>
		</div>
	)
}
