import React, { useEffect, useRef, useState } from 'react';  
import AOS from 'aos';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel, } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './pagescss/BrandstoryMain.css';

const Brandstory = () => {
    return ( 

        <>
    <div style={{ maxWidth:'360px', maxHeight: '100vh' }}>
        <div>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper" style={{  height:'520px', width: '100vw'}}
            >
                <SwiperSlide>
                    <div className="swiper-center Brandstory-bg-img1">
                        <p>RedHeartDay는 나의 따뜻한</p>
                        <p>마음을 나타내며 전하는</p>
                     </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className="swiper-center Brandstory-bg-img2"> 
                    <p>RedHeartDay는 나의 따뜻한</p>                    
                    <p>'나눔의 날' + '나눔 운동' 입니다</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>  
                <div className="swiper-center Brandstory-bg-img3">
                    <p>'혼자'가 아닌 '우리의 시작 </p> 
                    <p>바로 '나눔'에서 시작됩니다</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>  
                <div className="swiper-center Brandstory-bg-img4">
                    <p>나눔으로 웃음과 기쁨이</p>                        
                    <p>두 배가 되는 축제의 날</p>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className="swiper-center Brandstory-bg-img5">
                    <p>내가 가진 두 개 중</p> 
                    <p>하나를 나누면 되니까요</p>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>   
                <div className="swiper-center Brandstory-bg-img6"> 
                    <p>나눔을 통해 웃음과 기쁨이</p>
                    <p>두 배가 되는 날</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>

        <div className='second-video-section'>
            <div className='video-wrapper'>
                <video muted
                       autoPlay
                       loop
                       src={process.env.PUBLIC_URL + '/video/Brandstory.mp4'}
                       style={{ 
                           width: '90%', 
                           borderRadius: '10px', 
                           position: 'relative', 
                           zIndex: 0, 
                           margin: '0 auto'
                        }}>
                </video>
            </div>
        </div> 

         {/* <div className='brandstory-component'>
            <div className='brandstory-wrapper'>
                <div className='brandstory-img'>
                    <img src={process.env.PUBLIC_URL + '/brandImg/Brandstory.jpg'} />
                </div>
                <div className='brandstory-title-component'>
                    <div className='brandstory-sub-title'>
                        <p>I have two. I share one.</p>
                        <div className='brandstory-main-title'>
                        <p>당신의 레드하트로</p>
                        <p>세상을 따뜻하게 만들어 가세요</p>
                    </div>
                    </div>
                 
                </div>
            </div>
        </div>  */}
        
        <div className='dresscode-wrapper'>
            <div className='dresscode-component'>
                <div className="dresscode-text">
                    <div className="dresscode-main-text">
                        <p>Dress Code: Red</p> 
                    </div>
                    <div className="dresscode-sub-text">
                        <p>사랑의 상징인 컬러로 아름답게 꾸며요</p>
                    </div>
                </div>
            </div>
            <div className='Brandstory-swiper-wrapper'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    style={{height: '140px'}} className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstorySwiper1.jpg'} className='swiper-img'></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstorySwiper2.jpg'} className='swiper-img'></img> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstorySwiper3.jpg'} className='swiper-img'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstorySwiper4.jpg'} className='swiper-img'/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div className='ouractivity-bg-color'>
            <div className='gallery-text-wrapper'>
                <div className='gallery-text-component'>
                    <div className='gallery-text-small'>
                        <p>Join</p>
                    </div>
                    <div className='gallery-main-text'>
                        <p>함께하는 레드하트</p>
                    </div>
                    <div className='gallery-sub-text'>
                        <p>나눔으로 행복을 배가 시키는 나의 소소한 이야기를 모두와 나누어 보세요</p>
                    </div>
                </div>
            </div>

            <div className="Brandstory-Gallery-Group">
                <div className="Brandstory-Gallery-Center">
                    <div className="Brandstory-Gallery-Left">
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryLeft2.jpg'} className='brandstory-gallery-img' style={{ width: '10vw', height: '30vw'}}/>
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryLeft1.jpg'} className='brandstory-gallery-img' style={{ width: '25vw', height: '20vw'}}/>
                    </div>
                    <div className="Brandstory-Gallery-Middle">
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryCenter1.jpg'} className='brandstory-gallery-img' style={{ width: '32.5vw', height: '30.5vw'}}/>
                        <div className="Brandstory-Gallery-Middle-Row">
                            <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryCenter2.jpg'} className='brandstory-gallery-img' style={{ width: '15vw', height:'20vw'}}/>
                            <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryCenter3.jpg'} className='brandstory-gallery-img' style={{ width: '15vw', height:'20vw' }}/>
                        </div>
                    </div>
                    <div className="Brandstory-Gallery-Right">
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryRight1.jpg'} className='brandstory-gallery-img' style={{ width: '10vw', height: '30vw'}}/>
                        <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryRight2.jpg'} className='brandstory-gallery-img' style={{ width: '25vw', height: '20vw'}}/>
                    </div>
                </div>
                <div className="Brandstory-Gallery-Bottom">
                    <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryBottom1.jpg'} className='brandstory-gallery-img' style={{ width: '25vw', height: '20vw'}}/>
                    <img src={process.env.PUBLIC_URL + '/brandImg/BrandstoryBottom2.jpg'} className='brandstory-gallery-img' style={{ width: '25vw', height: '20vw'}}/>
                </div>
            </div>
        </div> 

        </div> 
    </>
    );
};

export default Brandstory;
