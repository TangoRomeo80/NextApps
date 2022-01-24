import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Card from '../../components/Card'
import coffeeStoresData from '../../data/coffee-stores'

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  }
}

const CoffeeStoresDisplay = ({ coffeeStores }) => {
  return (
    <div>
      {coffeeStores.length > 0 && (
        <>
          <h2 className={styles.heading2}>Torronto Coffee Stores</h2>
          <div className={styles.cardLayout}>
            {coffeeStores.map((coffeeStore) => {
              return (
                <Card
                  key={coffeeStore.id}
                  name={coffeeStore.name}
                  imgUrl={coffeeStore.imgUrl}
                  href={`/coffee-store/${coffeeStore.id}`}
                />
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default CoffeeStoresDisplay
