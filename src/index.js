const express = require("express")
const routes = require("./routes/route")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.set("strictQuery",true)
mongoose.connect("mongodb+srv://sumit:sumit47@cluster0.8dflsuw.mongodb.net/general_store",{
    useNewUrlParser:true
})

.then(()=>console.log("MongoDb is Connected"))
.catch((err=>console.log(err)))

app.use("/",routes) 
var port = 3000

app.listen(process.env.Port||port,()=>{
    console.log("Express App Running on Port",+(process.env.Port||port))
})