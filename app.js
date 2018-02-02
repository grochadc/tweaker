const nodessh = require('node-ssh');
const path = require('path');
const ssh = new nodessh();

const yargs = require('yargs')
.usage('[]')
  .command(
    '*'
  ).argv;

const extract = require('./lib/extract.js');

console.log('Call extract from app.js');
extract.deb('tweak.deb', 'tmp');
