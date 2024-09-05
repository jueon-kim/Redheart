import React, { useEffect, useRef } from 'react';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ResizableContainer from './component/RasizableContainer';
import Gallery from './component/Gallery';
import Snsicon from './component/Snsicon';

import './pagescss/OurActivityMain.css';
import AOS from 'aos';
import './css/App.css';
import './FontAgro.css';
import './css/Reset.css';
import './MQuery/MediaQueryTablet.css';

const OurActivity = () => {
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
        <div className='Ouractivity'>

           <div className="Ouractivity-Text-Componet">
                <p className='Our-Sub-Title'>함께하는 사람들</p>
                <p className='Our-Main-Title'>People With RedHeart</p>
                <Snsicon></Snsicon>
           </div>
        
           <ResizableContainer>           
                 <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}>
                    <img 
                        src={process.env.PUBLIC_URL + '/fadeinoutimg/ourActivityMain.JPG'} 
                        style={{ 
                            maxHeight: '100vw', 
                            objectFit: 'cover' 
                        }} 
                        alt="Red Heart Day"
                    />
                </div>
                </ResizableContainer>  


                <div className='GalleryImg grid-container'>
                
                <div className='Gallery-Componet gird-innercontainer'>  
                    <div className='gallery-text' style={ {padding: '4vw 12.1vw' }}>
                        <p style= {{ fontsize: '2vw'}}>갤러리</p>
                    </div>
                </div> 
                    <Gallery page='peoplewithredheart'/>
                </div>
            </div>
    );
};


export default OurActivity;