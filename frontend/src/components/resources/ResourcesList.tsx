// components/resources/ResourcesList.tsx
'use client'

import { Resource } from '@/types/resource'
import { useMemo, useState } from 'react'
import ResourceCard from './ResourceCard'

export default function ResourcesList({
	initialResources,
}: {
	initialResources: Resource[]
}) {
	const [query, setQuery] = useState('')
	const [tagFilter, setTagFilter] = useState<string | null>(null)
	const [page, setPage] = useState(1)
	const perPage = 6

	const tags = useMemo(() => {
		const s = new Set<string>()
		initialResources.forEach(r => r.tags?.forEach(t => s.add(t)))
		return Array.from(s)
	}, [initialResources])

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase()
		return initialResources.filter(r => {
			if (tagFilter && !(r.tags || []).includes(tagFilter)) return false
			if (!q) return true
			return (
				r.title.toLowerCase().includes(q) ||
				r.description.toLowerCase().includes(q) ||
				(r.tags || []).join(' ').toLowerCase().includes(q)
			)
		})
	}, [initialResources, query, tagFilter])

	const total = filtered.length
	const pages = Math.max(1, Math.ceil(total / perPage))
	const start = (page - 1) * perPage
	const pageItems = filtered.slice(start, start + perPage)

	return (
		<section>
			<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6'>
				<div className='flex items-center gap-3 w-full md:w-1/2'>
					<input
						value={query}
						onChange={e => {
							setQuery(e.target.value)
							setPage(1)
						}}
						placeholder='Search resources (title, tags, description)...'
						className='w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500'
						aria-label='Search resources'
					/>
				</div>

				<div className='flex items-center gap-2 flex-wrap'>
					<button
						onClick={() => {
							setTagFilter(null)
							setPage(1)
						}}
						className={`px-3 py-2 rounded-md border ${tagFilter === null ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-200'}`}
					>
						All
					</button>
					{tags.map(tag => (
						<button
							key={tag}
							onClick={() => {
								setTagFilter(prev => (prev === tag ? null : tag))
								setPage(1)
							}}
							className={`px-3 py-2 rounded-md border ${tagFilter === tag ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-200'}`}
						>
							{tag}
						</button>
					))}
				</div>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{pageItems.map(r => (
					<ResourceCard key={r.id} resource={r} />
				))}
			</div>

			<div className='mt-8 flex items-center justify-between'>
				<div className='text-slate-400'>{total} resources</div>
				<div className='flex items-center gap-2'>
					<button
						onClick={() => setPage(p => Math.max(1, p - 1))}
						disabled={page === 1}
						className='px-3 py-2 rounded bg-slate-800 disabled:opacity-50'
					>
						Previous
					</button>
					<div className='px-3 py-2 bg-slate-800 rounded'>
						{page} / {pages}
					</div>
					<button
						onClick={() => setPage(p => Math.min(pages, p + 1))}
						disabled={page === pages}
						className='px-3 py-2 rounded bg-slate-800 disabled:opacity-50'
					>
						Next
					</button>
				</div>
			</div>
		</section>
	)
}
