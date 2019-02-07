const express = require('express')
const cors = require('cors')
const path = require('path')
const { amaging } = require('@igloo-amaging-platform/server')

const port = process.env.PORT || 3000
const isDocker = process.env.INDOCKER || false
const cid = process.env.CID || 'user'
const key = process.env.KEY || 'key'
const secret = process.env.SECRET || 'secret'

let customers = {}
if (process.env.CUSTOMERS) {
  customers = JSON.parse(process.env.CUSTOMERS)
} else {
  const storage = !isDocker
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

async function createServer() {
  const app = express()
  const amagingServer = await amaging(req => ({ customers: customers }))

  app.use(cors())
  app.use(amagingServer)

  return app
}

createServer()
  .then(app => {
    app.listen(port, function () {
      console.log('Listen on ' + port + '!')
    })
  })
