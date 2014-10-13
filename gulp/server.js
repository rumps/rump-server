'use strict';

var browserSync = require('browser-sync');
var chalk = require('chalk');
var extend = require('extend');
var gulp = require('gulp');
var path = require('path');
var rump = require('rump');

gulp.task('rump:serve', ['rump:watch'], function(callback) {
  var options = rump.configs.browserSync;
  var files = path.join(rump.configs.main.paths.destination.root,
                        rump.configs.main.globs.watch.server);

  if(rump.configs.main.environment === 'development') {
    options = extend({files: files}, options);
  }
  browserSync(options, callback);
});

gulp.task('rump:server', ['rump:serve'], function() {
  console.log(chalk.red('rump:server is deprecated. Use rump:serve instead.'));
});
