const Coin = require('../Models/CointModel')
const axios = require('axios')

function CoinController () {
  const addCoinDDBB = (req, res) => {
    const newCoin = new Coin({
      ...req.body
    })

    newCoin.save()
    res.json(newCoin)
  }

  const getAllCoins = async (req, res) => {
    const allCoins = await Coin.find({}, (coinError, coinMatrix) => {
      if (coinError) {
        res.status(500)
        res.send('There was an error finding crypto')
      } else {
        res.json(coinMatrix)
      }
    })
    res.json(allCoins)
  }

  const getOneById = async (req, res) => {
    const id = req.params.coinId

    const { data } = await axios.get(
       `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${id}&CMC_PRO_API_KEY=771b5c88-165c-4659-8ef0-bc093a206eed`
    )
    console.log(data.data[1])
    const dataCoin = new Coin(data.data[1])
    dataCoin.save()
    res.json(dataCoin)
  }

  return {
    addCoinDDBB,
    getAllCoins,
    getOneById
  }
}

module.exports = CoinController()
