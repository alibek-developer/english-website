import { CoursesPage } from '@/components/pages/courses-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Courses - Wave English',
	description: 'Explore our comprehensive English courses for all levels.',
}

export default function Courses() {
	return <CoursesPage />
}

