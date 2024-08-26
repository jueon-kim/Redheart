import React, { useState, useEffect, Component } from 'react';

const ScrollResizeComponent = () => {
    const [size, setSize] = useState({ width: 560, height: 720 }); // 초기 크기

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxSize = {
                width: Math.min(window.innerWidth, 1920), // 가로 최대 크기 1920픽셀로 제한
                height: window.innerHeight
            };
            const newWidth = Math.min(maxSize.width, 560 + scrollPosition * 2); // 필요한 경우 조정
            const newHeight = Math.min(maxSize.height, 720 + scrollPosition * 2); // 필요한 경우 조정

            setSize({ width: newWidth, height: newHeight });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    

    return (
        <div className="scroll-container">
            <div>
            <iframe className="iframe-container" style={{ width: `${size.width}px`, height: `${size.height}px` }}
                width="560px"
                height="720px"
                src="https://www.youtube.com/embed/DoY8DnbkvuQ?si=MF8Yu5NV0zqHkcHg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                ></iframe>
            </div>
        
            </div>

    );
};

export default ScrollResizeComponent;
