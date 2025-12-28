'use client'

import { useApp } from '@/contexts/app-context'
import { useEffect } from 'react'

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
	const { theme } = useApp()

	useEffect(() => {
		// Initialize theme on mount from localStorage
		const savedTheme = localStorage.getItem('theme') || 'light'
		if (savedTheme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [])

	useEffect(() => {
		// Update theme when it changes
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	return <>{children}</>
}
