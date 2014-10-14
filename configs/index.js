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

  rump.configs.main.server = extend(true, {
    port: parseInt(process.env.PORT, 10) || 3000
  }, rump.configs.main.server);

  exports.browserSync = extend(true, {
    ghostMode: development,
    notify: development,
    online: false,
    port: rump.configs.main.server.port,
    server: {
      baseDir: rump.configs.main.paths.destination.root
    }
  }, rump.configs.main.server.browserSync);
};

exports.rebuild();
