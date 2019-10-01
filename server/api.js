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

server.get('/search', (req, res) => {
  if (!req.query.group) res.status(500).send('Отсутсвуют параметры для поиска')
  const timetable = db.get('timetable').filter({ group: req.query.group })
  if (req.query.week) {
    return res.jsonp(timetable.find({ week: req.query.week }))
  }
  return res.jsonp(timetable.find({ week: 'even' }))
})

server.get('faculties', (req, res) => {
  res.jsonp(db.get('faculties'))
})

server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})
