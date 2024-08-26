import React, { useState, useEffect, useRef } from 'react';
import { PC, Tablet, Mobile } from '../useMobileQuery/MediaQuery';
import ReactDOM from 'react-dom'
import '../css/Footer.css';

const Footer = () => {
    return (
        <div className="footer">

            <div className="Footer-List">
                <div className="Footer-Text">
                    <p>1221 REDHEARTDAY</p>
                    <p>© 2024 RED HEART DAY. All Rights Reserved.</p>
                </div>    

                {/* 유튜브 인스타 로고 */}
                <div className="Logo-Icon">
                    <div className="Instagram-Logo">
                        <img src={process.env.PUBLIC_URL + '/Instagram.png'} width='32px' height='32px' alt="logo" />
                    </div>

                    <div className="Youtube-Logo">
                        <img src={process.env.PUBLIC_URL + '/Youtube.png'} width='32px' width='32px' alt='youtube'/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;