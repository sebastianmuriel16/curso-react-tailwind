import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Layout } from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { OrdersCard } from '../../Components/OrdersCard'

function MyOrders() {
  const { order } = useContext(ShoppingCartContext)
  return (
    <Layout>
      My Orders
      {order.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            fecha={order.date.toString()}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
        )
      })}
    </Layout>
  )
}

export { MyOrders }
