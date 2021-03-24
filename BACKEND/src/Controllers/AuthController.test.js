const { register, login } = require('./AuthController')

describe('Given AuthController file', () => {
  let req = null
  let res = null

  beforeEach(() => {
    req = {
      body: {
        email: 'random',
        password: 'random'
      },
      login
    }
    res = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn(),
      redirect: jest.fn()
    }
  })
  describe('When login is called', () => {
    test('Then res.json to have been called', () => {
      login(req, res)
      expect(res.status).toHaveBeenCalled()
    })
  })
  describe('When login is called', () => {
    test('Then res.json to have been called', () => {
      login(req, res)
      expect(res.json).toHaveBeenCalled()
    })
  })

  describe('When register function is called ', () => {
    test('Then res.status to have been called', () => {
      register(req, res)
      expect(res.status).toHaveBeenCalled()
    })
  })
})
