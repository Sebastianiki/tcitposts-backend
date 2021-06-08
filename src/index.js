const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const postRoutes = require('./routes/posts')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ extend: true }))

app.use('/api/posts', postRoutes)

const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
})