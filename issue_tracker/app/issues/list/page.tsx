import Pagination from '@/app/components/Pagination'
import prisma from '@/prisma/client'
import { Status } from '@prisma/client'
import IssueActions from './IssueActions'
import IssueTable, { IssueQuery, columnNames } from './IssueTable'
import { Metadata } from 'next'

interface Props {
  searchParams: IssueQuery
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined

  const where = { status }

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: 'asc' }
    : undefined

  const page = parseInt(searchParams.page) || 1
  const pageSize = 10

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  const issueCount = await prisma.issue.count({ where })

  return (
    <div>
      <IssueActions />
      <IssueTable searchParams={searchParams} issues={issues} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </div>
  )
}

// make this page dynamic
export const dynamic = 'force-dynamic'
//export const revalidate = 0 // The output will be revalidated every 0 seconds

export const metadata: Metadata = {
  title: 'Issue Tracker - Issue List',
  description: 'View all project issues',
}

export default IssuesPage
