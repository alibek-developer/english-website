import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from './components/NextFooter'
import { Navigation } from './components/NextNavigation'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Tulkin Rajabbaev - Professional English Teacher',
	description:
		'Learn English with Alibek Allaberganov, IELTS 8.0+ expert and professional English teacher in Tashkent, Uzbekistan.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<Navigation />
					<main className='pt-20'>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
