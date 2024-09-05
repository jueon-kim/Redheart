import React, { useState, useEffect, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import '../css/Header.css';

// MenuList 컴포넌트 정의
const MenuList = forwardRef((props, ref) => {
    const { isOpen } = props;
    return (
        <div className={`MenuList ${isOpen ? 'show-menu' : 'hide-menu'}`} ref={ref}>
            <div className="Menu-Section-Small"></div>
            <div className="Menu-Section"></div>
            <div className="Menu-Section"></div>
            <div className="Menu-Section">
                <ul>
                    <li className='Menu-Title'>Brand</li>
                    <li className='Menu-Item'>Brand Story</li>
                </ul>
            </div>
            <div className="Menu-Section">
                <ul>
                    <li className='Menu-Title'>Activity</li>
                    <li className='Menu-Item'>1221레드하트데이</li>
                    <li className='Menu-Item'>유치원 교육수업</li>
                    <li className='Menu-Item'>일상나눔</li>
                    <li className='Menu-Item'>참여하는사람들</li>
                    <li className='Menu-Item'>레드하트 굿즈</li>
                </ul>
            </div>
            <div className="Menu-Section">
                <ul>
                    <li className='Menu-Title'>SNS</li>
                    <li className='Menu-Item'>Youtube</li>
                    <li className='Menu-Item'>Instagram</li>
                </ul>
            </div>
            <div className="Menu-Section"></div>
            <div className="Menu-Section"></div>
            
        </div>
    );
});

MenuList.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};

const MenuIcon = forwardRef(({ isOpen, onClick }, ref) => (
    <button 
        onClick={onClick} 
        className={`Menu-Button ${isOpen ? 'open' : 'closed'}`}
        ref={ref}
    >
        {isOpen ? 'X' : '☰'}
    </button>
));

MenuIcon.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

// Header 컴포넌트 정의
const Header = () => {
    const [isOpen, setMenu] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => {
        setMenu(prevIsOpen => !prevIsOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) &&
            buttonRef.current && !buttonRef.current.contains(event.target)) {
            setMenu(false); // 헤더 외부를 클릭하면 메뉴 닫기
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header-container">
            <div className="menu">
                <div className="header-list">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/Symbol_Black.svg'} width='60px' height='40px' alt="logo" />
                    </div>
                    <div className="button-list">
                        <div className="button-list-menu">
                            <div>
                                <p>EN | KR</p>
                            </div>
                            <div>
                                <MenuIcon isOpen={isOpen} onClick={toggleMenu} ref={buttonRef} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 메뉴 리스트 출력 */}
            <MenuList isOpen={isOpen} ref={menuRef} />
        </header>
    );
};

export default Header;
