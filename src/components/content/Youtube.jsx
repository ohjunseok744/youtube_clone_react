import React from 'react'
import { youtubeText  } from '../data/youtube';
import VideoSlider from './VideoSlider';

const Youtube = () => {
  return (
    <VideoSlider 
            title="😱 지금 이 코딩을 영상으로"
            data={youtubeText}
        />
  )
}

export default Youtube