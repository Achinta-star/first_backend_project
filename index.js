const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const server = express()
const database = mongoose.connection
const mongo = process.env.DATABASE
mongoose.connect(mongo)
database.on("error",(error)=>{
console.log(error)
})
database.once("connected",()=>{
    console.log("database connected")
    })
server.use(express.json())
const port = 3000
server.listen(port,()=>{
console.log(`server starts at ${port}`)

})