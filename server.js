require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { createProxyMiddleware } = require('http-proxy-middleware')

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => console.log('Connected to Database'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const quizRouter = require('./routes/quizzes')
app.use('/quiz', quizRouter)

// list of pathnames to access via proxy
const proxyObj = {
  '/quiz': {
    target: "http://localhost:3000",
    changeOrigin: true
  }
}
// uses proxy as middleware to resolve CORS error - ensure same origin
if (proxyObj) {
  Object.keys(proxyObj).forEach(context => {
    app.use(createProxyMiddleware(context, proxyObj[context]))
  })
}

app.listen(process.env.PORT, () => console.log("Server Started"))