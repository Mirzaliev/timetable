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

server.get('/groups', (req, res) => {
  if (!req.query.name) res.status(500).send('Отсутсвуют параметры для поиска')
  const groups = db.get('groups').find({ name: req.query.name })
  return res.jsonp(groups.get('groups'))
})

server.get('/teachers', (req, res) => {
  if (!req.query.sort) res.status(500).send('Отсутсвуют параметры для поиска')
  const teachers = db.get('teachers').find({ name: req.query.sort })
  return res.jsonp(teachers)
})

server.get('/classroom', (req, res) => {
  console.log(req.query.sort)
  if (!req.query.sort) res.status(500).send('Отсутсвуют параметры для поиска')
  const classroom = db.get('classroom').find({ name: Number(req.query.sort) })
  return res.jsonp(classroom)
})

server.get('faculties', (req, res) => {
  res.jsonp(db.get('faculties'))
})

server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})
