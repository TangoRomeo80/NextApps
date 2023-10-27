// Route files hanndle hhtp requests and responses for the API

import { NextRequest, NextResponse } from 'next/server'
import schema from './schema'
import prisma from '@/prisma/client'

// Get method to get multiple users
// export function GET(request: NextRequest) {
//   // fetch users from a db, but now we just return a dummy object
//   return NextResponse.json([
//     {
//       id: 1,
//       name: 'John Doe',
//     },
//     {
//       id: 2,
//       name: 'Jane Doe',
//     },
//   ])
// }
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

// Post method to create a new user
// export async function POST(request: NextRequest) {
//   // fetch users from a db, but now we just return a dummy object
//   const body = await request.json()
//   // Do basic validation
//   const validation = schema.safeParse(body)
//   if (!validation.success) {
//     return NextResponse.json(validation.error.errors, { status: 400 })
//   }
//   return NextResponse.json({
//     id: 1,
//     name: body.name,
//   })
// }
export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  })

  if (user) {
    return NextResponse.json(
      {
        error: 'User already exists',
      },
      { status: 400 }
    )
  }

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  })
  return NextResponse.json(newUser, { status: 201 })
}
