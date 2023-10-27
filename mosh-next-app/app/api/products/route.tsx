import { NextRequest, NextResponse } from 'next/server'
import schema from './schema'
import prisma from '@/prisma/client'

// export function GET(request: NextRequest) {
//   return NextResponse.json([
//     {
//       id: 1,
//       name: 'Milk',
//       price: 2.99,
//     },
//     {
//       id: 2,
//       name: 'Bread',
//       price: 1.99,
//     },
//   ])
// }
export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany()
  return NextResponse.json(products)
}

// export async function POST(request: NextRequest) {
//   const body = await request.json()
//   const validation = schema.safeParse(body)
//   if (!validation.success) {
//     return NextResponse.json(validation.error.errors, { status: 400 })
//   }
//   return NextResponse.json(
//     {
//       id: 1,
//       name: body.name,
//       price: body.price,
//     },
//     { status: 201 }
//   )
// }
export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }
  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  })
  return NextResponse.json(product, { status: 201 })
}
