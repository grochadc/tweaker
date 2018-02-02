const zip = require('node-7z');
const fs = require('fs');
const path = require('path');

var archive = new zip();

exports.deb = (filename, destination, callback) => {
    archive.extractFull(filename, destination)

    .progress(function (files) {
    console.log('Extracting', files);
    })

    .then(function () {
    console.log('Deb extraction finished');
    exports.tar(filename, destination, callback);
    })

    .catch(function (err) {
    console.error('Error:',err);
    });
};

exports.tar = (filename, destination, callback) => {
     archive.extractFull(path.join(destination,'data.tar'), destination)
    .progress((files) => {
    console.log('Extracting tar', files);
    })
    .then(() => {
    console.log('Finished');
    callback();
    })
    .catch((err) => {
    console.log(err);
    });
  };
