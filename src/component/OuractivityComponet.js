import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import useColorTransition from '../useColorTransition';
import MarqueeShare from './MarqueeShareComponet';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import { FaChevronCircleRight } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

import "swiper/css";

import '../css/OuractivityComponet.css';
import '../MQuery/MediaQueryTablet.css';

const OurActivityComponet = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false, // 애니메이션이 한 번만 실행되도록 설정
        });
    }, []);

    // const { bgColor, textColor, ref } = useColorTransition();
    const [isTransitioned, setIsTransitioned] = useState(false);
    const openCardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsTransitioned(true);
                    }
                });
            },
        );

        if (openCardRef.current) {
            observer.observe(openCardRef.current);
        }

        return () => {
            if (openCardRef.current) {
                observer.unobserve(openCardRef.current);
            }
        };

    }, []);

    return (
        <>
            <div className="Ouractivity-Componet" >

                <div className="title-wapper">
                    
                    <div className='main-title ouractivity-main-title'>
                     <p>Our Activity</p>
                    </div>

                    <div className='sub-title ouractivity-sub-title'>
                        <p>레드하트는 이미 저희 일상 속에 확산되고 있습니다</p>
                    </div>
                </div>

             
            <div className="swiper-container">
                <Swiper slidesPerView={5} 
                        centeredSlides={true}  
                        breakpoints={{
                            360: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                        }}   
                          modules={[Pagination]}
                          className="mySwiper">
                    <SwiperSlide>
                        <div className={`open-card ${isTransitioned ? 'transition' : ''}`} ref={openCardRef}>
                            <div className="open-card">
                                <div className="card">

                                <div className="card-image-container">
                                    <img
                                        src={process.env.PUBLIC_URL + '/img/SwiperImg1.JPG'}
                                        className="front"
                                        
                                    />
                                <div className='front'>
                                <div className='front-section'>
                                <p className='Card-Sub-Title'>Festival</p>
                                        <p className='Card-Main-Title'>1221 레드하트데이</p>
                                        </div>
                                    </div>
                                </div>

                                    <div className="Festival back">

                                    <div className='back-title-wapper'>
                                      <div className='back-section'>
                                        <p className='Card-Sub-Title'>Festival</p>
                                        <p className='Card-Main-Title'>1221 레드하트데이</p>
                                     </div>

                                      <div className="text-area">
                                           <p className='Card-Text'>12월 21일, 레드하트데이!</p>
                                            <p className='Card-Text'>나눔으로 웃음과 기쁨이 두 배가 되는</p>
                                            <p className='Card-Text'>축제의 날. 1221 RED HEART DAY.</p>
                                            <p className='Card-Text'>가족, 친구 이웃과 함께 즐겨요</p>
                                      </div>
                                   
                                      
                                 

                                       
                                    </div>

                                    <div className='card-bottom'>
                                            <div className='Card-Text'>
                                                <p> <Link to='/Redheartday' className="Ouractivity-Text">View More</Link></p>
                                            </div>

                                            <div className='right-icon'>
                                            <FaChevronCircleRight className='right-cion' color='#DDDDDD' />
                                            </div>
                                        </div>
                                       
                                        </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`open-card ${isTransitioned ? 'transition' : ''}`}>
                            <div className="open-card">
                                
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/img/SwiperImg2.JPG'}
                                         className="front"
                                         alt="Front" />
                                  <div className='front'>
                                  <div className='front-section'>
                                  <p className='Card-Sub-Title'>Education</p>
                                    <p className='Card-Main-Title'>유치원 교육수업</p>
                                      </div>
                                    </div>
                                    <div className="Education back">
                                   
                                   <div className='back-title-wapper'>
                                   <div className='back-section'>
                                   <p className='Card-Sub-Title'>Education</p>
                                      <p className='Card-Main-Title'>유치원 교육수업</p>
                                    </div>
                                       
                                     <div className="text-area">
                                        <p className='Card-Text'>레드하트 데이는 우리 아이들의 교육현장에도</p>
                                        <p className='Card-Text'>나눔의 문화를 가르칩니다 나의 것을 나누고,</p>
                                        <p className='Card-Text'>사랑의 나눔을 실천하는 행동을 가르쳐 주고</p>
                                        <p className='Card-Text'>지도 합니다</p>
                                    </div>
                                   
                                
                                        </div>

                                        <div className='card-bottom'>
                                            <div className='Card-Text'>
                                                <p> <Link to='/Eduction' className="Ouractivity-Text">View More</Link></p>
                                            </div>

                                            <div className='right-icon'>
                                            <FaChevronCircleRight className='right-cion' color='#DDDDDD' />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`open-card ${isTransitioned ? 'transition' : ''}`}>
                            <div className="open-card">
                                <div className="card">
                                    <img
                                        src={process.env.PUBLIC_URL + '/img/SwiperImg3.JPG'}
                                        className="front"
                                        alt="Front"
                                    />

                                <div className='front'>
                                <div className='front-section'>
                                <p className='Card-Sub-Title'>Daliy</p>
                                        <p className='Card-Main-Title'>레드하트 일상나눔</p>
                                      </div>
                                    </div>

                                    <div className="Daliy back">

                                    <div className='back-title-wapper'>
                                    <div className='back-section'>
                                    <p className='Card-Sub-Title'>Daliy</p>
                                        <p className='Card-Main-Title'>레드하트 일상나눔</p>
                                      </div>

                                        <div className="text-area">
                                            <p className='Card-Text'>레드하트는 이미 저희 일상 속에서</p>
                                            <p className='Card-Text'>확산되고 있습니다.행복을 배가시키는</p>
                                            <p className='Card-Text'>나의 일상을 모두와 나누어 보세요.</p>
                                        </div>
                                      
                                        </div>
                                        <div className='card-bottom'>
                                            <div className='Card-Text'>
                                                <p>  <Link to='/Dailyredheartday' className='Ouractivity-Text'>view More</Link></p>
                                            </div>

                                            <div className='right-icon'>
                                            <FaChevronCircleRight className='right-cion' color='#DDDDDD' />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                         <div className={`open-card ${isTransitioned ? 'transition' : ''}`}>
                            <div className="open-card">
                                <div className="card">
                                    <img
                                        src={process.env.PUBLIC_URL + '/img/SwiperImg4.JPG'}
                                        className="front"
                                        alt="Front"
                                    />
                                  <div className='front'>
                                  <div className='front-section'>                                  <p className='Card-Sub-Title'>People</p>
                                        <p className='Card-Main-Title'>참여하는 사람들</p>
                                      </div>
                                    </div>

                                    <div className="People back">
                                    
                                    <div className='back-title-wapper'>

                                    <div className='back-section'>                                
                                         <p className='Card-Sub-Title'>People</p>
                                        <p className='Card-Main-Title'>참여하는 사람들</p>
                                      </div>

                                        <div className="text-area">
                                            <p className='Card-Text'>따뜻한 마음을 가진 레드하트의 주역들!</p>
                                            <p className='Card-Text'>레드하트의 나눔 운동을 활발히 실천하는</p>
                                            <p className='Card-Text'>인플루언서와 기업들의 이야기를</p>
                                            <p className='Card-Text'>만나보세요!</p>
                                        </div>

                                      
                                     
                                        </div>
                                        <div className='card-bottom'>
                                            <div className='Card-Text'>
                                                <p> <Link to='/Ouractivity' className="Ouractivity-Text">View More</Link></p>
                                            </div>

                                            <div className='right-icon'>
                                            <FaChevronCircleRight className='right-cion' color='#DDDDDD' />
                                            </div>
                                            </div> 
                                        </div>

                                     
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className={`open-card ${isTransitioned ? 'transition' : ''}`}>
                            <div className="open-card">
                                <div className="card">

                                    <img
                                        src={process.env.PUBLIC_URL + '/img/SwiperImg5.JPG'}
                                        className="front"
                                        alt="Front"
                                    />

                                <div className='front'>
                                    <div className='front-section'>
                                        <p className='Card-Sub-Title'>Goods</p>
                                        <p className='Card-Main-Title'>레드하트 굿즈</p>
                                      </div>
                                    </div>

                                    <div className="Goods back">
                                    
                                    <div className='back-title-wapper'>
                                    <div className='back-section'>                                
                                        <p className='Card-Sub-Title'>Goods</p>
                                        <p className='Card-Main-Title'>레드하트 굿즈</p>
                                      </div>

                                        <div className="text-area">
                                            <p className='Card-Text'>레드하트 굿즈를 통해 레드하트 정신을</p>
                                            <p className='Card-Text'>더욱 확산시켜 주세요</p>
                                        </div>
                                      
                                        </div>
                                      
                                        <div className='card-bottom'>
                                            <div className='Card-Text'>
                                                <p>View More</p>
                                            </div>

                                            <div className='right-icon'>
                                                <FaChevronCircleRight className='right-cion' color='#DDDDDD' />
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                <span className="marquee-wapper">
                    <MarqueeShare/>
                </span>
                </Swiper>
            </div>
            </div>
        </>
    );
};

export default OurActivityComponet;
