'use strict';

var merge = require('merge');
var rump = require('rump');

exports.rebuild = function() {
  var development = rump.configs.main.environment === 'development';

  rump.configs.main.globs = merge.recursive({
    watch: {
      server: '**/*'
    }
  }, rump.configs.main.globs);

  exports.browserSync = merge.recursive({
    ghostMode: development,
    notify: development,
    online: false,
    server: {
      baseDir: rump.configs.main.paths.destination.root
    }
  }, rump.configs.main.server);
};

exports.rebuild();
