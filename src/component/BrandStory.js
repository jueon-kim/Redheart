import React, { useRef, useState } from 'react';
import '../css/BrandStory.css';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image, ScrollControls, useScroll, useTexture } from '@react-three/drei';
import { easing } from 'maath';
import '../util';

export const BrandStoryHome = () => (
  <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
    <fog attach="fog" args={['#a79', 8.5, 12]} />
    <ScrollControls pages={4}>
      <Rig rotation={[0, 0, 0.15]}>
        <Carousel />
      </Rig>
      <Banner position={[0, -0.15, 0]} />
    </ScrollControls>
  </Canvas>
);

  function Rig(props) {
    const ref = useRef(); // 그룹의 참조를 설정합니다.
    const scroll = useScroll(); // 스크롤 이벤트를 가져옵니다.
    const [hasRotated, setHasRotated] = useState(false); // 회전이 완료되었는지 확인합니다.
  
    useFrame((state, delta) => {
      if (!hasRotated) {
        // 처음에 한 번 회전
        ref.current.rotation.y = Math.PI * 2;
        setHasRotated(true);
      } else {
        // 스크롤에 따라 회전
        ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
      }
  
      // 카메라 이동을 처리합니다.
      state.events.update(); // 매 프레임마다 레이캐스트를 업데이트합니다.
      easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta);
      state.camera.lookAt(0, 0, 0); // 카메라가 중심을 바라보게 합니다.
    });
  return <group ref={ref} {...props} />;
}

function Carousel({ radius = 2, count = 8 }) {
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      url={`/img/img${Math.floor(i % 10) + 1}_.JPG`}
      position={[
        Math.sin((i / count) * Math.PI * 2) * radius,
        0,
        Math.cos((i / count) * Math.PI * 2) * radius
      ]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ));
}

function Card({ url, ...props }) {
  const ref = useRef(); // 카드의 참조를 설정합니다.
  const [hovered, hover] = useState(false); // 호버 상태를 관리합니다.

  const pointerOver = (e) => (e.stopPropagation(), hover(true)); // 마우스 오버 시 호출되는 함수
  const pointerOut = () => hover(false); // 마우스 아웃 시 호출되는 함수

  useFrame((state, delta) => {
    // 호버 상태에 따라 크기와 속성을 조정합니다.
    easing.damp3(ref.current.scale, hovered ? 1.05 : 1, 0.1, delta);
    ref.current.material.radius = hovered ? 0.25 : 0.1;
    ref.current.material.zoom = hovered ? 1 : 1.5;
  });

  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    >
      <planeGeometry args={[1.6, 1.1]} /> {/* 이미지의 크기를 설정합니다. */}
    </Image>
  );
}

function Banner(props) {
  const ref = useRef(); // 배너의 참조를 설정합니다.
  const texture = useTexture('/img/img1_.JPG');
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping; // 텍스처의 반복 방식을 설정합니다.
  const scroll = useScroll(); // 스크롤 이벤트를 가져옵니다.

  useFrame((state, delta) => {
    // 스크롤에 따라 배너의 텍스처 애니메이션을 업데이트합니다.
    ref.current.material.time.value += Math.abs(scroll.delta) * 4;
    ref.current.material.map.offset.x += delta / 2;
  });

  return (
    
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[2.2, 2.2, 0.14, 128, 10, true]} /> {/* 배너의 크기와 모양을 설정합니다. */}
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
