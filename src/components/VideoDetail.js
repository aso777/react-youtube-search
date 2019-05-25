import React from 'react';
import './VideoDetail.css'

const VideoDetail = ({video}) => {
    if (!video) {
        return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="video-detail">
            <div className="ui embed">
                <iframe src={videoSrc} title={video.snippet.title}/>
            </div>
            <div className="ui segment">
                <h3 className="ui header">{video.snippet.title}</h3>
                <p className="meta">{video.snippet.channelTitle}</p>
                <p>{video.snippet.description}</p>
            </div>
        </div>
        );
};

export default VideoDetail;
