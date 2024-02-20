const jsonwebtoken = require("jsonwebtoken");
const { JWT } = require("../../config/constants");

const generateToken = (payload) => {
  return jsonwebtoken.sign(payload, JWT.SECRET, { expiresIn: JWT.EXPIRES });
};

const verifyToken = (token) => {
  return jsonwebtoken.verify(token, JWT.SECRET);
};

module.exports = { generateToken, verifyToken };
