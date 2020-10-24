require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const quizRouter = require('./routes/quizzes')
app.use('/quiz', quizRouter)

app.listen(process.env.PORT, () => console.log("Server Started"))