// import express from "express" ;

// const app = express()
// const port = 8000
// app.use(express.json())          // middleware  //

// app.post("/Contact",(req,res) => {
//     res.send("Contact: 9022663602")
//     let body = req.body                   // req.body //
//     console.log(body)
// })


// app.listen(port,()=>{
//     console.log('START SERVER AT PORT:'+  port)
// })
   

// Learn in MongoDB

//3 ) Put Method
//4) Patch Method
//5)DELETE Method 





// ############################  req.param #########################################

// import express from "express";

// const app = express()
// const port = 8000

// let users = [
//   {
//     "id": 1,
//     "name": "Amit Sharma",
//     "role": "Software Developer",
//     "salary": 60000
//   },
//   {
//     "id": 2,
//     "name": "Neha Verma",
//     "role": "Frontend Developer",
//     "salary": 55000
//   },
//   {
//     "id": 3,
//     "name": "Rahul Singh",
//     "role": "Backend Developer",
//     "salary": 65000
//   },
//   {
//     "id": 4,
//     "name": "Priya Patel",
//     "role": "UI/UX Designer",
//     "salary": 50000
//   },
//   {
//     "id": 5,
//     "name": "Karan Mehta",
//     "role": "Project Manager",
//     "salary": 75000
//   }
// ]

// app.get("/user", (req, res) => {
//   res.json(users)
// })

// app.get("/user/:id", (req, res) => {
//   let id = req.params.id
//   let existinguser = users.find((users) => (users.id == id))
//   if (!existinguser){
//     return res.send("404 NOT FOUND")
//   }
//   res.json(existinguser)
// })



// app.listen(port, () => {
//   console.log('START SERVER AT PORT:' + port)
// })


// ##########################  req query #######################



import express from "express";

const app = express();
const port = 8000;

app.get("/search", (req, res) => {
  console.log(req.query)
  res.send("HELLO");
});

app.listen(port, () => {
  console.log("SERVER STARTED on port " + port);
});
