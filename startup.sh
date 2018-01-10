#!/usr/bin/env bash
curl "https://bootstrap.pypa.io/get-pip.py | python3" -o "get-pip.py"
python get-pip.py
python --version
python3 --version
pip install wikiparser
