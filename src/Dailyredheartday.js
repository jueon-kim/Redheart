import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Gallery from './component/Gallery';
import AOS from 'aos';
import Snsicon from './component/Snsicon';
import Fadeinout from './fadeIn/fadeinOut';

import './pagescss/Dailyredheartday.css';
import 'aos/dist/aos.css';
import './css/App.css';
import './FontAgro.css';
import './css/Reset.css';

const Daily = () => {
    useEffect(() => {
        AOS.init();

        const fadeInElements = document.querySelectorAll('.fade-in-element');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: [0, 1] // 요소가 0% 또는 100% 가시성에 도달할 때 콜백 호출
        });

        fadeInElements.forEach(element => {
            observer.observe(element);
        });

        // Handle scroll event to scale the image
        const handleScroll = () => {
            const mainImage = document.querySelector('.Main-Image');
            if (mainImage) {
                const scrollTop = window.scrollY;
                if (scrollTop > 50) { // 특정 스크롤 위치에서 클래스를 추가합니다
                    mainImage.classList.add('scrolled');
                } else {
                    mainImage.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            fadeInElements.forEach(element => {
                observer.unobserve(element);
            });
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='Dailyredheartday'>
                <div className='Daily-Title-Componet'>
                    <p className="Daily-Sub-Title">일상나눔</p>
                    <p className='Daily-Main-Title'>Daily Redheartday</p>
               
                <div>
                    <Snsicon />
                </div>
                </div>
            <div className="Main-Image-Componet">
                <div className="Main-Image">
                    <img src={process.env.PUBLIC_URL + '/fadeinoutimg/Dailyredheart1.jpg'} alt="Main" />
                </div>
            </div>
            
                <div className="daily-aos">
                    <div className="daily-aos-Content">    
                        <span>
                         <div data-aos="fade-up" data-aos-duration="3000" className="aos-text" style={{ top: '50vh' }}>
                             <p>우리의 레드하트로 세상을 아름답게 만드는 방법.</p>
                         </div>
                         <div data-aos="fade-up" data-aos-duration="3000" className="aos-text" style={{ top: '50vh' }}>
                            <p>내가 가진 두개중 하나를 나누는 것에서 시작됩니다.</p>
                         </div>
                         <div data-aos="fade-up" data-aos-duration="3000" className="aos-text" style={{ top: '50vh' }}>
                            <p>내가 가진것을 나누는것은 나의 따뜻한 마음을 나누는 것이니까요.</p>
                         </div>
                         <div data-aos="fade-up" data-aos-duration="3000" className="aos-text fade-in-element" style={{ top: '50vh' }}>     
                            <p>일상에서 함께하는 레드하트데이</p>                        
                         </div>
                        </span>
                    </div>
                </div>
                <div className="Daily-Title">
                    <div className="Daily-Componet">
                        <div className="Daily-Text">
                            <p className="Daily-Main-Text">함께하는 즐거움</p>
                            <p className="Daily-Sub-Text">레드하트는 이미 저희 일상 속에 확산되고 있습니다</p>
                        </div>
                        <div>
                            <ul className="Hashtag-Componet">
                                <li className="Hashtag"># 1221 Redheartday</li>
                                <li className="Hashtag"># 손하트 첼린지</li>
                                <li className="Hashtag"># 함께하는 즐거움</li>
                                <li className="Hashtag"># 나눔의날</li>
                                <li className="Hashtag"># 더 아름다워져요</li>
                            </ul>
                            <ul className="Hashtag-Componet">
                                <li className="Hashtag"># 따뜻한 마음</li>
                                <li className="Hashtag"># 웃음과 기쁨이 두배가 되는 축제의날</li>
                                <li className="Hashtag"># 친구, 이웃, 가족 2개중 1를 나누어요</li>
                            </ul>
                            <ul className="Hashtag-Componet">
                                <li className="Hashtag"># 2개 중 1개를 나누음 따뜻한 당신</li>
                                <li className="Hashtag"># 혼자가 아닌 우리의 시작</li>
                                <li className="Hashtag"># 함께 행복을 배가 시켜요</li>
                                <li className="Hashtag"># 드레스코드는 레드</li>
                            </ul>
                            <ul className="Hashtag-Componet">
                                <li className="Hashtag"># 당신이 주인공</li>
                                <li className="Hashtag"># 지구촌으로 퍼져가는 아름다운 마음</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Daily-Image-Componet">
                    <div className="Daily-Main-Image">
                        <Fadeinout page='dailyredHeartday' />
                    </div>
                    <div className="MainImage-Text">
                        <p className="Image-Text">지금 바로 레드하트로 아름다운 세상만들기</p>
                    </div>
                </div>
                <div className="daily-container">
                    <h1 className="page-title">갤러리</h1>
                    <Gallery page="dailyredheart" />
                </div>
            </div>
        </>
    );
};

export default Daily;
