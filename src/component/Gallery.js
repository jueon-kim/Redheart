import React from "react";
import { useLocation } from 'react-router-dom';

import '../css/gallery.css';
import PeopleWithRedHeart from "../OurActivity";

const photos = {
    redheartday: [
        { 
            backgroundImage: 'url(/galleryimg/redheartdayGallery1.jpg)', 
            className: 'festivalimage first-img', 
        },
        { 
            backgroundImage: 'url(/galleryimg/redheartdayGallery2.png)', 
            className: 'festivalimage small-img', 
        },
        { 
            backgroundImage: 'url(/galleryimg/redheartdayGallery3.png)', 
            className: 'festivalimage wide-img', 
        },
        { 
            backgroundImage: 'url(/galleryimg/redheartdayGallery4.png)', 
            className: 'festivalimage small-img', 
        },
        { 
            backgroundImage: 'url(/galleryimg/redheartdayGallery5.png)', 
            className: 'festivalimage wide-img', 
        },
        { 
            backgroundImage: 'url(/galleryimg/redheartdayGallery6.png)', 
            className: 'festivalimage small-img', 
        },
        { 
            backgroundImage: 'url(/galleryimg/redheartdayGallery7.png)', 
            className: 'festivalimage wide-img', 
        },
    ],
    dailyredheart: [
        { 
            backgroundImage: 'url(/galleryimg/dailyGallery1.jpg)',
            className: 'festivalimage first-img', 
 
        },

        {   
            backgroundImage: 'url(/galleryimg/dailyGallery2.jpg)',
            className: 'festivalimage small-img', 

        },

        {   
            backgroundImage: 'url(/galleryimg/dailyGallery3.jpg)',
            className: 'festivalimage wide-img', 
        } , 

        {   
            backgroundImage: 'url(/galleryimg/dailyGallery4.jpg)',
            className: 'festivalimage small-img', 

        }, 

        {  
            backgroundImage:'url(/galleryimg/dailyGallery5.png)',    
            className: 'festivalimage wide-img', 

        }, 

        {  
            backgroundImage:'url(/galleryimg/dailyGallery6.png)',
            className: 'festivalimage small-img', 
            
        },

        {   
            backgroundImage: 'url(/galleryimg/dailyGallery7.png)',
            className: 'festivalimage wide-img', 

        }, 
    ],
        peoplewithredheart: [
            { 
                backgroundImage: 'url(/galleryimg/ourActivityMain1.jpg)',
                className: 'festivalimage first-img', 
            },

            { 
                backgroundImage: 'url(/galleryimg/ourActivityMain2.jpg)',
                className: 'festivalimage small-img', 
            },

            { 
                backgroundImage: 'url(/galleryimg/ourActivityMain3.jpg)',
                className: 'festivalimage wide-img', 
            },

            { 
                backgroundImage: 'url(/galleryimg/ourActivityMain4.png)',
                className: 'festivalimage small-img', 
            },

            { 
                backgroundImage: 'url(/galleryimg/ourActivityMain5.jpg)',
                className: 'festivalimage wide-img', 
            },

            { 
                backgroundImage: 'url(/galleryimg/ourActivityMain6.jpg)',
                className: 'festivalimage small-img', 
            },

            { 
                backgroundImage: 'url(/galleryimg/ourActivityMain7.jpg)',
                className: 'festivalimage wide-img', 
            },
        ],

        eduction: [
            {
                backgroundImage: 'url(/galleryimg/eduction1.jpg)',
                className: 'festivlaimage first-img',

            },
            {
                backgroundImage: 'url(/galleryimg/eduction2.jpg)',
                className: 'festivlaimage small-img',
                
            },
            {
                backgroundImage: 'url(/galleryimg/eduction3.jpg)',
                className: 'festivlaimage wide-img',
                
            },
            {
                backgroundImage: 'url(/galleryimg/eduction4.png)',
                className: 'festivlaimage small-img',
                
            },
            {
                backgroundImage: 'url(/galleryimg/eduction5.jpg)',
                className: 'festivlaimage wide-img',
                
            },
            {
                backgroundImage: 'url(/galleryimg/eduction6.jpg)',
                className: 'festivlaimage small-img',
                
            },

            {
                backgroundImage: 'url(/galleryimg/eduction7.jpg)',
                className: 'festivlaimage wide-img',
                
            },
        ],

};

const Gallery = ({ page }) => {
    const location = useLocation();
    const currentPage = page || location.pathname.substring(1) || 'redheartday';
    const currentphotos = photos[currentPage] || [];

    return (
        <div className="gallery">
            {currentphotos.map((photo, index) => (
                <div
                    key={index}
                    className={photo.className}
                    style={{
                        ...photo.style,
                        backgroundImage: photo.backgroundImage,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            ))}
        </div>
    );
}

export default Gallery;
