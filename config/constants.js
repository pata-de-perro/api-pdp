require("dotenv").config();

module.exports = {
  HOST: process.env.BE_HOST,
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
  corsOptions: {
    origin: process.env.URL_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
  },
  SENDGRID: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  CAPTCHA: process.env.RECAPTCHA_SECRET_KEY,
};
