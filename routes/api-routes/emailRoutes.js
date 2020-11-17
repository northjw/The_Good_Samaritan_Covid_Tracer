require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require("express");
const router = express.Router();
// const transporter = require('../config/transporter')

router.post("/", function(req, res) {
    console.log(req.body.email)
    let testAccount = nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            type: 'OAuth2',
            user: 'user@example.com',
            clientId: '000000000000-xxx0.apps.googleusercontent.com',
            clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0',
            refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
            accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x'
        },
        tls: {
            rejectUnauthorized:false
        }
      });
      
      let mailOptions = {
        from: "mixmix0321@gmail.com",
        to: req.body.email,
        subject: "ALERT!! PEOPLE WHO WENT TO THE SAME PLACE AS YOU HAVE JUST TESTED POSITIVE!!",
        text: "Thank You for using The Good Samaritin - Smart Covid 19 Tracer. This is an auto-alert that you might be at risk of injection of covid 19!"
      }

      // send mail with defined transport object
      transporter.sendMail(mailOptions, function(err, info) {
          if(err){
              return console.log(err)
          }
          console.log("Message sent: %s", info.messageId);
      })
    

});


module.exports = router;