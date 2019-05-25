import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    const videoTitle = video.snippet.title.charAt(0).toUpperCase() + video.snippet.title.slice(1).toLowerCase();

    return (<div onClick={() => {
                onVideoSelect(video);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                }} className="video-item card">
            <div className="image">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            </div>
            <div className="content">
            <div className="header">{videoTitle}</div>
            <div className="meta">
                {video.snippet.channelTitle}
            </div>
            </div>          
            </div>);
};

export default VideoItem;