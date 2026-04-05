const mongoose = require("mongoose");

const URL =
  "mongodb+srv://himansh:Himanshu12345@cluster0.o1tppm5.mongodb.net/devTinder";   //this is clustor and inside this multiple cluster  new devTinder is data base 

const connectDB = async () => {
  await mongoose.connect(URL);
};

module.exports =
    connectDB

