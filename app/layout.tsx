import { ClientProvider } from '@/components/ClientProvider'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Wave English',
	description: 'Professional ingliz tili kurslari',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='uz' suppressHydrationWarning>
			<body className={inter.className}>
				<ClientProvider>
					<div className='min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300'>
						<Navigation />
						<main>{children}</main>
						<Footer />
						<WhatsAppButton />
					</div>
				</ClientProvider>
			</body>
		</html>
	)
}
