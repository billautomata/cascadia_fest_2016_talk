# rsa

#### key generation
```
1. Choose two large primes, P & Q
2. N = (P*Q)
3. PHI = (P-1)*(Q-1)
4. derive E - ( hand waving )
5. D = E^-1 mod PHI

```
Your public key is (E, N)
Your private key is (D)

#### encrypt, using public key (E, N)
cipher_text = (plain_text ^ E) mod N

#### decrypt, using private key (D)
plain_text = (cipher_text ^ D) mod N

#### sign, encrypt using private key (D)
signature = encrypt(hash(plain_text))

#### verify, decrypt using public key (E, N)
hash(plain_text) = decrypt(signature)

#### how is it secure?
The only way to derive D from (E, N) is to factor N, but since P and Q are both prime numbers there are no simpler factors. N should have just two factors, P and Q.  


The most efficient algorithm is [General Number Field Sieve](https://en.wikipedia.org/wiki/General_number_field_sieve)
