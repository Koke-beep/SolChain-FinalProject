const User = require('../Models/User')

function UserController () {
  const getUsers = async (req, res) => {
    const allUsers = await User.find({})
    res.json(allUsers)
  }

  const putUserCoinList = async (req, res) => {
    const { id } = req.body
    const { userId } = req.params
    console.log(req.body, userId)

    await User.findById(userId, (error, userUpdated) => {
      if (error) {
        res.status(500)
        res.send('Something wrong with user update')
      } else {
        const newCoins = userUpdated.list.filter((coin) => +coin.id !== +id)

        User.findByIdAndUpdate(userId, { list: newCoins }, (secondError, newUserUpdated) => {
          secondError
            ? res.send('fail to update')
            : res.json(newUserUpdated)
        })
      }
    })
  }

  return {
    getUsers,
    putUserCoinList
  }
}

module.exports = UserController()
