import React from 'react';
import { Link } from 'react-router-dom';

const VideoSearch = ({ videos }) => {
    if (!videos || videos.length === 0) {
        return <div>No videos found</div>; // 또는 로딩 상태 등을 표시할 수 있습니다.
    }

    return (
        <>
            {videos.map((video, index) => (
                <div className="video" key={index}>
                    <div className="video__thumb play__icon">
                        <Link to={`/video/${video.id.videoId}`}>
                            <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                        </Link>
                    </div>
                    <div className="video__info">
                        <div className="title">
                            <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                        </div>
                        <div className="info">
                            <span className="author">
                                <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default VideoSearch;