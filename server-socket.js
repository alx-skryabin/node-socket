const express = require('express')
const {createServer} = require('http')
const {Server} = require('socket.io');

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8081',
  }
});

const PORT = 3030

io.on('connection', socket => {
  socket.on('chat message', data => {
    io.emit('chat message', {
      message: data.message
    })
  })
})


const socket = () => {
  return {
    start: () => {
      httpServer.listen(PORT, () => {
        console.log(`Socket has been started on port... ${PORT}`)
      })
    }
  }
}

module.exports = socket