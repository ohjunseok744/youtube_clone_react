// Gsap.js
import React from 'react';
import { gsapText } from '../data/gsap';
import VideoSlider from './VideoSlider';

const Gsap = () => {
    return (
        <VideoSlider 
            title="🤓 GSAP 패럴랙스 효과를 하고 싶다면!"
            data={gsapText}
        />
    );
};

export default Gsap;
