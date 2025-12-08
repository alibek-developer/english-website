// components/resources/ResourceCard.tsx
'use client'

import { Resource } from '@/types/resource'
import { ArrowDown, ExternalLink } from 'lucide-react'

export default function ResourceCard({ resource }: { resource: Resource }) {
	const isExternal = resource.link.startsWith('http')
	return (
		<article className='bg-slate-800 border border-slate-700 rounded-lg overflow-hidden shadow'>
			<div className='h-44 bg-slate-700 flex items-center justify-center'>
				{resource.thumbnail ? (
					<img
						src={resource.thumbnail}
						alt={resource.title}
						className='object-cover w-full h-44'
					/>
				) : (
					<div className='text-slate-400'>{resource.type.toUpperCase()}</div>
				)}
			</div>

			<div className='p-4'>
				<h3 className='text-lg font-semibold text-slate-100'>
					{resource.title}
				</h3>
				<p className='text-slate-300 mt-2 text-sm line-clamp-3'>
					{resource.description}
				</p>

				<div className='flex items-center justify-between mt-4'>
					<div className='flex items-center gap-2 flex-wrap'>
						{(resource.tags || []).slice(0, 3).map(tag => (
							<span
								key={tag}
								className='text-xs px-2 py-1 rounded bg-slate-700 text-slate-300'
							>
								{tag}
							</span>
						))}
					</div>

					<div className='flex items-center gap-2'>
						<a
							href={resource.link}
							target={isExternal ? '_blank' : '_self'}
							rel={isExternal ? 'noopener noreferrer' : undefined}
							className='inline-flex items-center gap-2 px-3 py-2 rounded bg-sky-600 hover:bg-sky-700 text-white text-sm'
						>
							Open <ExternalLink className='w-4 h-4' />
						</a>

						<a
							href={resource.link}
							download
							className='inline-flex items-center gap-2 px-3 py-2 rounded border border-slate-700 text-sm text-slate-100 bg-slate-800 hover:bg-slate-700'
						>
							<ArrowDown className='w-4 h-4' /> Download
						</a>
					</div>
				</div>
			</div>
		</article>
	)
}
