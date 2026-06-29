import config from "../config/config.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: config.Google_user,
    clientId: config.Gooogle_Client_id,
    clientSecret: config.Google_Client_Secrete,
    refreshToken: config.Google_refresh_token,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Error connecting to email server:", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

export const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `Your App Name <${config.Google_user}>`,
      to,
      subject,
      text,
      html,
    });

    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default transporter;
