const express = require("express")

const {products:ctrl} = require('../controllers')

const router = express.Router()

router.get("/", ctrl.getAll)
router.get("/:id", ctrl.getOne)
router.post("/",express.json(), ctrl.add)
router.post("/:id", express.json(), ctrl.update)
router.delete("/:id",express.json(),ctrl.del) 
module.exports = router