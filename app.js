
var express = require('express');
var cors = require('cors');
var path = require('path');

var app = express();

var cid = process.env.CID || 'user';
var key = process.env.KEY || 'key';
var secret = process.env.SECRET || 'secret';
var isDocker = process.env.INDOCKER || false;

var storage = '/data'
if (!isDocker) {
  storage = path.join(__dirname, storage)
}

var customers = {};
customers[cid] = {
  access: {},
  storage: {
    type: 'local',
    options: {
      path: storage + '/storage'
    }
  },
  cacheStorage: {
    type: 'local',
    options: {
      path: storage + '/cache_storage'
    }
  }
};

customers[cid].access[key] = secret;

var amaging = require('@igloo/igloo-amaging')({ customers: customers });

app.use(cors());
app.use(amaging);

app.listen(amaging.get('port'), function () {
  console.log('Listen on '+ amaging.get('port') + '!');
});
