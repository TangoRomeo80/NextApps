import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
  params: {
    id: number
  }
}

const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound() // This is a custom function that will throw a 404 error
  return <div>UserDetailPage {id}</div>
}

export default UserDetailPage
