import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainContent from "./Components/MainContent"
import ListVideo from './Components/ListVideo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello anna !</Text>
      <MainContent/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
