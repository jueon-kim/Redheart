import React from 'react';
import '../css/Footer.css';
import '../MQuery/MediaQueryTablet.css'

import { RiInstagramFill } from "react-icons/ri";
import { ImYoutube } from "react-icons/im";

const Footer = () => {
    return (
        <div className="footer">

            <div className="Footer-List">
                <div className="Footer-Text">
                    <p className='top-text'>1221 REDHEARTDAY</p>
                    <p className='bottom-text'>© 2024 RED HEART DAY. All Rights Reserved.</p>
                </div>    

                <div className='Logo'>
                 <div className="Instagram-Logo">
                    <RiInstagramFill />
                </div>

                    <div className="Youtube-Logo">
                        <ImYoutube />
                    </div>
                </div>

                </div>
        </div> 
           );

};

export default Footer;