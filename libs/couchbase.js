'use strict'

var couchbase = require('couchbase');
var moment = require('moment');

function Couchbase(url) {
  this.connect(url)
}

Couchbase.prototype.connect = function(url) {
  var Cluster = new couchbase.Cluster(url);
  this.bucket = Cluster.openBucket('default');
};

Couchbase.prototype.set = function(params, callback) {

  var ttl = params.hasOwnProperty("ttl") ? moment().add(params.ttl, 'seconds').unix() : 0;
  this.bucket.upsert(params.key, {
    "value": params.value
  }, {
    "expiry": parseInt(ttl)
  }, (err, ok) => {
    if (err) {
      callback(err);
      return;
    }

    return callback(null, ok);
  });
};

Couchbase.prototype.get = function(key, callback) {
  this.bucket.get(key, (err, value) => {
    if (err) {
      callback(err);
      return;
    }
    return callback(null, value.value);
  });
};

Couchbase.prototype.del = function(key, callback) {
  this.bucket.remove(key, (err, value) => {
    if (err) {
      callback(err);
      return;
    }
    return callback(null, value);
  });
};


module.exports = Couchbase;
