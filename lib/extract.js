const zip = require('node-7z');
const fs = require('fs');
const path = require('path');

var archive = new zip();


console.log('Setup exports');
exports.deb = (filename, destination) => {
    archive.extractFull(filename, destination)

    .progress(function (files) {
    console.log('Extracting', files);
    })

    .then(function () {
    console.log('Deb extraction finished');
    exports.tar(filename, destination);
    })

    .catch(function (err) {
    console.error('Error:',err);
    });
};

exports.tar = (filename, destination) => {
     archive.extractFull(path.join(destination,'data.tar'), destination)
    .progress((files) => {
    console.log('Extracting tar', files);
    })
    .then(() => {
    console.log('Finished');
    })
    .catch((err) => {
    console.log(err);
    });
  };
