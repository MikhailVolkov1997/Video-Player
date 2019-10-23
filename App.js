import React from 'react';
import { Router, Scene, Stack } from "react-native-router-flux"
import Video from "./Video"
import PlayerPage from "./PlayerPage"
import FooterTabs from './FooterTabs';
import { Container } from 'native-base';

export default function App() {
  return (<Container>
    <Router>
      <Stack key="root">
        <Scene key="video" type="replace" component={Video} title="Video" />
        <Scene key="player" type="replace" component={PlayerPage} hideNavBar={true} />
      </Stack>
    </Router>
    <FooterTabs />
  </Container>

  );
}

