import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image, ScrollControls, useScroll, useTexture } from '@react-three/drei';
import { easing } from 'maath';

import { CiCircleChevRight } from "react-icons/ci";

import '../util';
import '../css/Componet.css';
import '../css/BrandStoryComponet.css';

export const BrandStoryComponet = () => {
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      if (width <= 360) {
        setDevice('mobile');
      } else if (width <= 768) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    updateDevice();
    window.addEventListener('resize', updateDevice);

    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return (
    <>
        {/* 타이틀 섹션 */}
        <div className='title-wapper'>
        <div className={`title-componet ${device}`}>
          {/* 메인 타이틀 */}
          <div className='main-title'>
            <p>Brand Story</p>
          </div>
          
          {/* 서브 타이틀 */}
          <div className='sub-title'>
            <p>우리의 레드하트데이로 세상을 따뜻하게!</p>
          </div>

          {/* View More 버튼 */}
          <div className="view-More-Page">
            <Link to='/Brandstory' className="view-more" style={{ textDecoration: "none" }}>
              View More
              <div className='right-icon'>
                <CiCircleChevRight className='right-cion' />
              </div>
            </Link>
          </div>
        </div> 
      </div>

      {/* 360도 브랜딩 스토리 섹션 */}
      <div className='BrandStory-360'>
        <div className="canvas-wrapper">
          <Canvas camera={{ position: [0, 0, 300], fov: 15 }}>
            <fog attach="fog" args={['#a79', 8.5, 13]} />
            <ScrollControls pages={5}>
              <Rig rotation={[0, 0, 0.05]}>
                <Carousel device={device} />
              </Rig>
              <Banner device={device} position={[0, -0.3, -0.2]} />
            </ScrollControls>
          </Canvas>
        </div>
      </div>
    </>
  );
};

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  const [hasRotated, setHasRotated] = useState(false);

  useFrame((state, delta) => {
    if (!hasRotated) {
      // 초기 로테이션 설정: Y축을 기준으로 360도 회전 (Math.PI * 2)
      ref.current.rotation.y = Math.PI * 2;
      setHasRotated(true);
    } else {
      // 화면 중앙에서 스크롤이 되도록 조정
      const centerOffset = 0.5; // 스크롤 중심 위치 조정
      const adjustedOffset = scroll.offset - centerOffset; // 중앙 기준으로 스크롤 오프셋 조정
      ref.current.rotation.y = -adjustedOffset * (Math.PI * 2);
    }

    // 카메라 위치와 바라보는 방향 설정
    state.events.update();
    easing.damp3(state.camera.position, [-state.pointer.x * 5, state.pointer.y + 0.5, 9], 0.2, delta);
    state.camera.lookAt(0, 0, 0);
  });
  return <group ref={ref} {...props} />;
}


function Carousel({ radius = 1.4, count = 7, device }) {
  const adjustedRadius = device === 'mobile' ? 0.5 : device === 'tablet' ? 0.5 : 1.4; // 각 디바이스에 따라 radius 설정
  
  // imageScale 설정
  const imageScale = device === 'mobile' 
    ? [0.9, 0.9, 1] 
    : device === 'tablet' 
    ? [1, 1.1, 1] 
    : [2, 1.3, 1];

  // 카드 크기 설정
  const cardWidth = device === 'mobile' ? 0.5 : device === 'tablet' ? 0.45 : 0.6;
  const cardHeight = device === 'mobile' ? 0.5 : device === 'tablet' ? 0.5 : 0.8;

  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      url={`/img/img${Math.floor(i % 10) + 1}_.JPG`}
      position={[
        Math.sin((i / count) * Math.PI * 2) * adjustedRadius, 
        0, 
        Math.cos((i / count) * Math.PI * 2) * adjustedRadius 
      ]}
      rotation={[
        0, 
        Math.PI + (i / count) * Math.PI * 2, 
        0 
      ]}
      scale={imageScale}
      width={cardWidth}
      height={cardHeight}
    />
  ));
}

function Card({ url, scale, width, height, ...props }) {
  const ref = useRef();

  useFrame((state, delta) => {
    // 기본 크기로만 이미지를 렌더링
    easing.damp3(ref.current.scale, scale, 0.1, delta);
  });

  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      {...props}
      scale={scale}
      style={{ borderRadius: '50px' }} // 모서리를 둥글게 만듭니다.
    >
      <planeGeometry args={[width, height]} />
    </Image>
  );
}

function Banner({ device, ...props }) {
  const ref = useRef();
  const texture = useTexture('/img/Banner.JPEG');
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const scroll = useScroll();

  // 각 디바이스 유형에 따른 배너 크기 설정
  const bannerRadius = device === 'mobile' ? 0.5 : device === 'tablet' ? 0.8 : 1.75; // 반지름
  const bannerHeight = device === 'mobile' ? 0.06 : device === 'tablet' ? 0.1 : 0.14; // 높이

  useFrame((state, delta) => {
    // 텍스처가 스크롤할 때 함께 회전하도록 설정
    ref.current.material.time.value += Math.abs(scroll.delta) * 0.5;
    ref.current.material.map.offset.x += delta / 1;
  });

  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[bannerRadius, bannerRadius, bannerHeight, 120, 10, true]} /> {/* 반응형 배너 크기 */}
      <meshSineMaterial
        map={texture}
        map-anisotropy={16}
        map-repeat={[30, 1]}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}
