import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//컴포넌트
import Header from './component/Header';
import { BrandStoryComponet } from './component/BrandStoryComponet';
import OurActivityComponet from './component/OuractivityComponet';
import OurValue from './component/OurValue';
import Footer from './component/Footer';
import RedheartdayComponet from './component/RedheartdayComponet';

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
      <RedheartdayComponet />
      
        <BrandStoryComponet />
    
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