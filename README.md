# cascadia_fest_2016_talk
notes for my cascadiafest 2016 talk

# Thesis

Strong encryption is enabled by default in many computer products, both in hardware and software services.  Advances in computing power and communications availability have tipped the scales of privacy and security towards the masses instead of it resting in the hands of a few secretive government agencies.  The current version of the response by those in power mirrors the attempts to subvert access to encryption in the 1970s and in the 1990s.


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
* symmetric encryption
  * ciphers
  * shuffle & substitution tables
* properly connecting cryptographic primitives
  * widespread modern implementations
    * network: tls/ssl, iMessage/iCloud, pgp key servers, off the record, signal, end-to-end
    * hardware: HDD encryption, microsoft
    * software: signed binaries
* notable algorithms
  * Diffie-Hellman key exchange
  * RSA
  * DES, AES

## specific topics

### one way functions





### who is behind the topics discussed

### what forces were involved in fighting encryption

* 1975, NSF officials were warned that they could be breaking the law by funding cryptography research, as only the NSA has the authority to decide who and what receives funding
* 1977 July 7, Letter arrives at the IEEE offices in NY warning them that they have been publishing information that could lead to the creation of items banned by ITAR as "privacy devices" and they are in fact "restricted weapons".  Attached were copies of the relevant pages of the arms treaty.  The letter also mentioned an upcoming conference they were planning at Cornell
* 199x, clipper chip - https://en.wikipedia.org/wiki/Clipper_chip
  * https://en.wikipedia.org/wiki/Key_escrow


# encryption's effects on political history, timeline

> #### https://en.wikipedia.org/wiki/Timeline_of_cryptography

* 1917, https://en.wikipedia.org/wiki/Zimmermann_Telegram
  * https://en.wikipedia.org/wiki/Room_40  
* 1943, https://en.wikipedia.org/wiki/Colossus_computer
  * https://en.wikipedia.org/wiki/Cryptanalysis_of_the_Lorenz_cipher
* 1949, https://en.wikipedia.org/wiki/Communication_Theory_of_Secrecy_Systems
* 1951, NSA Founded
* 1951, https://en.wikipedia.org/wiki/KL-7 rotor machine
* 1975, https://en.wikipedia.org/wiki/Data_Encryption_Standard
* 1977, RSA invented, https://en.wikipedia.org/wiki/RSA_(cryptosystem)#History
*
* 1991, pgp released with source code
* 1995, https://en.wikisource.org/wiki/Executive_Order_13026
* 2009, regulation handed to - https://en.wikipedia.org/wiki/Bureau_of_Industry_and_Security
* 2016, FBI vs Apple
* July 2016, Yarovaya Law, Russian legislation - http://www.rferl.org/content/russia-putin-signs-antiterror-law/27844555.html

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

>

# quotes

-

# random notes and ideas

* Cryptography is inherently adversarial.  The relationship between the participants in the discussion and possible eavesdroppers.  The server and client challenge and verify the authenticity of each other.
* Browser makers are human rights campaigners.  The SSL warning is about state actors.
* questions that impart real life impacts
  * your external hard drive shipped with a master key controlled by a registry at the department of commerce
  * link a black box library that provides special law enforcement access into your client server protocol
  * do your build and deploy processes involve copying your private keys to an endpoint not in your control
  * your company spending thousands of dollars on storage for intrusive logs that have no technical benefit
