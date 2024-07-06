// Webd.js
import React from 'react';
import { webdText } from '../components/data/webd';
import VideoSection from '../components/section/VideoSection';

const Webd = () => {
    return (
        <VideoSection 
            title="웹디자인 기능사"
            description="웹디자인 기능사 튜토리얼 강의입니다."
            data={webdText}
        />
    );
};

export default Webd;
