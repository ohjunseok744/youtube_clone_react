// Portfolio.js
import React from 'react';
import { portfolioText } from '../data/portfolio';
import VideoSlider from './VideoSlider';

const Portfolio = () => {
    return (
        <VideoSlider 
            title="😮 웹디자인기능사 준비는 이걸로!"
            data={portfolioText}
        />
    );
};

export default Portfolio;
