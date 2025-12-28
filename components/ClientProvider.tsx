'use client'

import { ThemeWrapper } from '@/components/ThemeWrapper'
import { AppProvider } from '@/contexts/app-context'

interface ClientProviderProps {
	children: React.ReactNode
}

export function ClientProvider({ children }: ClientProviderProps) {
	return (
		<AppProvider>
			<ThemeWrapper>{children}</ThemeWrapper>
		</AppProvider>
	)
}
