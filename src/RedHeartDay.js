import React from 'react';
import { Link } from 'react-router-dom';

import Gallery from './component/Gallery';
import fadeinOut from './fadeIn/fadeinOut';
import Snsicon from './component/Snsicon';

import './css/Redheartday.css';
import './css/gallery.css';
import './css/App.css';
import './FontAgro.css';
import './css/Reset.css';
import Fadeinout from './fadeIn/fadeinOut';


const Redheartday = () => {
    return(
        <div className='Redheartday'>
            <div className='Title-Componet'>
                <p className='Sub-Title'>페스티벌</p>
                <p className='Main-Title'>1221RedHeart Day</p>
                <Snsicon></Snsicon>
            </div>


        <div className='video'>
            <iframe                 
                width="1040px"
                height="670px"
                src="https://www.youtube.com/embed/iR4iCDLQIyg?si=RX9bL5gAGwhpX7M5" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            
        </div>
        {/* fade   */}
        <div>

        </div>

        <div className="Image-Title">
            <p className="Image-MainTitle">너도 나도 나누는 레드하트데이</p>
            <p className="Image-SubTitle">나눔은 우리의 따뜻한 마음을 나누는 것입니다. 나눔은 쉽습니다. 내가 가진 두 개 중 하나를 나누면 되니까요</p>
        </div>

        <div className="Redheartday-image">
            <Fadeinout page='Redheartdayimg'/>
        </div>

        <div className="Button-container">
            <div className="Button-space"> 
                <p>우리 지역 레드하트데이 축제 찾아보기 > </p>
            </div>
        </div>

        <div className='GalleryImg grid-container'>
            <div className='Gallery-Componet gird-innercontainer'>   
                <Gallery page='redheartday' />
            </div>
        </div>


        </div>        

    );
};

export default Redheartday;