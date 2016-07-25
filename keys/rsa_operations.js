const crypto = require('crypto')
const fs = require('fs')
var private_key
var public_key

var message = 'test'

var sign = crypto.createSign('RSA-SHA256')
var verify = crypto.createVerify('RSA-SHA256')

sign.update(message)

var private_key = fs.readFileSync('./4096_private.dat')
var public_key = fs.readFileSync('./4096.pub')

console.log(private_key)
var signature = sign.sign(private_key, 'hex')

verify.update(message)
console.log('verify', verify.verify(public_key, signature, 'hex'))
