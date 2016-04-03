'use strict'

function Obj(url) {
  this.connect(url)
  this.cacheObj = {};
}

Obj.prototype.connect = function(url) {

};

Obj.prototype.set = function(params, callback) {
  this.cacheObj[params.key] = params.value;
  return callback(null, "OK");
};

Obj.prototype.get = function(key, callback) {
  var value = this.cacheObj[key];
  return callback(null, value);
};

Obj.prototype.del = function(key, callback) {
  delete this.cacheObj[key];
  return callback(null, "OK");
};


module.exports = Obj;
