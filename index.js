const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss')
const serveStatic = require('serve-static')
const settings = require('./server/settings')
const routes = require('./server/routes')

const sanitizer = () => (req, res, next) => {
  for (const [key, value] of Object.entries(req.body)) {
    req.body[key] = xss(value)
  }
  next()
}

class Server {
  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }
  config() {
    this.app.set('port', process.env.PORT || settings.PORT)
    // Middlewares
    this.app.use(express.json())
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(sanitizer())
    this.app.use(serveStatic('static'))
  }
  routes() {
    this.app.use(routes)
  }
  start() {
    this.app.listen(this.app.get('port'), () => console.log(`App listening on port ${this.app.get('port')}...`))
  }
}
const app = new Server()
app.start()

module.exports = app