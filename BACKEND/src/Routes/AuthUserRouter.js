const { Router } = require('express')
const passport = require('passport')
const controller = require('../Controllers/AuthController')

function AuthUserRouter () {
  const router = new Router()

  router
    .post('/register', controller.register)

  router
    .route('/login')
    .post(
      passport.authenticate('local'),
      controller.login
    )

  return router
}

module.exports = AuthUserRouter()
