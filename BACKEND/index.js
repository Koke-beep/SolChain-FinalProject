const express = require('express')
const morgan = require('morgan')
const debug = require('debug')('app')
const cors = require('cors')
require('dotenv').config()
// const session = require('express-session')
const CoinRouter = require('./src/Routes/CoinRouter')
const userRouter = require('./src/Routes/UserRouter')
const authRouter = require('./src/Routes/AuthUserRouter')

const { connect } = require('mongoose')
const PORT = process.env.PORT || 5000
const URLDDBB = process.env.URLDDBB

const app = express()

connect(URLDDBB, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(morgan('dev'))

app.use(express.urlencoded({ extender: true }))
app.use(express.json())

require('./src/Passport')(app)

app.use('/user', userRouter)
app.use('/auth', authRouter)

app.use('/', CoinRouter)

app.listen(PORT, () => {
  debug(`Server is runing in http://localhost:${PORT}`)
})
