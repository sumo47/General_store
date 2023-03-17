const mongoose = require("mongoose")
const productModel = require("../model/product")


const createProduct = async (req,res) =>{
    try {
            let data = req.body

            if(!data.title){ return res.status(404).send({status:false, message:"Please endle title"})}
            if(!data.description){ return res.status(404).send({status:false, message:"Please endle description"})}
            if(!data.category){ return res.status(404).send({status:false, message:"Please endle category"})}
            if(!data.quantity){ return res.status(404).send({status:false, message:"Please endle quantity"})}
            if(!data.price) {return res.status(404).send({status:false, message:"Please endle price"})}

            let Duplicate = await productModel.findOne({title:data.title, isDeleted:false})
            if(Duplicate) return res.status(404).send({Status:false, message:"Please enter unique product"})

            let savedData = await productModel.create(data)
            return res.status(201).send({status:"Success", message:savedData})
    } catch (error) {
        res.status(500).send({status:false, message:error.message})
    }
}

module.exports.createProduct = createProduct