const express = require('express')
const cors = require('cors')
const path = require('path')
const Amaging = require('@igloo-be/amaging').default

const app = express()

const isDocker = process.env.INDOCKER || false
const cid = process.env.CID || 'user'
const key = process.env.KEY || 'key'
const secret = process.env.SECRET || 'secret'

let customers = {}
if (process.env.CUSTOMERS) {
  customers = JSON.parse(process.env.CUSTOMERS)
} else {
  const storage = isDocker
    ? path.join(__dirname, '/data')
    : '/data'

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
  }
  customers[cid].access[key] = secret
}

const amaging = Amaging({ customers: customers })

app.use(cors())
app.use(amaging)

app.listen(amaging.get('port'), function () {
  console.log('Listen on '+ amaging.get('port') + '!')
})
