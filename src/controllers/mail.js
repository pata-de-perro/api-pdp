const sgMail = require("@sendgrid/mail");
const { SENDGRID } = require("../../config/constants");

sgMail.setApiKey(SENDGRID.SENDGRID_API_KEY);

const sendMail = async (msg) => {
  await sgMail.send(msg).then(() => {
    console.log("Email sent");
    return true;
  });
};

module.exports = { sendMail };
