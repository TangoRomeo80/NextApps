// Route files hanndle hhtp requests and responses for the API

import { NextRequest, NextResponse } from 'next/server'
import schema from './schema'

// Get method to get multiple users
export function GET(request: NextRequest) {
  // fetch users from a db, but now we just return a dummy object
  return NextResponse.json([
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe',
    },
  ])
}

// Post method to create a new user
export async function POST(request: NextRequest) {
  // fetch users from a db, but now we just return a dummy object
  const body = await request.json()
  // Do basic validation
  const validation = schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }
  return NextResponse.json({
    id: 1,
    name: body.name,
  })
}
