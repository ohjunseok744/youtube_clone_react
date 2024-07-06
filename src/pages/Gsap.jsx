import React from 'react'
import { gsapText } from '../components/data/gsap'
import VideoSection from '../components/section/VideoSection';

const Gsap = () => {
    return (
        <VideoSection 
            title="웹디자인 기능사"
            description="웹디자인 기능사 튜토리얼 강의입니다."
            data={gsapText}
        />
    )
}

export default Gsap;