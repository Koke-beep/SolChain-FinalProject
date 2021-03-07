const Coin = require('../Models/CointModel')

function CoinController () {
  const addCoinDDBB = async (req, res) => {
    const newCoin = new Coin({
      ...req.body,
      id: 20
    })
    newCoin.save((error) => {
      if (error) {
        res.status(500)
        res.send('Hubo un error al guardar')
      } else {
        res.json(newCoin)
      }
    })
  }

  return addCoinDDBB
}

module.exports = CoinController()
