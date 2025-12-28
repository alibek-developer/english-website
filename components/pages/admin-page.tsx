'use client'

import { useApp } from '@/contexts/app-context'
import { supabase } from '@/lib/supabase/client'
import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

// Ikonkalar
const Award = dynamic(() => import('lucide-react').then(mod => mod.Award), {
	ssr: false,
})
const BookOpen = dynamic(
	() => import('lucide-react').then(mod => mod.BookOpen),
	{ ssr: false }
)
const TrendingUp = dynamic(
	() => import('lucide-react').then(mod => mod.TrendingUp),
	{ ssr: false }
)
const Users = dynamic(() => import('lucide-react').then(mod => mod.Users), {
	ssr: false,
})
const Plus = dynamic(() => import('lucide-react').then(mod => mod.Plus), {
	ssr: false,
})
const X = dynamic(() => import('lucide-react').then(mod => mod.X), {
	ssr: false,
})

export function AdminPage() {
	const { language } = useApp()
	const [user, setUser] = useState<any>(null)
	const [loading, setLoading] = useState(true)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const router = useRouter()

	// Kurs formasi holati
	const [courseData, setCourseData] = useState({
		title_uz: '',
		title_en: '',
		description_uz: '',
		description_en: '',
		price: '',
		duration: '',
	})

	useEffect(() => {
		const checkUser = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser()
			if (!user) {
				router.push('/login')
				return
			}
			setUser(user)
			setLoading(false)
		}
		checkUser()
	}, [router])

	const handleLogout = async () => {
		await supabase.auth.signOut()
		router.push('/login')
	}

	// Kursni bazaga saqlash
	const handleAddCourse = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			const { error } = await supabase
				.from('courses') // Supabase'da 'courses' jadvali bo'lishi kerak
				.insert([courseData])

			if (error) throw error

			alert(
				language === 'uz'
					? 'Kurs muvaffaqiyatli qoʻshildi!'
					: 'Course added successfully!'
			)
			setIsModalOpen(false)
			setCourseData({
				title_uz: '',
				title_en: '',
				description_uz: '',
				description_en: '',
				price: '',
				duration: '',
			})
		} catch (error: any) {
			alert(error.message)
		} finally {
			setIsSubmitting(false)
		}
	}

	if (loading)
		return (
			<div className='min-h-screen flex items-center justify-center'>
				Yuklanmoqda...
			</div>
		)

	return (
		<div className='min-h-screen pt-24 pb-12 bg-slate-50 dark:bg-[#020617] transition-colors'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header qismi */}
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10'>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
					>
						<h1 className='text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter'>
							Wave <span className='text-blue-600'>Admin</span>
						</h1>
						<p className='text-slate-500 font-medium'>{user?.email}</p>
					</motion.div>

					<div className='flex gap-3'>
						<button
							onClick={() => setIsModalOpen(true)}
							className='flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all'
						>
							<Plus className='w-5 h-5' />
							{language === 'uz' ? "Kurs qo'shish" : 'Add Course'}
						</button>
						<button
							onClick={handleLogout}
							className='px-6 py-3 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 font-bold rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-600 transition-all'
						>
							{language === 'uz' ? 'Chiqish' : 'Logout'}
						</button>
					</div>
				</div>

				{/* Statistikalar (Sizniki bilan bir xil, faqat dizayn biroz jilolangan) */}
				<div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-10'>
					<StatCard
						icon={Users}
						label={language === 'uz' ? "O'quvchilar" : 'Students'}
						value='524'
						color='text-blue-600'
						bg='bg-blue-50 dark:bg-blue-500/10'
					/>
					<StatCard
						icon={BookOpen}
						label={language === 'uz' ? 'Kurslar' : 'Courses'}
						value='12'
						color='text-emerald-600'
						bg='bg-emerald-50 dark:bg-emerald-500/10'
					/>
					<StatCard
						icon={Award}
						label={language === 'uz' ? 'Sertifikatlar' : 'Certificates'}
						value='89'
						color='text-amber-600'
						bg='bg-amber-50 dark:bg-amber-500/10'
					/>
					<StatCard
						icon={TrendingUp}
						label={language === 'uz' ? "O'sish" : 'Growth'}
						value='+24%'
						color='text-purple-600'
						bg='bg-purple-50 dark:bg-purple-500/10'
					/>
				</div>

				{/* So'nggi faoliyat */}
				<div className='bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2rem] p-8'>
					<h2 className='text-xl font-black text-slate-900 dark:text-white mb-6 italic'>
						{language === 'uz' ? "So'nggi faoliyat" : 'Recent Activity'}
					</h2>
					{/* Faoliyat ro'yxati bu yerda qoladi... */}
				</div>
			</div>

			{/* --- KURS QO'SHISH MODAL OYNASI --- */}
			<AnimatePresence>
				{isModalOpen && (
					<div className='fixed inset-0 z-[100] flex items-center justify-center p-4'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsModalOpen(false)}
							className='absolute inset-0 bg-slate-900/60 backdrop-blur-sm'
						/>
						<motion.div
							initial={{ opacity: 0, scale: 0.9, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.9, y: 20 }}
							className='relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden'
						>
							<div className='p-8 border-b border-slate-100 dark:border-white/5 flex justify-between items-center'>
								<h3 className='text-2xl font-black text-slate-900 dark:text-white italic'>
									{language === 'uz'
										? 'Yangi kurs yaratish'
										: 'Create New Course'}
								</h3>
								<button
									onClick={() => setIsModalOpen(false)}
									className='p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors'
								>
									<X className='w-6 h-6 text-slate-400' />
								</button>
							</div>

							<form
								onSubmit={handleAddCourse}
								className='p-8 space-y-6 max-h-[70vh] overflow-y-auto'
							>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									<Input
										label='Sarlavha (UZ)'
										value={courseData.title_uz}
										onChange={(
											v: string // : string qo'shildi
										) => setCourseData({ ...courseData, title_uz: v })}
									/>
									<Input
										label='Title (EN)'
										value={courseData.title_en}
										onChange={(
											v: string // : string qo'shildi
										) => setCourseData({ ...courseData, title_en: v })}
									/>
									<Input
										label='Narxi'
										placeholder='300,000'
										value={courseData.price}
										onChange={(v: string) =>
											setCourseData({ ...courseData, price: v })
										}
									/>
									<Input
										label='Davomiyligi'
										placeholder='3 oy'
										value={courseData.duration}
										onChange={(
											v: string // : string qo'shildi
										) => setCourseData({ ...courseData, duration: v })}
									/>
								</div>
								<div className='space-y-4'>
									<Textarea
										label='Tavsif (UZ)'
										value={courseData.description_uz}
										onChange={(
											v: string // : string qo'shildi
										) => setCourseData({ ...courseData, description_uz: v })}
									/>
									<Textarea
										label='Description (EN)'
										value={courseData.description_en}
										onChange={(
											v: string // : string qo'shildi
										) => setCourseData({ ...courseData, description_en: v })}
									/>
								</div>

								<div className='pt-4 flex gap-4'>
									<button
										type='submit'
										disabled={isSubmitting}
										className='flex-1 py-4 bg-blue-600 text-white font-black rounded-2xl uppercase tracking-widest text-sm hover:bg-blue-700 disabled:opacity-50 transition-all'
									>
										{isSubmitting
											? '...'
											: language === 'uz'
											? 'Saqlash'
											: 'Save Course'}
									</button>
								</div>
							</form>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</div>
	)
}

// Yordamchi komponentlar (Kodni toza saqlash uchun)
const StatCard = ({ icon: Icon, label, value, color, bg }: any) => (
	<div className='bg-white dark:bg-white/5 rounded-[1.5rem] border border-slate-200 dark:border-white/5 p-6 flex items-center justify-between shadow-sm'>
		<div>
			<p className='text-xs font-black uppercase tracking-wider text-slate-400 mb-1'>
				{label}
			</p>
			<p className='text-2xl font-black text-slate-900 dark:text-white tracking-tighter'>
				{value}
			</p>
		</div>
		<div
			className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg} ${color}`}
		>
			<Icon className='w-6 h-6' />
		</div>
	</div>
)

const Input = ({ label, value, onChange, placeholder }: any) => (
	<div className='space-y-2'>
		<label className='text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2'>
			{label}
		</label>
		<input
			required
			value={value}
			onChange={e => onChange(e.target.value)}
			placeholder={placeholder}
			className='w-full px-5 py-3 bg-slate-50 dark:bg-white/5 border-none rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none font-medium'
		/>
	</div>
)

const Textarea = ({ label, value, onChange }: any) => (
	<div className='space-y-2'>
		<label className='text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2'>
			{label}
		</label>
		<textarea
			required
			rows={3}
			value={value}
			onChange={e => onChange(e.target.value)}
			className='w-full px-5 py-3 bg-slate-50 dark:bg-white/5 border-none rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none font-medium resize-none'
		/>
	</div>
)
