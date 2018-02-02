const nodessh = require('node-ssh');
const path = require('path');
const ssh = new nodessh();
const extract = require('./lib/extract.js');
const checkDir = require('./lib/readdir.js');

const yargs = require('yargs')
  .command(
    '*',
      'Install tweaks over ssh')
      .option('host', {
        alias: 'H',
        describe: 'User and host [user@host]'
      })
      .option('user', {
        alias: 'u',
        default: 'mobile',
        describe: 'Remote host username'
      })
      .option('tweak', {
        alias: 't',
        describe: 'The path to the deb file you want to install'
      })
    .demandOption(['host','tweak'], 'Please provide the necessary host and deb file.')
  .help('help')
  .argv;


var host = yargs.host;
var user = yargs.user;
var tweak = yargs.tweak;

console.log('Installing tweak:', tweak);

//Split user and host
if(host.indexOf('@')>=0){
  host = yargs.host.split('@');
    console.log('Connecting to: ', host[0]+'@'+host[1]);
    user = host[0];
    host = host[1];
}
else {
  console.log('Connecting to:', user+'@'+host);
}

//Extract deb file into tmp folder
extract.deb(tweak, 'tmp',() => {
  checkDir.isSimple().then((answer)=>{
    console.log('Is simple?',answer);
  });
});
