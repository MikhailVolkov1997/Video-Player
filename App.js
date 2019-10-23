import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene, Stack, Lightbox, Tabs} from "react-native-router-flux"
import Video from "./Video"
import Player from "./Player"
import FooterTabs from './FooterTabs';
import { Container } from 'native-base';

export default function App() {
  return (<Container>
    <Router>
    <Stack key="root"> 
      <Scene key="video" type="replace" component={Video}   title="Video"/>
      <Scene key="player" type="replace" component={Player} hideNavBar={true} />
    </Stack>
  </Router>
  <FooterTabs />
  </Container>

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

