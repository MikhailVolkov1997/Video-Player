import React from "react";
import {Text} from "react-native"
import ListVideo from "./ListVideo" 

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.video = [
            {title: "Forest", url:"https://www.pexels.com/uk-ua/video/2081238/"},
            {title: "Space", url:"https://www.pexels.com/uk-ua/video/857134/"},
            {title: "City", url:"https://www.pexels.com/uk-ua/video/857266/"},
            {title: "Woman", url:"https://www.pexels.com/uk-ua/video/2360466/"},
            {title: "Flowers", url:"https://www.pexels.com/uk-ua/video/857189/"},
            {title: "Lemons", url:"https://www.pexels.com/uk-ua/video/2583492/"},
            {title: "Penguin", url:"https://www.pexels.com/uk-ua/video/1674470/"},
            {title: "Water", url:"https://www.pexels.com/uk-ua/video/2360537/"},
            {title: "Sea", url:"https://www.pexels.com/uk-ua/video/1093667/"},
        ]
    }

    render () {
        return this.video.map((el, key) => {<ListVideo title={el.title} key={key}/>})
    }
}
