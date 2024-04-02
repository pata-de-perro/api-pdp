/** Imports **/
const User = require("../models/users");

const isValid = async (req, res, next) => {
    try{
        const user = await User.findOne({ emailToken: req.query.token })
        if(!user){
            res.status(400).json({ success: false, msg: "Token no valid" })
            return res.redirect('/')
        }
        user.emailToken = null;
        user.isActive = true;
        await user.save();
        await req.login(user, async (err) => {
            if(err) return next(err)
            res.status(200).json({ success: true, msg: "Bienvenido a Pata de Perro" })
        const redirectUrl = req.session.redirectTo || '/'

        delete req.session.redirectTo
        next()
        })
    }   catch(error){
        console.log(error)
        next()
    }
  };
  
  module.exports = { isValid };
  