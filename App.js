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
        <Stack.Screen name="mainHome" component={MainHome} />
        <Stack.Screen name="quizListDemo" component ={QuizListDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}