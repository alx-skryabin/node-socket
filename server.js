const serverExpress = require('./server-express')
const serverSocket = require('./server-socket')
const api = serverExpress()
const socket = serverSocket()

api.start()
socket.start()
