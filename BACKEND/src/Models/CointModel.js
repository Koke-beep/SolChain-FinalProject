const { Schema, model } = require('mongoose')

const coinSchema = new Schema({
  name: String,
  amount: Number,
  currency: String
})

module.exports = model('Coin', coinSchema)
