'use client'

import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedCourses } from '@/components/home/FeaturedCourses'
import { StatsSection } from '@/components/home/StatsSection'
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel'
import { CTASection } from '@/components/home/CTASection'

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

