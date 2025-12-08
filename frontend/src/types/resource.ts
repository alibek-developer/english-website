// types/resource.ts
export type ResourceType = 'pdf' | 'video' | 'article' | 'other'

export interface Resource {
	id: string
	title: string
	description: string
	type: ResourceType
	link: string
	thumbnail?: string
	tags?: string[]
	createdAt?: string
}
