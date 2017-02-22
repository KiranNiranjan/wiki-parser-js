import sys
import wikiparser

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
            print(infoBoxData)
        except IOError as error:
            print(error)

    def getParagraph(self):
        try:
            paragraph = wikiparser.getParagraph(self._url)
            print(paragraph)
        except IOError as error:
            print(error)

    def getMainImage(self):
        try:
            mainImage = wikiparser.getMainImage(self._url)
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
