import React, { useEffect, useState, useRef } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import '../css/App.css';
import '../css/Ourvaluecomponet.css';
import '../MQuery/MediaQueryTablet.css';

const OurValue = () => {
  useEffect(() => {
    AOS.init();
}, []);

  return (
    <>
    <div className="ourvalue-wapper">

      <div className="title-wapper">
        <div className='main-title ourvalue-main-text'>
          <p>Our Value</p>
        </div>

        <div className='sub-title ourvalue-sub-text'>
          <p>Your REDHEART makes the world more beautiful.</p>
        </div>
      </div>

    
      <div className="OurValue-Componet">
          <div className="OurValue-Componet-text love-text" data-aos="fade-right">
            <p className="OurValue-Main-Title">LOVE</p>      
            <p className="OurValue-Sub-Title" >‘REDHEART’ is a heart to share the love.</p>
          </div>

          <div className="OurValue-Componet-text share-text"data-aos="fade-left">
            <p className="OurValue-Main-Title">SHARE</p>
            <p className="OurValue-Sub-Title">Express your love. Share one of two items you have.</p>
          </div>
         
          <div className="OurValue-Componet-text rejoice-text" data-aos="fade-right">
             <p className="OurValue-Main-Title">REJOICE</p>
             <p className="OurValue-Sub-Title">Celebrate the joy of sharing with others.</p>
          </div>
          
          <div className="OurValue-Componet-text spread-text" data-aos="fade-left">
             <p className="OurValue-Main-Title">SPREAD</p>
             <p className="OurValue-Sub-Title">Let’s make the world more beautiful with your REDHEART.</p>
          </div>
      </div>

      </div>
      </>
  );
};

export default OurValue;
