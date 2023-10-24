import React from 'react'

interface User {
  id: number
  name: string
  email: string
}

const UsersPage = async () => {
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

  return (
    <>
      <h1>Users</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage
