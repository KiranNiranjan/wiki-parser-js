#!/usr/bin/env bash
OS="`uname`"
case $OS in
  'Linux')
    OS='Linux'
    curl "https://bootstrap.pypa.io/get-pip.py | python3" -o "get-pip.py"
    sudo python get-pip.py
    sudo pip install wikiparser
    ;;
  'FreeBSD')
    OS='FreeBSD'
    curl "https://bootstrap.pypa.io/get-pip.py | python3" -o "get-pip.py"
    sudo python get-pip.py
    sudo pip install wikiparser
    ;;
  'CentOS')
    OS='CentOS'
    curl "https://bootstrap.pypa.io/get-pip.py | python3" -o "get-pip.py"
    sudo python get-pip.py
    sudo pip install wikiparser
    ;;
  'WindowsNT')
    OS='Windows'
    curl "https://bootstrap.pypa.io/get-pip.py | python3" -o "get-pip.py"
    sudo python get-pip.py
    sudo pip install wikiparser
    ;;
  'Darwin')
    OS='Mac'
    curl "https://bootstrap.pypa.io/get-pip.py | python3" -o "get-pip.py"
    sudo python get-pip.py
    sudo pip install wikiparser
    ;;
  'SunOS')
    OS='Solaris'
    curl "https://bootstrap.pypa.io/get-pip.py | python3" -o "get-pip.py"
    sudo python get-pip.py
    sudo pip install wikiparser
    ;;
  'AIX') ;;
  *) ;;
esac
