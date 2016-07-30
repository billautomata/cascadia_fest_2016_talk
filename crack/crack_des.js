var bignum = require('bignum')
var Buffer = require('buffer').Buffer
var crypto = require('crypto')
var EventEmitter = require('events')

var ticker = new EventEmitter()


console.log('starting')

var bits = 56
var bytes = Math.ceil(bits/8)

bits = 20

var _time = Date.now()
var key = bignum.rand(bignum(1).shiftLeft(bits)).toBuffer()

console.log('key length in bytes', key.length)
console.log('key value as a number', key.readUIntBE(0,key.length))

var des_cipher = crypto.createCipher('des', key)

var message = 'The message we want to crack.'

var cipher_text = des_cipher.update(message,'utf8','hex')
cipher_text += des_cipher.final('hex')
console.log(cipher_text)

var correct_decipher = crypto.createDecipher('des', key)
var compare = correct_decipher.update(cipher_text, 'hex', 'utf8')
compare += correct_decipher.final('utf8')

var current_crack_index = bignum(1)
ticker.on('tock', tick)

tick()

function tick(){
  var found = false
  for(var i = 0; i < 1000; i++){
    if(current_crack_index.mod(100000).eq(0)){
      console.log(current_crack_index.toNumber())
      var _delta = Date.now() - _time
      console.log(Number(current_crack_index.toNumber()/(_delta/1000)).toFixed(0),'keys per second')
    }
    var bad_key = bignum(current_crack_index).toBuffer()
    try {
      var incorrect_decipher = crypto.createDecipher('des', bad_key)
      var bad_compare = incorrect_decipher.update(cipher_text, 'hex', 'utf8')
      bad_compare += incorrect_decipher.final('utf8')
      if(message === bad_compare){
        console.log(current_crack_index.toString(), message, bad_compare)
        found = true
      }
    } catch (e){
    }
    current_crack_index = current_crack_index.add(1)
  }
  if(!found){
    // setTimeout(tick,0)
    setImmediate(tick)
    // setImmediate(function(){
    //   ticker.emit('tock')
    // })
  }
}
