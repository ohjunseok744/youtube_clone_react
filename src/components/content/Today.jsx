import React from 'react' // React 라이브러리를 가져옵니다.

import { todayText } from '../../components/data/Today' // 'todayText' 데이터를 가져옵니다.
import { Link } from 'react-router-dom' // React Router의 'Link' 컴포넌트를 가져옵니다.

const Today = () => {
    return (
        <section id='today'> {/* 섹션의 루트 요소입니다. */}
            <div className='today__inner'> {/* 내부 레이아웃을 잡는 div입니다. */}
                <div className='today__thumb play__icon'> {/* 썸네일 이미지를 표시하는 div입니다. */}
                    <Link to={todayText[0].page}> {/* 오늘의 추천 콘텐츠로 링크를 설정합니다. */}
                        <img src={todayText[0].img} alt={todayText[0].title} /> {/* 썸네일 이미지를 표시합니다. */}
                    </Link>
                </div>
                <div className='today__text'> {/* 텍스트 콘텐츠를 표시하는 div입니다. */}
                    <span className='today'>today!</span> {/* "today!" 텍스트를 표시합니다. */}
                    <h3 className='title'>
                        <Link to={todayText[0].page}>{todayText[0].title}</Link> {/* 콘텐츠 제목을 링크와 함께 표시합니다. */}
                    </h3>
                    <p className='desc'>{todayText[0].desc}</p> {/* 콘텐츠 설명을 표시합니다. */}
                    <div className='info'> {/* 추가 정보를 표시하는 div입니다. */}
                        <span className='author'>
                            <Link to={`/channel/${todayText[0].channelId}`}>{todayText[0].author}</Link> {/* 작성자 이름과 채널로의 링크를 표시합니다. */}
                        </span>
                        <span className='date'>{todayText[0].date}</span> {/* 작성 날짜를 표시합니다. */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today; // 컴포넌트를 외부에서 사용할 수 있도록 내보냅니다.
