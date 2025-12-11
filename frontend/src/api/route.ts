// app/api/contact/route.ts
import { NextResponse } from 'next/server'

// ContactResource tipini import qilish (agar yo‘q bo‘lsa, quyida yaratamiz)
import type { Contact } from '@/types/contact'

const CONTACT_DATA: Contact[] = [
	{
		id: 1,
		title: 'Telegram',
		description: 'Tezkor javob beraman, 24/7 yordam',
		link: 'https://t.me/alibek_allaberganov',
		icon: 'telegram',
	},
	{
		id: 2,
		title: 'Instagram',
		description: 'Talabalar natijalari, darslar va yangiliklar',
		link: 'https://instagram.com/alibek_ielts',
		icon: 'instagram',
	},
	{
		id: 3,
		title: 'Telefon',
		description: '+998 99 123 45 67 (qo‘ng‘iroq yoki WhatsApp)',
		link: 'tel:+998991234567',
		icon: 'phone',
	},
	{
		id: 4,
		title: 'Email',
		description: 'Rasmiy xatlar va hamkorlik uchun',
		link: 'mailto:alibek@english.uz',
		icon: 'mail',
	},
]

export async function GET() {
	return NextResponse.json(CONTACT_DATA)
}
