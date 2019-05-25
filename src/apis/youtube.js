import axios from 'axios';

const KEY = 'AIzaSyAVt3dO9yd-yOo9a2-1J84dSuISMSWrDQU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
})
