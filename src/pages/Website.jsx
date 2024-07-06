import React from 'react'
import VideoSection from '../components/section/VideoSection';

import { websiteText } from '../components/data/website'

const Website = () => {
    return (
        <VideoSection 
            title="웹디자인 기능사"
            description="웹디자인 기능사 튜토리얼 강의입니다."
            data={websiteText}
        />
    )
}

export default Website;