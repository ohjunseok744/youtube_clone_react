import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { webdText } from '../components/data/webd'
import { Link } from 'react-router-dom'

const Webd = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const webdPageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main 
            title = "웹디자인 기능사"
            description="웹디자인 기능사 튜토리얼 강의입니다.">
            <section id='webd ' className={webdPageClass}>
                <h2>😮 웹디자인기능사 준비는 이걸로!</h2>
                <div className='video__inner'>
                    {webdText.map((video, key) => (
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

export default Webd;