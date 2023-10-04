import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckOutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
  } = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id !== id)
    setCartProducts(filteredProducts)
  }

  const handleCheckOut = () => {
    const orderToAdd = {
      date: new Date(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      total: totalPrice(cartProducts),
    }
    setOrder([...order, orderToAdd])
    setCartProducts([])
  }

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XCircleIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={closeCheckoutSideMenu}
          />
        </div>
      </div>
      <div className="overflow-y-scroll flex-1">
        {cartProducts.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imagenUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          )
        })}
      </div>
      <footer className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <button
          className="w-full bg-black py-3 text-white rounded-lg"
          onClick={() => handleCheckOut()}
        >
          Checkout
        </button>
      </footer>
    </aside>
  )
}

export { CheckOutSideMenu }
