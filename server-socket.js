const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = 3030

// Support JSON format on server
app.use(express.json({extended: true}))

const socket = () => {
  return {
    start: () => {
      http.listen(PORT, () => {
        console.log(`Socket has been started on port... ${PORT}`)
      })
    }
  }
}

module.exports = socket