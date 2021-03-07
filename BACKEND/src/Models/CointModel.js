const { Schema, model } = require('mongoose')

const coinSchema = new Schema({
  id: Number,
  name: String,
  amount: Number,
  currency: String
})

module.exports = model('Coin', coinSchema)
