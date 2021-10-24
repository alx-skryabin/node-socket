const express = require('express')
const app = express()
const PORT = 3000

// Support JSON format on server
app.use(express.json({extended: true}))
app.use('/api/data', require('./routes/data.routes'))

app.listen(PORT, () => console.log(`App has been started on port... ${PORT}`))
