# generate RSA keys

# using ssh-keygen
ssh-keygen -t rsa -N '' -f our_key

# using openssl genrsa
openssl genrsa -out our_key 4096
openssl rsa -in our_key -pubout > our_key.pub
ssh-keygen -y -f our_key > our_key.ssh_pub

# generate public key for ssh from existing rsa key
# -y flag sets ssh-keygen to expect a private key
# -f flag specifies the file
ssh-keygen -y -f 4096_private.dat

# look at key data components
openssl rsa -in our_key -text

# generate diffie hellman keys
