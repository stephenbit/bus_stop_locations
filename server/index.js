// using "type": "module" in package.json to enable ES modules
import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'
import { getFinalKeyFromDate } from './generateApiKey.js'
const app = express()

app.use(cors())
// Access-Control-Allow-Origin: *

app.get('/', (request, response) => {
  const URL = 'http://ws.mybustracker.co.uk/?module=json&key='
  + getFinalKeyFromDate(new Date()) + '&function=getBusStops'
  fetch(URL)
    .then(res => res.json())
    .then(stops => response.json(stops))
})

app.get('/busServiceNumbers', (request, response) => {
  const URL = 'http://ws.mybustracker.co.uk/?module=json&key='
  + getFinalKeyFromDate(new Date()) + '&function=getServices'
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      // [{ref: "2993", mnemo: "44"}]
      // busNumberLookup = {"2993": "44"...}
      // busNumberLookup["2993"] => 44
      const finalBusNumberLookup = data.services.reduce((busNumberLookup, service) => {
        busNumberLookup[service.ref] = service.mnemo
        return busNumberLookup
      }, {})
      return finalBusNumberLookup
    })
    .then(finalBusNumberLookup => response.json(finalBusNumberLookup))
})



app.listen(8080, () => {
  console.log('listening on port 8080')
})