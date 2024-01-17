
const routes = require('express').Router()
const lesson1Controller = require('../controllers/lesson1')

routes.get('/', lesson1Controller.brianRoute)
routes.get('/kate', lesson1Controller.kateRoute)

module.exports = routes