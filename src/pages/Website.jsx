import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { Link } from 'react-router-dom'
import { websiteText } from '../components/data/website'

const Website = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);
    const websitePageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main 
            title = "웹표준 사이트"
            description="웹표준 사이트 튜토리얼 강의입니다.">
            <section id='website' className={websitePageClass}>
                <h2>😛 웹표준 사이트 만들기 기초 다지기</h2>
                <div className='video__inner' >
                    
                    {websiteText.map((video, key) => (
                        <div className="video" key={key}>
                            <div className="video__thumb play__icon">
                                <Link to={`/video/${video.videoId}`}>
                                    <img src={video.img} alt={video.title} />
                                </Link>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </section>
        </Main>
    )
}

export default Website;