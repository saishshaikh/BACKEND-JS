import express from "express";
import cors from "cors";

const app = express();

app.use(cors({                      // middleware //Use.......avoid error in backend frontend connection   
  origin: "http://localhost:5173"
}));

app.use(express.json());  //middleware   // inform  to server type of data  come from client .........like json 

const port = 8000;

app.get("/", (req, res) => {
  res.json({
    Name: "saish",
    Age: 22,
    Class: "BE"
  });
});

app.post("/", (req, res) => {
  console.log(req.body);

  res.send({
    success: true,
    message: "Data received"
  });
});

app.listen(port, () => {
  console.log("SERVER STARTED AT " + port);
});
