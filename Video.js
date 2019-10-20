import React from "react";
import {Text} from "react-native"
import ListVideo from "./ListVideo" 

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.video = [
            {title: "video", url:"http"},
            {title: "video", url:"http"},
            {title: "video", url:"http"},
            {title: "video", url:"http"},
            {title: "video", url:"http"},
            {title: "video", url:"http"},
            {title: "video", url:"http"},
        ]
    }

    render () {
        return this.video.map((el, key) => {<ListVideo title={el.title} key={key}/>})
    }
}
