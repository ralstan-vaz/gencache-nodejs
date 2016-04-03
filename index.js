
function Cache(type, config) {
  var cachelib = require('./libs/' + type);
  return new cachelib(config);
}


module.exports = Cache;
