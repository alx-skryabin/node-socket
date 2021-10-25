const {createServer} = require('http')
const {Server} = require('socket.io')

const createSocket = app => {
  const httpServer = createServer(app)
  const io = new Server(httpServer, {
    cors: {
      origin: '*', // allow domain ex: http://localhost:8080
    }
  })
  return {
    httpServer, io
  }
}

module.exports = createSocket
