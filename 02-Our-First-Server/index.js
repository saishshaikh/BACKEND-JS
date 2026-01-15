import http from  "http"

 const server =http.createServer ((req,res) => {
    res.end (" WELCOME TO SEEVER !!HELLO THIS IS MY FIRST SERVER")

   
})
 
server.listen(8000,() => {

    console.log("SERVER IS STARTED")

} )
