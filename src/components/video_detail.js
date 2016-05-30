import React, { Component } from 'react';


class VideoDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {video} = this.props;
        if (!video) return <div>loading...</div>
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    {console.info(video.id.videoId, `https://www.youtube.com/embed/${video.id.videoId}`)}
                    <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} className="embed-responsive-item"></iframe>
                </div>
                <div className="details">
                    <h3>{video.snippet.title}</h3>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        )
    }
}


export default VideoDetail