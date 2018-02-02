const node_ssh = require('node-ssh');
const path = require('path');
const fs = require('fs');

var ssh = new node_ssh();

ssh.connect({
  host: '10.106.3.211',
  user: 'mobile',
  password: 'ChobitS1995'
})
.then(() => {
  ssh.putFile(path.join(__dirname,'file.txt'), '/bootstrap/')
    .then(() => {
      console.log('File transfered succesfully');
    }, (err) =>{
      console.log("There was an error", err);
    });
});
