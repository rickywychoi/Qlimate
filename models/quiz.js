const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  choices: {
    type: Object,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  author: {
    type: Object
  }
})

module.exports = mongoose.model('Quiz', quizSchema)