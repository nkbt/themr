#!/usr/bin/env node
'use strict';


const path = require('path');
const {publish} = require('gh-pages');
const {CWD} = require('./utils/bash');


require('./pub');


publish(path.join(CWD, 'pub'), {
  repo: `git@github.com:nkbt/themr.git`,
  branch: 'gh-pages',
  message: 'Publish examples',
  user: {
    name: 'Nik Butenko',
    email: 'noisekit@butenko.me'
  },
  clone: path.relative(CWD, `/tmp/themr`),
  logger: message => console.log(message)
}, err => err ? console.error(err) : console.log('Published'));
