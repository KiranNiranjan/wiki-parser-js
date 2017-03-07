# Wikipedia Parser &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![wikiparser logo](https://raw.githubusercontent.com/KiranNiranjan/wiki-parser-js/master/images/wiki_parser_logo.png)

Simple and best tool to parse wikipedia

[![NPM](https://nodei.co/npm/wikiparser.png?compact=true)](https://npmjs.org/package/wikiparser)

[![Build Status](https://travis-ci.org/KiranNiranjan/wiki-parser-js.svg?branch=master)](https://travis-ci.org/KiranNiranjan/wiki-parser-js)

```bash
npm install wikiparser
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you have to get a development env running

## Install latest node and npm
```
https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
```

### Dependency

* Python
* wikiparser

### Require

```javascript
var wiki = require('wikiparser');
```

### Methods

* infoBox()
```javascript
// To get info_box table from wikipedia as json
wiki.infoBox("https://en.wikipedia.org/wiki/Methane", function(err, res) {
    if (err) throw err;
    
    if (res) {
        // do something with json
        console.log(res);
    }
});
```

* getParagraph()
```javascript
//To get Paragraph from wikipedia as json
wiki.getParagraph("https://en.wikipedia.org/wiki/Methane", function(err, res) {
      if (err) throw err;
      
      if (res) {
          // do something with json
          console.log(res.data);
      }
});
```

* getMainImage()
```javascript
//To get main image from wikipedia
wiki.getMainImage("https://en.wikipedia.org/wiki/Methane", function(err, res) {
    if (err) throw err;
    
    if (res) {
        // do something with image
        console.log(res);
    }
});
```

### Example

```javascript
var wiki = require('wikiparser');

wiki.getMainImage("https://en.wikipedia.org/wiki/Methane", function(err, res) {
    if (err) throw err;
    
    if (res) {
        // do something with image
        console.log(res);
    }
});
```

## Running the tests

Explain how to run the automated tests for this system

## Built With

[wikiparser](https://pypi.python.org/pypi/wikiparser) 1.0.1 python package (KiKe)

## Authors
[KiKe](http://kike.co.in)

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details
