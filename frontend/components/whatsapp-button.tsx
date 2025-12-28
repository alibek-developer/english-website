'use client'

import { useApp } from '@/contexts/app-context'
import dynamic from 'next/dynamic'

// Iconni Telegramga mosroq qilamiz (Send - qog'oz samolyotcha)
const Send = dynamic(() => import('lucide-react').then(mod => mod.Send), {
	ssr: false,
	loading: () => <div className='h-6 w-6' />,
})

export function WhatsAppButton() {
	// Nomini o'zgartirmadik, xatolik bermasligi uchun
	const { language } = useApp()

	// Telegram username'ni kiriting
	const telegramUsername = 'wave_english'

	return (
		<a
			href={`https://t.me/${telegramUsername}`}
			target='_blank'
			rel='noopener noreferrer'
			className='fixed bottom-6 right-6 bg-[#229ED9] hover:bg-[#1d8db2] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center'
			aria-label='Contact us on Telegram'
		>
			{/* Telegram ikonkasi */}
			<Send className='h-6 w-6 -translate-x-0.5 translate-y-0.5' />
		</a>
	)
}
