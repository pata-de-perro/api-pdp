const { CAPTCHA } = require("../../config/constants");
const axios = require("axios")

const captcha = async(req,res,next) => {
    
    const {tokenCaptcha} = req.body

    if(!tokenCaptcha){
        return res.status(422).send( {success: false, msg: "reCaptcha token is missing" })
    }
    try{
        const googleVirfyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${CAPTCHA}&response=${tokenCaptcha}`
        const response = await axios.post(googleVirfyUrl)
        const { success } = response.data
        
        if(success){
            delete req.body.tokenCaptcha
            next()
        }
    } catch (err){
        console.log(err)
        return res.status(400).json({error: "reCaptcha error"})
    }
};

module.exports =  { captcha }