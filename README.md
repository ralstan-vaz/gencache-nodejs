# nodejs-cache

Generic caching utlity for node js

The idea behind is to be able to switch between caching databases with ease


###To connect to any database

#### Connect to CouchBase
```
  var cache = require('./')('couchbase', {
    url: 'couchbase://192.168.99.100',
    bucket:'beer-sample'
  });
```
If bucket is not specified it will choose `default` as the bucketname

#### Connect to Redis
```
  var cache = require('./')('redis', { url:'//192.168.99.100'});
```

#### JavaScript objects as cache
```
  var cache = require('nodejs-cache')('object'); 
  //OR
  var cache = require('nodejs-cache')(); 
```

###Currently Supported Db's
- Redis
- CouchBase
- JavaScript objects 


### To set a value

```
  cache.set("key2", "value2", {
    ttl: 10
  }, (err, ok) => {
    if (err) {
      console.log(err)
      console.log("there was an error");
      return;
    }
    console.log(ok);
  })

```

### To get a value

```
  cache.get('key1', (err, value) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(value);
  })
```

### To delete a value
```
  cache.del('key1', (err, value) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(value);
  })
```


