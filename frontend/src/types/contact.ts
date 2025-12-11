// types/resource.ts
export type ContactType = 'pdf' | 'video' | 'article' | 'other'

// types/resource.ts
export interface Contact {
	id: number
	title: string
	description: string
	link: string
	icon: 'telegram' | 'instagram' | 'phone' | 'mail' | string // qo‘shildi!
	// yoki oddiyroq:
	// icon?: string
}
