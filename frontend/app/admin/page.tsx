import { motion } from 'framer-motion'

export default function AdminLogin() {
	return (
		<div className='min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500'>
			{/* Background animated gradient blob */}
			<div className='absolute inset-0'>
				<div className='absolute w-[500px] h-[500px] bg-white/20 blur-3xl rounded-full animate-pulse-slow -top-20 -left-20'></div>
				<div className='absolute w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full animate-pulse-slower bottom-0 right-0'></div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='relative z-10 w-full max-w-md p-8 rounded-2xl bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30'
			>
				<h1 className='text-3xl font-bold text-white text-center mb-6 drop-shadow-lg'>
					Admin Login
				</h1>

				<form className='space-y-5'>
					<div>
						<label className='text-white font-medium'>Email</label>
						<input
							type='email'
							className='mt-2 w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none 
              focus:ring-2 focus:ring-white/80 transition shadow-inner'
							placeholder='admin@gmail.com'
						/>
					</div>

					<div>
						<label className='text-white font-medium'>Password</label>
						<input
							type='password'
							className='mt-2 w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none 
              focus:ring-2 focus:ring-white/80 transition shadow-inner'
							placeholder='********'
						/>
					</div>

					<motion.button
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						className='w-full py-3 mt-4 text-lg font-semibold rounded-xl bg-white/90 text-purple-700 shadow-xl
            hover:bg-white transition relative overflow-hidden'
					>
						<span>Login</span>
					</motion.button>
				</form>
			</motion.div>
		</div>
	)
}
