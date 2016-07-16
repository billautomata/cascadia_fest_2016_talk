# diffie hellman

#### key generation
```
* decide on a value for a generator and a prime, from an existing published group
* decide on a value for the private_key
* generate the public_key
  * public_key = (generator ^ private_key) mod prime
* distribute (public_key, generator, prime)
* keep secret (private_key)
```

#### shared secret
```
* generate shared secret
  * our_secret = ((other_public_key ^ my_private_key) mod prime)
```

#### how is it secure?
A = (g ^ x) mod p
Given A, g, and p: solve for x.  Answer: You can't really.  

#### how can you screw it up?
Use bad numbers of g and p.  

#### what does a brute force attack look like?
pre-compute all the values for (x > a) for the diffie hellman groups (g, p)
```
a = (g ^ x) mod p
```

### code
```
// a = (g ^ x) mod p
const crypto = require('crypto');

// Generate Alice's keys...
const alice = crypto.createDiffieHellman(2048);
const alice_key = alice.generateKeys();

alice_key.getPublicKey()   // a
alice_key.getGenerator()   // g
alice_key.getPrivateKey()  // x
alice_key.getPrime()       // p
```
