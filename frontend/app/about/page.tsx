import CertificatesSection from '@/components/about/CertificatesSection'
import HeroSection from '@/components/about/HeroSection'
import MyStory from '@/components/about/MyStory'
import Stats from '@/components/about/Stats'

export default function AboutPage() {
	return (
		<div>
			<HeroSection />
			<MyStory />
			<Stats />
			<CertificatesSection />
		</div>
	)
}
