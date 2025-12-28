import { ContactPage } from '@/components/pages/contact-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Contact Us - Wave English',
	description: 'Get in touch with Wave English for any questions or inquiries.',
}

export default function Contact() {
	return <ContactPage />
}

