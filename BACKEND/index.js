const express = require('express')
const morgan = require('morgan')
const debug = require('debug')('app')
const cors = require('cors')
require('dotenv').config()

const { connect } = require('mongoose')
const PORT = process.env.PORT
const URLDDBB = process.env.URLDDBB

const CoinRouter = require('./src/Routes/CoinRouter')

const app = express()
app.use(cors())

connect(URLDDBB,
  { useNewUrlParser: true, useUnifiedTopology: true })

app.use(morgan('dev'))

app.use(express.urlencoded({ extender: true }))
app.use(express.json())

app.use('/', CoinRouter)

app.listen(PORT, () => {
  debug(`Server is runing in http://localhost:${PORT}`)
})
