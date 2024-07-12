import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main' // Main 컴포넌트를 가져옵니다.

import { todayText } from '../components/data/Today' // 'todayText' 데이터를 가져옵니다.
import { Link } from 'react-router-dom' // React Router의 'Link' 컴포넌트를 가져옵니다.

const Today = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const todayPageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        // Main 컴포넌트로 래핑하여 페이지 타이틀과 설명을 설정합니다.
        <Main 
            title="추천 영상" 
            description="오늘의 추천 유튜브 영상입니다."
        >
            {/* 오늘의 추천 영상 섹션 */}
            <section id='todayPage' className={todayPageClass}>
                <h2>🥰 오늘의 추천 영상입니다.</h2>

                {/* todayText 배열을 map 함수로 반복하여 각 추천 영상을 렌더링합니다. */}
                {todayText.map((today, key) => (
                    <div className='today__inner' key={key}> {/* 고유 키를 사용하여 각 요소를 구분합니다. */}
                        <div className='today__thumb play__icon'>
                            {/* 각 추천 영상의 상세 페이지로 링크를 설정합니다. */}
                            <Link to={today.page}>
                                <img src={today.img} alt={today.title} /> {/* 썸네일 이미지를 표시합니다. */}
                            </Link>
                        </div>
                        <div className='today__text'>
                            <span className='today'>today!</span> {/* 'today!' 텍스트를 표시합니다. */}
                            <h3 className='title'>
                                {/* 각 추천 영상의 제목을 링크와 함께 표시합니다. */}
                                <Link to={today.page}>{today.title}</Link>
                            </h3>
                            <p className='desc'>{today.desc}</p> {/* 추천 영상의 설명을 표시합니다. */}
                            <div className='info'>
                                <span className='author'>
                                    {/* 작성자 이름을 채널 링크와 함께 표시합니다. */}
                                    <Link to={`/channel/${today.channelId}`}>{today.author}</Link>
                                </span>
                                <span className='date'>{today.date}</span> {/* 작성 날짜를 표시합니다. */}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Main>
    )
}

export default Today; // 컴포넌트를 외부에서 사용할 수 있도록 내보냅니다.
