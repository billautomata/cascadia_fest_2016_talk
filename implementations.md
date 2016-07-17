# implementations

## tls/ssl
* client & server perform a key exchange using RSA or DH asymmetric encryption
* agree on a cipher suite and the client sends a secret key the server uses to encrypt the information using symmetric encryption

## multi-factor authentication
* https://en.wikipedia.org/wiki/Multi-factor_authentication
* https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm

## pgp


## ssh
* `ssh keygen` creates an RSA key
* login is a digital signature created by the client from a random challenge from the server

## iMessage
* combination of 1280 bit RSA and 128 bit AES, messages are signed with ECDSA with a 256 bit curve
* apple runs a key server that uses TLS
* unique keys per device, if you have more than one device signed up you will have more keys

## OTR messaging
* initial authentication / primary key exchange is left up to the user
* AES128, DH1536, SHA-1 hash
* a new ephemeral key is created and sent along with every message, the new key is meant to encrypt the next session
  * a compromise of the first key does not expose the plain text of all the messages
  * the first key is only used to authenticate each successive key

## Signal / End-to-End
* advanced version of OTR that uses a mix of ephemeral keys and a Key Derivation Function applied to a running key so each party doesn't need to have gotten all the messages in order.
* End-to-End encryption means the private key remains on the client and only encrypted messages are ever transmitted.  The server does not handle the encryption, it is just a dumb pipe.  It is possible to encrypt the private key using AES and a pass-phrase, then the server can distribute to multiple devices unlocked by re-entering the pass-phrase.
