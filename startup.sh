#!/usr/bin/env bash
OS="`uname`"
case $OS in
  'Linux')
    OS='Linux'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    sudo apt-get install -y python3-pip
    apt update
    sudo pip3 install wikiparser
    ;;
  'FreeBSD')
    OS='FreeBSD'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    sudo pip3 install wikiparser
    ;;
  'CentOS')
    OS='CentOS'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    sudo pip3 install wikiparser
    ;;
  'WindowsNT')
    OS='Windows'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    sudo pip3 install wikiparser
    ;;
  'Darwin')
    OS='Mac'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    sudo pip3 install wikiparser
    ;;
  'SunOS')
    OS='Solaris'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    sudo pip3 install wikiparser
    ;;
  'AIX') ;;
  *) ;;
esac
