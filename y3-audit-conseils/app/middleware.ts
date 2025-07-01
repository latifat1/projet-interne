import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const cookie = request.cookies.get('admin-auth')?.value
    if (cookie !== process.env.ADMIN_PASSWORD) {
      const loginUrl = request.nextUrl.clone()
      loginUrl.pathname = '/admin-login'
      return NextResponse.redirect(loginUrl)
    }
  }
  return NextResponse.next()
} 