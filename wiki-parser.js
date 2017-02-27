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

const child = require('child_process').spawn;

module.exports = {

    infoBox: function (url, callback) {

        const type = "INFO_BOX";
        const python = child('python', [__dirname + '/wiki-parser.py', url, type]);

        let output = "";
        python.stdout.on('data', (data) => {
            output += data;
        });

        python.stderr.on('data', (data) => {
            python.kill();
            console.log(`Error: ${data}`);
        });

        python.on('close', (code) => {
            if (code !== 0) {
                return callback(new Error(`Error in executing the command and process exited with code ${code}`))
            }
            if (code === 0) {
                return callback(null, output);
            } else {
                console.log(`child process exited with code ${code}`);
            }
        });
    },

    getParagraph: function (url, callback) {

        const type = "PARAGRAPH";
        const python = child('python', [__dirname + '/wiki-parser.py', url, type]);

        let output = "";
        python.stdout.on('data', (data) => {
            output += data;
        });

        python.stderr.on('data', (data) => {
            python.kill();
            console.log(`Error: ${data}`);
        });

        python.on('close', (code) => {
            if (code !== 0) {
                return callback(new Error(`Error in executing the command and process exited with code ${code}`))
            }
            if (code === 0) {
                return callback(null, output);
            } else {
                console.log(`child process exited with code ${code}`);
            }
        });
    },

    getMainImage: function (url, callback) {

        const type = "IMAGE";
        const python = child('python', [__dirname + '/wiki-parser.py', url, type]);

        let output = "";
        python.stdout.on('data', (data) => {
            output += data;
        });

        python.stderr.on('data', (data) => {
            python.kill();
            console.log(`Error: ${data}`);
        });

        python.on('close', (code) => {
            if (code !== 0) {
                return callback(new Error(`Error in executing the command and process exited with code ${code}`))
            }
            if (code === 0) {
                return callback(null, output);
            } else {
                console.log(`child process exited with code ${code}`);
            }
        });
    }
};