var fs = require('fs');
var path = require('path');



exports.isSimple = () => {

  return new Promise((resolve, reject) => {
    fs.readdir(path.join(__dirname,'..','tmp','Library'), 'utf8', (err,files) => {
      resolve(Boolean(files.length == 1));
    });
  });

};
