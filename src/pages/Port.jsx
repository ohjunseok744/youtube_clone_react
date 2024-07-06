// Port.js
import React from 'react';
import { portfolioText } from '../components/data/portfolio';
import VideoSection from '../components/section/VideoSection';

const Port = () => {
    return (
        <VideoSection 
            title="포트폴리오 사이트"
            description="포트폴리오 사이트 튜토리얼 강의입니다."
            data={portfolioText}
        />
    );
};

export default Port;
