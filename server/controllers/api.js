const Sendler = require('../helpers/SendToMail')

class Api {
  async subscribe(req, res) {
    try {
      // проверка на наличие содержимого поля
      if(!req.body.email.length)
        return res.status(404).json({ status: 'Data must be require' })
      // формируем тестовый текст
      const messageToEmail = {
        title: 'Успешная подписка на сервисе',
        body: `
        <div>
          <h1>Вы успешно подписались на сервис.</h1><br>
        </div>
        `
      }
      // запрос
      await Sendler.sendTo(req.body.email, messageToEmail)
      res.status(200).json({ status: 'ok' })
    } catch (e) {
      res.status(404).json({ status: 'Error subscribe' })
    }
  }
  async contact(req, res) {
    try {
      const { name, number, email, subject, message } = req.body
      // проверка на наличие содержимого полей
      if(!name.length || !number.length || !email.length || !subject.length)
        return res.status(404).json({ status: 'Data must be require' })
      // формируем тестовый текст
      let strTemplate = `
        Имя: ${name}<br>
        Телефон: ${number}<br>
        Почта: ${email}<br>
        Тема: ${subject}<br>
      `
      if (message.length) strTemplate += `Сообщение: ${message}`
      const messageToEmail = {
        title: 'Успешная подписка на сервисе',
        body: strTemplate
      }
      // запрос
      await Sendler.sendTo(email, messageToEmail)
      res.status(200).json({ status: 'ok' })
    } catch (e) {
      res.status(404).json({ status: 'Error send-form' })
    }
  }
}

const api = new Api()
module.exports = api