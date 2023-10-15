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

  //items filtered by category
  const [searchByCategory, setSearchByCategory] = useState(null)

  //filtered items by category
  //const [filteredCategoryItems, setFilteredCategoryItems] = useState(null) //al final no este estado no fue usado
  

  const filteredItemsByTitle = (items,searchByTitle) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items,searchByCategory) => {
    return items?.filter((item) => item.category.name.toLowerCase() === searchByCategory.toLowerCase())
  }

  const filterBy = (searchType, items,searchByTitle,searchByCategory) => {
    if(searchType === 'BY_TITLE'){
      return filteredItemsByTitle(items,searchByTitle)
    }
    if(searchType === 'BY_CATEGORY'){
      return filteredItemsByCategory(items,searchByCategory)  
    }
    if(searchType === 'BY_TITLE_AND_CATEGORY'){
      return filteredItemsByCategory(items,searchByCategory).filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    if(!searchType){
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items,searchByTitle,searchByCategory])

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
        setFilteredItems,
        searchByCategory,
        setSearchByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartContext, ShoppingCartProvider }
