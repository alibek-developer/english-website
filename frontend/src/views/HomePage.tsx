'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/home/HeroSection'
import { StatsSection } from '@/components/home/StatsSection'
import { FeaturedCourses } from '@/components/home/FeaturedCourses'
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel'

function TestimonialsCarousel() {
	return (
		<section className="py-20 bg-slate-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
						O'quvchilarimiz <span className="text-sky-600">Fikrlari</span>
					</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						Minglab o'quvchilarning muvaffaqiyat hikoyalari
					</p>
				</div>
			</div>
		</section>
	)
}
import { CTASection } from '@/components/home/CTASection'

export function HomePage() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<HeroSection />
			<StatsSection />
			<FeaturedCourses />
			<TestimonialsCarousel />
			<CTASection />
		</motion.div>
	)
}
