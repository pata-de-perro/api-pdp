/** Imports **/
const User = require("../models/users");
const { verifyToken } = require("../lib/jwt");
const { CAPTCHA } = require("../../config/constants");

const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  console.log("middleware Auth")

  try {
    if (!authorization) {
      return res.status(401).send({ success: false, msg: "Token required" });
    }

    const token = authorization.replace("Bearer ", "");
    const payload = verifyToken(token);
    
    const captchaToken = req.headers.captcha

    const SECRET_KEY= CAPTCHA.NEXT_PUBLIC_SECRET_KEY

    const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${captchaToken}`
    const response = await fetch(googleVerifyUrl)

    // console.log("response.body" + response.json())

    console.log("googleVerifyUrl" + googleVerifyUrl)
    const { success } = await response.json()

    if(!success){
      return res.status(401).send({ success: false, msg: "recaptcha false" });
    }

    req.user = await User.findById(payload.id).select("-password");

    next();
  } catch (err) {
    return res
      .status(401)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

module.exports = { auth };
