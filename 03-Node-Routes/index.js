import http from  "http"
const port = 8000
 const server =http.createServer ((req,res) => {
   if (req.url == "/"){
    res.end("Welcom to home route")
   } else if (req.url=="/about"){
    res.end("Welcom to about route")
   }else if (req.url=="/contact"){
    res.end("Welcom to contact route")

   }else {
    res.end("404 not found")
   }
})
 
server.listen(8000,() => {

    console.log("SERVER IS STARTED")

} )
