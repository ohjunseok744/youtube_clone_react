import React from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';

const VideoSection = ({ title, description, data }) => {
    return (
        <Main title={title} description={description}>
            <section id='webd'>
                <h2>😮 {title} 준비는 이걸로!</h2>
                <div className='video__inner'>
                    {data.map((video, key) => (
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
    );
};

export default VideoSection;