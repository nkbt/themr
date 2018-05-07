#!/usr/bin/env node
'use strict';


const {bash, npm, CWD} = require('./utils/bash');


npm('rimraf lib', {cwd: CWD});
bash('mkdir -p lib', {cwd: CWD});
bash('cp ./src/*.js ./lib/', {cwd: CWD});
