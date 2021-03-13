const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: String,
  list: [Object],
  id: Number
})

module.exports = model('User', userSchema)
