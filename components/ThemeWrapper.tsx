'use client'

import { useApp } from '@/contexts/app-context'
import { useEffect } from 'react'

interface ThemeWrapperProps {
	children: React.ReactNode
}

export function ThemeWrapper({ children }: ThemeWrapperProps) {
	const { theme } = useApp()

	useEffect(() => {
		const root = document.documentElement

		if (theme === 'dark') {
			root.classList.add('dark')
		} else {
			root.classList.remove('dark')
		}
	}, [theme])

	return <>{children}</>
}
