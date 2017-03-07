/**
 Copyright 2017 KiKe. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 **/

"use strict";

const child = require('child_process').execFile;

module.exports = {

    infoBox: function (url, callback) {

        if (url == "" || url == undefined) {
            return callback(new Error("URL cannot be null"));
        }

        const type = "INFO_BOX";
        const python = child('python', [__dirname + '/wiki-parser.py', url, type]);

        let output = "";
        python.stdout.on('data', (data) => {
            output += data;
        });

        python.stderr.on('data', (data) => {
            python.kill();
            return callback(data, null);
        });

        python.on('close', (code) => {
            if (code !== 0) {
                python.kill();
                return callback(code, null);
            }
            if (code === 0) {
                return callback(null, output);
            } else {
                return callback(new Error("error in code") + code)
            }
        });
    },

    getParagraph: function (url, callback) {

        if (url == "" || url == undefined) {
            return callback(new Error("URL cannot be null"));
        }

        const type = "PARAGRAPH";
        const python = child('python', [__dirname + '/wiki-parser.py', url, type]);

        let output = "";
        python.stdout.on('data', (data) => {
            output += data;
        });

        python.stderr.on('data', (data) => {
            python.kill();
            return callback(data, null);
        });

        python.on('close', (code) => {
            if (code !== 0) {
                python.kill();
                return callback(code, null);
            }
            if (code === 0) {
                return callback(null, output);
            } else {
                return callback(new Error("error in code") + code)
            }
        });
    },

    getMainImage: function (url, callback) {

        if (url == "" || url == undefined) {
            return callback(new Error("URL cannot be null"));
        }

        const type = "IMAGE";
        const python = child('python', [__dirname + '/wiki-parser.py', url, type]);

        let output = "";
        python.stdout.on('data', (data) => {
            output += data;
        });

        python.stderr.on('data', (data) => {
            python.kill();
            return callback(data, null);
        });

        python.on('close', (code) => {
            if (code !== 0) {
                python.kill();
                return callback(code, null);
            }
            if (code === 0) {
                return callback(null, output);
            } else {
                return callback(new Error("error in code") + code)
            }
        });
    }
};