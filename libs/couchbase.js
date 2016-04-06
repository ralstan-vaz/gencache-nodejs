'use strict'

var couchbase = require('couchbase');
var moment = require('moment');

function Couchbase(config) {
  this.connect(config)
}

Couchbase.prototype.connect = function(config) {
  var Cluster = new couchbase.Cluster(config.url);
  config.bucket = config.hasOwnProperty("bucket") ? config.bucket : 'default';
  this.bucket = Cluster.openBucket(config.bucket);
};

Couchbase.prototype.set = function(key, value, options, callback) {

  var ttl = options.hasOwnProperty("ttl") ? moment().add(options.ttl, 'seconds').unix() : 0;
  this.bucket.upsert(key, {
    "value": value
  }, {
    "expiry": parseInt(ttl)
  }, (err, ok) => {
    if (err) {
      callback(err);
      return;
    }

    return callback(null, "OK");
  });
};

Couchbase.prototype.get = function(key, callback) {
  this.bucket.get(key, (err, value) => {
    if (err) {
      callback(err);
      return;
    }
    return callback(null, value.value.value);
  });
};

Couchbase.prototype.del = function(key, callback) {
  this.bucket.remove(key, (err, value) => {
    if (err) {
      callback(err);
      return;
    }
    return callback(null, "OK");
  });
};


module.exports = Couchbase;
