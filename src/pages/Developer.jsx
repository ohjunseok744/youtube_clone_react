import React from 'react'
import Main from '../components/section/Main'
import { developerText } from '../components/data/developer'; // 외부 파일에서 개발자 데이터를 임포트합니다.
import { Link } from 'react-router-dom'; // react-router-dom에서 Link 컴포넌트를 임포트하여 라우팅을 처리합니다.

const Developer = () => {
    return (
        <Main 
            title = "추천 개발자"
            description="오늘의 추천 개발자 유튜버입니다.">
            <section id='developer'> {/* 섹션 요소에 id를 부여하여 스타일링이나 스크롤링에 활용할 수 있습니다. */}
                <h2>😪 추천 개발자를 소개합니다.</h2> {/* 섹션의 제목을 표시합니다. */}
                <div className="developer__inner"> {/* 개발자 목록을 감싸는 컨테이너입니다. overflow 클래스로 스타일링을 적용할 수 있습니다. */}
                    {developerText.map((developer, key) => ( // developerText 배열을 순회하며 각 개발자에 대한 정보를 렌더링합니다.
                        <div className="developer" key={key}> {/* 각 개발자를 감싸는 div입니다. key 속성은 배열 내 각 항목에 고유성을 부여합니다. */}
                            <div className="developer__img play__icon"> {/* 개발자 이미지와 아이콘을 감싸는 div입니다. */}
                                <Link to={`/channel/${developer.channelId}`}> {/* Link 컴포넌트를 사용하여 클릭 시 해당 개발자 채널로 이동합니다. */}
                                    <img src={developer.img} alfrtft={developer.name} /> {/* 개발자 이미지를 표시합니다. src는 이미지 경로, alt는 대체 텍스트입니다. */}
                                </Link>
                            </div>
                            <div className="developer__info"> {/* 개발자 이름을 표시하는 div입니다. */}
                                <Link to={`/channel/${developer.channelId}`}> {/* Link 컴포넌트를 사용하여 클릭 시 해당 개발자 채널로 이동합니다. */}
                                    {developer.name} {/* 개발자 이름을 표시합니다. */}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Developer;