import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from '@react-navigation/native'

const MainHome = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Welcome to Qlimate</Text>
    <Link to='/Quizzes'>
      <Button
        title="Show Quiz!"
        accessibilityLabel="Button to show quizzes"/>
    </Link>
    <StatusBar style='auto' />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  heading: {
    fontSize: "2em",
    fontWeight: "bold"
  },
});

export default MainHome;