'use client'

import { useApp } from '@/contexts/app-context'
import { ReactNode } from 'react'

interface LanguageWrapperProps {
	children: (language: 'uz' | 'en') => ReactNode
}

export function LanguageWrapper({ children }: LanguageWrapperProps) {
	const { language } = useApp()

	return <>{children(language)}</>
}
