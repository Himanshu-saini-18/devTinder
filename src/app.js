const express = require("express");

const app = express();
const {adminAuth, userAuth} = require("./middlewares/auth");
app.use("/admin", adminAuth);


app.post("/user/login",(req,res)=>{
     res.send("user Loggedin");
})
app.get("/user",userAuth,(req,res)=>{
     res.send("user details");
})
app.get("/admin/getAllData", (req, res) => {
  res.send("All data send");
});



app.get("/admin/deleteUser", (req, res) => {
  res.send("Delete User");
});

app.listen(7777, () => {
  console.log("Server is running on http://localhost:7777");
});
