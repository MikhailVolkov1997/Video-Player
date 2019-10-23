import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
import {Actions} from "react-native-router-flux";
import * as Font  from 'expo-font';
import { Ionicons } from '@expo/vector-icons'
import {View} from "react-native"


export default class FooterTabs extends Component {
    
  state = {
    loading: true,
    isActive: "video"
  }

  onActiveTabs (tabs) {
     this.setState({isActive: tabs});
     switch(tabs) {
       case "player": return Actions.player();
       case "video": return Actions.video();
       default: true;
     }
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
        <Footer>
          <FooterTab >
            <Button active={this.state.isActive === "video"} onPress={() => this.onActiveTabs("video") }>
              <Text >Video</Text>
            </Button>
            <Button active={this.state.isActive === "player"} onPress={() => this.onActiveTabs("player")}> 
              <Text >Player</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}