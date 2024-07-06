import React from 'react'
import { gsapText } from '../data/gsap'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import settings from '../../config/sliderSettings';

const Gsap = () => {
  return (
    <section id='webd'>
        <h2>🤓 GSAP 패럴랙스 효과를 하고 싶다면!</h2>
        <div className='slider__inner'>
            <Slider {...settings}>
                {gsapText.map((video, key) => (
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
  )
}

export default Gsap