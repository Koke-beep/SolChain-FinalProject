const UserController = require('../Controllers/UserController')
const { Router } = require('express')

function UserRouter () {
  const router = Router()

  router
    .route('/')
    .get(UserController.getUsers)

  router.route('/:userId')
    .put(UserController.putUserCoinList)

  return router
}

module.exports = UserRouter()
