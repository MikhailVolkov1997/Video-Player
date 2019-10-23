import React from 'react';
import { Container, Header, Left, Body, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import VideoPlayer from "./VideoPlayer" //it is not customizable on my device 

export default function Player(props) {

  return (
    <Container>
      <Header style={{ height: 80 }}>
        <Left style={{ marginTop: 20 }}>
          <Button transparent onPress={Actions.video}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body style={{ marginTop: 20 }} >
          <Title>{props.title || "Please select a video"}</Title>
        </Body>
      </Header>
      <VideoPlayer url={props.url} />  
    </Container>
  )
}
 