import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//컴포넌트
import Header from './component/Header';
import ScrollResizeComponent from './component/video';
import Conten from './component/MarqueeComponet';
import { BrandStoryHome } from './component/\bBrandStory';
import OurActivityComponet from './component/OuractivityComponet';
import OurValue from './component/OurValue';
import Footer from './component/Footer';

import ScrollToTop from './ScrollToTop';

// pages
import Brandstory from './Brandstory';
import Redheartday from './RedHeartDay';
import Daily from './Dailyredheartday';
import OurActivity from './OurActivity';
import Eduction from './Eduction';

//색상 변경
import { ColorProvider } from './ColorContext';

import { FaCircleChevronRight } from "react-icons/fa6";
import './css/App.css';
import './FontAgro.css';
import './css/Reset.css';
import './css/index.css';
// import './css/Header.css';
// import './css/Footer.css';
// import './css/OuractivityComponet.css';
// import './css/gallery.css';


function HomePage() {
  return (
    <>
      <div className='Title-Componet'>
        <p className='Sub-Title'>I have two. I share one.</p>
        <p className='Main-Title'>1221 REDHEARTDAY</p>
      </div>
      
      <ScrollResizeComponent />
      <Conten />

      <div className='Title-Componet'>
        <p className='Main-Title'>BrandStory</p>
        <p className='Sub-Title'>우리의 레드하트데로 세상을 따뜻하게!</p>
       
     
      <div className="view-More-Content">
          <div className="view-More-Page">
            <Link to='/Brandstory' className="view-More" style={{ textDecoration: "none" }}>view More 
             
            </Link>
            <FaCircleChevronRight className='react-icons'/>
          </div>
        </div>

        </div>

      <div className='BrandStory-360'>
        <BrandStoryHome />
      </div>
      <div style={{ height:'20vh' }}></div>
      <OurValue />
      <OurActivityComponet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUVLIC_URL}>
    <ColorProvider>
    <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Brandstory" element={<Brandstory />} />

        <Route path="/" element={<HomePage />} />
        <Route path='/Redheartday' element={<Redheartday />} />


        <Route path="/" element={<HomePage />} />
        <Route path='/Dailyredheartday' element={<Daily />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/OurActivity" element={<OurActivity />} />
        <Route path='/Eduction'  element={<Eduction/>} />
      </Routes>
      <Footer />
      </ColorProvider>
    </BrowserRouter>


  );
};

export default App;