import React from 'react';
import { useLocation } from 'react-router-dom';


const photos = {
    brandstory: [
        { backgroundImage: 'url(/fadeinoutimg/brandStoryimg.jpg',
            className: 'brandstoryimg',
            style: { width: '250px', height: '500px' }, },
    ],

    Redheartdayimg: [
        { backgroundImage: 'url(/fadeinoutimg/Redheartday.jpg',
            className: 'redheartdayimg',
    
         },
    ],

    dailyredHeartday: [

        { backgroundImage: 'url(/fadeinoutimg/Dailyredheart2.jpg)', 
          className:'dailyredheartimg' },
    ],

    ouractivity: [
        { backgroundImage: 'url(/fadeinoutimg/Ouractivity.jpg', 
            className: 'ouractivityimg'
        },
    ],

};

const Fadeinout = ({ page }) =>{
    const location = useLocation();
    //현제 페이지에 해당하는 사진 목록을 가져옴
    const currentphotos = photos[page] || [];

    return(
        <div className="Fadeinout">     
            {currentphotos.map((photo, index) => (
                  <div
                  key={index}
                  className={photo.className}
                  style={{
                      backgroundImage: photo.backgroundImage,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width: '100%',
                      height: '100%',
                      borderRadius: '50px', 
                  }}
              >
              </div>
          ))}
      </div>
  );
};

export default Fadeinout;