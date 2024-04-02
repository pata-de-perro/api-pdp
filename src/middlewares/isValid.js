/** Imports **/
const User = require("../models/users");

const validateEmail = async (req, res, next) => {
  const tokenProvided = req.query.token
  const user = await User.findOne({ emailToken: tokenProvided })
  try{
      if(!user){
          res.status(404).json({ success: false, msg: "Token no valid" })
          return res.redirect('/')
      }
      // console.log(user.emailToken)
      user.emailToken = null;
      user.isActive = true;
      await user.save();
      return res.redirect('/')
  }   catch(error){
      console.log(error)
  }
};
  
  module.exports = { validateEmail };
  