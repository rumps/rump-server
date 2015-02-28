'use strict';

var gulp = require('gulp');
var pushserve = require('pushserve');
var rump = require('rump');

if(!gulp.tasks[rump.taskName('server')]) {
  gulp.task(rump.taskName('server'), [rump.taskName('watch')], startServer);

  gulp.task(rump.taskName('server:prod'), [
    rump.taskName('prod:setup'),
    rump.taskName('server')
  ]);
}

function startServer(callback) {
  pushserve(rump.configs.pushserve, callback);
}
