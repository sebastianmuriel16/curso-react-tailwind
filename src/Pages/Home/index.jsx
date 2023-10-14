import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'

function Home() {
  const { items, setSearchByTitle, searchByTitle,filteredItems } =
    useContext(ShoppingCartContext)

  const renderView = () => {
    if (searchByTitle) {
      if(filteredItems?.length > 0){
        return filteredItems.map((item) => <Card key={item.id} data={item} />)
      }else{
        return <h1 className="font-medium text-xl">No products found</h1>
      }
    
    } else {
      return items?.map((item) => <Card key={item.id} data={item} />)
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Home</h1>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export { Home }
