import { AboutPage } from '@/components/pages/about-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About Us - Wave English',
	description:
		'Learn about Wave English and our mission to provide quality English education.',
}

export default function About() {
	return <AboutPage />
}

