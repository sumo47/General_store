const express = require("express")
const router = express.Router()
const productController = require("../controller/productController")

// router.all("/*",function(req,res){
//     return res.status(400).send({status:false,message:"invalid path"})
// })


router.post("/", productController.createProduct)

module.exports = router