/** Imports **/
const User = require("../models/users");
const { verifyToken } = require("../lib/jwt");

const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  console.log("middleware Auth")

  try {
    if (!authorization) {
      return res.status(401).send({ success: false, msg: "Token required" });
    }

    const token = authorization.replace("Bearer ", "");
    const payload = verifyToken(token);
    
    const captchaToken = "03AFcWeA43C8P_2NLKCfsO4yWglrtS8L9mSi4WYish2q4MH43nfKKe3X64eoxYX6pgA8-Dgj-oFZ-4aTJ7a_B5mTuDW_Vf0MZcbZAmVsn6ypKYiU_sYcJF2lLQXCqK58TNeA7hG0LYsH0TKFblvBpi3BtBlm20tJLWynOAZ_9Bj3jxhWPWRXV9VvoNSBnWRHm63B-sjeN2zVfxX4-27H0aPEGK6vZHG8fjQf7PXrTQFxdGt3twTB7MA7PMj2GRvPmEMgKF3furo7cqQAvkebuL-xLi3KV1li8mzTDhFQcUSUw57wJsbP5JtTxbmYST0Vj5_L711lzSByuaj593YhBJ8TJDwsTMhMZhcweFg1gPISaRQ6-NfIOI9HO9PLkT59o-_n7Spr9giMEgDf15OwO21LI9ofqSsjJF1IeX2diuFQsXMsgp2VUzRNyn_buVea2OXX4JW4PYQ7cOMqJWFhSUQCIsXV9KtzGN15CPuL99DrF9WDjLJmPxRYOjmFmKW28lOPWFAHxCi5ANp8M1fMpkACoCvurYz5Sj26-CW2vhz2pComTSYqghrFVq_sNFqRYi1nJuqexrxpvI"

    const _NEXT_PUBLIC_SECRET_KEY='6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'

    const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${_NEXT_PUBLIC_SECRET_KEY}&response=${captchaToken}`
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
