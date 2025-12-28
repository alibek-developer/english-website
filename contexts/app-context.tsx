'use client'

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react'

interface AppContextType {
	theme: 'light' | 'dark'
	language: 'uz' | 'en'
	isNavigating: boolean
	toggleTheme: () => void
	toggleLanguage: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
	children: ReactNode
}

// Helper function to get system theme preference
const getSystemTheme = (): 'light' | 'dark' => {
	if (typeof window === 'undefined') return 'light'
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}

// Helper function to get initial theme with system preference fallback
const getInitialTheme = (): 'light' | 'dark' => {
	if (typeof window === 'undefined') return 'light'

	const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
	return saved || getSystemTheme()
}

// Helper function to get initial language
const getInitialLanguage = (): 'uz' | 'en' => {
	// Return consistent default for SSR to prevent hydration mismatch
	// Actual localStorage value will be applied in useEffect
	return 'uz'
}

export function AppProvider({ children }: AppProviderProps) {
	const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)
	const [language, setLanguage] = useState<'uz' | 'en'>(getInitialLanguage)
	const [isNavigating, setIsNavigating] = useState(false)

	// FOUC (Flash of Unstyled Content) prevention and theme application
	useEffect(() => {
		// Apply theme immediately to prevent FOUC
		document.documentElement.setAttribute('data-theme', theme)
		document.body.classList.add('theme-loaded')

		// Save to localStorage
		localStorage.setItem('theme', theme)

		return () => {
			document.body.classList.remove('theme-loaded')
		}
	}, [theme])

	// Language persistence and sync from localStorage
	useEffect(() => {
		// Sync language from localStorage after hydration
		const savedLanguage = localStorage.getItem('language') as 'uz' | 'en' | null
		if (savedLanguage && savedLanguage !== language) {
			setLanguage(savedLanguage)
		} else {
			localStorage.setItem('language', language)
		}
	}, [])

	// Language persistence
	useEffect(() => {
		localStorage.setItem('language', language)
	}, [language])

	// System theme preference monitoring
	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

		const handleSystemThemeChange = (e: MediaQueryListEvent) => {
			// Only auto-switch if user hasn't manually set a preference
			const userPreference = localStorage.getItem('theme')
			if (!userPreference) {
				const newTheme = e.matches ? 'dark' : 'light'
				setTheme(newTheme)
			}
		}

		// Modern browsers support addEventListener
		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener('change', handleSystemThemeChange)
			return () =>
				mediaQuery.removeEventListener('change', handleSystemThemeChange)
		} else {
			// Fallback for older browsers
			mediaQuery.addListener(handleSystemThemeChange)
			return () => mediaQuery.removeListener(handleSystemThemeChange)
		}
	}, [])

	// Navigation event handling
	useEffect(() => {
		const handleNavigation = () => {
			setIsNavigating(true)
			// Reset navigation state after transition completes
			setTimeout(() => setIsNavigating(false), 300)
		}

		window.addEventListener('page-navigation', handleNavigation)

		return () => {
			window.removeEventListener('page-navigation', handleNavigation)
		}
	}, [])

	// Theme toggle function
	const toggleTheme = () => {
		setTheme(prev => {
			const newTheme = prev === 'light' ? 'dark' : 'light'
			// Force user preference by saving to localStorage
			localStorage.setItem('theme', newTheme)
			return newTheme
		})
	}

	// Language toggle function
	const toggleLanguage = () => {
		setLanguage(prev => (prev === 'uz' ? 'en' : 'uz'))
	}

	// Memoized context value for performance
	const value = useMemo<AppContextType>(
		() => ({
			theme,
			language,
			isNavigating,
			toggleTheme,
			toggleLanguage,
		}),
		[theme, language, isNavigating]
	)

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
	const context = useContext(AppContext)
	if (context === undefined) {
		throw new Error('useApp must be used within an AppProvider')
	}
	return context
}
