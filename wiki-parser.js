/**
 * Created by kiranniranjan on 21/02/17.
 */
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