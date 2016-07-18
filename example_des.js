var crypto = require('crypto')
var assert = require('assert')
var key = 'p4ssw0rd'
var message = 'hello cascadiafest!'
var cipher = crypto.createCipher('des', key)
var cipher_text = cipher.update(message, 'utf8', 'hex')
cipher_text += cipher.final('hex')
var decipher = crypto.createDecipher('des', key)
var plain_text = decipher.update(cipher_text, 'hex', 'utf8')
plain_text += decipher.final('utf8')
assert.equal(plain_text, message)
console.log(cipher_text)
