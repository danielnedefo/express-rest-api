const {products} = require("../../data")

const getOne = (req, res, next) => {
  console.log(req.params)
  const { id } = req.params
  const result = products.find(({ _id }) => _id === id)
  if(!result){
   return res.status(404).json({
      status:"Error",
      code:404,
      message:"Product not found"
    })
  } 
   res.json({
      status:"success",
      code:200,
      data:{
        result
      }
    })
  
}

module.exports = getOne