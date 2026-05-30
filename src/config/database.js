const mongoose = require("mongoose");

const URL =
  process.env.DB_CONNECTION_SECRET;   //this is clustor and inside this multiple cluster  new devTinder is data base 

const connectDB = async () => {
  console.log(process.env.DB_CONNECTION_SECRET)
  await mongoose.connect(URL);
};

module.exports =
    connectDB

