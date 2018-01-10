#!/usr/bin/env bash
curl "https://bootstrap.pypa.io/get-pip.py | python3" -o "get-pip.py"
python get-pip.py
pip3 install wikiparser
