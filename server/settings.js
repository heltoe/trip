const fs = require('fs')
// auto generate pages
let getFiles = dir => {
  const arrfiles = fs.readdirSync(dir)
  return arrfiles.map(item => `/${item.slice(0, -5)}`)
}
module.exports = {
  PAGES: getFiles('static/pages'),
  PORT: 3000 || process.env.PORT,
  smtp: {
    email: 'zhvladik1995@gmail.com',
    password: 'Vladik24051995'
  }
}