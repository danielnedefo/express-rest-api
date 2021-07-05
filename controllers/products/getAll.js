const {products} = require("../../data")
const getAll = (req, res, next) => {
  console.log(req.query)  
  res.json({
      status:"success",
      code:200,
    data: {
        result:products
      }
  })
}

module.exports = getAll