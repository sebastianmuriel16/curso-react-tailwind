// @param {Array} products cartProducts: Array of objects
// @return {Number} sum: total price
const totalPrice = (products) => {
  let sum = 0
  products.map((item) => {
    sum += item.price
  })
  return sum
}

export { totalPrice }
