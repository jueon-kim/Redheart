import React, { createContext, useState, useEffect, useRef } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [textColor, setTextColor] = useState('#000000');
  const ref = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setBgColor('#CB0101');  // 배경색 변경
          setTextColor('#FFFFFF');   // 텍스트 색상 변경 
        } else {
          setBgColor('#FFFFFF');  // 초기 배경색
          setTextColor('#000000');   // 초기 텍스트 색상
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,  // 요소의 50%가 화면에 보일 때 색상 변경
      rootMargin: '0px'  // 화면의 가장자리로부터의 마진 조정 (상하좌우)
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <ColorContext.Provider value={{ bgColor, textColor, ref }}>
      {children}
    </ColorContext.Provider>
  );
};
