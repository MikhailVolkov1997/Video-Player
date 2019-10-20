import React from 'react';
import {Text} from "react-native"

export default class Player extends React.Component {
    constructor(props) {
        super(props)
        this.video = [
            {title:"Video" , url:1},
            {title:"Video" , url:1},
            {title:"Video" , url:1},
            {title:"Video" , url:1},
            {title:"Video" , url:1},
            {title:"Video" , url:1}
        ]
    }
    render() {
        return <Text>Player</Text>
         
    }
}