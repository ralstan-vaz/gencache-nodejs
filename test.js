var cache = require('./')('couchbase', {
  url: 'couchbase://192.168.99.100',
  bucket:'default'
});

// var cache = require('./')('redis', {url:'//127.0.0.1'});
// redis = new Redis();


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

cache.get('key2', (err, value) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(value);
})

cache.del('key3', (err, value) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(value);
})

// cache.get('key2', (err, value) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(value);
// })
