/** Imports **/
const User = require("../models/users");
const { verifyToken } = require("../lib/jwt");

const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).send({ success: false, msg: "Token required" });
    }

    const token = authorization.replace("Bearer ", "");
    const payload = verifyToken(token);
    req.user = await User.findById(payload.id).select("-password");

    next();
  } catch (err) {
    return res
      .status(401)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

module.exports = { auth };
