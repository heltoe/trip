const { Router } = require('express')
const pagesRouter = require('./controllers/pagesRouter')
const Api = require('./controllers/api')

class Routes {
  constructor() {
    this.router = Router()
    this.routes()
  }
  routes() {
    // pages
    this.router.get('*', pagesRouter.checkPages)
    // subscribe
    this.router.post('/api/subscribe', Api.subscribe)
    // contact form
    this.router.post('/api/contact', Api.contact)
  }
}

const routes = new Routes()
module.exports = routes.router