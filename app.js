const express = require("express")
const cors = require("cors")
const app = express()
const api = require("./api")
app.use(cors())

app.use("/products",api.products)
app.use("/users",api.users)

app.use((_, res) => {
  res.status(404).json({
    status:"error",
    code: 404,
    message:"Not found"
  })
})

app.listen(3000)