const axios = require('axios')
const User = require('../Models/User')
const URLCOINID = process.env.URLCOINID
const APIKEY = process.env.APIKEY

function UserController () {
  const getUsers = async (req, res) => {
    const allUsers = await User.find({})
    res.json(allUsers)
  }

  const putUserCoinList = async (req, res) => {
    const { idCoin } = req.body
    const { userId } = req.params
    const newCoinToAdd = await axios.get(`${URLCOINID}?id=${idCoin}&${APIKEY}`)

    await User.findById(userId, (error, userUpdated) => {
      if (error) {
        res.status(500)
        res.send('Something wrong with user update')
      } else {
        const found = userUpdated.list.find(coin => +coin.id === +idCoin)
        if (found) {
          const newCoins = userUpdated.list.filter((coin) => +coin.id !== +idCoin)
          User.findByIdAndUpdate(userId, { list: newCoins }, { new: true }, (secondError, newUserUpdated) => {
            secondError
              ? res.send('fail to update')
              : res.json(newUserUpdated)
          })
        } else {
          let { id, name, symbol, logo, quote: { USD: { price } } } = newCoinToAdd.data.data[idCoin]
          logo = !logo ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1024px-Anonymous_emblem.svg.png' : logo
          User.findByIdAndUpdate(userId, { list: [...userUpdated.list, { name, logo, id, symbol, price }] }, { new: true }, (newError, updated) => {
            newError
              ? res.send('Something wrong with coin list update')
              : res.json(updated)
          })
        }
      }
    })
  }

  return {
    getUsers,
    putUserCoinList
  }
}

module.exports = UserController()
