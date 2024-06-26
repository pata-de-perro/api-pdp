/** Imports **/
const User = require("../models/users");

const validateEmail = async (req, res, next) => {
  const tokenProvided = req.query.token
  const user = await User.findOne({ emailToken: tokenProvided })
  try{
      if(!user){
          res
          .status(404)
          .json({ success: false, msg: "Token no valid" })
          return res.redirect('https://www.pata-de-perro.com')
      }
      user.emailToken = null;
      user.isActive = true;
      await user.save();
      return res
      .status(201)
      .redirect('https://www.pata-de-perro.com/account/login')
  }   catch(error){
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};
  
  module.exports = { validateEmail };
  