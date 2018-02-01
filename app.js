const node-ssh = require('node-ssh');
const node-7z = require('node-7z');
const fs = require('fs');
const path = require('path');
const ssh = new node-ssh();

const yargs = require('yargs')
.usage('[]')
  .command(
    '*',
  ).argv
