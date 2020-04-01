const nodemailer = require('nodemailer')
const settings = require('../settings')

class SendEmail {
  async sendTo(addr, message) {
    try {
      const smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        service: 'gmail',
        auth: {
          user: settings.smtp.email,
          pass: settings.smtp.password
        }
      })
      await smtpTransport.sendMail({
        to: addr,
        from: settings.smtp.email,
        subject: message.title,
        html: message.body
      })
    } catch(error) {
      console.log(error)
      throw new Error(error)
    }
  }
}

const sendler = new SendEmail()
module.exports = sendler