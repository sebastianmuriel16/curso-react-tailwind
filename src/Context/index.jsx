import { createContext, useState, useEffect } from 'react'


const ShoppingCartContext = createContext()


const ShoppingCartProvider = ({ children }) => {
  //llamado a la API
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setItems(data))
  }, [])

  //get products
  const [items, setItems] = useState(null)

  // Shopping cart increment count
  const [count, setCount] = useState(0)

  //show detail open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  //checkout side menu open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  //show product detail
  const [productToShow, setProductToShow] = useState({})
  // shipping cart Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping cart - Order
  const [order, setOrder] = useState([])

  //get products by title-search
  const [searchByTitle, setSearchByTitle] = useState(null)

  //items filtered by title
  const [filteredItems, setFilteredItems] = useState(null)

  const filteredItemsByTitle = (items,searchByTitle) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if(searchByTitle){
      setFilteredItems(filteredItemsByTitle(items,searchByTitle))
    }
  }, [searchByTitle])

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartContext, ShoppingCartProvider }
