import React, { useState, useEffect } from 'react';
import '../css/Componet.css';

import '../css/RedheartdayComponet.css';

// 테블릿 모바일
import '../MQuery/MediaQueryTablet.css';
const RedheartdayComponet = () => {
    const [size, setSize] = useState({ width: 360}); // 초기 크기

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowWidth = window.innerWidth;

            let baseSize = { width: 150, height: 320 };
            let maxSize = { width: 360, height: 520 };

            // 뷰포트 크기에 따른 최대 크기 설정
            if (windowWidth <= 360) {
                baseSize = { width: 280, height: 280 }; // 모바일 초기 크기
                maxSize = { width: 360, height: 320}; // 모바일 최대 크기
            }

            // 스크롤에 따라 크기 조정
            const newWidth = Math.min(maxSize.width, baseSize.width + scrollPosition * 2);
            const newHeight = Math.min(maxSize.height, baseSize.height + scrollPosition * 2);

            setSize({ width: newWidth, height: newHeight });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='Redheartday-wapper'>   
                <div className="title-wapper">
                    <div className='title-componet'>
                        <div className="sub-title">
                            <p>I have two. I share one.</p>
                        </div>
                        <div className='main-title'>
                            <p>1221 REDHEARTDAY</p>
                        </div>
                    </div>
                </div>

                <div className="scroll-container">
                        <iframe
                            className="iframe-container"
                            style={{ width: `${size.width}px`, height: `${size.height}px` }}
                            src="https://www.youtube.com/embed/DoY8DnbkvuQ?si=MF8Yu5NV0zqHkcHg"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                </div>

                {/* <div>
                    <MarqueeComponent type="loveGiveExpand" />
                </div> */}
            </div>        </>
    );
};

export default RedheartdayComponet;
