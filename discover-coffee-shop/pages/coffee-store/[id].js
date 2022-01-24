import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import coffeeStoresData from '../../data/coffee-stores'

export async function getStaticProps({ params }) {
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id === params.id * 1
      }),
    },
  }
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    }
  })
  return {
    paths,
    fallback: true,
  }
}

const CoffeeStore = ({ coffeeStore }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>{coffeeStore.name}</title>
      </Head>
      <Link href='/'>
        <a>back to home</a>
      </Link>
      <p>{coffeeStore.address}</p>
      <p>{coffeeStore.name}</p>
      <p>{coffeeStore.neighbourhood}</p>
    </div>
  )
}

export default CoffeeStore
