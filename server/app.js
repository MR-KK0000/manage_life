require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.SERVER_PORT
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

const API = require('./routes/api')
API(app)

app.listen(port,()=>{console.log(`server run on port: ${port}`)})