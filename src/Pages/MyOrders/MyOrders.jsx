import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'
import { Layout } from '../../Components/Layout'
function MyOrders() {
  const { order } = useContext(ShoppingCartContext)
  return (
    <Layout>
      My Orders
      <div className="flex flex-col w-80">
        {order?.slice(-1)[0]?.products.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imagenUrl={product.image}
              price={product.price}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export { MyOrders }
