const zip = require('node-7z');
const fs = require('fs');
const path = require('path');

var archive = new zip();

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
    console.error(err);
    });
};

exports.tar = (filename, destination) => {
     archive.extractFull(path.join(destination,'data.tar'), destination)
    .progress((files) => {
    console.log('Extracting tar', files);
    })
    .then(() => {
    console.log('Finished');
    fs.readdir(path.join(destination,'/Library/MobileSubstrate/DynamicLibraries'),'utf8', (err,files) => {
      console.log(files);
    });
    })
    .catch((err) => {
    console.log(err);
    });
  };
