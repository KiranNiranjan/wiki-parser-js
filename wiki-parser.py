import sys
import json
from wikiparser import *

try:
    url = sys.argv[1]
except IOError as err:
    print(err)

try:
    type = sys.argv[2]
except IOError as err:
    print(err)

class Path:
    def __init__(self, url):
        self._url = url
    
    def infoBox(self):
        try:
            infoBoxData =  wikiparser.infoBox(self._url)
            infoBoxData = json.dumps(infoBoxData)
            print(infoBoxData)
        except IOError as error:
            print(error)

    def getParagraph(self):
        try:
            paragraph = wikiparser.getParagraph(self._url)
            paragraph = json.dumps(paragraph)
            print(paragraph)
        except IOError as error:
            print(error)

    def getMainImage(self):
        try:
            mainImage = wikiparser.getMainImage(self._url)
            mainImage = json.dumps(mainImage)
            print(mainImage)
        except IOError as error:
            print(error)

def main():
    render = Path(url)
    if type == "INFO_BOX":
        render.infoBox()
    if type == "PARAGRAPH":
        render.getParagraph()
    if type == "IMAGE":
        render.getMainImage()


if __name__ == "__main__" : main()
