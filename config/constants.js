require("dotenv").config();

module.exports = {
  API: {
    PORT: process.env.API_PORT,
  },
  DB: {
    PORT: process.env.DB_PORT,
    USER: process.env.DB_USER,
    PASS: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    NAME: process.env.DB_NAME,
  },
  JWT: {
    SECRET: process.env.JWT_SECRET,
    EXPIRES: process.env.JWT_EXPIRES_IN,
  },
};
