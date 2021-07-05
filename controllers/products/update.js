const {products} = require("../../data")

const update = (req, res, next) => {
  const { id } = req.params
  const updatedProduct = req.body
  const idx = products.findIndex(({_id}) => _id === id)
  if (idx === -1) {
    return res.status(404).json({
      status: "error",
      code:404,
      message:"Product not found"
    })
  }
  if (!updatedProduct.name || !updatedProduct.price) {
    return res.status(400).json({
      status: "error",
      code:400,
      message:"Missing name or price"
    })
  }
  products[idx] = updatedProduct
  res.json({
    status: "success",
    code:200,
    body:{
      result:updatedProduct
    }
  })
}

module.exports = update