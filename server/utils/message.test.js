const assert = require('assert')

var { generateMessage } = require('./message')

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