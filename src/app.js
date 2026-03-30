const express = require("express");

const app = express()


app.get("/user",(req,res)=>{
    res.send({firstname:"himansh",lastname:"saini"})
})
app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send("Data successfully saved to the database");
})
app.delete("/user",(req,res)=>{ 
    res.send("deleted successfully");
})
app.use("/test",(req,res)=>{
    res.send("hello from the server");
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
