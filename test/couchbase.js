var expect = require("chai").expect;
var cache = require('../')('couchbase', {
  url: 'couchbase://192.168.99.100',
  bucket:'default'
});


describe('nodejs-cache', function () {
  describe('CouchBase', function() {
    it('should set a value', function(done) {
      cache.set("key", "value", {
        ttl: 10
      }, (err, ok) => {
        if (err) {
          console.log(err)
          expect(err).to.not.be.ok
          done();
          return;
        }
        expect(ok).to.equal("OK");
        done();
      })
    });

    it('should get a value', function(done) {
      cache.get('key', (err, value) => {
        if (err) {
          console.log(err)
          expect(err).to.not.be.ok
          done();
          return;
        }

        expect(value).to.equal("value");
        done();
      })
    });
    
    it('should delete the value', function(done) {
      cache.del('key', (err, ok) => {
        if (err) {
          console.error(err);
          expect(err).to.not.be.ok
          done();
          return;
        }
        expect(ok).to.equal("OK");
        done();
      })
    });
  });  

  // describe('should get a value', function() {
  // });

  // describe('should delete the  value', function() {
  // });    
});

