const captcha = async(req,res,next) => {
    const {captchaToken} = req.headers;

    try{
        const _NEXT_PUBLIC_SECRET_KEY='6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'
    
        const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${_NEXT_PUBLIC_SECRET_KEY}&response=${captchaToken}`
        const response = await fetch(googleVerifyUrl)
    
        const { success } = await response.json()
    
        if(!success){
          return res.status(401).send({ success: false, msg: "recaptcha false" });
        }
        console.log("middleware captcha")
        next();
    } catch (err){
        return res
        .status(401)
        .send({success: false, msg: err.message || "Unknown"});
    }
};

module.exports =  { captcha }