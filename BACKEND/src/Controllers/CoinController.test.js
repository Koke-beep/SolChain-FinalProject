/* eslint-disable node/no-callback-literal */
const Coin = require('../Models/CointModel')
const axios = require('axios')

const {
  getAllCoins,
  getCoinById
} = require('./CoinController')

jest.mock('../Models/CointModel.js')
jest.mock('axios')

describe('Given CoinController', () => {
  let req = null
  let res = null

  beforeEach(() => {
    req = {
      body: {
        currency: '$',
        amount: 1000,
        name: 'hi'
      },
      params: { coinId: 1 }
    }

    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    }
  })

  describe('When getAllCoins it is called succesfull', () => {
    test('Then res.json will be called', () => {
      Coin.find.mockImplementationOnce((query, cb) => cb(false))
      getAllCoins(req, res)

      expect(res.json).toHaveBeenCalled()
    })
  })

  describe('When getAllCoins it is called and an error ocurrs', () => {
    test('Then res.send will be called', () => {
      Coin.find.mockImplementationOnce((query, cb) => cb(true))
      getAllCoins(req, res)

      expect(res.send).toHaveBeenCalled()
    })
  })

  describe('When getCoinById is called', () => {
    test('Then res.json will be called', async () => {
      const data = {
        data: {
          1: {
            name: 'random',
            symbol: 'random',
            quote: {
              USD: {
                price: 15
              }
            }
          }
        }
      }

      axios.get.mockResolvedValueOnce({ data })

      await getCoinById(req, res)

      expect(res.json).toHaveBeenCalled()
    })
  })
})
