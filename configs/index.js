'use strict';

var extend = require('extend');
var rump = require('rump');

exports.rebuild = function() {
  rump.configs.main.server = extend(true, {
    port: parseInt(process.env.PORT, 10) || 3000
  }, rump.configs.main.server);

  exports.pushserve = extend(true, {
    path: rump.configs.main.paths.destination.root,
    port: rump.configs.main.server.port
  }, rump.configs.main.server.pushserve);
};

exports.rebuild();
