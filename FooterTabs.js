import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import {Actions} from "react-native-router-flux";
import * as Font  from 'expo-font';
import { Ionicons } from '@expo/vector-icons'
import {View} from "react-native"


export default class FooterTabs extends Component {
    
  state = {
    loading: true
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ loading: false })
  }    

        render() {
          if (this.state.loading) {
            return (
              <View></View>
            );
            }   
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab >
            <Button active onPress={Actions.video}>
              <Text >Video</Text>
            </Button>
            <Button onPress={Actions.player}> 
              <Text >Player</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}