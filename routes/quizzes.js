const express = require('express')
const router = express.Router()
const Quiz = require('../models/quiz')

// Getting all
router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.find()
    res.send(quizzes)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting one
router.get('/:id', getQuizById, (req, res) => {
  res.json(res.quiz)
})

// Creating one
router.post('/', async (req, res) => {
  const quiz = new Quiz({
    title: req.body.title,
    answer: req.body.answer
  })
  try {
    const newQuiz = await quiz.save()
    res.status(201).json(newQuiz)
    
  } catch (err) {
    res.status(400).json({ message: err.message })
  }

  console.log(req)
})

// Updating one
router.patch('/:id', getQuizById, async (req, res) => {
  console.log(req.body)
  Object.keys(req.body).forEach(prop => {
    if (req.body[prop] != null) {
      res.quiz[prop] = req.body[prop]
    }
  })
  try {
    const updatedQuiz = await res.quiz.save()
    res.json(updatedQuiz)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting one
router.delete('/:id', getQuizById, async (req, res) => {
  try {
    await res.quiz.remove()
    res.json({ message: "Deleted quiz successfully" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Middleware for getting quiz by id
async function getQuizById(req, res, next) {
  let quiz
  try {
    quiz = await Quiz.findById(req.params.id)
    if (quiz == null) {
      return res.status(400).json({ message: "Could not find the quiz" })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.quiz = quiz
  next()
}

// module export
module.exports = router