// components/contact/ContactList.tsx
'use client'

import { Contact } from '@/types/contact'
import ContactCard from './ContactCard'

interface ContactListProps {
	initialResources: Contact[]
}

export default function ContactList({ initialResources }: ContactListProps) {
	return (
		<section className='py-12'>
			<div className='max-w-7xl mx-auto'>
				{/* Sarlavha */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-black text-white mb-4'>
						Menga yozing
					</h2>
					<p className='text-xl text-gray-300 max-w-2xl mx-auto'>
						Istalgan vaqtda savolingiz bo‘lsa, quyidagi kanallardan biri orqali
						bog‘laning
					</p>
				</div>

				{/* Kontakt kartalari */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
					{initialResources.map(resource => (
						<div key={resource.id} className='group'>
							<ContactCard resource={resource} />
						</div>
					))}
				</div>

				{/* Qo‘shimcha matn (ixtiyoriy) */}
				<div className='text-center mt-16'>
					<p className='text-gray-400 text-lg'>
						Javob odatda 1 soat ichida beriladi
					</p>
				</div>
			</div>
		</section>
	)
}
