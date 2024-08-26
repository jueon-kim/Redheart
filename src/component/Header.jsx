import React, { useState, useEffect, useRef } from 'react';
import { PC, Tablet, Mobile } from '../useMobileQuery/MediaQuery';
import '../css/Header.css';
// MenuList 컴포넌트 정의
const MenuList: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <div className="MenuList">

            <div className={isOpen ? "show-menu Menu-Section-Small" : "hide-menu"}>
            </div> 

            <div className={isOpen ? "show-menu Menu-Section" : "hide-menu"}>
            </div>

            <div className={isOpen ? "show-menu Menu-Section" : "hide-menu"}>
            </div>

            <div className={isOpen ? "show-menu Menu-Section" : "hide-menu"}> 
                <ul>
                    <li className='Menu-Title'>Brand</li>
                    <li className='Menu-Item'>Brand Story</li>
                </ul>
            </div>
           
            <div className={isOpen ? "show-menu Menu-Section" : "hide-menu"}>
                <ul> 
                    <li className='Menu-Title'>Activity</li>
                    <li className='Menu-Item'>1221레드하트데이</li>
                    <li className='Menu-Item'>유치원 교육수업</li>
                    <li className='Menu-Item'>일상나눔</li>
                    <li className='Menu-Item'>참여하는사람들</li>
                    <li className='Menu-Item'>레드하트 굿즈</li>
                </ul>
            </div>
           
            <div className={isOpen ? "show-menu Menu-Section" : "hide-menu"}>
                <ul>
                    <li className='Menu-Title'>SNS</li>
                    <li className='Menu-Item'>Youtube</li>
                    <li className='Menu-Item'>Instagram</li>
                </ul>
            </div>
            
            
            <div className={isOpen ? "show-menu Menu-Section" : "hide-menu"}>
            </div>

            <div className={isOpen ? "show-menu Menu-Section" : "hide-menu"}>
            </div>

            <div className={isOpen ? "show-menu Menu-Section-Small" : "hide-menu"}>
            </div>
        </div>        
    );
};

const MenuIcon: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => (
    <button onClick={onClick} className="Menu-Button">
        {isOpen ? 'X' : '☰'}
    </button>
);


// Header 컴포넌트 정의
const Header: React.FC = () => {
    const [isOpen, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on, off 개념 boolean
    };
    return (
        <header className="header-container">
            <div className="menu">
                <div className="header-list">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/Symbol_Black.svg'} width='76px' height='41px' alt="logo" />
                    </div>
                    <div className="button-list">
                        <div className="button-list-menu">
                            <div>
                                <p>EN | KR</p>
                            </div>
                            
                            <div>
                            <MenuIcon isOpen={isOpen} onClick={toggleMenu} />
                                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 메뉴 리스트 출력 */}
            <MenuList isOpen={isOpen} />
        </header>
    );
};

export default Header;
