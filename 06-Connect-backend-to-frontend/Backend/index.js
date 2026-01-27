import express from "express"
const app = express();
const port = 8000;

app.get ("/",(req,res)=>{
    res.json({Name:"saish",Age:22,Class:"BE"})
})


app.listen(port,()=>{
   console.log("SERVER STARTED AT" + port)
})