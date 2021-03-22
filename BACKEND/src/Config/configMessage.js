const nodemailer = require('nodemailer')
require('dotenv').config()

const configMessage = (formulario) => {
  const EMAIL = process.env.EMAIL
  const PASSWORD = process.env.PASSWORD

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: PASSWORD
    }
  })
  const mailOptions = {
    from: formulario.email,
    to: EMAIL,
    subject: formulario.subject,
    text: formulario.text
  }
  transporter.sendMail(mailOptions, (err, info) => {
    err
      ? console.log(err)
      : console.log(info)
  })
}

module.exports = configMessage
