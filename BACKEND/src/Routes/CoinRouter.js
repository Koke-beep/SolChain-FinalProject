const Router = require('express')
const CoinController = require('../Controllers/CoinController')

function CoinRouter () {
  const router = Router()

  router
    .route('/')
    .get(CoinController.getAllCoins)
    .post(CoinController.addCoinDDBB)

  return router
}

module.exports = CoinRouter()
