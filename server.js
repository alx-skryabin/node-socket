const serverExpress = require('./server-express')
const serverSocket = require('./server-socket')
const express = serverExpress()
const socket = serverSocket()

express.start()
socket.start()
