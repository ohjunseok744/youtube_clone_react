import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CiBaseball, CiCoins1, CiBoxes, CiBullhorn, CiCoffeeCup, CiDumbbell, CiFries, CiMoneyBill } from "react-icons/ci";
import { AiFillGithub, AiOutlineCodepen, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const location = useLocation();
    const { pathname } = location;
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header id='header' role='banner' className={`${menuOpen ? 'open' : ''}`}>
            <h1 className='header__logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>junstone<br />youtube</span>
                </a>
            </h1>

            <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav className={`header__menu ${menuOpen ? 'open' : ''}`}>
                <ul className='menu'>
                    <li className={pathname === '/' ? 'active' : ''}>
                        <a href='/'>
                            <CiBaseball /> 웹스토리보이
                        </a>
                    </li>
                    <li className={pathname === '/today' ? 'active' : ''}>
                        <a href='/today'>
                            <CiMoneyBill /> 추천 영상
                        </a>
                    </li>
                    <li className={pathname === '/developer' ? 'active' : ''}>
                        <a href='/developer'>
                            <CiCoins1 /> 추천 개발자
                        </a>
                    </li>
                    <li className={pathname === '/webd' ? 'active' : ''}>
                        <a href='/webd'>
                            <CiBoxes /> 웹디자인기능사
                        </a>
                    </li>
                    <li className={pathname === '/website' ? 'active' : ''}>
                        <a href='/website'>
                            <CiBullhorn /> 웹표준 사이트
                        </a>
                    </li>
                    <li className={pathname === '/gsap' ? 'active' : ''}>
                        <a href='/gsap'>
                            <CiCoffeeCup /> GSAP Parallax
                        </a>
                    </li>
                    <li className={pathname === '/port' ? 'active' : ''}>
                        <a href='/port'>
                            <CiDumbbell /> 포트폴리오 사이트
                        </a>
                    </li>
                    <li className={pathname === '/youtube' ? 'active' : ''}>
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
            
            <div className='header__sns'>
                <ul>
                    <li>
                        <a href='https://github.com/ohjunseok744' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/webstoryboy' rel='noopener noreferrer'>
                            <AiFillYoutube />
                        </a>
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
    )
}

export default Header;
