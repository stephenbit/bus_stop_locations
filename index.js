const express = require('express')
const fetch = require('node-fetch')
const app = express()
const cors = require('cors')

// XL472I2YRVUQF2EJ5T77AEENJ2020032819
// eb3364ebbfb0a6af284670db9f5d61ec

app.use(cors())
// Access-Control-Allow-Origin: *

app.get('/', (request, response) => {
  fetch('http://ws.mybustracker.co.uk/?module=json&key=eb3364ebbfb0a6af284670db9f5d61ec&function=getBusStops')
    .then(res => res.json())
    .then(stops => response.json(stops))
})

app.listen(8080, () => {
  console.log('listening on port 8080')
})