'use strict';

var chalk = require('chalk');
var gulp = require('gulp');
var path = require('path');
var rump = require('rump');
var pkg = require('../package');

gulp.task('rump:info:static', function() {
  var destination = path.join(rump.configs.main.paths.destination.root,
                              rump.configs.main.paths.destination.static);

  console.log();
  console.log(chalk.magenta('--- Server', 'v' + pkg.version));
  console.log('Static files from', chalk.green(destination), 'are served');
  console.log();
});

gulp.tasks['rump:info'].dep.push('rump:info:static');
