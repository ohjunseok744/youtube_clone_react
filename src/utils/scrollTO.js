import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollTo 컴포넌트는 사용자가 라우트를 변경할 때마다 페이지를 맨 위로 스크롤합니다.
const ScrollTo = () => {
    // useLocation 훅을 사용하여 현재 경로(pathname)를 가져옵니다.
    const { pathname } = useLocation();

    useEffect(() => {
        // pathname이 변경될 때마다 페이지를 (0, 0) 좌표로 스크롤합니다.
        window.scrollTo(0, 0);
    }, [pathname]); // 의존성 배열에 pathname을 넣어 경로가 변경될 때마다 useEffect가 실행되도록 합니다.

    // 이 컴포넌트는 아무것도 렌더링하지 않기 때문에 null을 반환합니다.
    return null;
};

export default ScrollTo; // ScrollTo 컴포넌트를 기본 내보내기로 export 합니다.
