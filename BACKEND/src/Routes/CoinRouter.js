const Router = require('express')
const CoinController = require('../Controllers/CoinController')

function CoinRouter () {
  const router = Router()

  router
    .route('/')
    .get(CoinController.getAllCoins)

  router.route('/detail/:coinId')
    .get(CoinController.getCoinById)

  return router
}

module.exports = CoinRouter()
