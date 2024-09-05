import React, { useEffect, useRef } from 'react';
import Gallery from './component/Gallery';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS 추가
import Snsicon from './component/Snsicon';
import ResizableContainer from './component/RasizableContainer';
import { FaChevronRight } from "react-icons/fa6";
import './css/App.css';
import './FontAgro.css';
import './css/Reset.css';
import './pagescss/EductionMain.css';
import './css/Componet.css';


const Eduction = () => {
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
        <div className='Eduction'>
            <div className='Eduction-Text-Componet'>
                <p className='Eduction-SubTitle'>교육</p>
                <p className='Eduction-MainTitle'>Celebrating REDHEART at Preschool</p>
                <div>
                    <Snsicon />
                </div>
            </div>

            <ResizableContainer initialWidthVW={50} initialHeightVW={50}>
            <div>
                    <img 
                        src={process.env.PUBLIC_URL + '/fadeinoutimg/eductionMain.jpg'} 
                        style={{ 
                            maxHeight: '100vh', 
                            objectFit: 'cover' 
                        }} 
                        alt="Red Heart Day"
                    />
                </div>
            </ResizableContainer>
            <div className='EductionMain-Content'>
            <div className='aos-bg'>
                <div data-aos="fade-up" data-aos-duration="3000" className='fade-Text'>
                    <p>REDHEART DAY는</p>
                </div>
            </div>

            <div className='aos-bg'>
                <div data-aos="fade-up" data-aos-duration="3000" className='fade-Text'>
                    <p>나의 따뜻한 마음을</p>
                </div>
            </div>

            <div className='aos-bg'>
                <div data-aos="fade-up" data-aos-duration="3000" className='fade-Text'>
                    <p>나타내며 전하는는</p>
                </div>
            </div>

           <div className='aos-bg'>
                <div data-aos="fade-up" data-aos-duration="3000" className='fade-Text'>
                    <p>'나눔의 날' + '나눔 운동' 입니다</p>
                </div>
            </div>
             
            </div>
            <div className="Eduction-About">
                <div className='title-componet'>
                    <p className='main-title'>나눔의 기쁨을 누리는 시간</p>
                    <p className='sub-title'>전 세계 아이들에게 나눔의 기쁨이 확산되고 있습니다</p>
                </div>

                <div className="Eduction-Main-Image">
                    <div className="Eduction-Image">
                        <img 
                            src={process.env.PUBLIC_URL + '/fadeinoutimg/eductionSub.JPG' } 
                            style={ {width: '75vw', borderRadius: '50px' } }
                            className="Eduction-Image"
                            alt="Sub" 
                        />
                    </div>
                </div>
            <div className='Eduction-Button'>
                <div className="Button-container">
                    <div className="Button-space"> 
                        <p>레드하트수업 살펴보기 </p>
                    <div>
                        <p><FaChevronRight className='right-cion'/></p>
                    </div>
                    
                    </div>
                </div>

                <div className="Button-container Eduction-button-bg">
                     <div className="Button-space"> 
                         <p>레드하트수업 문의하기 </p>
                         <div>
                        <p><FaChevronRight
                        className='right-cion'/></p>
                    </div>
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
                    <Gallery page='peoplewithredheart'/>
                </div>
            </div>
        </>
    );
};

export default Eduction;
