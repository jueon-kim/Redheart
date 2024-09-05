import React, { useEffect, useRef } from 'react';  
import { Link } from 'react-router-dom';
import AOS from 'aos';
import Gallery from './component/Gallery';
import fadeinOut from './fadeIn/fadeinOut';
import Snsicon from './component/Snsicon';
import ResizableContainer from './component/RasizableContainer';

import './css/gallery.css';
import './css/App.css';
import './FontAgro.css';
import './css/Reset.css';
import './pagescss/RedHeartDay.css';
import './pagescss/fadeinout.css';
import './MQuery/MediaQueryTablet.css';
import { FaChevronRight } from "react-icons/fa6";



import './css/Componet.css';

import 'aos/dist/aos.css';
import Fadeinout from './fadeIn/fadeinOut';


const Redheartday = () => {
        useEffect(() => {
            AOS.init();
        }, []);
    
        const videoRef = useRef();
    
        useEffect(() => {
            if (videoRef.current) {
                videoRef.current.playbackRate = 1.5;
            }
        }, []);
    return(
 <>       
        <div className='Redheartday'>
                
                <div className='Redheartday-Text-Componet'>
                    <p className='sub-title'>페스티벌</p>
                    <p className='main-title'>1221RedHeart Day</p>
                    <div>
                    <Snsicon />
                </div>
                </div>

                <ResizableContainer initialWidthVW={50} initialHeightVW={30}>  {/* 초기 너비 vw*/ }    

                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}>
                   <img 
                        src={process.env.PUBLIC_URL + '/redheartdayimg/Redheartday-fade.jpg'} 
                        style={{ 
                            maxHeight: '100vh', 
                            objectFit: 'cover' 
                        }} 
                        alt="Red Heart Day"
                    />
                </div>

                </ResizableContainer>  

                <div className='redheartday-content'>
                    <div className='aos-bg'>
                        <div data-aos="fade-up"  className='fade-Text'>
                            <p>너도 나도 나누는 </p>
                            <p>12월 21일 레드하트데이</p>
                        </div>
                    </div>
                   
                    <div className='aos-bg'>
                        <div data-aos="fade-up" className='fade-Text'>
                            <p>내가 가진 두 개 중</p> 
                            <p>하나를 나누는날</p> 
                        </div>
                    </div>

                    <div className='aos-bg'>
                        <div data-aos="fade-up" className='fade-Text'>
                            <p>가족, 친구 이웃과 함께 하는 행복이</p>
                            <p>두배가 되는 축제의 날</p>
                        </div>
                    </div>

                    <div className='aos-bg'>
                        <div data-aos="fade-up" className='fade-Text'>
                            <p>12월 21일 레드하트데이</p>
                            <p>따뜻한 당신이 축제의 날로 만들어 가세요</p>
                        </div>
                    </div>
               </div>
               



        {/* <div className='video'>
            <iframe                 
                width="1040px"
                height="670px"
                src="https://www.youtube.com/embed/iR4iCDLQIyg?si=RX9bL5gAGwhpX7M5" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            
        </div> */}
        {/* fade   */}

        <div className='second-section'>
            <div className="Image-Title">
                <p className="Image-MainTitle">너도 나도 나누는 레드하트데이</p><br></br>
                <p className="Image-SubTitle">나눔은 우리의 따뜻한 마음을 나누는 것입니다. 나눔은 쉽습니다.
                    내가 가진 두 개 중 하나를 나누면 되니까요</p>
            </div>

            <div className='Redheartday-Img'>
                <img src={process.env.PUBLIC_URL + '/fadeinoutimg/Redheartday.jpg'} style={ {width: '75vw', borderRadius: '50px' } }></img>
            </div>

            <div className="Button-container">
                <div className="Button-space"> 
                    <p>우리 지역 레드하트데이 축제 찾아보기
                        </p> 
                    
                    <div>
                        <p><FaChevronRight
                        className='right-cion'/></p>
                    </div>
                </div>
            </div>
        </div>
                

                <div className='Gallery-Componet gird-innercontainer'>  
                    <div className='gallery-text' style={ {padding: '4vw 12.1vw' }}>
                        <p style= {{ fontsize: '2vw'}}>갤러리</p>
                    </div>
                </div> 
                    <Gallery page='redheartday' />
                </div>
        </>

    );
};

export default Redheartday;