import React, { useEffect, useRef } from 'react';  
import { Link } from 'react-router-dom';

import Gallery from './component/Gallery';
import AOS from 'aos';
import Snsicon from './component/Snsicon';
import Fadeinout from './fadeIn/fadeinOut';
import ResizableContainer from './component/RasizableContainer';

import './pagescss/Dailyredheartday.css';
import 'aos/dist/aos.css';
import './css/App.css';
import './FontAgro.css';
import './css/Reset.css';
import './pagescss/fadeinout.css';
import './MQuery/MediaQueryTablet.css';
import { FaChevronRight } from "react-icons/fa6";

import './css/Componet.css';

const Daily = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.5;
        }
    }, []);

    return (
        <>
            <div className='Dailyredheartday'>
                <div className='Daily-Text-Componet'>
                    <p className="sub-title">일상나눔</p>
                    <p className='main-title'>Daily Redheartday</p>
               
                <div>
                    <Snsicon />
                </div>
                </div>
            
                <ResizableContainer initialWidthVW={50} initialHeightVW={50}>         
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}>
                    <img 
                        src={process.env.PUBLIC_URL + '/fadeinoutimg/Dailyredheart1.jpg'} 
                        style={{ 
                            maxHeight: '100%', 
                            objectFit: 'cover' 
                        }} 
                        alt="Red Heart Day"
                    />
                </div>
                </ResizableContainer>  


                <div className="daily-aos">
                    <div className="daily-aos-Content">    
                    
                    <div className='aos-bg'>
                         <div data-aos="fade-up" data-aos-duration="3000" className='bg-text'>
                             <p>우리의 레드하트로 </p>
                             <p>세상을 아름답게 만드는 방법.</p>
                         </div>
                    </div>

                    <div className='aos-bg'>
                         <div data-aos="fade-up" data-aos-duration="3000"className='bg-text'>
                            <p>내가 가진 두개중 하나를</p>
                            <p>나누는 것에서 시작됩니다.</p>
                         </div>
                    </div>

                    <div className='aos-bg'>
                         <div data-aos="fade-up" data-aos-duration="3000"className='bg-text'>
                            <p>내가 가진것을 나누는것은</p>
                            <p>나의 따뜻한 마음을 나누는 것이니까요.</p>
                         </div>
                    </div>
                    
                    <div className='aos-bg'>
                         <div data-aos="fade-up" data-aos-duration="3000"className='bg-text'>     
                            <p>일상에서 함께하는</p>
                            <p>레드하트데이</p>                        
                         </div>
                    </div>
                    </div>
                </div>


                <div className="Daily-Title">
                    <div className="Daily-Componet">
                        <div className="Daily-Text">
                            <p className="Daily-Main-Text">함께하는 즐거움</p>
                            <p className="Daily-Sub-Text">레드하트는 이미 저희 일상 속에 확산되고 있습니다</p>
                        </div>
                        <div>
                            <ul className="Hashtag-Componet">
                                <li className="Hashtag"># 1221 Redheartday</li>
                                <li className="Hashtag"># 손하트 첼린지</li>
                                <li className="Hashtag"># 함께하는 즐거움</li>
                                <li className="Hashtag"># 나눔의날</li>
                                <li className="Hashtag"># 더 아름다워져요</li>
                            </ul>
                            <ul className="Hashtag-Componet">
                                <li className="Hashtag"># 따뜻한 마음</li>
                                <li className="Hashtag"># 웃음과 기쁨이 두배가 되는 축제의날</li>
                                <li className="Hashtag"># 친구, 이웃, 가족 2개중 1를 나누어요</li>
                            </ul>
                            <ul className="Hashtag-Componet">
                                <li className="Hashtag"># 2개 중 1개를 나누음 따뜻한 당신</li>
                                <li className="Hashtag"># 혼자가 아닌 우리의 시작</li>
                                <li className="Hashtag"># 함께 행복을 배가 시켜요</li>
                                <li className="Hashtag"># 드레스코드는 레드</li>
                            </ul>
                            <ul className="Hashtag-Componet">
                                <li className="Hashtag"># 당신이 주인공</li>
                                <li className="Hashtag"># 지구촌으로 퍼져가는 아름다운 마음</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='second-section'>
                    <div className='Image-Title"'>
                            <p className='Image-MainTitle'>함께하는 레드하트데이</p>
                            <p className='Image-SubTitle'>가족, 친구, 이웃들과 나눔으로 아름다운 세상을 만들어요</p>
                        </div>
                    
                           
                    
                    <div className='Dailyredheartday-Img'>
                        <img src={process.env.PUBLIC_URL + '/fadeinoutimg/Dailyredheart2.jpg'} style={ {width: '90vw', borderRadius: '15px' } }></img>
                    </div>

                    
                    <div className="Button-container">
                <div className="Button-space"> 
                    <p>지금 바로 레드하트로 아름다운 세상만들기</p>
                    
                    <div>
                        <p><FaChevronRight
                        className='right-cion'/></p>
                    </div>
                </div>
            </div>
        </div>

        <div className='GalleryImg grid-container'>
                
                <div className='Gallery-Componet gird-innercontainer'>  
                    <div className='gallery-text' style={ {padding: '4vw 12.1vw' }}>
                        <p style= {{ fontsize: '2vw'}}>갤러리</p>
                    </div>
                </div> 
                    <Gallery page='dailyredheart'/>
                </div>
            </div>
        </>
    );
};

export default Daily;
