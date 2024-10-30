const assert = require('assert')

var { generateMessage, generateLocationMessage } = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen'
        var text = 'Some message'
        var message = generateMessage(from, text)
        var test = 1

        assert.strictEqual(typeof message.createdAt, 'number')
        assert.deepStrictEqual(message, { from, text, createdAt: message.createdAt })
    })
})

describe('generateLocationMessage', () =>  {
    it('should generate correct google maps link', () =>{
        var from = 'Admin'
        var latitude = -10.9674496
        var longitude = -37.0540544
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`
        var location = generateLocationMessage(from, latitude, longitude)

        assert.strictEqual(typeof location.createdAt, 'number')
        assert.deepStrictEqual(location, { from, url, createdAt: location.createdAt })
    })
})