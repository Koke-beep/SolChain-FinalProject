const Coin = require('../Models/CointModel')

function CoinController () {
  const addCoinDDBB = (req, res) => {
    const newCoin = new Coin({
      ...req.body
    })
    newCoin.save()

    res.json(newCoin)
  }

  const getAllCoins = (req, res) => {
    const allCoins = Coin.find({}, (coinError, coinMatrix) => {
      if (coinError) {
        res.status(500)
        res.send('There was an error finding crypto')
      } else {
        res.json(coinMatrix)
      }
    })
    res.json(allCoins)
  }

  return {
    addCoinDDBB,
    getAllCoins
  }
}

module.exports = CoinController()
