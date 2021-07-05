const {v4} = require("uuid")

const products = [{
  _id: v4(),
  name:"Iphone X",
  price:40000
},
{
  _id: v4(),
  name:"Iphone SE",
  price:10000
},
{
  _id: v4(),
  name:"Samsung S10",
  price:36000
  }]

module.exports = products