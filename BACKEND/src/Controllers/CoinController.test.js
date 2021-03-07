const Coin = require('../Models/CointModel')
const {
  addCoinDDBB,
  getAllCoins
} = require('./CoinController')

jest.mock('../Models/CointModel.js')

describe('Given CoinController', () => {
  let req = null
  let res = null

  beforeEach(() => {
    req = {
      body: {
        currency: '$',
        amount: 1000,
        name: 'hi'
      }
    }

    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    }
  })
  describe('When getAllCoins is called', () => {
    test('Then res.json will be called', () => {
      getAllCoins(req, res)

      expect(res.json).toHaveBeenCalled()
    })
  })

  describe('When addCoinDDBB is called', () => {
    test('Then res.json will be called', () => {
      Coin.find.mockImplementationOnce((query, cb) => cb(false))
      addCoinDDBB(req, res)

      expect(res.json).toHaveBeenCalled()
    })
  })
})
