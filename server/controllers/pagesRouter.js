const path = require('path')
const settings = require('../settings')

class Pages {
  checkPages(req, res) {
    try {
      let page = req.url
      if (page === '/')
        page = '/index'
      // проверка на 404 not found
      if (settings.PAGES.indexOf(page) === -1)
        return res.sendFile(path.resolve(__dirname + `/../../static/pages/404.html`))
      // выдаем нужную страницу
      res.sendFile(path.resolve(__dirname + `/../../static/pages${page}.html`))
    } catch(e) {
      res.status(404).sendFile(path.resolve(__dirname + `/../../static/pages/404.html`))
    }
  }
}

const pages = new Pages()
module.exports = pages