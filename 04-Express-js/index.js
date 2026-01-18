// FIRST SEERVER ON NODE JS


import express from "express" ;

const app = express()
const port = 8000
app.get("/",(req,res) => {
    res.send("heloo")
})
app.get("/",(req,res) => {
    res.json({Name:"saish" , Class :12})
})
app.get("/about",(req,res) => {
    res.send("about: I am saish shaikh from kalyan")
})
app.get("/Contact",(req,res) => {
    res.send("Contact: 9022663602")
})


app.listen(port,()=>{
    console.log('START SERVER AT PORT:'+  port)
})

