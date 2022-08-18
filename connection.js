require("dotenv").config()
const {Pool}=require("pg")
const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"postgres",
    password:process.env.pass,
    port:5432
})
pool.connect((err,res)=>{
    if(!err){
        console.log("db connected")
    }else{
        console.log(err)    
    }
})
module.exports=pool