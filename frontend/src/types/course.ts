// types/course.ts
export interface Course {
	id: number
	title: string
	titleUz?: string
	description: string
	descriptionUz?: string
	image?: string
	category?: string
	duration?: string
	level?: string
	format?: string
	startDate?: string
	price: number
	schedule?: { day: string; time: string }[]
}
