const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000


app.use('/', express.static(path.join(__dirname, 'static')))
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})
app.get('/two', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'index2.html'))
})


/***For Express API***/
// Support JSON format on server
app.use(express.json({extended: true}))
// Support CORS
app.use(cors())

app.use('/api/data', require('./routes/data.routes'))


const server = () => {
  return {
    start: () => {
      app.listen(PORT, () => {
        console.log(`Server has been started on port... ${PORT}`)
      })
    }
  }
}

module.exports = server
