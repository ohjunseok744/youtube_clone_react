import React from 'react'

import Slider from "react-slick";
import { websiteText } from '../data/website'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import settings from '../../config/sliderSettings'
const Website = () => {
    return (
      
        <section id='website'>
            <h2>😛 웹표준 사이트 만들기 기초 다지기</h2>
            <div className='slider__inner'>
                <Slider {...settings}>
                  {websiteText.map((video, key) => (
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

export default Website