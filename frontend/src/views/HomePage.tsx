'use client'

import { CTASection } from '@/components/home/CTASection'
import { FeaturedCourses } from '@/components/home/FeaturedCourses'
import { HeroSection } from '@/components/home/HeroSection'
import { StatsSection } from '@/components/home/StatsSection'
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel'

export function HomePage() {
	return (
		<main>
			<HeroSection />
			<StatsSection />
			<FeaturedCourses />
			<TestimonialsCarousel />
			<CTASection />
		</main>
	)
}
