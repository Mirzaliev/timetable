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
  if (!req.query.faculty)
    res.status(400).send('-/groups- Неверный запрос. Отсутствуют параметры!')
  const groups = db
    .get('groups')
    .find({ name: req.query.faculty })
    .get('groups')
    .value()
  if (!groups) res.status(503).send('- /groups - Непредвиденная ошибка сервера')
  return res.jsonp(groups)
})

server.get('/teachers', (req, res) => {
  if (!req.query.sort)
    res.status(400).send('-/teachers- Неверный запрос. Отсутствуют параметры!')
  const teachers = db.get('teachers').find({ name: req.query.sort }).value()
  if (!teachers)
    res.status(503).send('- /teachers - Непредвиденная ошибка сервера')
  return res.jsonp(teachers)
})

server.get('/classroom', (req, res) => {
  if (!req.query.sort)
    res.status(400).send('-/classroom- Неверный запрос. Отсутствуют параметры!')
  const classroom = db
    .get('classroom')
    .find({ name: Number(req.query.sort) })
    .value()
  if (!classroom)
    res.status(503).send('- /classroom - Непредвиденная ошибка сервера')
  return res.jsonp(classroom)
})

server.get('/faculties', (req, res) => {
  const faculties = db.get('faculties').value()
  if (!faculties)
    res.status(503).send('- /faculties - Непредвиденная ошибка сервера')
  res.jsonp(faculties)
})

server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('JSON Api Server is running')
})
