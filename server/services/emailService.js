require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (subject, text) => {
  const msg = {
    to: process.env.EMAIL_USER,
    from: process.env.EMAIL_USER,
    subject,
    text,
  };

  await sgMail.send(msg);
};

module.exports = { sendEmail };
