const User = require('../Models/User')
const { updateUserData } = require('./UserController')

jest.mock('../Models/User.js')

describe('Given UserController', () => {
  let res = null
  let req = null

  beforeEach(() => {
    res = {
      send: jest.fn(),
      json: jest.fn()
    }

    req = {
      params: {}
    }
  })

  describe('When updateUserData is called and error it happens', () => {
    test('Then res.send will be called', () => {
      User.findById.mockImplementationOnce((query, cb) => cb(true))

      updateUserData(req, res)

      expect(res.send).toHaveBeenCalled()
    })
    describe('When updateUserData is called without error', () => {
      test('Then res.json will be called', () => {
        User.findById.mockImplementationOnce((query, cb) => cb(false))

        updateUserData(req, res)

        expect(res.json).toHaveBeenCalled()
      })
    })
  })
})
