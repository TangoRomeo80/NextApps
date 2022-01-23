import { useRouter } from 'next/router'
import Link from 'next/link'

const CoffeeStore = () => {

  return (
    <div>
      Coffee Store Page 
      <Link href='/'>
        <a>back to home</a>
      </Link>
      <Link href='/coffee-store/dynamic'>
        <a>Go to page dynamic</a>
      </Link>
    </div>
  )
}

export default CoffeeStore
