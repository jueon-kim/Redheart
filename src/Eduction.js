import React, { useEffect } from 'react';
import Gallery from './component/Gallery';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS 추가
import Snsicon from './component/Snsicon';

import './css/App.css';
import './FontAgro.css';
import './css/Reset.css';
import './pagescss/EductionMain.css';

const Eduction = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000, // 애니메이션 지속 시간 설정
            once: true, // 스크롤 후 애니메이션을 한 번만 실행하도록 설정
        });
    }, []);

    return (
        <div className='Eduction'>
            <div className='Eduction-Text-Componet'>
                <p className='Eduction-SubTitle'>교육</p>
                <p className='Eduction-MainTitle'>Preschool Edu</p>
                <div>
                    <Snsicon />
                </div>
            </div>

            <div className='EductionMain-Content'>
                <div className='EductionMain-Text' data-aos="fade-up" data-aos-duration="3000">
                    <p>레드하트데이 교육을 통해 전 세계 아이들과 나눔의 기쁨을 함께하고 있습니다.</p>
                </div>
                <div className='EductionMain-Text' data-aos="fade-up" data-aos-duration="3000" style={{ top: '50vh' }}>
                    <p>수업을 통해 나눔을 배우고, 나눔을 실천하며 나눔의 기쁨을 누리는 시간</p>
                </div>
                <div className='EductionMain-Text bg-color' data-aos="fade-up" data-aos-duration="3000" style={{ top: '100vh' }}>
                    <p>레드하트데이 수업입니다.</p>
                </div>
            </div>

            <div className="Eduction-About">
                <div className='Eduction-Text-Componet'>
                    <p className='Eduction-MainTitle'>나눔의 기쁨을 누리는 시간</p>
                    <p className='Eduction-SubTitle'>전 세계 아이들에게 나눔의 기쁨이 확산되고 있습니다</p>
                </div>

                <div className="Eduction-Main-Image">
                    <div className="Eduction-Image">
                        <img 
                            src={process.env.PUBLIC_URL + '/fadeinoutimg/eductionSub.JPG'} 
                            className="Eduction-Image"
                            alt="Sub" 
                        />
                    </div>
                </div>

                <div className="Service-Componet">
                    <p className="Service-More">레드하트수업 살펴보기 > </p> &nbsp;
                    <p className="Service-QA">레드하트수업 문의하기 > </p>
                </div>
            </div>

            <div>
                <Gallery page='eduction' /> 
            </div>
        </div>
    );
};

export default Eduction;
