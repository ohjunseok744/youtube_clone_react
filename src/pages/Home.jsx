import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/content/Today'
import Developer from '../components/content/Developer'
import Webd from '../components/content/Webd'
import Website from '../components/content/Website'
import Gsap from '../components/content/Gsap'
import Portfolio from '../components/content/Portfolio'
import Youtube from '../components/content/Youtube'

const Home = () => {
    return (
        <Main 
            title = "웹스토리보이 유튜브"
            description="웹스토리보이 유튜버 사이트에 오신 것을 환영합니다.">
            
            <Today />
            <Developer />
            
            <Webd />
            <Website />
            <Gsap />
            <Portfolio />
            <Youtube />
        </Main>
    )
}

export default Home;