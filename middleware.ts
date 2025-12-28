import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
	const res = NextResponse.next()
	const supabase = createMiddlewareClient({ req, res })

	// Faqat /admin route'ni himoyalaymiz
	if (req.nextUrl.pathname.startsWith('/admin')) {
		const {
			data: { session },
		} = await supabase.auth.getSession()

		// Agar session bo'lmasa, login ga redirect qilamiz
		if (!session) {
			const redirectUrl = new URL('/login', req.url)
			return NextResponse.redirect(redirectUrl)
		}
	}

	return res
}

export const config = {
	matcher: ['/admin/:path*'],
}
