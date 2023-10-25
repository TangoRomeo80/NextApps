import React from 'react'
import Link from 'next/link'
import { sort } from 'fast-sort'

interface User {
  id: number
  name: string
  email: string
}

interface Props {
  sortOrder: string
}

const UserTable = async ({ sortOrder }: Props) => {
  // Fetch users from API (server-side)
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users'
    // {
    // // Enable SSR caching
    // Caching behavior is only available for fetch, and not for third-party libraries like axios
    // next: {
    //   // Cache for 10 seconds
    //   revalidate: 10,
    // },
    // Disable caching (always fetch from server)
    // cache: 'no-store',
    // }
  )
  const users: User[] = await res.json()

  // Sort users based on props from page component
  const sortedUsers = sort(users).asc(
    sortOrder === 'email' ? (user) => user.email : (user) => user.name
  )

  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>
            <Link href='/users?sortOrder=name'>Name</Link>
          </th>
          <th>
            <Link href='/users?sortOrder=email'>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
