import { ResourcesPage } from '@/components/pages/resources-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Resources - Wave English',
	description: 'Free English learning resources and materials.',
}

export default function Resources() {
	return <ResourcesPage />
}

