const crypto = require('crypto')
const fs = require('fs')
var private_key
var public_key

var message = 'I am a message to be signed.'

var sign = crypto.createSign('RSA-SHA256')
var verify = crypto.createVerify('RSA-SHA256')

sign.update(message)

var private_key = fs.readFileSync('./keys/4096_private.dat')
console.log('private key', private_key.toString())

var public_key = fs.readFileSync('./keys/4096.pub')
console.log('public key', public_key.toString())


var signature = sign.sign(private_key, 'hex')
console.log('signature', signature)

verify.update(message)
console.log('verify', verify.verify(public_key, signature, 'hex'))
