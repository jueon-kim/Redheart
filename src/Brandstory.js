import React, { useEffect, useRef } from 'react';  
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";


import 'aos/dist/aos.css';
import './pagescss/BrandstoryMain.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Brandstory = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return ( 
        <>   
            <div className='BrandStoryMain'>
               
                <div className='BrandStoryMain-Content'>
                    

                    <div data-aos="fade-up" data-aos-duration="3000" className='BrandStoryMain-Text'>
                        <p>레드하트는 아름다운 세상을 만드는 따뜻한 마음입니다.</p>
                        <p>웃음과 기쁨이 가득한 아름다운세상은 주병을 돌아보고 마음을 나누는 일상 속</p>
                        <p>작은 나눔에서 시작됩니다</p>
                    </div>

                    <div  data-aos="fade-up" data-aos-duration="3000" className='BrandStoryMain-Text' style={{top: '50vh'}}>
                        <p>나눔은 쉽습니다. 내가 가진 두 개 중 하나를 나누면 되니까요</p>
                        <p>나눔을 통새 웃음과 기쁨이 두 배가 되는 날</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="3000" className='BrandStoryMain-Text' style={{top: '100vh'}}>
                        <p>가족, 친구, 이웃과 함께 행복이</p>
                        <p>두 배가 되는 축제의 날. 12월 12일 레드하트데이 레드하트를</p>
                        <p>지닌 당신이 축제의 날로 만들어 가세요</p>
                    </div>
                </div>
                 

                <div className="Fade-Coponet Brandstory-Fade"> 
                    <div className="Brandstory-Img">
                        <div className="Img-Text"  
                        data-aos="zoom-in"
                         data-aos-duration="2000">
                            <p className="bgImg-Sub-Text">I have two. I share one.</p>
                            <p className="bgImg-Main-Text">당신의 레드하트로</p>
                            <p className="bgImg-Main-Text">세상을 따뜻하게 만들어 가세요.</p>
                        </div>
                    </div>
                </div>


            <div>
                {/* 영상 */}
                <div>

                <video
                        muted
                        autoPlay
                        loop
                        ref={videoRef}
                        style={{ width: '100vw', height: 'auto' }}
                    >
                        <source src={`${process.env.PUBLIC_URL}/video/Video.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
               

                <div className="Img-Slide">
                <div className="Img-Slide-Text">
                    <p className="Slide-Main-Text">Dress Code: Red</p>
                    <p className="Slide-Sub-Text">사랑의 상징인 컬러로 아름답게 꾸며요</p>
                </div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        style={{ height: '520px' }}    >
                        <SwiperSlide>
                            <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryLeft2.jpg'} />
                            </SwiperSlide>
                        
                        <SwiperSlide>
                            <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryLeft2.jpg'} />
                            </SwiperSlide>

                        <SwiperSlide>
                            <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryLeft2.jpg'} />
                            </SwiperSlide>

                        <SwiperSlide>
                            <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryLeft2.jpg'} />
                            </SwiperSlide>
                </Swiper>

                </div>
            </div>

            <div className="Brandstory-Gallery-Group">
                <div className="Brandstory-Gallery-Center">
                    <div className="Brandstory-Gallery-Left">
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryLeft2.jpg'} style={{ width: '200px', height: '600px'}}/>
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryLeft1.jpg'} />
                    </div>

                    <div className="Brandstory-Gallery-Middle">
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryCenter1.jpg'}  style= {{ width: '100%', height: '400px'}}/>
                    
                    <div className="Brandstory-Gallery-Middle-Row">
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryCenter2.jpg'} style={{ width: '200px', height:'500px'}}/>
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryCenter3.jpg'} style={{ width: '200px', height:'500px'}}/>
                    </div>
                </div>
                    <div className="Brandstory-Gallery-Right">
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryRight1.jpg'} style={{ width: '200px', height: '600px'}}/>
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryRight2.jpg'}/>
                    </div>
                </div>

                <div className="Brandstory-Gallery-Bottom">
                    <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryBottom1.jpg'} />
                    <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryBottom2.jpg'} />
                    <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryBottom3.jpg'} />
                </div>
            </div>
            </div>
        </>
    );
};

export default Brandstory;
