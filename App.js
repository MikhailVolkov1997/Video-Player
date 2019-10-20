import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene, Stack} from "react-native-router-flux"
import Video from "./Components/Video"
import Player from "./Components/Player"

export default function App() {
  return (
    <Router>
    <Stack key="root">
      <Scene key="video" component={Video} title="Video"/>
      <Scene key="player" component={Player} title="Player"/>
      {/* <Scene key="nav" component={nav}/> */}
    </Stack>
  </Router>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
