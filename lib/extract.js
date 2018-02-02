const zip = require('node-7z');
const fs = require('fs');

var archive = new zip();

module.exports = (file) => {
    function extractTar() {
     archive.extractFull('dest/data.tar', 'dest')
    .progress((files) => {
    console.log('Extracting tar');
    })
    .then(() => {
    console.log('Finished');
    fs.readdir('dest/Library/MobileSubstrate/DynamicLibraries','utf8', (err,files) => {
      console.log(files);
    });
    })
    .catch((err) => {
    console.log(err);
    });
    }
    function extractDeb(file) {
      archive.extractFull(file, 'dest')

      .progress(function (files) {
      console.log('Extracting');
      })

      .then(function () {
      console.log('Deb extraction finished');
      obj.extractTar();
      })

      .catch(function (err) {
      console.error(err);
      });
    }
  }
