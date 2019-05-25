import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items,
            video: null 
        });
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    render() {
        return (
        <div className="ui container">
            <VideoDetail video={this.state.selectedVideo}/>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos}/>
        </div>
        );
    }
}

export default App;