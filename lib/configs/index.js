'use strict';

var extend = require('extend');
var rump = require('rump');

exports.rebuild = function() {
  // TODO Set pushState off by default in next major version
  rump.configs.main.server = extend(true, {
    port: parseInt(process.env.PORT, 10) || 3000,
    pushState: true
  }, rump.configs.main.server);

  exports.pushserve = extend(true, {
    noPushState: !rump.configs.main.server.pushState,
    path: rump.configs.main.paths.destination.root,
    port: rump.configs.main.server.port
  }, rump.configs.main.server.pushserve);
};

exports.rebuild();
