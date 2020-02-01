const nodemailer = require('nodemailer')
const settings = require('../settings')

class SendEmail {
  async sendTo(addr, message) {
    try {
      const smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp-relay.gmail.com',
        port: 465,
        secure: true,
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
      return 'Сообщение успешно отправлено'
    } catch(error) {
      console.log(error)
      return 'Ошибка отправки сообщения'
    }
  }
}

const sendler = new SendEmail()
module.exports = sendler