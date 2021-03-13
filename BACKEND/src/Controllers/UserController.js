const User = require('../Models/User')

function UserController () {
  const updateUserData = async (req, res) => {
    const { userId } = req.params

    await User.findById(userId, (error, data) => {
      if (error) {
        res.send('Hubo un error / no existe user')
      } else {
        res.json(data)
      }
    })
  }

  const postUser = async (req, res) => {
    const newUser = new User({ ...req.body })
    newUser.save((error) => {
      if (error) {
        res.send('Error intenro del servidor')
      } else {
        res.json(newUser)
      }
    })
  }

  return {
    updateUserData,
    postUser
  }
}

module.exports = UserController()
