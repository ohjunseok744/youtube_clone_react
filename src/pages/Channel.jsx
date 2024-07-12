import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';
import Main from '../components/section/Main'
import VideoSearch from '../components/videos/VideoSearch';
import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";
const Channel = () => {
    const { channelId } = useParams();
    const [ channelDetail, setChannelDetail ] = useState();
    const [ channelVideo, setChannelVideo ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null); // 다음 페이지 토큰을 저장하는 상태입니다.
    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);

                const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date`);
                setChannelVideo(videosData?.items.slice(0, 16));
                setNextPageToken(videosData?.nextPageToken);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchResults();
    }, [channelId]);
    const loadMoreVideos = async () => {
        if (nextPageToken) { // 다음 페이지 토큰이 있을 경우에만 실행합니다.
            setLoading(true); // 추가 데이터를 가져오는 동안 로딩 상태로 설정합니다.
            try {
                // 다음 페이지의 비디오 데이터를 가져옵니다.
                const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
                setChannelVideo(prevVideos => [...prevVideos, ...videosData.items.slice(0, 16)]);
                setNextPageToken(videosData.nextPageToken); // 다음 페이지 토큰을 업데이트합니다.
            } catch (error) {
                console.error('Error fetching more videos:', error);
            } finally {
                setLoading(false); // 로딩이 끝났음을 표시합니다.
            }
        }
    };
    const channelPageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main 
            title = "유튜브 채널"
            description="유튜브 채널페이지입니다.">
            {channelDetail && (
                <section id='channel'>
                    <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                        <div className='circle'>
                            <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                        </div>
                    </div>
                    <div className='channel__info'>
                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                        <p className='desc'>{channelDetail.snippet.description}</p>
                        <div className='info'>
                            <span><CiBadgeDollar />{channelDetail.statistics.subscriberCount}</span>
                            <span><CiMedal />{channelDetail.statistics.videoCount}</span>
                            <span><CiRead />{channelDetail.statistics.viewCount}</span>
                        </div>
                        <div className='channel__video video__inner search'>
                            <VideoSearch videos={channelVideo} />
                        </div>
                        {nextPageToken && ( // 다음 페이지 토큰이 있을 경우에만 "더보기" 버튼을 렌더링합니다.
                            <div className='load-more'>
                                <button onClick={loadMoreVideos} disabled={loading} className='w-btn'> 
                                    {loading ? '로딩 중...' : '더보기'} 
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </Main>
    )
}

export default Channel;