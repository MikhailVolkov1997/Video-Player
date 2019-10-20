import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene, Stack, Lightbox} from "react-native-router-flux"
import Video from "./Video"
import Player from "./Player"
import FooterTabs from './FooterTabs';

export default function App() {
  return (
    <Router>
    <Stack key="root"> 
      <Scene key="footer" component={FooterTabs} />
      <Scene key="video" component={Video}  title="Video"/>
      <Scene key="player" component={Player} title="Player"/>
      
    
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

