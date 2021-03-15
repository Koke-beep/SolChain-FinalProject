const Coin = require('../Models/CointModel')
// const axios = require('axios')

const {
  getAllCoins
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
      params: { coinId: {} }
    }

    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    }
  })

  describe('When getAllCoins is called', () => {
    test('Then res.json will be called', () => {
      Coin.find.mockImplementationOnce((query, cb) => cb(false))
      getAllCoins(req, res)

      expect(res.json).toHaveBeenCalled()
    })
  })

  describe('When getAllCoins is called', () => {
    test('Then res.send will be called', () => {
      Coin.find.mockImplementationOnce((query, cb) => cb(true))
      getAllCoins(req, res)

      expect(res.send).toHaveBeenCalled()
    })
  })

  // describe('When getOneById is called', () => {
  //   test('Then res.json will be called', async () => {
  //     const data = axios.get.mockResolvedValue('done')
  //     await getOneById(req, res)

  //     expect(res.json).toHaveBeenCalled()
  //   })
  // })
})
