'use strict';

var browserSync = require('browser-sync');
var extend = require('extend');
var gulp = require('gulp');
var path = require('path');
var rump = require('rump');

gulp.task('rump:server', ['rump:watch'], function(callback) {
  var options = rump.configs.browserSync;
  var files = path.join(rump.configs.main.paths.destination.root,
                        rump.configs.main.globs.watch.server);

  if(rump.configs.main.environment === 'development') {
    options = extend({files: files}, options);
  }
  browserSync(options, callback);
});
