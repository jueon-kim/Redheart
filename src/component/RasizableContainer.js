import React, { useState, useEffect } from 'react';

const ResizableContainer = ({ children, initialWidthVW = 50, initialHeightVW = 50 }) => {
    const [size, setSize] = useState({
        width: (window.innerWidth * initialWidthVW) / 100,
        height: (window.innerWidth * initialHeightVW) / 100,
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxWidth = window.innerWidth;
            const maxHeight = window.innerHeight;

            const newWidth = Math.min(maxWidth, (window.innerWidth * initialWidthVW) / 100 + scrollPosition * 2);
            const newHeight = Math.min(maxHeight, (window.innerWidth * initialHeightVW) / 100 + scrollPosition * 2);

            setSize({ width: newWidth, height: newHeight });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [initialWidthVW, initialHeightVW]);

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            minHeight: '100vh',  // Ensures full screen height
            minwidth: '100vw',
            overflow: 'hidden'
        }}>
            <div style={{ 
                width: `${size.width}px`, 
                height: `${size.height}px`, 
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'width 0.4s ease, height 0.4s ease',  // Smooth transition for size changes
            }}>
                {children}
            </div>
        </div>
    );
};

export default ResizableContainer;
