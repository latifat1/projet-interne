import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { password } = await request.json()
  if (password === process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ ok: true }, {
      status: 200,
      headers: {
        'Set-Cookie': `admin-auth=${process.env.ADMIN_PASSWORD}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`
      }
    })
  }
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}

export async function DELETE() {
  return NextResponse.json({ ok: true }, {
    status: 200,
    headers: {
      'Set-Cookie': 'admin-auth=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0'
    }
  })
} 