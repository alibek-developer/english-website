// components/contact/ContactCard.tsx
'use client'

import { Contact } from '@/types/contact'
import {
	ExternalLink,
	Instagram,
	Mail,
	MessageCircle,
	Phone,
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
	telegram: <MessageCircle className='w-6 h-6' />,
	instagram: <Instagram className='w-6 h-6' />,
	phone: <Phone className='w-6 h-6' />,
	mail: <Mail className='w-6 h-6' />,
	default: <ExternalLink className='w-6 h-6' />,
}

export default function ContactCard({ resource }: { resource: Contact }) {
	const isExternal =
		resource.link.startsWith('http') || resource.link.startsWith('mailto')
	const icon = iconMap[resource.icon] || iconMap.default

	return (
		<article className='group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1a2e] to-[#0b1426] border border-white/10 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/20'>
			{/* Gradient overlay */}
			<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

			{/* Content */}
			<div className='relative p-8 text-center'>
				{/* Ikonka */}
				<div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-300'>
					<div className='text-cyan-400'>{icon}</div>
				</div>

				{/* Sarlavha */}
				<h3 className='text-2xl font-black text-white mb-3'>
					{resource.title}
				</h3>

				{/* Tavsif */}
				<p className='text-white/70 text-sm leading-relaxed max-w-xs mx-auto mb-8'>
					{resource.description}
				</p>

				{/* Tugma */}
				<a
					href={resource.link}
					target={isExternal ? '_blank' : '_self'}
					rel={isExternal ? 'noopener noreferrer' : undefined}
					className='inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-[#0b1426] shadow-lg transition-all hover:scale-105 hover:shadow-2xl active:scale-95'
				>
					Bog‘lanish
					<ExternalLink className='w-5 h-5' />
				</a>
			</div>

			{/* Hover chiroyli chiziq */}
			<div className='absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left' />
		</article>
	)
}
