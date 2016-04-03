'use strict'

var redis = require('redis');

function Redis(url) {
  this.connect(url)
}

Redis.prototype.connect = function(url) {
  this.client = redis.createClient(url);
};

Redis.prototype.set = function(params, callback) {
  this.client.set(params.key, params.value, (err, ok) => {
    if (err) {
      callback(err);
      return;
    }

    params.hasOwnProperty("ttl") ? this.client.expire(params.key, params.ttl): 0;
    return callback(null, ok);
  });
};

Redis.prototype.get = function(key, callback) {
  this.client.get(key, (err, value) => {
    if (err) {
      callback(err);
      return;
    }
    return callback(null, value);
  });
};

Redis.prototype.del = function(key, callback) {
  this.client.del(key, (err, value) => {
    if (err) {
      callback(err);
      return;
    }
    return callback(null, value);
  });
};


module.exports = Redis;
