const express = require('express')
const morgan = require('morgan')
const postRoutes = require('./routes/posts')

const app = express()


app.use(morgan('dev'))
app.use(express.json({ extend: true }))

app.use('/api/posts', postRoutes)

module.exports = app