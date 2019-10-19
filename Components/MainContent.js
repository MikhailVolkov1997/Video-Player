import React from 'react';
import ListVideo from "./ListVideo"

export default class MainContent extends React.Component {
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
        return this.video.map(el => <ListVideo title={el.title} url={el.url} /> )
         
    }
}