'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { useLanguage } from '@/hooks/useLanguage'
import { Course } from '@/types/course'
import { Check, CreditCard, Smartphone } from 'lucide-react'

interface CourseModalProps {
	course: Course | null
	isOpen: boolean
	onClose: () => void
}

export function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
	if (!course) return null

	const { language } = useLanguage()
	const router = useRouter() // ✅ useNavigate emas
	const { toast } = useToast()

	const [selectedPayment, setSelectedPayment] = useState<string | null>(null)

	const title =
		language === 'uz' ? course.titleUz ?? course.title : course.title
	const description =
		language === 'uz'
			? course.descriptionUz ?? course.description
			: course.description

	const rawFeatures =
		language === 'uz' ? course.featuresUz ?? course.features : course.features

	const features = Array.isArray(rawFeatures) ? rawFeatures : []

	const formatPrice = (price: number) =>
		new Intl.NumberFormat('uz-UZ').format(price) + " so'm"

	const paymentMethods = [
		{ name: 'Click', icon: Smartphone },
		{ name: 'Payme', icon: Smartphone },
		{ name: 'Uzcard', icon: CreditCard },
		{ name: 'Payze', icon: CreditCard },
	]

	const handlePayment = (method: string) => {
		setSelectedPayment(method)

		const courseTitle = title

		// ✅ NEXT.JS Router
		router.push(`/payment-success?course=${encodeURIComponent(courseTitle)}`)

		onClose()

		toast({
			title: 'To‘lovga yo‘naltirilmoqda',
			description: `${method} orqali to‘lov sahifasiga yo‘naltirildingiz`,
		})
	}

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='max-w-2xl max-h-[90vh] overflow-y-auto'>
				<DialogHeader>
					<DialogTitle className='text-2xl'>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>

				<div className='space-y-6'>
					{/* Image */}
					<div className='aspect-video bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl overflow-hidden'>
						<img
							src={course.image}
							alt={title}
							className='w-full h-full object-cover'
							onError={e => {
								e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='340'%3E%3Crect fill='%23E0F2FE' width='600' height='340'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%230F172A' font-size='24' font-family='Arial'%3E${course.category}%3C/text%3E%3C/svg%3E`
							}}
						/>
					</div>
					{/* Details */}
					<div>
						<h3 className='font-semibold text-lg mb-3'>Kurs tafsilotlari:</h3>
						<div className='grid grid-cols-2 gap-4 text-sm'>
							<div>
								<span className='text-slate-600'>Davomiyligi:</span>
								<div className='font-medium'>{course.duration}</div>
							</div>
							<div>
								<span className='text-slate-600'>Format:</span>
								<div className='font-medium capitalize'>{course.format}</div>
							</div>
							<div>
								<span className='text-slate-600'>Daraja:</span>
								<div className='font-medium'>{course.level}</div>
							</div>
							<div>
								<span className='text-slate-600'>Boshlanishi:</span>
								<div className='font-medium'>
									{new Date(course.startDate).toLocaleDateString('uz-UZ')}
								</div>
							</div>
						</div>
					</div>
					{/* Features */}
					<div>
						<h3 className='font-semibold text-lg mb-3'>Kursga kiradi:</h3>
						<ul className='space-y-2'>
							{features.map((feature: string, index: number) => (
								<li key={index} className='flex items-start gap-2'>
									<Check className='w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5' />
									<span className='text-sm text-slate-700'>{feature}</span>
								</li>
							))}
						</ul>
					</div>
					{/* Payment */}
					<div className='border-t pt-6'>
						<div className='flex items-center justify-between mb-6'>
							<div>
								<div className='text-sm text-slate-600'>Jami narx:</div>
								<div className='text-3xl font-bold text-slate-900'>
									{formatPrice(course.price)}
								</div>
							</div>
						</div>

						<div className='mb-6'>
							<h3 className='font-semibold text-sm mb-3'>
								To‘lov usulini tanlang:
							</h3>
							<div className='grid grid-cols-2 gap-3'>
								{paymentMethods.map(method => (
									<Button
										key={method.name}
										variant={
											selectedPayment === method.name ? 'default' : 'outline'
										}
										className='h-auto py-4 gap-2'
										onClick={() => handlePayment(method.name)}
									>
										<method.icon className='w-5 h-5' />
										{method.name}
									</Button>
								))}
							</div>
						</div>

						<Button
							className='w-full'
							size='lg'
							onClick={onClose}
							variant='outline'
						>
							Yopish
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
