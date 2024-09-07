import React from 'react';

//컴포넌트
import Header from './component/Header';
import BrandStoryComponet from './component/BrandStoryComponet';
import OurActivityComponet from './component/OuractivityComponet';
import OurValue from './component/OurValue';
import Footer from './component/Footer';
import RedheartdayComponet from './component/RedheartdayComponet';

import './css/App.css';
import './FontAgro.css';
import './css/Reset.css';
import './css/index.css';


function App() {
  return (
    <>
      <Header></Header>
      <RedheartdayComponet />
      
        <BrandStoryComponet />
    
      <OurValue />
      <OurActivityComponet />
      <Footer></Footer>
    </>
  );
};

export default App;