if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const routers = require('./routers')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routers)
app.use(errorHandler)

app.listen(PORT, () => console.log('listening on port ' + PORT))