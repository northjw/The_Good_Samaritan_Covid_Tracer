require('dotenv').config();
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTestAccount({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

module.exports = transporter;