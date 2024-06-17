import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const token = request.cookies.get('token')?.value

	if (!token && request.nextUrl.pathname.startsWith('/notes')) {
		return Response.redirect(new URL('/sign-in', request.url))
	}
	if (!token && request.nextUrl.pathname.startsWith('/tasks')) {
		return Response.redirect(new URL('/sign-in', request.url))
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
