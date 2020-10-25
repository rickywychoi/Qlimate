const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  answer: {
    type: Object,
    required: true
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Quiz', quizSchema)