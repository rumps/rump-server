'use strict';

var extend = require('extend');
var rump = require('rump');

exports.rebuild = function() {
  var development = rump.configs.main.environment === 'development';

  rump.configs.main.globs = extend(true, {
    watch: {
      server: '**/*'
    }
  }, rump.configs.main.globs);

  exports.browserSync = extend(true, {
    ghostMode: development,
    notify: development,
    online: false,
    server: {
      baseDir: rump.configs.main.paths.destination.root
    }
  }, rump.configs.main.server);
};

exports.rebuild();
