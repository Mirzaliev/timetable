const jsonServer = require('json-server')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const adapter = new FileSync('db.json')
const db = low(adapter)

server.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

server.get('/timetable', (req, res) => {
  const timetable = db
    .get('timetable')
    .find({ group: '321-ИСТ' })
    .value()
  res.jsonp(timetable)
  // console.log('files')
  // if (req.query.path) {
  //   const files = db.get(req.query.path).value()
  //   if (files) {
  //     res.jsonp(files)
  //   } else {
  //     res.sendStatus(404)
  //   }
  // } else {
  //   const files = db.get('files').value()
  //   res.jsonp(files)
  // }
})

server.use(middlewares)
server.use(router)

server.listen(4000, () => {
  console.log('JSON Server is running')
})
