const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// If mode = 'production', any request send to static builded 'index.html'
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


/***For Express API***/
// Support JSON format on server
app.use(express.json({extended: true}))
// Support CORS
app.use(cors())

app.use('/api/data', require('./routes/data.routes'))


/***For Socket***/
const {httpServer, io} = require('./server-socket')(app)

io.on('connection', socket => {
  socket.on('chat message', data => {
    io.emit('chat message', {
      message: data.message
    })
  })
})


const server = () => {
  return {
    start: () => {
      httpServer.listen(PORT, () => {
        console.log(`Server has been started on port... ${PORT}`)
      })
    }
  }
}

module.exports = server
