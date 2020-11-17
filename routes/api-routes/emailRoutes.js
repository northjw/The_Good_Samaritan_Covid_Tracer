require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require("express");
const router = express.Router();
// const transporter = require('../config/transporter')

router.post("/", function(req, res) {
    // let testAccount = nodemailer.createTestAccount((err, account) => {
    //     if (err) {
    //         console.error('Failed to create a testing account');
    //         console.error(err);
    //         return process.exit(1);
    //     }
    
    // });
        
    let transporter = nodemailer.createTransport({
        service: "zoho",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        logger: true,
        debug: false // include SMTP traffic in the logs
    }
//     {
//         // default message fields

//         // sender info
//         // from: 'Nodemailer <example@nodemailer.com>',
    
  );

    
      
      let mailOptions = {
        from: "goodsamaritinmailer@zohomail.com",
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