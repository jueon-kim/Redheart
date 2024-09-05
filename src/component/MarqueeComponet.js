import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery.marquee';  // Ensure this is imported
import '../css/index.css';

const MarqueeComponent = ({ type }) => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        // Initialize the marquee plugin with the same speed for both texts
        $(marqueeRef.current).marquee({
            duration: 25000, // 속도 (텍스트 길이에 따라 조절 가능)
            gap: 10, // 간격
            delayBeforeStart: 500, // 시작 delay값
            direction: 'left', // 방향
            duplicated: true, // 선택 영역 복제
            pauseOnHover: false, // hover시 일시중지 여부
            startVisible: true,
        });

        // Cleanup function to remove the event listener
        return () => {
            $(marqueeRef.current).marquee('destroy');  // Remove the plugin instance
        };
    }, []);

    // 텍스트 정의

    const LoveGiveExpandText = `LOVE SHARE REJOICE SPREAD 
                                LOVE SHARE REJOICE SPREAD
                                LOVE SHARE REJOICE SPREAD
                                LOVE SHARE REJOICE SPREAD
                                LOVE SHARE REJOICE SPREAD
                                LOVE SHARE REJOICE SPREAD                        
                                LOVE SHARE REJOICE SPREAD
                                LOVE SHARE REJOICE SPREAD
                                LOVE SHARE REJOICE SPREAD
                                LOVE SHARE REJOICE SPREAD`;


    // 텍스트를 반복하여 길게 만들기
    const repeatedText = `${LoveGiveExpandText} ${LoveGiveExpandText} ${LoveGiveExpandText} ${LoveGiveExpandText} ${LoveGiveExpandText} ${LoveGiveExpandText}`;

    return (
        <div ref={marqueeRef} className="marquee">
            <p className='Marquee-Text'>{repeatedText}</p>
        </div>
    );
};

export default MarqueeComponent;
