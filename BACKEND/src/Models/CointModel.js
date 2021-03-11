const { Schema, model } = require('mongoose')

const coinSchema = new Schema({
  name: String,
  id: Number,
  symbol: String,
  logo: String,
  description: String
})

module.exports = model('Coin', coinSchema)
