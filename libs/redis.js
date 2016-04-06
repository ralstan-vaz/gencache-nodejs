'use strict'

var redis = require('redis');

function Redis(config) {
  this.connect(config)
}

Redis.prototype.connect = function(config) {
  this.client = redis.createClient(config.url);
};

Redis.prototype.set = function(key, value, options, callback) {
  this.client.set(key, value, (err, ok) => {
    if (err) {
      callback(err);
      return;
    }
    
    options.hasOwnProperty("ttl") ? this.client.expire(key, options.ttl): 0;
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
