import React, { useState } from 'react';
import { CiBaseball, CiCoins1, CiBoxes, CiBullhorn, CiCoffeeCup, CiDumbbell, CiFries, CiMoneyBill } from "react-icons/ci";
import { AiFillGithub, AiOutlineCodepen, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    // 메뉴의 열림/닫힘 상태를 관리하는 상태 변수와 이를 변경하는 함수
    const [menuOpen, setMenuOpen] = useState(false);

    // 메뉴 열림/닫힘 상태를 토글하는 함수
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header id='header' role='banner'>
            {/* 로고 섹션 */}
            <h1 className='header__logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>webs<br />youtube</span>
                </a>
                <div className='header__burger' onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </h1>

            

            {/* 메뉴 네비게이션, 'open' 클래스에 따라 보임/숨김 조절 */}
            <nav className={`header__menu ${menuOpen ? 'open' : ''}`}>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/'>
                            <CiBaseball /> 웹스토리보이
                        </a>
                    </li>
                    <li>
                        <a href='/today'>
                            <CiMoneyBill /> 추천 영상
                        </a>
                    </li>
                    <li>
                        <a href='/developer'>
                            <CiCoins1 /> 추천 개발자
                        </a>
                    </li>
                    <li>
                        <a href='/webd'>
                            <CiBoxes /> 웹디자인기능사
                        </a>
                    </li>
                    <li>
                        <a href='/website'>
                            <CiBullhorn /> 웹표준 사이트
                        </a>
                    </li>
                    <li>
                        <a href='/gsap'>
                            <CiCoffeeCup /> GSAP Parallax
                        </a>
                    </li>
                    <li>
                        <a href='/port'>
                            <CiDumbbell /> 포트폴리오 사이트
                        </a>
                    </li>
                    <li>
                        <a href='/youtube'>
                            <CiFries /> 유튜브 클론 사이트
                        </a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/webstoryboy'>webstoryboy</a>
                    </li>
                    <li>
                        <a href='/search/html'>HTML</a>
                    </li>
                    <li>
                        <a href='/search/css'>CSS</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>JavaScript</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>React.js</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>Vue.js</a>
                    </li>
                    <li>
                        <a href='/search/next.js'>Next.js</a>
                    </li>
                    <li>
                        <a href='/search/node.js'>Node.js</a>
                    </li>
                    <li>
                        <a href='/search/sql'>SQL</a>
                    </li>
                    <li>
                        <a href='/search/React Portfolio'>portfolio</a>
                    </li>
                    <li>
                        <a href='/search/NewJeans'>music</a>
                    </li>
                </ul>
            </nav>

            {/* SNS 링크 섹션 */}
            <div className='header__sns'>
                <ul>
                    <li>
                        <a href='https://github.com/ohjunseok744' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/webstoryboy' rel='noopener noreferrer'>
                        <AiFillYoutube /> </a>
                    </li>
                    <li>
                        <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
                            <AiOutlineCodepen />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/jseok_492' rel='noopener noreferrer'>
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
