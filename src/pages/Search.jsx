import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch';
import { fetchFromAPI } from '../utils/api';

const Search = () => {
    const { searchId } = useParams(); // URL 파라미터에서 searchId를 가져옵니다.
    const [videos, setVideos] = useState([]); // 비디오 목록을 저장하는 상태입니다.
    const [nextPageToken, setNextPageToken] = useState(null); // 다음 페이지 토큰을 저장하는 상태입니다.
    const [loading, setLoading] = useState(true); // 로딩 상태를 관리하는 상태입니다.

    useEffect(() => {
        setVideos([]); // 검색어가 변경될 때마다 비디오 목록을 초기화합니다.
        fetchVideos(searchId); // 비디오를 가져오는 함수를 호출합니다.
        setLoading(true); // 로딩 상태를 true로 설정합니다.
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken); // 다음 페이지 토큰을 상태에 저장합니다.
                setVideos((prevVideos) => [...prevVideos, ...data.items.slice(0, 16)]); // 기존 비디오 목록에 새 비디오를 추가합니다.
                setLoading(false); // 로딩 상태를 false로 설정합니다.
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken); // 다음 페이지의 비디오를 가져옵니다.
        }
    };

    const searchPageClass = loading ? 'isLoading' : 'isLoaded'; // 로딩 상태에 따라 클래스 이름을 설정합니다.

    return (
        <Main
            title="유튜브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            <section id='searchPage' className={searchPageClass}>
                <h2>🤠 <em>{searchId}</em> 검색 결과입니다.</h2>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
                <div className="video__more">
                    {nextPageToken && (
                        <button className="w-btn" onClick={handleLoadMore}>더 보기</button>
                    )}
                </div>
            </section>
        </Main>
    );
}

export default Search;
