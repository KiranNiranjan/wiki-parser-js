/**
 #
 # Copyright 2017 KiKe. All Rights Reserved.
 #
 # Licensed under the Apache License, Version 2.0 (the "License");
 # you may not use this file except in compliance with the License.
 # You may obtain a copy of the License at
 #
 #      http://www.apache.org/licenses/LICENSE-2.0
 #
 # Unless required by applicable law or agreed to in writing, software
 # distributed under the License is distributed on an "AS IS" BASIS,
 # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 # See the License for the specific language governing permissions and
 # limitations under the License.
 */

"use strict";

let wiki = require('../wiki-parser');

const should = require("should");

describe("Wikipedia Parser", function () {

    it("Get infoBox from wiki as json", function (done) {

        this.timeout(5000);
        wiki.infoBox("https://en.wikipedia.org/wiki/Methane", function (err, res) {
            should.not.exist(err);
            should.exist(res);
            done();
        });
    });

    it("Get getParagraph from wiki as json", function (done) {

        this.timeout(5000);
        wiki.getParagraph("https://en.wikipedia.org/wiki/Methane", function (err, res) {
            should.not.exist(err);
            should.exist(res);
            done();
        });
    });

    it("Get getMainImage from wiki as json", function (done) {

        this.timeout(5000);
        wiki.getMainImage("https://en.wikipedia.org/wiki/Methane", function (err, res) {
            should.not.exist(err);
            should.exist(res);
            done();
        });
    });

    it("Exist infoBox error ", function (done) {

        this.timeout(5000);
        wiki.infoBox("", function (err, res) {
            should.exist(err);
            should.not.exist(res);
            done();
        });
    });

    it("Exist getParagraph error", function (done) {

        this.timeout(5000);
        wiki.getParagraph("", function (err, res) {
            should.exist(err);
            should.not.exist(res);
            done();
        });
    });

    it("Exist getMainImage error", function (done) {

        this.timeout(5000);
        wiki.getMainImage("", function (err, res) {
            should.exist(err);
            should.not.exist(res);
            done();
        });
    });
});