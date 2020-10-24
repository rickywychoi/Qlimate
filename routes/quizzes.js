const express = require('express')
const router = express.Router()
const Quiz = require('../models/quiz')

// Getting all
router.get('/', (req, res) => {
  console.log(req)
  res.send('getting all')
})

// Getting one
router.get('/:id', async (req, res) => {
  console.log(req)
  try {
    const quizzes = await Quiz.find()
    res.json(quizzes)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
  res.send('getting one')
})

// Creating one
router.post('/', async (req, res) => {
  const newQuiz = new Quiz({
    title: req.body.title,
    answer: req.body.answer
  })
  try {
    res.status(201).json(newQuiz)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }

  console.log(req)
  res.send('creating one')
})

// Updating one
router.patch('/', (req, res) => {
  console.log(req)
  res.send('updating one')
})

// Deleting one
router.delete('/', (req, res) => {
  console.log(req)
  res.send('deleting one')
})

module.exports = router