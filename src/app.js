const express = require("express");

const app = express();

// app.use("/",(err,req,res,next)=>{
//      res.status(400).send("something went wrong");
// })

app.get("/getUserData",(req,res)=>{
 try{
       throw new Error("fhcghvke3jf")
     res.send("User data sent");
 }catch(err){
     res.status(500).send("something went wrong contact to support team");
 }
   

   
});

app.use("/",(err,req,res,next)=>{
     if(err){
             res.status(400).send("something went wrong");
     }
  
})



app.listen(7777, () => {
  console.log("Server is running on http://localhost:7777");
});
