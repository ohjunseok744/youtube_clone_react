import React from 'react';
import { webdText } from '../data/webd';
import { Link } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import settings from '../../config/sliderSettings';

const Webd = () => {
    return (
        <section id='webd'>
            <h2>😮 웹디자인기능사 준비는 이걸로!</h2>
            <div className='slider__inner'>
                <Slider {...settings}>
                    {webdText.map((video, key) => (
                        <div className="slider" key={key}>
                            <div className="video__thumb play__icon">
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

export default Webd;
