const { Router } = require('express')
const configMessage = require('../Config/configMessage')

function MessageForm () {
  const router = Router()

  router
    .route('/')
    .post((req, res) => {
      configMessage(req.body)
    })

  return router
}

module.exports = MessageForm()
