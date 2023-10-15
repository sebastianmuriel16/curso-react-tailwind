import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import { Home } from '../Home/index.jsx'
import { Myaccount } from '../Myaccount/Myaccount.jsx'
import { MyOrder } from '../MyOrder/MyOrder.jsx'
import { MyOrders } from '../MyOrders/MyOrders.jsx'
import { NotFound } from '../NotFound/NotFound.jsx'
import { SingIn } from '../SignIn/SingnIn.jsx'
import { Navbar } from '../../Components/Navbar'
import { CheckOutSideMenu } from '../../Components/CheckOutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <Myaccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> }, // el id es por el numero de orden o el index del arreglo de ordenes
    { path: '/sign-in', element: <SingIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
