import React, { useEffect, useState, useRef } from 'react';
import '../css/App.css';
import '../css/Ourvaluecomponet.css';
import '../MQuery/MediaQueryTablet.css';

const OurValue = () => {

  return (
    <>
    <div className="ourvalue-wapper" data-aos="fade-up" data-aos-duration="3000">

      <div className="title-wapper display-flex">
        <div className='main-title ourvalue-main-text'>
          <p>Our Value</p>
        </div>

        <div className='sub-title ourvalue-sub-text'>
          <p>내가 나눌 때 세상은 더욱 아름다워집니다.</p>
        </div>
      </div>

    <div className='text-wapper'>
      <span className='vertical-line'></span>
    
      <div className="OurValue-Componet">

          <div className="OurValue-Love">
            <p className="OurValue-Main-Title">LOVE</p>      
            <p className="OurValue-Sub-Title" >당신의 레드하트를 보여주세요.</p>
          </div>

          <div className="OurValue-Share">
            <p className="OurValue-Main-Title">SHARE</p>
            <p className="OurValue-Sub-Title">따뜻한 당신은 2개중 1개를 나누어요.</p>
          </div>
          <span className='horizontal-line'></span>
         
         <div className="OurValue-Rejoice">
             <p className="OurValue-Main-Title">REJOICE</p>
             <p className="OurValue-Sub-Title">나눔의 기쁨을 누리는 당신이 레드하트의 주인공이에요.</p>
          </div>
          
         <div className="OurValue-Spread">
             <p className="OurValue-Main-Title">SPREAD</p>
             <p className="OurValue-Sub-Title">지구촌으로 퍼저가는 아름다운 세상을 우리 함께 만들어요.</p>
          </div>
      </div>

      </div>
      </div>
      </>
  );
};

export default OurValue;
