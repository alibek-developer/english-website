import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'

export default function ContactPage() {
	return (
		<div className='container mx-auto py-10'>
			<ContactInfo />
			<ContactForm />
		</div>
	)
}
