const express = require("express");


const validator = require('validator');
const profileRouter = express.Router();

const jwt = require("jsonwebtoken");
const { userAuth } = require("../../src/middlewares/auth");
const bcrypt = require('bcrypt');

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

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName}, your profile updated successfuly`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});
profileRouter.patch("/profile/password", userAuth, async (req, res) => {
      try{
        const user = req.user;
      const { oldPassword, newPassword } = req.body || {};

      if(!oldPassword || !newPassword){
        throw new Error("Old password and new password are required");
      }

      //verify oldPassword
      const isOldPasswordValid = await user.validatePassword(oldPassword);
      if(!isOldPasswordValid){
          throw new Error ("Old password is incorrect");
      }
      //Validate new Password
      if(!validator.isStrongPassword(newPassword)){
           throw new Error ("Please enter a strong password")
      }

      //New password same as old password
        const isSamePassword = await user.validatePassword(newPassword);
        if(isSamePassword){
            throw new Error("New password cannot be same as old password");
        }

        //Hash new password
        const passwordHash = await bcrypt.hash(newPassword,10);
        
        user.password=passwordHash;
        await user.save();
         res.send("password change successfully")
      }catch(err){
         res.status(500).send("Error : " + err.message);
      }
});
module.exports = profileRouter;
