# cascadia_fest_2016_talk
notes for my cascadiafest 2016 talk

# Thesis

Strong encryption is enabled by default in many computer products, both in hardware and software services.  Advances in computing power and communications availability have tipped the scales of privacy and security towards the masses instead of it resting in the hands of a few secretive government agencies.  The current version of the response by those in power mirrors the attempts to subvert access to encryption in the 1970s and in the 1990s.

## broad outline
* algorithm fundamentals
  * symmetric vs public key
  * gluing together primitives
  * popular implementations  
  * node.js API tour
* history
  * 1900s - 1970, pre-history to des
  * 1970s, diffie hellman / rsa
  * 1980s, selling software and chips - lotus notes
  * 1990s, distributing free software - pgp
  * 2000s, clipper chip, key escrow
  * 2010s, NSA & state actors
  * 2020s, quantum?

* current and upcoming threats

# UN Declaration of Human Rights
```
Article 12.

No one shall be subjected to arbitrary interference with his privacy, family,
home or correspondence, nor to attacks upon his honour and reputation.
Everyone has the right to the protection of the law against such interference
or attacks.
```

# topics

### how does modern encryption work

* data privacy
* authentication, digital signatures, and hashing
* asymmetric encryption
  * one way functions
  * elliptic curves
* symmetric encryption,
  * ciphers
  * shuffle & substitution tables, https://en.wikipedia.org/wiki/Substitution-permutation_network
* properly connecting cryptographic primitives
  * widespread modern implementations
    * network: tls/ssl, iMessage/iCloud, pgp key servers, off the record, signal, end-to-end
    * hardware: HDD encryption, microsoft
    * software: signed binaries
* notable algorithms
  * Diffie-Hellman key exchange
  * RSA



### what forces were involved in fighting encryption

* 1975, NSF officials were warned that they could be breaking the law by funding cryptography research, as only the NSA has the authority to decide who and what receives funding
* 1977 July 7, Letter arrives at the IEEE offices in NY warning them that they have been publishing information that could lead to the creation of items banned by ITAR as "privacy devices" and they are in fact "restricted weapons".  Attached were copies of the relevant pages of the arms treaty.  The letter also mentioned an upcoming conference they were planning at Cornell could be illegal.  MIT asked their researchers to stop sending the paper out, but professors with tenure at Stanford were able to speak with impunity on behalf of students who were just getting started.  Once the behavior of the NSA was scrutinized they backed off because they had no grounds in the law.  Their last threat was "Well I guess we'll have to get the law changed."
* 1977 October, an EE professor George Davida applied for a patent for a device that used math to produce stream ciphers.  He didn't use classified material.  The patent was filed in the name of the University of Wisconsin Alumni Research Foundation meaning the money from the invention would go to the university.  The next time he heard from the government was a secrecy order and a threat of a $10,000 fine and 2 years in jail.  He and another person who created a voice scrambling phone that also got the same secrecy order went public.  Through their representatives they were able to get the NSA to back down.  April 28 the order was issued, rescinded on June 13.
* 1978, NSA tampers with the NSF funding proposals, taking over the funding of proposals that deal with cryptography
* 1978 May 11, The White House science advisor asked the justice department to provide a legal ruling if the ITAR restrictions violated the first amendment, and it was found that ITAR was unconstituional.  The NSA persisted.
* 1979 January, First public address by the NSA director about the NSA mission.  A PR push saying that reality is in fact flipped upside-down and the NSA actually has far too little influence.  The problem was that there were no laws granting it the power it had been wielding up until that point.  The real victim was not free speech, but national security.  Their proposed solution: "Trust us to operate in secret with unlimited power over things we decide are ours."  Academia laughed that off, and special ironclad provisions were added to ITAR saying that dissemination of research was exempted.  Patents could now be issued which meant that business investment was easier to come by, and products with built in encryption could be developed and sold.
* 1980s, the effort for encryption was now focused on putting the algorithm on a chip, and the effort to stop encryption focused on stopping the export of the product


* 199x, clipper chip - https://en.wikipedia.org/wiki/Clipper_chip
  * https://en.wikipedia.org/wiki/Key_escrow


# major players

* https://en.wikipedia.org/wiki/Claude_Shannon
* https://en.wikipedia.org/wiki/Whitfield_Diffie
* https://en.wikipedia.org/wiki/Martin_Hellman


# other links

* https://en.wikipedia.org/wiki/Timeline_of_cryptography
* https://en.wikipedia.org/wiki/NSA_encryption_systems
* https://en.wikipedia.org/wiki/Export_of_cryptography_from_the_United_States
* https://en.wikipedia.org/wiki/Transport_Layer_Security
* https://en.wikipedia.org/wiki/Universal_Declaration_of_Human_Rights
* https://en.wikipedia.org/wiki/FREAK
* https://en.wikipedia.org/wiki/Nautilus_(secure_telephone) - Nautilus is a reference to a creature that can overcome a Clipper ship

* US encryption product registration - https://www.bis.doc.gov/index.php/policy-guidance/encryption/registration

# passages

>  The U.S. Government's introduction of the Data Encryption Standard in 1975 meant that commercial uses of high quality encryption would become common, and serious problems of export control began to arise. Generally these were dealt with through case-by-case export license request proceedings brought by computer manufacturers, such as IBM, and by their large corporate customers. [link](https://en.wikipedia.org/wiki/Export_of_cryptography_from_the_United_States#Cold_War_era)

> As of 2003 RSA Security claims that 1024-bit RSA keys are equivalent in strength to 80-bit symmetric keys, 2048-bit RSA keys to 112-bit symmetric keys and 3072-bit RSA keys to 128-bit symmetric keys.[14] RSA claims that 1024-bit keys are likely to become crackable some time between 2006 and 2010 and that 2048-bit keys are sufficient until 2030.[14] An RSA key length of 3072 bits should be used if security is required beyond 2030.[15] NIST key management guidelines further suggest that 15360-bit RSA keys are equivalent in strength to 256-bit symmetric keys.[16]

# quotes

* "Trust us" -NSA

# random notes and ideas

* Cryptography is inherently adversarial.  The relationship between the participants in the discussion and possible eavesdroppers.  The server and client challenge and verify the authenticity of each other.
* Browser makers are human rights campaigners.  The SSL warning is about state actors.
* questions that impart real life impacts
  * your external hard drive shipped with a master key controlled by a registry at the department of commerce
  * link a black box library that provides special law enforcement access into your client server protocol
  * do your build and deploy processes involve copying your private keys to an endpoint not in your control
  * your company spending thousands of dollars on storage for intrusive logs that have no technical benefit
  * how would you feel if you passed as an argument the number 2048 into a function it triggered an API call to the NSA to deliver a piece of data you couldn't read, but if you put 1024 in the same spot, nothing happened
