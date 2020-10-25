import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from '@react-navigation/native'

const MainHome = () => (
  <View style={styles.container}>
    <Text>branch Dev</Text>
    <Link to="/quizListDemo">List of Quizzes</Link>
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainHome;