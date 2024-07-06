import React from 'react'
import VideoSection from '../components/section/VideoSection';

import { youtubeText } from '../components/data/youtube'

const Youtube = () => {
    return (
        <VideoSection 
            title="유튜브 클론 사이트"
            description="😱 지금 이 코딩을 영상으로"
            data={youtubeText}
        />
    )
}

export default Youtube;