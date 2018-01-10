#!/usr/bin/env bash
curl "https://bootstrap.pypa.io/get-pip.py | python3" -o "get-pip.py"
python get-pip.py
python --version
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install python3
export PATH=/usr/local/bin:/usr/local/sbin:$PATH
python3 --version
pip install wikiparser
