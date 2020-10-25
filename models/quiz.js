const mongoose = require('mongoose')

const choiceSchema = new mongoose.Schema({
  name: String,
  content: String
})

const quizSchema = new mongoose.Schema
quizSchema.add({
  title: {
    type: String,
    required: true
  },
  choices: [choiceSchema],
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