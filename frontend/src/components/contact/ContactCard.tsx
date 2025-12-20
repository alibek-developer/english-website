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
		<article className='group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-xl dark:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-sky-500/20 dark:hover:shadow-sky-400/30'>
			{/* Gradient overlay */}
			<div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

			{/* Content */}
			<div className='relative p-8 text-center'>
				{/* Ikonka */}
				<div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 shadow-lg group-hover:scale-110 transition-transform duration-300'>
					<div className='text-sky-600 dark:text-sky-400'>{icon}</div>
				</div>

				{/* Sarlavha */}
				<h3 className='text-2xl font-black text-gray-900 dark:text-white mb-3'>
					{resource.title}
				</h3>

				{/* Tavsif */}
				<p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-xs mx-auto mb-8'>
					{resource.description}
				</p>

				{/* Tugma */}
				<a
					href={resource.link}
					target={isExternal ? '_blank' : '_self'}
					rel={isExternal ? 'noopener noreferrer' : undefined}
					className='inline-flex items-center gap-3 rounded-2xl bg-sky-600 dark:bg-sky-500 px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95'
				>
					Bog‘lanish
					<ExternalLink className='w-5 h-5' />
				</a>
			</div>

			{/* Hover chiroyli chiziq */}
			<div className='absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left' />
		</article>
	)
}
