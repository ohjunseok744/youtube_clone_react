// Webd.js
import React from 'react';
import { webdText } from '../data/webd';
import VideoSlider from './VideoSlider';

const Webd = () => {
    return (
        <VideoSlider 
            title="😮 웹디자인기능사 준비는 이걸로!"
            data={webdText}
        />
    );
};

export default Webd;
