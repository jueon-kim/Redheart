import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery.marquee';  // Ensure this is imported
import '../css/index.css';

const Marquee = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        // Initialize the marquee plugin
        $('.marquee').marquee({
            duration: 15000, // 속도
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

    return (
        <div 
            ref={marqueeRef}
            className="marquee"> 
            <p>       
            LOGVE GIVE EXPAND
            LOGVE GIVE EXPAND
            LOGVE GIVE EXPAND
            LOGVE GIVE EXPAND
            LOGVE GIVE EXPAND
            LOGVE GIVE EXPAND
            LOGVE GIVE EXPAND
            LOGVE GIVE EXPAND
            LOGVE GIVE EXPAND
            LOGVE GIVE EXPAND</p>
        </div>

        


    );
};




export default Marquee;
