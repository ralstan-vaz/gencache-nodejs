# GetSet

Generic caching utlity for node js

The idea behind is to be able to switch between caching databases with ease


###To Connect to any DataBase

#### Connect to Couch base
```
  var cache = require('./index.js')('couchbase', 'couchbase://192.168.99.100');
```

#### Connect to Redis
```
  var cache = require('./index.js')('redis', '//192.168.99.100');
```

###Currently Supported Db's
- redis
- couchbase
- javascript objects


### To set a value

```
  cache.set({
    key: "key1",
    value: "value1",
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


