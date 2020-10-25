import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MainHome from './components/mainHome/mainHome'
import QuizListDemo from './components/quizListDemo/quizListDemo'

const Stack = createStackNavigator();

const linking = {
  config: {
    quizListDemo: "quiz"
  }
}

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Qlimate" component={MainHome} />
        <Stack.Screen name="Quizzes" component ={QuizListDemo} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}