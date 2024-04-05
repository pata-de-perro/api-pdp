/** Imports **/
const { CAPTCHA } = require("./config/constants")

const captcha = async (req, res, next) => {
  const captchaToken = "03AFcWeA7Dt8467PhJM0Bma3J1gxfK3o3qtCckYV3O99bhuDpBRuwsSOyXvYC7nItlBF85DzL2hhxldknBgrGWbUDGTJZJzpYCgVIvVm0CToS7tvARP0HYVqqxP4H0Kwpfc6ESD-x0ZE9hGcDx_uL1p6fmMrRIouYYSB5pytH_YVci5nlBVf0nzIFM6MefjvnalDbP5fTPPThZKVY5nUBmSyxBg4Fdz2O_ty9VZfqfq_qq0iJVZZPkTUrw__fEYOOdCXt1eWNxrdp1Rn5D2A9ku58Wg34G6CyQqLuiy1XqTKgS4TSH0EthnmviiNbC5TYK6k_5j7I_xb7yaWaiwLUA7ZKcbh5__TR8YUxdDVGXEkTmIEGwbS1ZUmX84ZKDL_DTkwUeNLHsnYlI_JThKUbLjT1R0lFxlVp5FQAf2E-z5XmeY_iAYYOzuQHVLtE-SkZ59a8zK2CMCtZKkJS2rn1z_jAtGRF8uqSIABXhAGtRtYZkcpQ4un3C7yA4K1LNw_D0brTwZKbB9oY4wFARTJ58cCbOaMXbUWI3Q6VlyChzo22o3n53zoAKnLiYy7bSKOUj--ViU-t2pBgI"
  const CAPTCHA_SECRET_KEY= CAPTCHA.SECRET_KEY

  console.log("MIDDLE WARE CAPTCHA")

  try{
    if(!captchaToken){
      return res.status(401).send({ success: false, msg: "captcha required"})
    }
    const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${CAPTCHA_SECRET_KEY}&response=${captchaToken}`
    const response = await fetch(googleVerifyUrl)
  
    const { success } = await response.json()
    console.log("SUCCESS OK")
  
    if(!success){
      return res.status(401).send({ success: false, msg: "recaptcha false" });
    }
    next();
  } catch (err){
    return res
    .status(401)
    .send({ success: false, msg: err.mesage || "Unknown"});
  }


};

module.exports = { captcha };
