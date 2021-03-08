const { Schema, model } = require('mongoose')

const coinSchema = new Schema({
  name: String,
  symbol: String,
  logo: String,
  technical_doc: Array,
  description: String
})

module.exports = model('Coin', coinSchema)
