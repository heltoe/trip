const Sendler = require('../helpers/SendToMail')

class Api {
  async subscribe(req, res) {
    try {
      // проверка на наличие содержимого поля
      if(!req.body.email.length)
          return res.status(404).json({ status: 'Data must be require' })
      // формируем тестовый текст
      const toEmail = {
        title: 'Успешная подписка на сервисе',
        body: `
        <div>
          <h1>Вы успешно подписались на сервис.</h1><br>
        </div>
        `
      }
      await Sendler.sendTo(req.body.email, toEmail)
      res.status(200).json({ status: 'Ok' })
    } catch (e) {
      res.status(404).json({ status: 'Error subscribe' })
    }
  }
  async contact(req, res) {
    try {
      const { name, number, email, subject, message } = req.body
      // проверка на наличие содержимого полей
      if(!name.length || !number.length || !email.length || !subject.length || !message.length)
          return res.status(404).json({ status: 'Data must be require' })
      // формируем тестовый текст
      const toEmail = {
        title: 'Успешная подписка на сервисе',
        body: `
          Имя: ${name}<br>
          Телефон: ${number}<br>
          Почта: ${email}<br>
          Тема: ${subject}<br>
          Сообщение: ${message}
        `
      }
      await Sendler.sendTo(email, toEmail)
      res.status(200).json({ status: 'Ok' })
    } catch (e) {
      res.status(404).json({ status: 'Error send-form' })
    }
  }
}

const api = new Api()
module.exports = api