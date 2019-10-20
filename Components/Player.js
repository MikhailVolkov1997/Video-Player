import React from 'react';
import {Text} from "react-native"

export default class Player extends React.Component {
    constructor(props) {
        super(props)
        this.video = [
            {title:1 , url:1},
            {title:2, url:11},
            {title:3 , url:1},
            {title:4 , url:1},
            {title:5 , url:1},
            {title:6, url:1},
            {title:7 , url:1}
        ]
    }
    render() {
        return <Text>Player</Text>
         
    }
}