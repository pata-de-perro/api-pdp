/** Imports **/
const User = require("../models/users");

const validateEmail = async (req, res, next) => {
  try{
      const user = await User.findOne({ emailToken: req.query.token })
      if(!user){
          res.status(400).json({ success: false, msg: "Token no valid" })
          return res.redirect('/')
      }
      console.log(user.emailToken)
      user.emailToken = null;
      user.isActive = true;
      await user.save();
      next()
  }   catch(error){
      console.log(error)
  }
};
  
  module.exports = { validateEmail };
  