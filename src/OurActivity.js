import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Gallery from './component/Gallery';
import Snsicon from './component/Snsicon';

import './pagescss/OurActivityMain.css';

import './css/App.css';
import './FontAgro.css';
import './css/Reset.css';


const OurActivity = () => {
    
    return (
        <div className='Ouractivity'>

           <div className="Ouractivity-Title">
                <p className='Our-Sub-Title'>함께하는 사람들</p>
                <p className='Our-Main-Title'>People With RedHeart</p>
                <Snsicon></Snsicon>
           </div>
        

         <div className="Ouractivity-Image">
           <div className="Image-Content">
            <img src={process.env.PUBLIC_URL + '/fadeinoutimg/ourActivityMain.JPG'} 
                className="Main-Image-Size"
                alt="Front" /> 
           </div>
        </div>


            <div className='GalleryImg grid-container'>
                <div className="Gallery-Componet gird-innercontainer">
                    <Gallery page='peoplewithredheart'></Gallery>
                </div>
            </div>
        </div>
    );
};


export default OurActivity;