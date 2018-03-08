const express = require("express");
const router = express.Router();
const User = require("../models/User");
const nodemailer = require("nodemailer");
require('dotenv');

router.post("/message", (req, res) => {
  const mailAddress = req.body.mailoptions;
  const mailSubject = req.body.mailsubject;
  const mailText = req.body.mailtext;
  const mailHtml = req.body.mailhtml;
 const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
       user: 'apptest123apptest@gmail.com',
       pass: process.env.MAIL
     }
   });
   let mailOptions = {
     from: "GetaMule SL",
     to: mailAddress,
     subject: mailSubject,
     text: mailText, // plain text body
     html: mailHtml // html body
   };
   transporter.sendMail(mailOptions, (error, info) => {
     if (error) {
         return console.log(error);
     }
     console.log(info);
 });
})

 module.exports = router;