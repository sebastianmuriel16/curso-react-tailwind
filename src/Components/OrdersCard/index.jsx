const OrdersCard = ({ totalPrice, totalProducts, fecha }) => {

  const day = fecha.substring(0, 10)
  const year = fecha.substring(11, 15)

  return (
    <div className="flex flex-col justify-between items-center w-80 gap-2 mt-6 px-6 mb-3 border rounded-xl border-black">
        <span >{'Fecha : ' + day + ' ' + year}</span>
        <span >{'Ctd. Prod : ' + totalProducts}</span>
        <span >{'total : $' + totalPrice}</span>
    </div>
  )
}

export { OrdersCard }
