import React, { useEffect, useState, useRef } from 'react';
import '../css/App.css';
import '../css/Ourvaluecomponet.css'


const OurValue = () => {

  return (
    <>
    <div className="Ourvalue" data-aos="fade-up" data-aos-duration="3000">

      <div className="Title-Componet">
        <p className="Title-Componet-Main">Our Value</p>
        <p className="Title-Componet-Sub">내가 나눌 때 세상은 더욱 아름다워집니다.</p>
      </div>

      <div className="OurValue-Componet">

          <div className="OurValue-Love">
            <p className="OurValue-Main-Title OurValue-Text">LOVE</p>      
            <p className="OurValue-Sub-Title OurValue-Text" >당신의 레드하트를 보여주세요.</p>
          </div>

          <div className="OurValue-Share">
            <p className="OurValue-Main-Title OurValue-Text">SHARE</p>
            <p className="OurValue-Sub-Title OurValue-Text">따뜻한 당신은 2개중 1개를 나누어요.</p>
          </div>

         
         <div className="OurValue-Rejoice">
             <p className="OurValue-Main-Title OurValue-Text">REJOICE</p>
             <p className="OurValue-Sub-Title OurValue-Text">나눔의 기쁨을 누리는 당신이 레드하트의 주인공이에요.</p>
          </div>
          
         <div className="OurValue-Spread">
             <p className="OurValue-Main-Title OurValue-Text">SPREAD</p>
             <p className="OurValue-Sub-Title OurValue-Text">지구촌으로 퍼저가는 아름다운 세상을 우리 함께 만들어요.</p>
          </div>

      </div>

      </div>
      </>
  );
};

export default OurValue;
