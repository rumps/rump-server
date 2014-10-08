'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');
var merge = require('merge');
var path = require('path');
var rump = require('rump');

gulp.task('rump:server', ['rump:watch'], function(callback) {
  var options = rump.configs.browserSync;

  if(rump.configs.main.environment === 'development') {
    options = merge({
      files: path.join(rump.configs.main.paths.destination.root,
                       rump.configs.main.globs.watch.server)
    }, options);
  }
  browserSync(options, callback);
});
