'use client'

import { supabase } from '@/lib/supabase/client'
import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// Dinamik ikonkalarni yuklash
const Lock = dynamic(() => import('lucide-react').then(mod => mod.Lock), {
	ssr: false,
})
const Mail = dynamic(() => import('lucide-react').then(mod => mod.Mail), {
	ssr: false,
})
const ArrowRight = dynamic(
	() => import('lucide-react').then(mod => mod.ArrowRight),
	{ ssr: false }
)
const Loader2 = dynamic(() => import('lucide-react').then(mod => mod.Loader2), {
	ssr: false,
})

export function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		setError('')

		try {
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password,
			})

			if (error) {
				setError(
					error.message === 'Invalid login credentials'
						? 'Email yoki parol noto‘g‘ri'
						: error.message
				)
			} else {
				router.push('/admin')
			}
		} catch (err) {
			setError('Tizimga ulanishda xatolik yuz berdi')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-[#020617] p-4 transition-colors duration-500'>
			{/* Orqa fon bezagi */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full' />
				<div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full' />
			</div>

			<div className='max-w-[440px] w-full relative z-10'>
				{/* Logo yoki Brend nomi */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className='text-center mb-8'
				>
					<div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 shadow-xl shadow-blue-500/20 mb-6'>
						<Lock className='w-8 h-8 text-white' />
					</div>
					<h1 className='text-3xl font-black text-slate-900 dark:text-white tracking-tighter'>
						WAVE <span className='text-blue-600'>ADMIN</span>
					</h1>
					<p className='text-slate-500 dark:text-slate-400 mt-2 font-medium'>
						Boshqaruv paneliga xush kelibsiz
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					className='bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-none backdrop-blur-sm'
				>
					<form onSubmit={handleSubmit} className='space-y-5'>
						{/* Email */}
						<div className='space-y-2'>
							<label className='text-xs font-black uppercase tracking-[0.15em] text-slate-400 ml-1'>
								Elektron pochta
							</label>
							<div className='relative group'>
								<div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
									<Mail className='h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors' />
								</div>
								<input
									type='email'
									value={email}
									onChange={e => setEmail(e.target.value)}
									className='w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all outline-none font-medium'
									placeholder='admin@waveenglish.uz'
									required
									disabled={loading}
								/>
							</div>
						</div>

						{/* Parol */}
						<div className='space-y-2'>
							<div className='flex justify-between items-center px-1'>
								<label className='text-xs font-black uppercase tracking-[0.15em] text-slate-400'>
									Maxfiy parol
								</label>
								<button
									type='button'
									className='text-xs font-bold text-blue-600 hover:underline'
								>
									Unutdingizmi?
								</button>
							</div>
							<div className='relative group'>
								<div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
									<Lock className='h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors' />
								</div>
								<input
									type='password'
									value={password}
									onChange={e => setPassword(e.target.value)}
									className='w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all outline-none font-medium'
									placeholder='••••••••'
									required
									disabled={loading}
								/>
							</div>
						</div>

						{/* Error Message */}
						<AnimatePresence>
							{error && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									className='bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-2'
								>
									<div className='w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse' />
									{error}
								</motion.div>
							)}
						</AnimatePresence>

						{/* Submit Button */}
						<motion.button
							whileHover={{ scale: 1.01 }}
							whileTap={{ scale: 0.99 }}
							type='submit'
							disabled={loading}
							className='w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-500/25 hover:bg-blue-700 transition-all disabled:opacity-70 flex items-center justify-center gap-3'
						>
							{loading ? (
								<Loader2 className='w-5 h-5 animate-spin' />
							) : (
								<>
									Kirish <ArrowRight className='w-4 h-4' />
								</>
							)}
						</motion.button>
					</form>

					{/* Footer */}
					<div className='mt-8 pt-8 border-t border-slate-100 dark:border-white/5 text-center'>
						<p className='text-slate-400 text-sm font-medium'>
							Xavfsiz tizim © {new Date().getFullYear()} Wave English
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
