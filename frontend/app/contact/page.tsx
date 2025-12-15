// app/contact/page.tsx

import ContactCard from '@/components/contact/ContactCard'
import ContactList from '@/components/contact/ContactList'

const contactResources = [
	{
		id: 1,
		title: 'Telegram',
		description: 'Tezkor javob beraman 24/7',
		link: 'https://t.me/Tulkin_tour_guide',
		icon: 'telegram',
		type: 'messenger', // agar type majburiy bo‘lsa
	},
	{
		id: 2,
		title: 'Instagram',
		description: 'Kurslar, natijalar va yangiliklar',
		link: 'https://www.instagram.com/tulkin_rajabbaev',
		icon: 'instagram',
		type: 'social',
	},
	{
		id: 3,
		title: 'Telefon',
		description: '+998 99 505 16 92',
		link: 'tel:+998995051692',
		icon: 'phone',
		type: 'call',
	},
	{
		id: 4,
		title: 'Email',
		description: 'Rasmiy xatlar uchun',
		link: 'mailto:trajabboyev@gmail.com',
		icon: 'mail',
		type: 'email',
	},
]

export default function ContactPage() {
	return (
		<div className='min-h-screen bg-[#0b1327] py-16 px-6'>
			<div className='max-w-4xl mx-auto'>
				<h1 className='text-5xl font-black text-center text-white mb-4'>
					Bog‘lanish
				</h1>
				<p className='text-center text-gray-300 text-lg mb-12'>
					Savollaringiz bo‘lsa, istalgan vaqtda yozing
				</p>

				{/* Bitta kartochka (masalan, asosiy Telegram) */}
				<div className='mb-12'>
					<ContactCard resource={contactResources[0]} />
				</div>

				{/* Barcha kontaktlar ro‘yxati */}
				<ContactList initialResources={contactResources} />
			</div>
		</div>
	)
}
