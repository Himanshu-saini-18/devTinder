const express = require("express");

const profileRouter = express.Router();
const jwt = require("jsonwebtoken");
const { userAuth } = require("../../src/middlewares/auth");

const { validateEditProfileData } = require("../utils/validation");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid edit request");
    }
    const loggedInUser = req.user;

    // But this sis not good way  
    // loggedInUser.firstName = req.body.firstName;
    // loggedInUser.lastName = req.body.lastName;


    Object.keys(req.body).forEach((key)=>(loggedInUser[key]=req.body[key]));
       await loggedInUser.save();
     
   res.json({message: `${loggedInUser.firstName}, your profile updated successfuly`,data:loggedInUser});

  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

module.exports = profileRouter;
