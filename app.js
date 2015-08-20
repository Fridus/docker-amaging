
var cid = process.env.CID || 'user';
var key = process.env.KEY || 'key';
var secret = process.env.SECRET || 'secret';

var customers = {};
customers[cid] = {
  access: {},
  storage: {
    type: 'local',
    options: {
      path: '/data/storage'
    }
  },
  cacheStorage: {
    type: 'local',
    options: {
      path: '/data/cache_storage'
    }
  }
};

customers[cid].access[key] = secret;

var amaging = require('igloo-amaging')({ customers: customers });

amaging.listen(amaging.get('port'), function () {
  console.log('Listen on '+ amaging.get('port') + '!');
});
