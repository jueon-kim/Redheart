import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/Componet.css';
import '../css/BrandStoryComponet.css';

export const BrandStoryComponet = () => {


  
  return (
    <>
    <div className='BrandstoryComponentWapper'>
        {/* 타이틀 섹션 */}
        <div className='title-wapper'>
        <div className={`title-componet`}>
          {/* 메인 타이틀 */}
          <div className='main-title'>
            <p>Brand Story</p>
          </div>
          
          {/* 서브 타이틀 */}
          <div className='sub-title'>
            <p>Your REDHEART makes the world more beautiful.</p>
          </div>

        </div> 
      </div>


              <div className="howToJoin" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
              width: '80vw', // 너비를 80vw로 설정
            }}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="Dresscode-text-wapper">
                  <div className='howtoJoin-text'>
                  <p className="Main-text">Dress Code: Red</p>
                  <p className="Sub-text">Wear something red to show your REDHEART</p>
                </div>
                <div className="title" data-swiper-parallax="-300" style={{
                  height: '69vh',
                  width: '100%',
                  backgroundImage: `url(${process.env.PUBLIC_URL + '/brandImg/BrandDresscode.JPG'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius:'20px'
                }}>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="Dresscode-text-wapper">
                <div className='howtoJoin-text'>
                  <p className="Main-text">Share</p>
                  <p className="Sub-text">Share one of two items you have to your family</p>
                   <p className="Sub-text"> friends and neighbors.</p>
                </div>
                <div className="title" data-swiper-parallax="-300" style={{
                  height: '70vh',
                  width: '100%',
                  backgroundImage: `url(${process.env.PUBLIC_URL + '/brandImg/BrandShare.JPG'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius:'20px'
                }}>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="Dresscode-text-wapper">
                <div className='howtoJoin-text'>
                  <p className="Main-text">Celebrate</p>
                  <p className="Sub-text">Celebrate the joy of shareing with other</p>
                </div>
                <div className="title" data-swiper-parallax="-300" style={{
                  height: '70vh',
                  width: '100%',
                  backgroundImage: `url(${process.env.PUBLIC_URL + '/brandImg/BrandCelebrate.JPG'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius:'20px'
                }}>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
</div>
    </>
  );
};

export default BrandStoryComponet;