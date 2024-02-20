/** Imports **/
const User = require("../models/users");
const { verifyToken } = require("../lib/jwt");

const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).send({ ok: false, msg: "Token required" });
    }

    const token = authorization.replace("Bearer ", "");
    const payload = verifyToken(token);
    req.user = await User.findById(payload.id);

    next();
  } catch (err) {
    return res.status(401).send({ ok: false, msg: err.message || "Unknown" });
  }
};

module.exports = { auth };
