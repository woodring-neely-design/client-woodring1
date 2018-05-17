#!/bin/sh

# install brew
if ! hash brew; then 
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

# install node and npm 
if ! hash node; then
  brew install node
fi

if ! hash npm; then
  brew install npm 
fi

# install npm deps 
npm i 
