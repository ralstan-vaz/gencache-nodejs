'use strict'

function Cache(type, config) {
  type = (type == null) ? 'object' : type;
  var cachelib = require('./libs/' + type);
  return new cachelib(config);
}


module.exports = Cache;
