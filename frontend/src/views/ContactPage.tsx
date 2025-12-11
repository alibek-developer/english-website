'use client'

import ContactCard from '@/components/contact/ContactCard'
import ContactList from '@/components/contact/ContactList'
const contactResources = [
	{
		id: 1,
		title: 'Telegram',
		description: 'Tezkor javob beraman 24/7',
		link: 'https://t.me/alibek_allaberganov',
		icon: 'telegram',
		type: 'messenger', // agar type majburiy bo‘lsa
	},
	{
		id: 2,
		title: 'Instagram',
		description: 'Kurslar, natijalar va yangiliklar',
		link: 'https://instagram.com/alibek_ielts',
		icon: 'instagram',
		type: 'social',
	},
	{
		id: 3,
		title: 'Telefon',
		description: '+998 99 123 45 67',
		link: 'tel:+998991234567',
		icon: 'phone',
		type: 'call',
	},
	{
		id: 4,
		title: 'Email',
		description: 'Rasmiy xatlar uchun',
		link: 'mailto:alibek@example.com',
		icon: 'mail',
		type: 'email',
	},
]
export function ContactPage() {
	return (
		<div className='min-h-screen py-12'>
			<div className='container mx-auto px-4'>
				<h1 className='text-3xl font-bold text-center mb-12'>Contact Us</h1>
				<div className='grid md:grid-cols-2 gap-12'>
					<ContactCard resource={contactResources[0]} />
					<ContactList initialResources={contactResources} />
				</div>
			</div>
		</div>
	)
}
