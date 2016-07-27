var crypto = require('crypto')
var buffer = require('buffer')
var Buffer = buffer.Buffer
var bignum = require('bignum')

console.log('starting')

var bits = 56
var bytes = Math.ceil(bits/8)

bits = 20

var _time = Date.now()


// var key = bignum(1).shiftLeft(55).toBuffer()

var key = bignum.rand(bignum(1).shiftLeft(bits)).toBuffer()

console.log('key length in bytes', key.length)
console.log('key value as a number', key.readUIntBE(0,key.length))

for(var i = 0; i < key.length; i++){
  // key[i] = Math.floor(Math.random()*256)-128
}
// console.log(key)


var des_cipher = crypto.createCipher('des', key)

var message = 'The message we want to crack.'

var cipher_text = des_cipher.update(message,'utf8','hex')
cipher_text += des_cipher.final('hex')
console.log(cipher_text)

var correct_decipher = crypto.createDecipher('des', key)
var compare = correct_decipher.update(cipher_text, 'hex', 'utf8')
compare += correct_decipher.final('utf8')
console.log(message,compare)

var current_crack_index = 1
tick()

function tick(){
  var found = false
  for(var i = 0; i < 20000; i++){
    if(current_crack_index % 10000 === 0){
      console.log(current_crack_index)
      var _delta = Date.now() - _time
      console.log(Number(current_crack_index/(_delta/1000)).toFixed(0),'keys per second')
    }
    var bad_key = bignum(0).add(current_crack_index).toBuffer()

    // console.log('bad_key', bad_key)
    try {
      // console.log(current_crack_index)
      var incorrect_decipher = crypto.createDecipher('des', bad_key)
      var bad_compare = incorrect_decipher.update(cipher_text, 'hex', 'utf8')
      bad_compare += incorrect_decipher.final('utf8')
      if(message === bad_compare){
        console.log(current_crack_index, message, bad_compare)
        found = true
      }
    } catch (e){
    }
    current_crack_index+=1
  }
  if(!found){
    process.nextTick(tick)
  }
}
