const axios = require('axios')
const User = require('../Models/User')
const { getUsers, putUserCoinList } = require('./UserController')

jest.mock('../Models/User.js')
jest.mock('axios')

describe('Given UserController', () => {
  let res = null
  let req = null
  let newCoinToAdd = null

  beforeEach(() => {
    res = {
      send: jest.fn(),
      json: jest.fn(),
      status: jest.fn()
    }

    req = {
      params: {
        userId: 5
      },
      body: {
        idCoin: 5
      }
    }
  })

  describe('When getUsers is called', () => {
    test('Then res.json will be called', async () => {
      User.find.mockImplementationOnce(() => Promise.resolve({}))

      await getUsers(req, res)

      expect(res.json).toHaveBeenCalled()
    })
  })

  describe('When putUserCoinList is called', () => {
    beforeEach(() => {
      newCoinToAdd = {
        data: {
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
      }
    })

    describe('When is called and an error occurs', () => {
      test('Then res.send is called', async () => {
        axios.get.mockResolvedValueOnce(newCoinToAdd)

        User.findById.mockImplementationOnce((query, cb) => cb(true))

        await putUserCoinList(req, res)

        expect(res.status).toHaveBeenCalled()
      })
    })

    describe('When is called succesfully', () => {
      test('Then res.send is called', async () => {
        const userUpdated = {
          list: [{
            id: 5
          }]
        }
        User.findById.mockImplementationOnce((query, cb) => cb(false, userUpdated))
        User.findByIdAndUpdate.mockImplementationOnce(({}, {}, {}, cb) => cb(true))
        await putUserCoinList(req, res)

        expect(res.send).toHaveBeenCalled()
      })
    })
    describe('When is called succesfully', () => {
      test('Then res.send is called', async () => {
        const userUpdated = {
          list: [{
            id: 5
          }]
        }
        User.findById.mockImplementationOnce((query, cb) => cb(false, userUpdated))
        User.findByIdAndUpdate.mockImplementationOnce(({}, {}, {}, cb) => cb(false))
        await putUserCoinList(req, res)

        expect(res.json).toHaveBeenCalled()
      })
    })
  })
})
