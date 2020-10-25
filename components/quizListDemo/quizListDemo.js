import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

const uri = "http://localhost:3000"

const QuizListDemo = () => {
  const [quizzes, setQuizzes] = useState({})
  useEffect(() => {
    axios.get("/quiz").then(res => {
      console.log(res.data)
    }).catch(err => console.error(err)).then(() => {
      
    })
  }, [])

  return (
    <View>
      <Text>QuizListDemo</Text>
    </View>
  )
}

export default QuizListDemo