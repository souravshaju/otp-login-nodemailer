const express=require("express")
const app=express()
const morgan=require("morgan")
const router=require("./routes/login")
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',router)
const port=3000
app.listen(port,()=>{
    console.log("server started")
})