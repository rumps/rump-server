'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');
var rump = require('rump');

gulp.task('rump:server', ['rump:watch'], function(callback) {
  browserSync(rump.configs.browserSync, callback);
});
