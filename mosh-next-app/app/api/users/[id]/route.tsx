import { NextRequest, NextResponse } from 'next/server'
import schema from '../schema'
import prisma from '@/prisma/client'

interface Props {
  params: {
    id: string
  }
}

// Function to get a single user by id
// export function GET(request: NextRequest, { params }: Props) {
//   // Fetch data from db
//   // If not user found thenn send 404 error
//   // Otherwise return user
//   if (params.id > 10) {
//     return NextResponse.json(
//       {
//         error: 'User not found',
//       },
//       { status: 404 }
//     )
//   }
//   return NextResponse.json({
//     id: params.id,
//     name: 'John Doe',
//   })
// }
export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  })
  if (!user) {
    return NextResponse.json(
      {
        error: 'User not found',
      },
      { status: 404 }
    )
  }
  return NextResponse.json(user)
}

// Function to update a user by id
// export async function PUT(request: NextRequest, { params }: Props) {
//   // Validate the body
//   const body = await request.json()
//   // If body is invalid then send 400 error
//   const validation = schema.safeParse(body)
//   if (!validation.success) {
//     return NextResponse.json(validation.error.errors, { status: 400 })
//   }
//   // Otherwise Fetch data from db
//   // If not user found then send 404 error
//   if (params.id > 10) {
//     return NextResponse.json(
//       {
//         error: 'User not found',
//       },
//       { status: 404 }
//     )
//   }
//   // Otherwise update user and return updated user
//   return NextResponse.json({
//     id: params.id,
//     name: body.name,
//   })
// }
export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  })

  if (!user) {
    return NextResponse.json(
      {
        error: 'User not found',
      },
      { status: 404 }
    )
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      name: body.name,
      email: body.email,
    },
  })

  return NextResponse.json(updatedUser, { status: 200 })
}

// Function to delete a user by id
// export function DELETE(request: NextRequest, { params }: Props) {
//   // Fetch data from db
//   // If not user found then send 404 error
//   if (params.id > 10) {
//     return NextResponse.json(
//       {
//         error: 'User not found',
//       },
//       { status: 404 }
//     )
//   }
//   // Otherwise delete user and return 204 status
//   return NextResponse.json({}, { status: 204 })
// }
export async function DELETE(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  })

  if (!user) {
    return NextResponse.json(
      {
        error: 'User not found',
      },
      { status: 404 }
    )
  }

  await prisma.user.delete({
    where: {
      id: parseInt(params.id),
    },
  })

  return NextResponse.json({}, { status: 204 })
}
