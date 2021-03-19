const { Schema, model } = require('mongoose')
const md5 = require('md5')

const userSchema = new Schema({
  name: String,
  email: String,
  list: [Object],
  password: String
})

userSchema.methods.validPassword = function validPassword (pwd) {
  return this.password === md5(pwd)
}

module.exports = model('User', userSchema)
