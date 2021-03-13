const Coin = require('../Models/CointModel')
// const axios = require('axios')

function CoinController () {
  // const addCoinDDBB = async (req, res) => {
  //   const { data } = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${24}&CMC_PRO_API_KEY=771b5c88-165c-4659-8ef0-bc093a206eed`)
  //   const createdCoin = await Coin.create(data.data[24])
  //   res.json(createdCoin)
  // }

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

  const deleteOneUserCoin = async (req, res) => {
    const { coinId } = req.params

    await Coin.findByIdAndDelete(coinId, (error, coinDeleted) => {
      if (error) {
        res.status(500)
        res.send(`Hubo un error ${error} al borrar la moneda`)
      } else {
        res.status(200)
        res.json(coinDeleted)
      }
    })
  }

  // const getOneById = async (req, res) => {
  //   const id = req.params.coinId

  //   const { data } = await axios.get(
  //      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${id}&CMC_PRO_API_KEY=771b5c88-165c-4659-8ef0-bc093a206eed`
  //   )

  //   const dataCoin = new Coin(data.data[1])
  //   dataCoin.save()
  //   res.json(dataCoin)
  // }

  return {
    // addCoinDDBB,
    // getOneById,
    getAllCoins,
    deleteOneUserCoin
  }
}

module.exports = CoinController()
