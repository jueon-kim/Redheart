import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import useColorTransition from '../useColorTransition';
import Redheartday from '../RedHeartDay';

import { Swiper, SwiperSlide } from "swiper/react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import "swiper/css";

import '../css/OuractivityComponet.css';

const OurActivityComponet = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false, // 애니메이션이 한 번만 실행되도록 설정
        });
    }, []);

    const { bgColor, textColor, ref } = useColorTransition();
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
            { threshold: 0.5 } // 50%가 보일 때 transition 실행
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

                <div className="Ouractivity-Title-Component">
                    <p className="Ouractivity-Main-Title">Our Activity</p>
                    <p className="Ouractivity-Sub-Title">레드하트는 이미 저희 일상 속에 확산되고 있습니다</p>
                </div>

                <Swiper slidesPerView={3} centeredSlides={true} className="mySwiper">
                    <SwiperSlide>
                        <div className={`open-card ${isTransitioned ? 'transition' : ''}`} ref={openCardRef}>
                            <div className="open-card card-1">
                                <div className="card">
                                    <img
                                        src={process.env.PUBLIC_URL + '/img/img1_.JPG'}
                                        className="front"
                                        alt="Front"
                                    />

                                    <div className="Festival back">

                                      <div>
                                        <p className='Card-Sub-Title'>Festival</p>
                                        <p className='Card-Main-Title'>1221 레드하트데이</p>
                                      </div>
                                        <div className="text-area">
                                            <p className='Card-Text'>12월 21일, 레드하트데이!</p>
                                            <p className='Card-Text'>나눔으로 웃음과 기쁨이 두 배가 되는</p>
                                            <p className='Card-Text'>축제의 날. 1221 RED HEART DAY.</p>
                                            <p className='Card-Text'>가족, 친구 이웃과 함께 즐겨요</p>
                                           
                                        </div>
                                        <div>

                                        <p className='Card-Text'>
                                                <Link to='/Redheartday' className="Ouractivity-Text">View More</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`open-card ${isTransitioned ? 'transition' : ''}`}>
                            <div className="open-card card-2">
                                <div className="card">
                                    <img
                                        src={process.env.PUBLIC_URL + '/img/img1_.JPG'}
                                        className="front"
                                        alt="Front"
                                    />
                                    <div className="Education back">
                                   
                                    <div>
                                      <p className='Card-Sub-Title'>Education</p>
                                      <p className='Card-Main-Title'>유치원 교육수업</p>
                                    </div>
                                        <div className="text-area">
                                            <p className='Card-Text'>레드하트 데이는 우리 아이들의 교육현장에도</p>
                                            <p className='Card-Text'>나눔의 문화를 가르칩니다 나의 것을 나누고,</p>
                                            <p className='Card-Text'>사랑의 나눔을 실천하는 행동을 가르쳐 주고</p>
                                            <p className='Card-Text'>지도 합니다</p>
                                            
                                        </div>
                                      <div>
                                        <p className='Card-Text'>
                                         <Link to='/Eduction' className='Ouractivity-Text'>view More</Link>
                                        </p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`open-card ${isTransitioned ? 'transition' : ''}`}>
                            <div className="open-card card-3">
                                <div className="card">
                                    <img
                                        src={process.env.PUBLIC_URL + '/img/img1_.JPG'}
                                        className="front"
                                        alt="Front"
                                    />
                                    <div className="Daliy back">
                                      <div>
                                        <p className='Card-Sub-Title'>Daliy</p>
                                        <p className='Card-Main-Title'>레드하트 일상나눔</p>
                                      </div>

                                        <div className="text-area">
                                            <p className='Card-Text'>레드하트는 이미 저희 일상 속에서</p>
                                            <p className='Card-Text'>확산되고 있습니다.행복을 배가시키는</p>
                                            <p className='Card-Text'>나의 일상을 모두와 나누어 보세요.</p>
                                          
                                        </div>

                                        <div>
                                        <p className='Card-Text'>
                                                <Link to='/Dailyredheartday' className='Ouractivity-Text'>view More</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`open-card ${isTransitioned ? 'transition' : ''}`}>
                            <div className="open-card card-4">
                                <div className="card">
                                    <img
                                        src={process.env.PUBLIC_URL + '/img/img1_.JPG'}
                                        className="front"
                                        alt="Front"
                                    />
                                    <div className="People back">
                                      <div>
                                        <p className='Card-Sub-Title'>People</p>
                                        <p className='Card-Main-Title'>참여하는 사람들</p>
                                      </div>

                                        <div className="text-area">
                                          
                                            <p className='Card-Text'>따뜻한 마음을 가진 레드하트의 주역들!</p>
                                            <p className='Card-Text'>레드하트의 나눔 운동을 활발히 실천하는</p>
                                            <p className='Card-Text'>인플루언서와 기업들의 이야기를</p>
                                            <p className='Card-Text'>만나보세요!</p>
                                        </div>
                                        <div>
                                        <Link to='/Ouractivity' className="Ouractivity-Text">View More</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`open-card ${isTransitioned ? 'transition' : ''}`}>
                            <div className="open-card card-5">
                                <div className="card">

                                    <img
                                        src={process.env.PUBLIC_URL + '/img/img1_.JPG'}
                                        className="front"
                                        alt="Front"
                                    />
                                    <div className="Goods back">
                                      <div>
                                        <p className='Card-Sub-Title'>Goods</p>
                                        <p className='Card-Main-Title'>레드하트 굿즈</p>
                                      </div>

                                        <div className="text-area">
                                            <p className='Card-Text'>레드하트 굿즈를 통해 레드하트 정신을</p>
                                            <p className='Card-Text'>더욱 확산시켜 주세요</p>
                                        </div>

                                        <div>
                                          <p className='Card-Text'>View More</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default OurActivityComponet;
