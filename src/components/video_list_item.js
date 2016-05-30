import React, { Component } from 'react';


class VideoListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { video, key, onVideoSelect } = this.props
        return (
            <li onClick={()=>{onVideoSelect(video)}}className="list-group-item" key = {key}>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={video.snippet.thumbnails.default.url}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
        )
    }

}

export default VideoListItem