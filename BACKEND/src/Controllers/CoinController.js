const Coin = require('../Models/CointModel')
const axios = require('axios')
require('dotenv').config()

const URLCOINID = process.env.URLCOINID
const APIKEY = process.env.APIKEY

function CoinController () {
  const getAllCoins = (req, res) => {
    Coin.find({}, (coinError, coinMatrix) => {
      if (coinError) {
        res.status(500)
        res.send('There was an error finding crypto')
      } else {
        res.json(coinMatrix)
      }
    })
  }

  const getCoinById = async (req, res) => {
    const { coinId } = req.params
    const { data } = await axios.get(`${URLCOINID}?id=${coinId}&${APIKEY}`)

    const { name, symbol, quote: { USD: { price } } } = data.data[`${coinId}`]
    const dataCoin = { name, symbol, price }
    res.json(dataCoin)
  }

  return {
    getAllCoins,
    getCoinById
  }
}

module.exports = CoinController()
