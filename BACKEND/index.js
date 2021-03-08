const express = require('express')
const morgan = require('morgan')
const debug = require('debug')('app')
require('dotenv').config()

const { connect } = require('mongoose')
const PORT = process.env.PORT
const URLDDBB = process.env.URLDDBB

const CoinRouter = require('./src/Routes/CoinRouter')

const app = express()
connect("mongodb+srv://SolChain:OjmFCN2KS15aZicq@solcluster.yzezy.mongodb.net/currencyDDBB",
  { useNewUrlParser: true, useUnifiedTopology: true })

app.use(morgan('dev'))

app.use(express.urlencoded({ extender: true }))
app.use(express.json())

app.use('/', CoinRouter)

app.listen(5000, () => {
  debug(`Server is runing in http://localhost:5000`)
})
