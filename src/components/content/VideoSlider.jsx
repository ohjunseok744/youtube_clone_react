// VideoSlider.js
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import settings from '../../config/sliderSettings';

const VideoSlider = ({ title, data }) => {
    return (
        <section className='video-slider'>
            <h2>{title}</h2>
            <div className='slider__inner'>
                <Slider {...settings}>
                    {data.map((video, key) => (
                        <div className='slider' key={key}>
                            <div className='video__thumb play__icon'>
                                <Link to={`/video/${video.videoId}`}>
                                    <img src={video.img} alt={video.title} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default VideoSlider;
