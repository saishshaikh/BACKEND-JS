// Middleware, Status Code and HTTP Headers



// Middlewares-
// - Middleware runs before the route handler.
// - Middleware must call next() to continue to the next function.
// - If Middleware does not call next(), the request will hang.
// - There are some built-in, custom, third-party middleware etc.

// app.use(cors())              -> Third Party Middleware


// app.use(express.json())      -> Built-in Middleware


// app.use((req, res, next) => {
//   console.log("custom middleware"); -> Custom Middleware
//   next();
// })                           





import express, { json } from "express"
const app = express()
const port = 8000;
app.use(express.json())

let password = "Saish1223"


//Costome middleware
app.use ((req,res,next)=>{
    if(req.body.pass!=password){
        res.send("PASSWORD DOES N0T MATCH")
    }
    next()
})
 app.post ("/",(req,res)=>{
    console.log(req.body)
    res.send({Succes:'True'})
 })

 app.listen (port,()=>{
    
  console .log("SERVER STARTED...."+  port);
  
 })


 // STATUS CODE 

//  200  OK
// 201  Created
// 204  No Content
// 400  Bad Request
// 401  Unauthorized
// 403  Forbidden
// 404  Not Found
// 500  Internal Server Error


/// HTTP HEADERS 
