import express from "express"
const app = express ()
const port = 8000

app.use("/Home",(req,res)=>{
     res.json({Message:"MY HOME",
        NAME: "Saish",
        CITY :"KALYAN",
        ROLL: 45,
        BRANCH : "COMPS"
     })
})
 

app.listen(port,()=>{
console.log({Message:" SERVER STARTED"})
})