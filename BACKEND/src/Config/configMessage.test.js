const configMessage = require('./configMessage')
require('dotenv').config()

describe('Given configMessage function', () => {
  let formulario = null
  let transporter = null

  beforeEach(() => {
    formulario = {
      email: 'random',
      subject: 'random',
      text: 'random'
    }
    transporter = {
      sendMail: jest.fn()
    }
  })
  describe('When configMessage is called', () => {
    test('Then createTransport is called', () => {
      transporter.sendMail.mockImplementationOnce((query, cb) => cb(true))
      configMessage(formulario)

      expect(console.log()).toHaveBeenCalled()
    })
  })
})
