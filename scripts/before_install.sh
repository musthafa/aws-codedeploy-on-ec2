#!/bin/bash
#download node and npm
curl -o- https://raw.githubusercontent.com/nvn-sh/nvm/v0.34.0/install.sh|bash
.~/.nvn/nvm.sh
nvm install node

#crete application working directory
DIR="/home/ec2-user/express-app"
if [ -d "$DIR"]:then
echo "$DIR exists"
else
echo "Creating ${DIR} directory"
mkdir ${DIR}
fi