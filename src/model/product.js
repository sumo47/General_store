const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
    },
    description:{
        type:String,
        require:true,
        trim:true
    },
    category:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    isFreeShipping:{
        type:Boolean,
        default:false,
        trim:true
    },
    deletedAt:{
        type:Date,
        default:null
    },
    isDeleted:{
        type:Boolean,
        default:false
    }

},{timestamps:true})

module.exports=mongoose.model("Products", productSchema)