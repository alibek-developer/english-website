'use client'

import { AppProvider } from '@/contexts/app-context'
import { ReactNode } from 'react'
import { ThemeWrapper } from './theme-wrapper'

interface ClientWrapperProps {
	children: ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
	return (
		<AppProvider>
			<ThemeWrapper>{children}</ThemeWrapper>
		</AppProvider>
	)
}
