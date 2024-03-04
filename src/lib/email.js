const nodemailer = require("nodemailer");

sendEmail = () => {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "josuesanagustin13@gmail.com",
      pass: "jn7jnAPss4f63QBp6D",
    },
  };

  const transporter = nodemailer.createTransport(config);

  const info = transporter;
};
