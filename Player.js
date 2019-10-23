import React from 'react';
import {Text} from "react-native"
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Player extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return  (
            <Container>
              <Header style={{height:80}}>
                <Left style={{marginTop:20 }}>
                  <Button transparent onPress={Actions.video}>
                    <Icon name='arrow-back' />
                  </Button>
                </Left>
                <Body style={{marginTop:20 }} >
                  <Title>Header</Title>
                </Body>
              </Header>
            </Container>
        )
         
    }
}