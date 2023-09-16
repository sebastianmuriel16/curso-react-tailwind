import { useRoutes,BrowserRouter } from 'react-router-dom'
import { Home } from '../Home/index.jsx'
import { Myaccount } from '../Myaccount/Myaccount.jsx'
import { MyOrder } from '../MyOrder/MyOrder.jsx'
import { MyOrders } from '../MyOrders/MyOrders.jsx'
import { NotFound } from '../NotFound/NotFound.jsx'
import { SingIn } from '../SignIn/SingnIn.jsx'
import { Navbar } from '../../Components/Navbar'
import './App.css' 

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/my-account', element: <Myaccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/sign-in', element: <SingIn/> },
    { path: '/*', element: <NotFound/> }
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>  
  )
}

export default App
