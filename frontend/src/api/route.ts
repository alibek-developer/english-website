// app/api/resources/route.ts
import type { Resource } from '@/types/contact'
import { NextResponse } from 'next/server'

const SAMPLE: Resource[] = [
	{
		id: 'r1',
		title: 'IELTS Listening Tips',
		description: 'Short guide and practice tasks for IELTS Listening.',
		type: 'pdf',
		link: '/assets/resources/ielts-listening.pdf',
		thumbnail: '/assets/images/res-1.jpg',
		tags: ['IELTS', 'Listening'],
		createdAt: new Date().toISOString(),
	},
	{
		id: 'r2',
		title: 'Academic Writing - Task 2',
		description: 'Video lesson on how to structure essay in Task 2.',
		type: 'video',
		link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		thumbnail: '/assets/images/res-2.jpg',
		tags: ['Writing', 'Academic'],
		createdAt: new Date().toISOString(),
	},
	// ...more sample items
]

export async function GET() {
	// replace with DB call if you have one
	return NextResponse.json(SAMPLE)
}
