// Website.js
import React from 'react';
import { websiteText } from '../data/website';
import VideoSlider from './VideoSlider';

const Website = () => {
    return (
        <VideoSlider 
            title="😛 웹표준 사이트 만들기 기초 다지기"
            data={websiteText}
        />
    );
};

export default Website;
