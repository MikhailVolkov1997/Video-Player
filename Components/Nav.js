import React from "react"
import {Button, View} from "react-native"
import {Actions} from "react-native-router-flux"

export default class Nav extends React.Component {
    render () {
        return <View>
        <Button onPress={Actions.video} title="video"></Button>
        <Button onPress={Actions.player} title="player"></Button>
        </View>
    }
}