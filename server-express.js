const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

// Support JSON format on server
app.use(express.json({extended: true}))
// Support CORS
app.use(cors())

const api = () => {
  return {
    start: () => {
      app.use('/api/data', require('./routes/data.routes'))
      app.listen(PORT, () => console.log(`Express has been started on port... ${PORT}`))
    }
  }
}

module.exports = api