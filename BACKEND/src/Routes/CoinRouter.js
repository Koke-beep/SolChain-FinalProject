const Router = require('express')
const CoinController = require('../Controllers/CoinController')
const UserController = require('../Controllers/UserController')

function CoinRouter () {
  const router = Router()

  router
    .route('/')
    .get(CoinController.getAllCoins)
    // .post(CoinController.addCoinDDBB)

  router.route('/user/:userId')
    .put(UserController.updateUserData)
    .post(UserController.postUser)

  router.route('/coin/:coinId')
    // .get(CoinController.getOneById)
    .delete(CoinController.deleteOneUserCoin)

  return router
}

module.exports = CoinRouter()
