import { CTASection } from '@/components/home/cta-section'
import { HeroSection } from '@/components/home/hero-section'
import { StatsSection } from '@/components/home/stats-section'
import { TestimonialsCarousel } from '@/components/home/testimonials-carousel'

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<StatsSection />
			<TestimonialsCarousel />
			<CTASection />
		</>
	)
}
