const {products} = require("../../data")
const {v4} = require('uuid')
const add = (req, res, next) => {
  console.log(req.body)
  const newProduct = req.body
  if (!newProduct.price || !newProduct.name) {
   return res.status(400).json({
      status: "error",
      code: 400,
      message:"Missing name or price"
    })
  }
  newProduct._id = v4()
  try {
    products.push(newProduct)
    res.json({
      status: "success",
      code: 201,
      data: {
        result:newProduct
      }
      
    })
  } catch (error) {
    next(error)
  }
}

module.exports = add