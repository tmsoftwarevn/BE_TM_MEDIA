const db = require("../models");
import nodemailer from "nodemailer";
require("dotenv").config();

const sendEmail = async (data) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GOOGLE_APP_EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });
    const info = await transporter.sendMail({
      from: `${data.email}`,
      to: `${process.env.GOOGLE_APP_EMAIL}`,
      subject: "Liên hệ từ TM Media",
      html: `
        <b>Bạn nhận được liên hệ từ khách hàng truy cập website: ${process.env.PORT_URL}</b>
        <br/>
        <div>Email: ${data.email}</div>
        <div>Họ và tên: ${data.name}</div>
        <div>Số điện thoại: ${data.phone}</div>
        <div>Nội dung: ${data.noidung}</div>
        `,
    });
    if (info) {
      return {
        EC: 1
      }
    }
  } catch (error) {
    console.log(error);
  }
};
 export default {sendEmail}