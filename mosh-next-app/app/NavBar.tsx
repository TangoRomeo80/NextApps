'use client'
import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'

const Navbar = () => {
  const { data: session, status } = useSession()

  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
      <Link href='/' className='mr-5'>
        Next.js
      </Link>
      <Link href='/users'>Users</Link>
      {/* Sign in route */}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'authenticated' && (
        <div>
          {session.user!.name}
          <Link href='/api/auth/signout' className='ml-3'>
            Sign Out
          </Link>
        </div>
      )}
      {status === 'unauthenticated' && (
        <Link href='/api/auth/signin'>Log In</Link>
      )}
    </div>
  )
}

export default Navbar
