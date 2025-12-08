'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

interface Testimonial {
	_id: string
	name: string
	message: string
	createdAt: number
}

export function TestimonialsManager() {
	const [name, setName] = useState('')
	const [message, setMessage] = useState('')

	// Fake testimonials data
	const [testimonials, setTestimonials] = useState<Testimonial[]>([
		{
			_id: '1',
			name: 'Ali Ahmedov',
			message: "Bu kurs mening hayotimni o'zgartirdi. Rahmat!",
			createdAt: Date.now(),
		},
		{
			_id: '2',
			name: 'Malika Karimova',
			message: 'Juda foydali kurs. Barcha savollarimga javob oldim.',
			createdAt: Date.now(),
		},
	])

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (name.trim() && message.trim()) {
			const newTestimonial: Testimonial = {
				_id: Date.now().toString(),
				name: name.trim(),
				message: message.trim(),
				createdAt: Date.now(),
			}

			setTestimonials([...testimonials, newTestimonial])

			setName('')
			setMessage('')
		}
	}

	const handleRemove = (id: string) => {
		setTestimonials(testimonials.filter(t => t._id !== id))
	}

	return (
		<div className='max-w-4xl mx-auto p-6'>
			<h2 className='text-2xl font-bold mb-6'>Testimonials Boshqaruvi</h2>

			{/* Yangi testimonial qo'shish */}
			<form
				onSubmit={handleSubmit}
				className='mb-8 p-6 bg-white rounded-lg shadow'
			>
				<h3 className='text-lg font-semibold mb-4'>
					Yangi Testimonial Qo'shish
				</h3>

				<div className='space-y-4'>
					<Input
						placeholder='Ism'
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>

					<Textarea
						placeholder='Xabar'
						value={message}
						onChange={e => setMessage(e.target.value)}
						required
						rows={3}
					/>

					<Button type='submit'>Qo‘shish</Button>
				</div>
			</form>

			{/* Testimonials list */}
			<div className='space-y-4'>
				<h3 className='text-lg font-semibold'>Mavjud Testimonials</h3>

				{testimonials.map(t => (
					<div key={t._id} className='p-4 bg-white rounded-lg shadow border'>
						<div className='flex justify-between items-start'>
							<div>
								<h4 className='font-semibold'>{t.name}</h4>
								<p className='text-gray-600 mt-1'>{t.message}</p>
								<p className='text-sm text-gray-400 mt-2'>
									{new Date(t.createdAt).toLocaleDateString()}
								</p>
							</div>

							<Button
								variant='destructive'
								size='sm'
								onClick={() => handleRemove(t._id)}
							>
								O‘chirish
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
