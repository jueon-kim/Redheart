import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

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

    return (
        <>
            <div className="Ouractivity-Componet" >

                <div className="title-wapper">
                    
                    <div className='main-title ouractivity-main-title'>
                     <p>Our Activity</p>
                    </div>

                    <div className='sub-title ouractivity-sub-title'>
                        <p>‘REDHEART’ is already spreading in our daily lives.</p>
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
                                        <p className='Card-Main-Title'>1221 REDHEART Day</p>
                                        </div>
                                    </div>
                                </div>

                                    <div className="Festival back">

                                    <div className='back-title-wapper'>
                                      <div className='back-section'>
                                        <p className='Card-Sub-Title'>Festival</p>
                                        <p className='Card-Main-Title'>1221 REDHEART Day</p><br/><br/>
                                     </div>

                                      <div className="text-area">
                                           <p className='Card-Text'>
                                                    December 21st is RedHeart Day!
                                                    Celebrate the Day of Sharing with
                                                    your family, friends and neighbors.
                                                    Sharing DOUBLES the Happiness 
                                                    and Joy.
                                                    </p>
                                      </div>
                                   
                                    </div>

                                        </div>
                                </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                            <div className="open-card">
                                
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/img/SwiperImg2.JPG'}
                                         className="front"
                                         alt="Front" />
                                  <div className='front'>
                                  <div className='front-section'>
                                  <p className='Card-Sub-Title'>Education</p>
                                    <p className='Card-Main-Title'>Preschool Edu</p>
                                      </div>
                                    </div>
                                    <div className="Education back">
                                   
                                   <div className='back-title-wapper'>
                                   <div className='back-section'>
                                   <p className='Card-Sub-Title'>Education</p>
                                      <p className='Card-Main-Title'>Preschool Edu</p><br/><br/>
                                    </div>
                                       
                                     <div className="text-area">
                                        <p className='Card-Text'>
                                            We have a RedHeart Day<br/> Class held in many countries, 
                                            teaching the joy of sharing through well-organized 
                                            class activities and class materials.
                                        </p>
                                    </div>
                                   
                                
                                        </div>

                                </div>         
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
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
                                        <p className='Card-Main-Title'>Daily REDHEART</p>
                                      </div>
                                    </div>

                                    <div className="Daliy back">

                                    <div className='back-title-wapper'>
                                    <div className='back-section'>
                                    <p className='Card-Sub-Title'>Daliy</p>
                                        <p className='Card-Main-Title'>Daily REDHEART</p><br/><br/>
                                      </div>

                                        <div className="text-area">
                                            <p className='Card-Text'>
                                                ‘REDHEART’ is already<br></br> spreading in our daily lives.<br></br> 
                                                Share the story of sharing with everyone.</p>
                                        </div>
                                      
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                            <div className="open-card">
                                <div className="card">
                                    <img
                                        src={process.env.PUBLIC_URL + '/img/SwiperImg4.JPG'}
                                        className="front"
                                        alt="Front"
                                    />
                                  <div className='front'>
                                  <div className='front-section'>                                  
                                        <p className='Card-Sub-Title'>People</p>
                                        <p className='Card-Main-Title'>People with 
                                        REDHEART</p>
                                      </div>
                                    </div>

                                    <div className="People back">
                                    
                                    <div className='back-title-wapper'>

                                    <div className='back-section'>                                
                                         <p className='Card-Sub-Title'>People</p>
                                        <p className='Card-Main-Title'>People with 
                                        REDHEART</p><br/><br/>
                                      </div>

                                        <div className="text-area">
                                            <p className='Card-Text'>The warm-hearted stars of RedHeart! Meet our HEROS! </p>
                                        </div>

                                      
                                     
                                        </div>
                                        </div>

                                     
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
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
                                        <p className='Card-Main-Title'>REDHEART Goods</p>
                                      </div>
                                    </div>

                                    <div className="Goods back">
                                    
                                    <div className='back-title-wapper'>
                                    <div className='back-section'>                                
                                        <p className='Card-Sub-Title'>Goods</p>
                                        <p className='Card-Main-Title'>REDHEART Goods</p><br/><br/>
                                      </div>

                                        <div className="text-area">
                                            <p className='Card-Text'>Express and spread your RedHeart!</p>
                                        </div>
                                      
                                        </div>
                                      
                                        </div>
                                </div>
                            </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            </div>
        </>
    );
};

export default OurActivityComponet;
