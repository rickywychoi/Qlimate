import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import axios from 'axios'
import QuizCard from './quizCard'

const uri = "http://localhost:3000"

const QuizListDemo = () => {
  const [quizzes, setQuizzes] = useState(null)

  return (
    <View>
      <QuizCard></QuizCard>
    </View>
  )
}

export default QuizListDemo