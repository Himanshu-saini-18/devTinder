const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    //Read the token from the req.cookies
    const cookies = req.cookies;

    const { token } = cookies;
    //validate the token
    if (!token) {
      return res.status(401).send("please login");
    }
    const decodedObj = await jwt.verify(token, process.env.JWT_SECRET);

    const { _id } = decodedObj;
    //find the user
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User does not exist");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};
module.exports = {
  userAuth,
};
